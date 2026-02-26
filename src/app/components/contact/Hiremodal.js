import React from "react";
import { useState } from "react";
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
} from "@mui/material";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Snackbar, Alert } from "@mui/material";
// import ReCAPTCHA from "react-google-recaptcha";

const Hiremodal = ({
    selectedDeveloperTitle,
    setSelectedDeveloperTitle,
    allDevelopers
}) => {
    // const recaptchaRef = useRef(null);
    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedDeveloperTitle(value);
        setErrors((prev) => ({ ...prev, developerTitle: validate('developerTitle', value) }));
    };
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [aboutProject, setAboutProject] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [captchaToken, setCaptchaToken] = useState("");

    // validation state
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        contactNo: "",
        email: "",
        subject: "",
        developerTitle: "",
        aboutProject: "",
        // captcha: "",
    });

    const nameRegex = /^[A-Za-z][A-Za-z\s'-]{1,49}$/;
    const emailRegex = /^[A-Za-z][\w.!#$%&'*+/=?^`{|}~-]*@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

    const validate = (field, value) => {
        switch (field) {
            case 'firstName':
                if (!value.trim()) return 'First name is required';
                if (!nameRegex.test(value.trim())) return 'Enter a valid first name';
                return '';
            case 'lastName':
                if (!value.trim()) return 'Last name is required';
                if (!nameRegex.test(value.trim())) return 'Enter a valid last name';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!emailRegex.test(value.trim())) return 'Enter a valid email address';
                return '';
            case 'contactNo': {
                const digits = (value || '').replace(/\D/g, '');
                if (!digits) return 'Contact number is required';
                if (digits.length < 8) return 'Enter a valid contact number';
                return '';
            }
            case 'subject':
                if (!value.trim()) return 'Subject is required';
                if (value.trim().length < 3) return 'Subject must be at least 3 characters';
                return '';
            case 'developerTitle':
                if (!value) return 'Please select a developer';
                return '';
            case 'aboutProject':
                if (!value.trim()) return 'Project details are required';
                if (value.trim().length < 10) return 'Please provide at least 10 characters';
                return '';
            // case 'captcha':
            //     if (!value) return 'Please complete the reCAPTCHA verification';
            //     return '';
            default:
                return '';
        }
    };

    const validateAll = () => {
        const newErrors = {
            firstName: validate('firstName', firstName),
            lastName: validate('lastName', lastName),
            email: validate('email', email),
            contactNo: validate('contactNo', contactNo),
            subject: validate('subject', subject),
            developerTitle: validate('developerTitle', selectedDeveloperTitle),
            aboutProject: validate('aboutProject', aboutProject),
            // captcha: validate('captcha', captchaToken),
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
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("contactNo", contactNo);
        formData.append("subject", subject);
        formData.append("developerTitle", selectedDeveloperTitle || "");
        formData.append("aboutProject", aboutProject);
        // formData.append("captchaToken", captchaToken);

        try {
            const res = await fetch("/api/sendHireRequest", {
                method: "POST",
                body: formData,
            });
            const result = await res.json();
            if (result.success) {
                setShowSuccess(true);
                setFirstName("");
                setLastName("");
                setContactNo("");
                setEmail("");
                setSubject("");
                setAboutProject("");
                // setCaptchaToken("");
                // // Reset the reCAPTCHA widget so it visually clears
                // try {
                //     recaptchaRef.current && recaptchaRef.current.reset();
                // } catch (_) {
                //     // ignore reset errors
                // }
                setErrors({
                    firstName: "",
                    lastName: "",
                    contactNo: "",
                    email: "",
                    subject: "",
                    developerTitle: "",
                    aboutProject: "",
                    // captcha: "",
                });
                // keep selectedDeveloperTitle as chosen
            } else {
                alert(result.message || "Failed to send form");
            }
        } catch (err) {
            alert("Your default browser is not working properly. Please open the site in Chrome or Mozilla Firefox.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* contact form */}
            <Box>
                <Container maxWidth="lg" className="custom-container contact-form">
                    <form onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={{ xs: 2 }}>
                            {/* First Name */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <label className="custom-label">First Name <Typography variant="span"> * </Typography></label>
                                    <TextField
                                        required
                                        variant="outlined"
                                        placeholder="Enter your first name"
                                        value={firstName}
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                            setErrors((prev) => ({ ...prev, firstName: validate('firstName', e.target.value) }));
                                        }}
                                        className="custom-input"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
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
                                        value={lastName}
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                            setErrors((prev) => ({ ...prev, lastName: validate('lastName', e.target.value) }));
                                        }}
                                        className="custom-input"
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                    />
                                </FormControl>
                            </Grid>

                            {/* Contact No */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth className="phone-input-wrapper">
                                    <label className="custom-label">Contact No. <Typography variant="span"> * </Typography></label>
                                    <PhoneInput
                                        country={"in"}
                                        value={contactNo}
                                        onChange={(val) => {
                                            setContactNo(val);
                                            setErrors((prev) => ({ ...prev, contactNo: validate('contactNo', val) }));
                                        }}
                                        inputProps={{
                                            required: true,
                                            placeholder: "Enter your Contact no",
                                        }}
                                        inputClass={`phone-input${errors.contactNo ? ' phone-input-error' : ''}`}
                                        buttonClass="phone-button"
                                        containerClass="phone-container"
                                        dropdownClass="phone-dropdown"
                                    />
                                    {errors.contactNo && (
                                        <Typography variant="caption" color="error" mt={0.5} display="block">
                                            {errors.contactNo}
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
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrors((prev) => ({ ...prev, email: validate('email', e.target.value) }));
                                        }}
                                        className="custom-input"
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </FormControl>
                            </Grid>

                            {/* Subject */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth>
                                    <label className="custom-label">Subject <Typography variant="span"> * </Typography></label>
                                    <TextField
                                        required
                                        variant="outlined"
                                        placeholder="Enter your subject"
                                        value={subject}
                                        onChange={(e) => {
                                            setSubject(e.target.value);
                                            setErrors((prev) => ({ ...prev, subject: validate('subject', e.target.value) }));
                                        }}
                                        className="custom-input"
                                        error={!!errors.subject}
                                        helperText={errors.subject}
                                    />
                                </FormControl>
                            </Grid>

                            {/* Choose Developer */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl className="input-dropdown" fullWidth required error={!!errors.developerTitle}>
                                    <label className="custom-label">Choose Developer <Typography variant="span"> * </Typography></label>
                                    <Select
                                        IconComponent={KeyboardArrowDownIcon}
                                        value={selectedDeveloperTitle || ""}
                                        onChange={handleChange}
                                        displayEmpty
                                        className="custom-input"
                                    >
                                        <MenuItem value="">
                                            <em>Select a Developer</em>
                                        </MenuItem>
                                        {allDevelopers.map((dev) => (
                                            <MenuItem key={dev.title} value={dev.title}>
                                                {dev.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {errors.developerTitle && (
                                        <Typography variant="caption" color="error" mt={0.5} display="block">
                                            {errors.developerTitle}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Grid>

                            {/* About Project */}
                            <Grid size={{ xs: 12 }}>
                                <FormControl fullWidth>
                                    <label className="custom-label">About Your Project <Typography variant="span"> * </Typography></label>
                                    <TextField
                                        required
                                        multiline
                                        minRows={4}
                                        variant="outlined"
                                        placeholder="Share your project details"
                                        value={aboutProject}
                                        onChange={(e) => {
                                            setAboutProject(e.target.value);
                                            setErrors((prev) => ({ ...prev, aboutProject: validate('aboutProject', e.target.value) }));
                                        }}
                                        className="custom-input"
                                        error={!!errors.aboutProject}
                                        helperText={errors.aboutProject}
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
                                        {isSubmitting ? 'Submitting...' : 'Hire'}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Box >
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

export default Hiremodal;
