'use client';

import React, { useState, useEffect, useId, useRef } from "react";
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
import { jobData } from "../../career/CompCareer";

const ContactcareerDemo = ({ selectedJobTitle = null }) => {
  const [Experience, setExperience] = useState("");
  const [Designation, setDesignation] = useState(selectedJobTitle || "");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Email, setEmail] = useState("");
  const [File, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    FirstName: "",
    LastName: "",
    ContactNo: "",
    Email: "",
    Designation: "",
    Experience: "",
    File: "",
  });
  const [forceNativeSubmit, setForceNativeSubmit] = useState(false);
  const [nativeActionUrl, setNativeActionUrl] = useState("");

  const fileInputId = useId();
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (selectedJobTitle) {
      setDesignation(selectedJobTitle);
    }
  }, [selectedJobTitle]);

  useEffect(() => {
    if (typeof navigator === "undefined") {
      return;
    }
    const ua = navigator.userAgent || "";
    const limitedBrowserPattern =
      /(LinkedInApp|Instagram|FBAN|FBAV|Messenger|FB_IAB|Line|Snapchat)/i;
    if (limitedBrowserPattern.test(ua)) {
      setForceNativeSubmit(true);
    }
  }, []);

  useEffect(() => {
    if (!forceNativeSubmit) {
      setNativeActionUrl("");
      return;
    }
    const defaultOrigin = "https://www.universalstreamsolution.com";
    if (typeof window !== "undefined" && window.location?.origin) {
      setNativeActionUrl(
        `${window.location.origin.replace(
          /\/+$/,
          ""
        )}/demo-career-form/submit`
      );
    } else {
      setNativeActionUrl(`${defaultOrigin}/demo-career-form/submit`);
    }
  }, [forceNativeSubmit]);

  const nameRegex = /^[A-Za-z][A-Za-z\s'-]{1,49}$/;
  const emailRegex =
    /^[A-Za-z][\w.!#$%&'*+/=?^`{|}~-]*@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

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
      case "Designation":
        if (!value) return "Please select a designation";
        return "";
      case "Experience":
        if (!value) return "Please select your experience";
        return "";
      case "File": {
        if (!value) return "Please attach your file";
        const fileObj = value;
        const maxBytes = 5 * 1024 * 1024;
        const allowedExtensions = [".pdf", ".doc", ".docx", ".ppt", ".pptx"];
        const name = (fileObj.name || "").toLowerCase();
        const hasAllowedExt = allowedExtensions.some((ext) => name.endsWith(ext));
        if (!hasAllowedExt)
          return "Only PDF, DOC, DOCX, PPT, PPTX files are allowed";
        if (typeof fileObj.size === "number" && fileObj.size > maxBytes) {
          return "File must be 5 MB or smaller";
        }
        return "";
      }
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
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const submitDemoForm = async (entries) => {
    const preferredOrigins = new Set([
      "https://www.universalstreamsolution.com",
      "https://universalstreamsolution.com",
      "http://localhost:3000",
    ]);
    if (typeof window !== "undefined" && window.location?.origin) {
      const origin = window.location.origin;
      if (origin.includes("universalstreamsolution.com")) {
        preferredOrigins.add(origin);
      }
    }

    const endpoints = Array.from(preferredOrigins).map((origin) =>
      `${origin.replace(/\/+$/, "")}/api/sendCareerContactFormDemo`
    );

    const buildFormData = () => {
      const fd = new FormData();
      entries.forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          fd.append(key, value);
        }
      });
      return fd;
    };

    const parseResponse = async (response) => {
      const text = await response.text();
      if (!text) {
        return {
          data: {
            success: false,
            message: `Empty response from server (status ${response.status})`,
          },
          raw: text,
        };
      }
      try {
        return { data: JSON.parse(text), raw: text };
      } catch (parseError) {
        return {
          data: {
            success: false,
            message: `Invalid response format (status ${response.status})`,
          },
          raw: text,
        };
      }
    };

    const attemptWithFetch = async (url) => {
      const response = await fetch(url, {
        method: "POST",
        body: buildFormData(),
        cache: "no-store",
        mode: "cors",
        credentials: "omit",
      });
      const { data, raw } = await parseResponse(response);
      return {
        ok: response.ok,
        status: response.status,
        data,
        raw,
      };
    };

    const attemptWithXhr = async (url) => {
      if (typeof XMLHttpRequest !== "function") {
        throw new Error("XMLHttpRequest is not supported in this environment");
      }

      return await new Promise((resolve, reject) => {
        try {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", url, true);
          xhr.withCredentials = false;
          xhr.responseType = "text";
          xhr.onload = () => {
            const raw = xhr.responseText || "";
            let parsed;
            if (raw) {
              try {
                parsed = JSON.parse(raw);
              } catch (_) {
                parsed = {
                  success: false,
                  message: `Invalid response format (status ${xhr.status})`,
                };
              }
            }
            resolve({
              ok: xhr.status >= 200 && xhr.status < 300,
              status: xhr.status,
              data: parsed,
              raw,
            });
          };
          xhr.onerror = () => reject(new Error("Network error"));
          xhr.send(buildFormData());
        } catch (xhrError) {
          reject(xhrError);
        }
      });
    };

    const submitViaIframe = async (url) => {
      const formEl = formRef.current;
      const iframeEl = iframeRef.current;
      if (!formEl || !iframeEl) {
        throw new Error("Form submission fallback is not available.");
      }

      const previousTarget = formEl.target;
      const previousAction = formEl.action;
      const previousMethod = formEl.method;
      const previousEnctype = formEl.enctype;

      const iframeName = "demoFormFallbackFrame";

      return await new Promise((resolve, reject) => {
        const cleanup = () => {
          formEl.target = previousTarget || "";
          formEl.action = previousAction || "";
          formEl.method = previousMethod || "POST";
          formEl.enctype = previousEnctype || "multipart/form-data";
          iframeEl.removeEventListener("load", handleLoad);
        };

        const handleLoad = () => {
          try {
            const doc =
              iframeEl.contentDocument || iframeEl.contentWindow?.document;
            const text = doc?.body?.textContent?.trim() || "";
            const frameHref = iframeEl.contentWindow?.location?.href;

            if (frameHref && typeof window !== "undefined") {
              window.location.href = frameHref;
              resolve({
                ok: true,
                status: 200,
                data: { success: true, message: "Redirected to confirmation" },
                raw: text,
              });
              return;
            }

            if (!text) {
              resolve({
                ok: false,
                status: 400,
                data: {
                  success: false,
                  message: "Empty response received from fallback submission",
                },
                raw: text,
              });
              return;
            }

            let parsed = null;
            try {
              parsed = JSON.parse(text);
            } catch (parseErr) {
              resolve({
                ok: true,
                status: 200,
                data: {
                  success: true,
                  message: "Submission completed in fallback mode",
                },
                raw: text,
              });
              return;
            }

            resolve({
              ok: !!parsed?.success,
              status: parsed?.success ? 200 : 400,
              data: parsed,
              raw: text,
            });
          } catch (error) {
            reject(error);
          } finally {
            cleanup();
          }
        };

        iframeEl.addEventListener("load", handleLoad, { once: true });

        try {
          // Reset iframe to ensure load event fires
          iframeEl.src = "about:blank";
          formEl.target = iframeName;
          formEl.action = url;
          formEl.method = "POST";
          formEl.enctype = "multipart/form-data";
          formEl.submit();
        } catch (submitError) {
          cleanup();
          reject(submitError);
        }
      });
    };

    let lastError = null;

    for (const url of endpoints) {
      try {
        const result = await attemptWithFetch(url);
        if (result.ok && result.data?.success) {
          return result;
        }
        if (result.ok && !result.data?.success) {
          return result;
        }
        // Non-200 responses fall through to try next URL/XHR
        lastError = new Error(
          `Fetch returned status ${result.status} for ${url}`
        );
      } catch (fetchError) {
        lastError = fetchError;
        console.warn(
          `Demo form fetch failed for ${url}; attempting XMLHttpRequest fallback`,
          fetchError
        );
      }

      try {
        const xhrResult = await attemptWithXhr(url);
        if (xhrResult.ok && xhrResult.data?.success) {
          return xhrResult;
        }
        if (xhrResult.ok) {
          return xhrResult;
        }
        lastError = new Error(
          `XMLHttpRequest returned status ${xhrResult.status} for ${url}`
        );
      } catch (xhrError) {
        lastError = xhrError;
        console.warn(
          `Demo form XMLHttpRequest fallback failed for ${url}`,
          xhrError
        );
      }
    }

    if (lastError) {
      console.warn(
        "All async attempts failed; falling back to iframe form submission.",
        lastError
      );
      const fallbackUrl = endpoints[0];
      if (fallbackUrl) {
        try {
          return await submitViaIframe(fallbackUrl);
        } catch (iframeError) {
          throw iframeError;
        }
      }
      throw lastError;
    }

    throw new Error("Unable to submit demo form: no endpoints responded.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shouldUseNativeSubmit =
      forceNativeSubmit && !!nativeActionUrl && !!formRef.current;
    if (!validateAll()) {
      return;
    }

    if (shouldUseNativeSubmit) {
      setIsSubmitting(true);
      setTimeout(() => {
        try {
          formRef.current?.submit();
        } catch (nativeError) {
          console.error("Native form submission failed:", nativeError);
          setIsSubmitting(false);
          alert(
            "We could not submit the form from this browser. Please try opening it in Chrome, Edge, or Safari."
          );
        }
      }, 0);
      return;
    }

    setIsSubmitting(true);

    const formEntries = [
      ["firstName", FirstName],
      ["lastName", LastName],
      ["contactNo", ContactNo],
      ["email", Email],
      ["designation", Designation],
      ["experience", Experience],
    ];
    if (File) {
      formEntries.push(["file", File]);
    }

    try {
      const submission = await submitDemoForm(formEntries);
      const resultData =
        submission?.data && typeof submission.data === "object"
          ? submission.data
          : { success: false };

      if (submission.ok && resultData.success) {
        setShowSuccess(true);
        setFirstName("");
        setLastName("");
        setContactNo("");
        setEmail("");
        setDesignation(selectedJobTitle || "");
        setExperience("");
        setFile(null);
        setFileName("");
        setErrors({
          FirstName: "",
          LastName: "",
          ContactNo: "",
          Email: "",
          Designation: "",
          Experience: "",
          File: "",
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        const message =
          resultData.message ||
          `Demo form submission failed (status ${submission?.status ?? "?"}).`;
        alert(message);
      }
    } catch (err) {
      console.error("Demo form submission error:", err);
      const fallbackMessage = err?.message
        ? `Unable to submit the demo form: ${err.message}`
        : "Unable to submit the demo form right now. Please try again later.";
      alert(fallbackMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setErrors((prev) => ({
        ...prev,
        File: validate("File", selectedFile),
      }));
    } else {
      setFile(null);
      setFileName("");
      setErrors((prev) => ({ ...prev, File: validate("File", null) }));
    }
  };

  const nativeFormAction =
    forceNativeSubmit && nativeActionUrl ? nativeActionUrl : undefined;

  return (
    <>
      <Box sx={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <Container maxWidth="lg" className="custom-container contact-form">
          {forceNativeSubmit && (
            <Alert severity="info" sx={{ mb: 3 }}>
              You are viewing this form inside a social app browser. After you
              tap Apply we will open a confirmation page in your default
              browser.
            </Alert>
          )}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            encType="multipart/form-data"
            method="post"
            action={nativeFormAction}
          >
            <Grid container spacing={{ xs: 2 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <label className="custom-label">
                    First Name{" "}
                    <Typography variant="span">
                      {" "}
                      *{" "}
                    </Typography>
                  </label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your first name"
                    name="firstName"
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

              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <label className="custom-label">
                    Last Name{" "}
                    <Typography variant="span">
                      {" "}
                      *{" "}
                    </Typography>
                  </label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your last name"
                    name="lastName"
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

              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth className="phone-input-wrapper">
                  <label className="custom-label">
                    Contact No.{" "}
                    <Typography variant="span">
                      {" "}
                      *{" "}
                    </Typography>
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
                      name: "contactNo",
                      required: true,
                      placeholder: "Enter your Contact no",
                    }}
                    inputClass={`phone-input${
                      errors.ContactNo ? " phone-input-error" : ""
                    }`}
                    buttonClass="phone-button"
                    containerClass="phone-container"
                    dropdownClass="phone-dropdown"
                  />
                  {errors.ContactNo && (
                    <Typography
                      variant="caption"
                      color="error"
                      mt={0.5}
                      display="block"
                    >
                      {errors.ContactNo}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <label className="custom-label">
                    Email{" "}
                    <Typography variant="span">
                      {" "}
                      *{" "}
                    </Typography>
                  </label>
                  <TextField
                    required
                    variant="outlined"
                    placeholder="Enter your email id"
                    name="email"
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

              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth required error={!!errors.Designation}>
                  <label className="custom-label">
                    Select Designation{" "}
                    <Typography variant="span">
                      {" "}
                      *{" "}
                    </Typography>
                  </label>
                  <Select
                    IconComponent={KeyboardArrowDownIcon}
                    value={Designation}
                    name="designation"
                    onChange={(e) => {
                      setDesignation(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        Designation: validate("Designation", e.target.value),
                      }));
                    }}
                    displayEmpty
                    className="custom-input"
                    disabled={!!selectedJobTitle}
                  >
                    <MenuItem value="">Select your designation</MenuItem>
                    {jobData.map((job, index) => (
                      <MenuItem key={index} value={job.title}>
                        {job.title}
                      </MenuItem>
                    ))}
                  </Select>
                  {selectedJobTitle && (
                    <input type="hidden" name="designation" value={Designation} />
                  )}
                  {errors.Designation && (
                    <Typography
                      variant="caption"
                      color="error"
                      mt={0.5}
                      display="block"
                    >
                      {errors.Designation}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth required error={!!errors.Experience}>
                  <label className="custom-label">
                    No. of Experience{" "}
                    <Typography variant="span">
                      {" "}
                      *{" "}
                    </Typography>
                  </label>
                  <Select
                    IconComponent={KeyboardArrowDownIcon}
                    value={Experience}
                    name="experience"
                    onChange={(e) => {
                      setExperience(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        Experience: validate("Experience", e.target.value),
                      }));
                    }}
                    displayEmpty
                    className="custom-input"
                  >
                    <MenuItem value="">Select your experience</MenuItem>
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
                    <Typography
                      variant="caption"
                      color="error"
                      mt={0.5}
                      display="block"
                    >
                      {errors.Experience}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <FormControl fullWidth error={!!errors.File}>
                  <label className="custom-label">
                    Attach your File{" "}
                    <Typography variant="span">
                      {" "}
                      *{" "}
                    </Typography>
                  </label>

                  <label
                    className={`file-upload-wrapper${
                      errors.File ? " file-upload-error" : ""
                    }`}
                    htmlFor={fileInputId}
                  >
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
                    <Typography
                      variant="caption"
                      color="error"
                      mt={0.5}
                      display="block"
                    >
                      {errors.File}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={{ xs: 2 }} alignItems={"center"}>
              <Grid size={{ md: 6, xs: 12 }}></Grid>
              <Grid size={{ md: 6, xs: 12 }}>
                <Box mt={2} textAlign="end" className="heading-content">
                  <Button
                    variant="contained"
                    type="submit"
                    className="main-primary-btn submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : forceNativeSubmit
                      ? "Apply (Open Browser)"
                      : "Apply (Demo)"}
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
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your demo form has been successfully sent
        </Alert>
      </Snackbar>
      <iframe
        ref={iframeRef}
        name="demoFormFallbackFrame"
        title="demoFormFallbackFrame"
        style={{ display: "none" }}
      />
    </>
  );
};

export default ContactcareerDemo;

