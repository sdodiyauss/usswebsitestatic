import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import "react-phone-input-2/lib/style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconUploadFile from "@/icon-upload-file.svg?url";
import { useId, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { jobData } from "../../career/CompCareer";

const Contactcareer = ({ selectedJobTitle = null }) => {
  // State variables for form fields
  // const recaptchaRef = useRef(null);
  const [Experience, setExperience] = useState("");
  const [Designation, setDesignation] = useState(selectedJobTitle || "");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Email, setEmail] = useState("");
  const [File, setFile] = useState(null);
  const [fileName, setFileName] = useState(""); // For displaying the uploaded file name
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState("");
  const [errors, setErrors] = useState({
    FirstName: "",
    LastName: "",
    ContactNo: "",
    Email: "",
    Designation: "",
    Experience: "",
    File: "",
    // captcha: "",
  });
  const fileInputId = useId();
  const fileInputRef = useRef(null);

  // Set designation when selectedJobTitle prop changes
  useEffect(() => {
    if (selectedJobTitle) {
      setDesignation(selectedJobTitle);
    }
  }, [selectedJobTitle]);

  // Reuse same validation rules as Contact.js
  const nameRegex = /^[A-Za-z][A-Za-z\s'-]{1,49}$/;
  const emailRegex = /^[A-Za-z][\w.!#$%&'*+/=?^`{|}~-]*@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

  const validate = (field, value) => {
    switch (field) {
      case "FirstName":
        if (!value.trim()) return "First name is required";
        if (!nameRegex.test(value.trim())) return "Enter a valid first name";
        return "";
      case "LastName":
        if (!value.trim()) return "Last name is required";
        if (!nameRegex.test(value.trim())) return "Enter a valid last name";
        return "";
      case "Email":
        if (!value.trim()) return "Email is required";
        if (!emailRegex.test(value.trim())) return "Enter a valid email address";
        return "";
      case "ContactNo": {
        const digits = (value || '').replace(/\D/g, '');
        if (!digits) return "Contact number is required";
        if (digits.length < 8) return "Enter a valid contact number";
        return "";
      }
      case "Designation":
        if (!value) return "Please select a designation";
        return "";
      case "Experience":
        if (!value) return "Please select your experience";
        return "";
      case "File": {
        // Require a file and validate type/size
        if (!value) return "Please attach your file";
        const fileObj = value;
        const maxBytes = 5 * 1024 * 1024; // 5 MB
        const allowedExtensions = [".pdf", ".doc", ".docx", ".ppt", ".pptx"]; // Allow common office formats
        const name = (fileObj.name || "").toLowerCase();
        const hasAllowedExt = allowedExtensions.some((ext) => name.endsWith(ext));
        if (!hasAllowedExt) return "Only PDF, DOC, DOCX, PPT, PPTX files are allowed";
        if (typeof fileObj.size === "number" && fileObj.size > maxBytes) {
          return "File must be 5 MB or smaller";
        }
        return "";
      }
      // case "captcha":
      //   if (!value) return "Please complete the reCAPTCHA verification";
      //   return "";
      default:
        return "";
    }
  };

  const validateAll = () => {
    const newErrors = {
      FirstName: validate("FirstName", FirstName),
      LastName: validate("LastName", LastName),
      Email: validate("Email", Email),
      ContactNo: validate("ContactNo", ContactNo),
      Designation: validate("Designation", Designation),
      Experience: validate("Experience", Experience),
      File: validate("File", File),
      // captcha: validate("captcha", captchaToken),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("firstName", FirstName);
    formData.append("lastName", LastName);
    formData.append("contactNo", ContactNo);
    formData.append("email", Email);
    formData.append("designation", Designation);
    formData.append("experience", Experience);
    // formData.append("captchaToken", captchaToken);
    if (File) formData.append("file", File);

    try {
      const res = await fetch("/api/sendCareerContactForm", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setShowSuccess(true);
        // Clear form inputs after successful submission
        setFirstName("");
        setLastName("");
        setContactNo("");
        setEmail("");
        setDesignation(selectedJobTitle || ""); // Preserve selectedJobTitle if provided
        setExperience("");
        setFile(null);
        setFileName(""); // Reset the file name display
        // setCaptchaToken("");
        // // Reset the reCAPTCHA widget so it visually clears
        // try {
        //   recaptchaRef.current && recaptchaRef.current.reset();
        // } catch (_) {
        //   // ignore reset errors
        // }
        setErrors({
          FirstName: "",
          LastName: "",
          ContactNo: "",
          Email: "",
          Designation: "",
          Experience: "",
          // captcha: "",
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert("Your default browser is not working properly. Please open the site in Chrome or Mozilla Firefox.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name); // Display the file name
      setErrors((prev) => ({ ...prev, File: validate("File", selectedFile) }));
    } else {
      setFile(null);
      setFileName("");
      setErrors((prev) => ({ ...prev, File: validate("File", null) }));
    }
  };

  return (
    <>
      {/* contact form */}
      <Box>
        <Container maxWidth="lg" className="custom-container contact-form">
          <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
            <Grid container spacing={{ xs: 2 }}>
              {/* First Name */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <label className="custom-label">First Name <Typography variant="span"> * </Typography></label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your first name"
                    value={FirstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setErrors((prev) => ({ ...prev, FirstName: validate("FirstName", e.target.value) }));
                    }}
                    className="custom-input"
                    error={!!errors.FirstName}
                    helperText={errors.FirstName}
                  />
                </FormControl>
              </Grid>

              {/* Last Name */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <label className="custom-label">Last Name <Typography variant="span"> * </Typography></label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your last name"
                    value={LastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setErrors((prev) => ({ ...prev, LastName: validate("LastName", e.target.value) }));
                    }}
                    className="custom-input"
                    error={!!errors.LastName}
                    helperText={errors.LastName}
                  />
                </FormControl>
              </Grid>

              {/* Contact No */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth className="phone-input-wrapper">
                  <label className="custom-label">Contact No. <Typography variant="span"> * </Typography></label>
                  <PhoneInput
                    country={"in"}
                    value={ContactNo}
                    onChange={(val) => {
                      setContactNo(val);
                      setErrors((prev) => ({ ...prev, ContactNo: validate("ContactNo", val) }));
                    }}
                    inputProps={{
                      required: true,
                      placeholder: "Enter your Contact no",
                    }}
                    inputClass={`phone-input${errors.ContactNo ? ' phone-input-error' : ''}`}
                    buttonClass="phone-button"
                    containerClass="phone-container"
                    dropdownClass="phone-dropdown"
                  />
                  {errors.ContactNo && (
                    <Typography variant="caption" color="error" mt={0.5} display="block">
                      {errors.ContactNo}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              {/* Email */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <label className="custom-label">Email <Typography variant="span"> * </Typography></label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your email id"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, Email: validate("Email", e.target.value) }));
                    }}
                    className="custom-input"
                    error={!!errors.Email}
                    helperText={errors.Email}
                  />
                </FormControl>
              </Grid>

              {/* Select Designation */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth required error={!!errors.Designation}>
                  <label className="custom-label">Select Designation <Typography variant="span"> * </Typography></label>
                  <Select
                    IconComponent={KeyboardArrowDownIcon}
                    value={Designation}
                    onChange={(e) => {
                      setDesignation(e.target.value);
                      setErrors((prev) => ({ ...prev, Designation: validate("Designation", e.target.value) }));
                    }}
                    displayEmpty
                    className="custom-input"
                    disabled={!!selectedJobTitle}
                  >
                    <MenuItem value="">
                      Select your designation
                    </MenuItem>
                    {jobData.map((job, index) => (
                      <MenuItem key={index} value={job.title}>
                        {job.title}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.Designation && (
                    <Typography variant="caption" color="error" mt={0.5} display="block">
                      {errors.Designation}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              {/* Select No. of Experience */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth required error={!!errors.Experience}>
                  <label className="custom-label">No. of Experience <Typography variant="span"> * </Typography></label>
                  <Select
                    IconComponent={KeyboardArrowDownIcon}
                    value={Experience}
                    onChange={(e) => {
                      setExperience(e.target.value);
                      setErrors((prev) => ({ ...prev, Experience: validate("Experience", e.target.value) }));
                    }}
                    displayEmpty
                    className="custom-input"
                  >
                    <MenuItem value="">
                      Select your experience
                    </MenuItem>
                    <MenuItem value="0 Year">0</MenuItem>
                    <MenuItem value="1 Year">1</MenuItem>
                    <MenuItem value="2 Year">2</MenuItem>
                    <MenuItem value="3 Year">3</MenuItem>
                    <MenuItem value="4 Year">4</MenuItem>
                    <MenuItem value="5 Year">5</MenuItem>
                    <MenuItem value="6 Year">6</MenuItem>
                    <MenuItem value="7 Year">7</MenuItem>
                    <MenuItem value="8 Year">8</MenuItem>
                    <MenuItem value="9 Year">9</MenuItem>
                    <MenuItem value="10 Year">10</MenuItem>
                    <MenuItem value="11 Year">11</MenuItem>
                    <MenuItem value="12 Year">12</MenuItem>
                    <MenuItem value="13 Year">13</MenuItem>
                    <MenuItem value="14 Year">14</MenuItem>
                    <MenuItem value="15 Year">15</MenuItem>
                  </Select>
                  {errors.Experience && (
                    <Typography variant="caption" color="error" mt={0.5} display="block">
                      {errors.Experience}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              {/* File Upload */}
              <Grid size={{ xs: 12 }}>
                <FormControl fullWidth error={!!errors.File}>
                  <label className="custom-label">Attach your File <Typography variant="span"> * </Typography></label>

                  <label className={`file-upload-wrapper ${errors.File ? 'file-upload-error' : ''}`} htmlFor={fileInputId}>
                    {/* Show the uploaded file name */}
                    {fileName && (
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        Uploaded File: {fileName}
                      </Typography>
                    )}
                    <TextField
                      type="file"
                      id={fileInputId}
                      name="file"
                      onChange={handleFileChange}
                      className="file-input"
                      inputRef={fileInputRef}
                      inputProps={{
                        accept: ".pdf,.doc,.docx,.ppt,.pptx",
                      }}
                    />
                    <Typography variant="body1" className="file-upload-text">
                      File Format: Doc, PDF, PPT (Max 5 MB){" "}
                      <Image
                        src={IconUploadFile}
                        alt="IconUploadFile"
                        className="icon-upload-file"
                      />
                    </Typography>
                  </label>
                  {errors.File && (
                    <Typography variant="caption" color="error" mt={0.5} display="block">
                      {errors.File}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={{ xs: 2 }} alignItems={"center"}>
              {/* ReCAPTCHA temporarily disabled */}
              {/* <Grid size={{ md: 6, xs: 12 }}>
                <Box mt={2} textAlign="start" className="heading-content">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(token) => {
                      setCaptchaToken(token);
                      setErrors((prev) => ({ ...prev, captcha: validate('captcha', token) }));
                    }}
                    onExpired={() => {
                      setCaptchaToken("");
                      setErrors((prev) => ({ ...prev, captcha: validate('captcha', "") }));
                    }}
                    onError={() => {
                      setCaptchaToken("");
                      setErrors((prev) => ({ ...prev, captcha: "reCAPTCHA error occurred" }));
                    }}
                  />
                  {errors.captcha && (
                    <Typography variant="caption" color="error" mt={0.5} display="block">
                      {errors.captcha}
                    </Typography>
                  )}
                </Box>
              </Grid> */}
              <Grid size={{ md: 6, xs: 12 }}></Grid>

              {/* Submit */}
              <Grid size={{ md: 6, xs: 12 }}>
                <Box mt={2} textAlign="end" className="heading-content">
                  <Button
                    variant="contained"
                    type="submit"
                    className="main-primary-btn submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
            {/* Field-level errors are shown inline; no global error block needed */}
          </form>
        </Container>
      </Box>
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Your form has been successfully sent
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contactcareer;
