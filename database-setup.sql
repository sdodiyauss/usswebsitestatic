-- Database setup for USS Website Contact Form
-- Run this script in your MySQL database "usswebsitenextjs"

-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contact_no VARCHAR(20) NOT NULL,
  designation VARCHAR(100) NOT NULL,
  experience VARCHAR(50) NOT NULL,
  file_name VARCHAR(255),
  file_path VARCHAR(500),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Add indexes for better performance
  INDEX idx_email (email),
  INDEX idx_submitted_at (submitted_at),
  INDEX idx_designation (designation)
);

-- General Contact form submissions (no extra fields)
CREATE TABLE IF NOT EXISTS general_contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contact_no VARCHAR(20) NOT NULL,
  subject VARCHAR(255),
  project_status VARCHAR(100),
  about_project TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_email (email),
  INDEX idx_submitted_at (submitted_at)
);

-- Partnership Contact form submissions
CREATE TABLE IF NOT EXISTS partnership_contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contact_no VARCHAR(20) NOT NULL,
  organization VARCHAR(255) NOT NULL,
  type_of_partnership VARCHAR(100) NOT NULL,
  message TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_email (email),
  INDEX idx_submitted_at (submitted_at),
  INDEX idx_organization (organization)
);

-- Hire Request form submissions (no extra fields)
CREATE TABLE IF NOT EXISTS hire_request_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contact_no VARCHAR(20) NOT NULL,
  subject VARCHAR(255),
  developer_title VARCHAR(150),
  about_project TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_email (email),
  INDEX idx_submitted_at (submitted_at)
);

-- contact_career_submissions form submissions
CREATE TABLE IF NOT EXISTS contact_career_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contact_no VARCHAR(20) NOT NULL,
  designation VARCHAR(100) NOT NULL,
  experience VARCHAR(50) NOT NULL,
  file_name VARCHAR(255),
  file_path VARCHAR(500),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Add indexes for better performance
  INDEX idx_email (email),
  INDEX idx_submitted_at (submitted_at),
  INDEX idx_designation (designation)
);

-- Add new columns to existing partnership_contact_submissions table if they don't exist
ALTER TABLE partnership_contact_submissions 
ADD COLUMN IF NOT EXISTS organization VARCHAR(255) NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS type_of_partnership VARCHAR(100) NOT NULL DEFAULT '';

-- Add index for organization if it doesn't exist
ALTER TABLE partnership_contact_submissions 
ADD INDEX IF NOT EXISTS idx_organization (organization);