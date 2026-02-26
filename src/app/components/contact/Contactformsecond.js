import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  FormControl,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import ReCAPTCHA from "react-google-recaptcha";

const Contactformsecond = () => {
  // State variables for form fields
  // const recaptchaRef = useRef(null);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Description, setDescription] = useState("");
  // const [captchaToken, setCaptchaToken] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    FirstName: "",
    LastName: "",
    ContactNo: "",
    Email: "",
    Subject: "",
    Description: "",
    // captcha: "",
  });

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
        const digits = (value || "").replace(/\D/g, "");
        if (!digits) return "Contact number is required";
        if (digits.length < 8) return "Enter a valid contact number";
        return "";
      }
      case "Subject":
        if (!value.trim()) return "Subject is required";
        return "";
      case "Description":
        if (!value.trim()) return "Description is required";
        return "";
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
      ContactNo: validate("ContactNo", ContactNo),
      Email: validate("Email", Email),
      Subject: validate("Subject", Subject),
      Description: validate("Description", Description),
      // captcha: validate("captcha", captchaToken),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("firstName", FirstName);
    formData.append("lastName", LastName);
    formData.append("contactNo", ContactNo);
    formData.append("email", Email);
    formData.append("subject", Subject);
    formData.append("description", Description);
    // formData.append("captchaToken", captchaToken);

    try {
      const res = await fetch("/api/sendContactForm", {
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
        setSubject("");
        setDescription("");
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
          Subject: "",
          Description: "",
          // captcha: "",
        });
      }
    } catch (err) {
      alert("Your default browser is not working properly. Please open the site in Chrome or Mozilla Firefox.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Box>
        <Container maxWidth="lg" className="custom-container contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={{ xs: 2 }}>
              {/* First Name */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <label className="custom-label">
                    First Name <Typography variant="span"> * </Typography>
                  </label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your first name"
                    value={FirstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        FirstName: validate("FirstName", e.target.value),
                      }));
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
                  <label className="custom-label">
                    Last Name <Typography variant="span"> * </Typography>
                  </label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your last name"
                    value={LastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        LastName: validate("LastName", e.target.value),
                      }));
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
                  <label className="custom-label">
                    Contact No. <Typography variant="span"> * </Typography>
                  </label>
                  <PhoneInput
                    country={"in"}
                    value={ContactNo}
                    onChange={(val) => {
                      setContactNo(val);
                      setErrors((prev) => ({
                        ...prev,
                        ContactNo: validate("ContactNo", val),
                      }));
                    }}
                    inputProps={{
                      required: true,
                      placeholder: "Enter your Contact no",
                    }}
                    inputClass={`phone-input${errors.ContactNo ? " phone-input-error" : ""}`}
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
                  <label className="custom-label">
                    Email <Typography variant="span"> * </Typography>
                  </label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your email id"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        Email: validate("Email", e.target.value),
                      }));
                    }}
                    className="custom-input"
                    error={!!errors.Email}
                    helperText={errors.Email}
                  />
                </FormControl>
              </Grid>

              {/* Subject */}
              <Grid size={{ xs: 12, sm: 12 }}>
                <FormControl fullWidth>
                  <label className="custom-label">
                    Subject <Typography variant="span"> * </Typography>
                  </label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your subject"
                    value={Subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        Subject: validate("Subject", e.target.value),
                      }));
                    }}
                    className="custom-input"
                    error={!!errors.Subject}
                    helperText={errors.Subject}
                  />
                </FormControl>
              </Grid>

              {/* Description */}
              <Grid size={{ xs: 12 }}>
                <FormControl fullWidth>
                  <label className="custom-label">
                    Description <Typography variant="span"> * </Typography>
                  </label>
                  <TextField
                    required
                    multiline
                    minRows={4}
                    variant="outlined"
                    placeholder="Enter Description"
                    value={Description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        Description: validate("Description", e.target.value),
                      }));
                    }}
                    className="custom-input"
                    error={!!errors.Description}
                    helperText={errors.Description}
                  />
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
                    {isSubmitting ? "Submitting..." : "Apply"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: "100%" }}>
          Your form has been successfully sent
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contactformsecond;
