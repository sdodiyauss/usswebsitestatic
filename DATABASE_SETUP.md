# Database Setup Guide for USS Website

## Overview
This guide explains how to set up the database integration for storing contact form submissions while maintaining the existing email functionality.

## Prerequisites
- MySQL database server running
- Database named "usswebsitenextjs" created
- Node.js and npm installed

## Installation Steps

### 1. Install Dependencies
The required dependency has been installed:
```bash
npm install mysql2
```

### 2. Database Setup
Run the SQL script in your MySQL database:
```sql
-- Connect to your MySQL database
mysql -u root -p usswebsitenextjs

-- Run the database-setup.sql file
source database-setup.sql;
```

### 3. Environment Configuration
Create a `.env` file in your project root with the following variables:

```env
# Email Configuration (existing)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Database Configuration (new)
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-database-password
DB_NAME=usswebsitenextjs
DB_PORT=3306
```

### 4. Test Database Connection
Visit `/api/test-db` in your browser or use a tool like Postman to test the database connection.

## How It Works

### Existing Functionality
- Email sending via nodemailer remains unchanged
- All form validation and UI behavior preserved

### New Database Features
- Form data is automatically stored in the `contact_submissions` table
- File information is tracked (filename and path)
- Timestamps are automatically added
- Database errors don't affect email functionality

### Database Schema
The `contact_submissions` table stores:
- Personal information (name, email, contact)
- Professional details (designation, experience)
- Project information (subject, status, description)
- File details (filename, path)
- Timestamps (submitted_at, updated_at)

## API Endpoints

### POST /api/sendContactForm
- Sends email (existing functionality)
- Stores data in database (new functionality)
- Returns success/error response

### GET /api/test-db
- Tests database connection
- Useful for debugging connection issues

## Error Handling
- Database errors are logged but don't prevent email sending
- Form submission continues even if database save fails
- Comprehensive error logging for debugging

## File Storage
- Files are processed and attached to emails
- File metadata is stored in database
- File paths are generated for future reference

## Security Features
- SQL injection prevention using parameterized queries
- Connection pooling for better performance
- Environment variable configuration for sensitive data

## Troubleshooting

### Common Issues
1. **Database Connection Failed**
   - Check database credentials in `.env`
   - Verify MySQL service is running
   - Test connection with `/api/test-db`

2. **Table Not Found**
   - Run the `database-setup.sql` script
   - Verify database name is correct

3. **Permission Denied**
   - Check MySQL user permissions
   - Ensure user has access to `usswebsitenextjs` database

### Testing
- Use the test endpoint: `/api/test-db`
- Check console logs for detailed error messages
- Verify database table creation with MySQL client

## Maintenance
- Monitor database connection pool
- Regular backup of `contact_submissions` table
- Check logs for any database errors
