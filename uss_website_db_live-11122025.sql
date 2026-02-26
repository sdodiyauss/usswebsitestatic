-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 11, 2025 at 12:34 PM
-- Server version: 8.0.44-0ubuntu0.22.04.1
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uss_website_db_live`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_career_submissions`
--

CREATE TABLE `contact_career_submissions` (
  `id` int NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `experience` varchar(50) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(500) DEFAULT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact_career_submissions`
--

INSERT INTO `contact_career_submissions` (`id`, `first_name`, `last_name`, `email`, `contact_no`, `designation`, `experience`, `file_name`, `file_path`, `submitted_at`, `updated_at`) VALUES
(1, 'hitesh', 'bhai', 'hitest@gmail.com', '11234567890', 'Senior Developer', '10 Year', '1759213972692_palak.pdf', '/uploads/1759213972692_palak.pdf', '2025-09-30 06:32:59', '2025-09-30 06:32:59'),
(2, 'Admin', 'Test', 'xyz@gmail.com', '919409406633', 'Junior Developer', '1 Year', '1759901784715_USS_Brochure.pdf', '/uploads/1759901784715_USS_Brochure.pdf', '2025-10-08 05:36:26', '2025-10-08 05:36:26'),
(3, 'VAISHALI', 'GOHEL', 'Test@mail.com', '911234567890', 'Junior Developer', '3 Year', '1760002475182_dummy.pdf', '/uploads/1760002475182_dummy.pdf', '2025-10-09 09:34:36', '2025-10-09 09:34:36'),
(4, 'Hitesh', 'Khatwani', 'hkhatwani@universalstreamsolution.com ', '919033419912', 'Team Lead', '11 Year', '1760338135965_invoice-no-1422526.pdf', '/uploads/1760338135965_invoice-no-1422526.pdf', '2025-10-13 06:48:57', '2025-10-13 06:48:57'),
(5, 'ishita', 'mangaroliya', 'ishitamangroliya7@gmail.com', '919023117139', 'Junior Developer', '1 Year', '1760361861139_file-sample.pdf', '/uploads/1760361861139_file-sample.pdf', '2025-10-13 13:24:21', '2025-10-13 13:24:21'),
(6, 'Ishita', 'Patel', 'ishita@gmail.com', '17384623784', 'Junior Developer', '1 Year', '1761916621704_ishita.pdf', '/uploads/1761916621704_ishita.pdf', '2025-10-31 13:17:02', '2025-10-31 13:17:02'),
(7, 'Sandeep', 'Dodiya', 'sdodiya@universalstreamsolution.com', '11234567890', 'Intern / Trainee Developer', '3 Year', '1762421066647_ishita.pdf', '/uploads/1762421066647_ishita.pdf', '2025-11-06 09:24:29', '2025-11-06 09:24:29'),
(8, 'Ishita', 'Patel', 'ishita@gmail.com', '16487236472', 'HR Executive', '1 Year', '1762427701082_ishita.pdf', '/uploads/1762427701082_ishita.pdf', '2025-11-06 11:15:02', '2025-11-06 11:15:02'),
(9, 'Testing', 'Record', 'testing@gmail.com', '12346263745', 'Jr. Dot Net Developer', '1 Year', '1762430731922_sandeep.pdf', '/uploads/1762430731922_sandeep.pdf', '2025-11-06 12:05:32', '2025-11-06 12:05:32'),
(10, 'meghana reddy', 'chinthamreddy', 'meghana.chinthamreddy@gmail.com', '919121804628', 'Jr. Dot Net Developer', '2 Year', '1762452096244_MeghanaReddy_Resume.pdf', '/uploads/1762452096244_MeghanaReddy_Resume.pdf', '2025-11-06 18:01:37', '2025-11-06 18:01:37'),
(11, 'Nirav', 'Mehta', 'Nmehta@universalstreamsolution.com', '917600528966', 'Jr. Dot Net Developer', '1 Year', '1762581968044_sample_demo.pdf', '/uploads/1762581968044_sample_demo.pdf', '2025-11-08 06:06:10', '2025-11-08 06:06:10'),
(12, 'Amey', 'Patil', 'ameypatil289@gmail.com', '918805659457', 'Jr. Dot Net Developer', '2 Year', '1762591576450_Amey_Bajirao_Patil_SE1_.docx', '/uploads/1762591576450_Amey_Bajirao_Patil_SE1_.docx', '2025-11-08 08:46:19', '2025-11-08 08:46:19'),
(13, 'Urja ', 'Shah', 'urja123@gmail.com', '918888880852', 'Jr. Dot Net Developer', '2 Year', '1762617646276_sample_demo.pdf', '/uploads/1762617646276_sample_demo.pdf', '2025-11-08 16:00:48', '2025-11-08 16:00:48'),
(14, 'Urja', 'Shah', 'urja123@gmail.com', '917984691611', 'Jr. Dot Net Developer', '1 Year', '1762617816669_sample_demo.pdf', '/uploads/1762617816669_sample_demo.pdf', '2025-11-08 16:03:37', '2025-11-08 16:03:37'),
(15, 'Urja', 'Shah', 'urjashah1519@gmail.com', '917984691611', 'Jr. Dot Net Developer', '2 Year', '1762661774707_sample_demo.pdf', '/uploads/1762661774707_sample_demo.pdf', '2025-11-09 04:16:17', '2025-11-09 04:16:17'),
(16, 'Urja', 'Shah', 'urjashah1519@gmail.com', '917984691611', 'Jr. Dot Net Developer', '2 Year', '1762661989791_sample_demo.pdf', '/uploads/1762661989791_sample_demo.pdf', '2025-11-09 04:19:51', '2025-11-09 04:19:51'),
(17, 'Urja', 'Shah', 'urjashah1519@gmail.com', '917984691611', 'Jr. Dot Net Developer', '2 Year', '1762662228671_sample_demo.pdf', '/uploads/1762662228671_sample_demo.pdf', '2025-11-09 04:23:49', '2025-11-09 04:23:49'),
(18, 'Raj', 'Shah', 'rajshah5599@gmail.com', '919979766990', 'Jr. Dot Net Developer', '2 Year', '1762662429553_dummy-pdf_2.pdf', '/uploads/1762662429553_dummy-pdf_2.pdf', '2025-11-09 04:27:10', '2025-11-09 04:27:10'),
(19, 'Kishan', 'Patel', 'mr.keysun2000@gmail.com', '917226998397', 'Jr. Dot Net Developer', '3 Year', '1762749863016_Kishan_Patel_2025-1.docx', '/uploads/1762749863016_Kishan_Patel_2025-1.docx', '2025-11-10 04:44:25', '2025-11-10 04:44:25'),
(20, 'Testing ', 'mail', 'testing@gmail.com', '17384632875', 'HR Executive', '3 Year', '1762750979834_ishita.pdf', '/uploads/1762750979834_ishita.pdf', '2025-11-10 05:03:00', '2025-11-10 05:03:00'),
(21, 'Testing', 'Second', 'testing@gmail.com', '13477348756', 'Jr. Dot Net Developer', '3 Year', '1762751028758_ishita.pdf', '/uploads/1762751028758_ishita.pdf', '2025-11-10 05:03:49', '2025-11-10 05:03:49'),
(22, 'sandeep', 'dodiya', 'sandeep@gmail.com', '18735463487', 'Jr. Dot Net Developer', '3 Year', '1762752188733_sandeep.pdf', '/uploads/1762752188733_sandeep.pdf', '2025-11-10 05:23:09', '2025-11-10 05:23:09'),
(23, 'Urja', 'Shah', 'urjashah1519@gmail.com', '917948691611', 'Jr. Dot Net Developer', '2 Year', '1762754314584_sandy.pdf', '/uploads/1762754314584_sandy.pdf', '2025-11-10 05:58:35', '2025-11-10 05:58:35'),
(24, 'Urja', 'Shah', 'urjashah1519@gmail.com', '917984691611', 'HR Executive', '2 Year', '1762754362687_sandy.pdf', '/uploads/1762754362687_sandy.pdf', '2025-11-10 05:59:23', '2025-11-10 05:59:23'),
(25, 'Ishita', 'patel', 'ishita@gmail.com', '19876543210', 'Jr. Dot Net Developer', '3 Year', '1762754404318_ishita.pdf', '/uploads/1762754404318_ishita.pdf', '2025-11-10 06:00:04', '2025-11-10 06:00:04'),
(26, 'nirav', 'mehta', 'nirav@gmail.com', '19876543210', 'Jr. Dot Net Developer', '3 Year', '1762754489523_nirav.pdf', '/uploads/1762754489523_nirav.pdf', '2025-11-10 06:01:30', '2025-11-10 06:01:30'),
(27, 'palak', 'patel', 'palak@gmail.com', '19876543210', 'Jr. Dot Net Developer', '3 Year', '1762754657750_palak.pdf', '/uploads/1762754657750_palak.pdf', '2025-11-10 06:04:18', '2025-11-10 06:04:18'),
(28, 'sandy', 'dodiya', 'sandy@gmail.com', '19857345843', 'Jr. Dot Net Developer', '1 Year', '1762758687020_sandy.pdf', '/uploads/1762758687020_sandy.pdf', '2025-11-10 07:11:28', '2025-11-10 07:11:28'),
(29, 'Testing', 'device', 'testing@gmail.com', '19857349875', 'Jr. Dot Net Developer', '3 Year', '1762759016919_vaishali.pdf', '/uploads/1762759016919_vaishali.pdf', '2025-11-10 07:16:57', '2025-11-10 07:16:57'),
(30, 'sandeep', 'dodiya', 'sandeep@gmail.com', '13487563487', 'Jr. Dot Net Developer', '3 Year', '1762759950102_sandeep.pdf', '/uploads/1762759950102_sandeep.pdf', '2025-11-10 07:32:31', '2025-11-10 07:32:31'),
(31, 'Vidurshi ', 'Thummar ', 'vidurshithummar26@gmail.com', '17698331406', 'Jr. Dot Net Developer', '1 Year', '1762765036204_Vidurshi_Curriculam.pdf', '/uploads/1762765036204_Vidurshi_Curriculam.pdf', '2025-11-10 08:57:17', '2025-11-10 08:57:17'),
(32, 'Sandeep', 'Dodiya', 'sandeep@gmail.com', '14657495678', 'Jr. Dot Net Developer', '1 Year', '1762765529784_sandeep.pdf', '/uploads/1762765529784_sandeep.pdf', '2025-11-10 09:05:30', '2025-11-10 09:05:30'),
(33, 'Nirav', 'Mehta', 'nmehta@universalstreamsolution.com', '917600528966', 'Jr. Dot Net Developer', '1 Year', '1762768982411_sample.pdf', '/uploads/1762768982411_sample.pdf', '2025-11-10 10:03:03', '2025-11-10 10:03:03'),
(34, 'sandeep', 'dodiya', 'sandeep@gmail.com', '18743653465', 'Jr. Dot Net Developer', '3 Year', '1762839042061_sandeep.pdf', '/uploads/1762839042061_sandeep.pdf', '2025-11-11 05:30:44', '2025-11-11 05:30:44'),
(35, 'Jahanvi', 'Gameti', 'jahanvigameti2000@gmail.com', '919725068083', 'Jr. Dot Net Developer', '2 Year', '1762841863436_Jahanvi-Resume.pdf', '/uploads/1762841863436_Jahanvi-Resume.pdf', '2025-11-11 06:17:44', '2025-11-11 06:17:44'),
(36, 'Pradnya ', 'Puppal ', 'pradnyapuppal297@gmail.com', '918637787489', 'Jr. Dot Net Developer', '2 Year', '1762917281845_Pradnyapuppalresume.docx', '/uploads/1762917281845_Pradnyapuppalresume.docx', '2025-11-12 03:14:44', '2025-11-12 03:14:44'),
(37, 'Madhuri', 'Korke', 'korkemadhuri1228@gmail.com', '919359482496', 'Jr. Dot Net Developer', '2 Year', '1762917946364_Madhuri_Korke_Resume_compressed.pdf', '/uploads/1762917946364_Madhuri_Korke_Resume_compressed.pdf', '2025-11-12 03:25:47', '2025-11-12 03:25:47'),
(38, 'sandeep', 'dodiya', 'sandeep@gmail.com', '18345734875', 'Jr. Dot Net Developer', '3 Year', '1762930727270_sandeep.pdf', '/uploads/1762930727270_sandeep.pdf', '2025-11-12 06:58:48', '2025-11-12 06:58:48'),
(39, 'Testing ', 'mail', 'testing@gmail.com', '15683476583', 'HR Executive', '3 Year', '1762950495372_testing.pdf', '/uploads/1762950495372_testing.pdf', '2025-11-12 12:28:16', '2025-11-12 12:28:16'),
(40, 'Vaishali', 'Gadher', 'Vaishaligadher@gmail.com', '19876543210', 'HR Executive', '3 Year', '1762952568920_Get_Started_With_Smallpdf.pdf', '/uploads/1762952568920_Get_Started_With_Smallpdf.pdf', '2025-11-12 13:02:49', '2025-11-12 13:02:49'),
(41, 'Urja', 'Shah', 'Urjashah@gmail.com', '19876543210', 'HR Executive', '3 Year', '1762952695564_Get_Started_With_Smallpdf.pdf', '/uploads/1762952695564_Get_Started_With_Smallpdf.pdf', '2025-11-12 13:04:56', '2025-11-12 13:04:56'),
(42, 'Urja', 'Shah', 'urja345@gmail.com', '18528533888', 'Jr. Dot Net Developer', '2 Year', '1762952963447_sample_demo.pdf', '/uploads/1762952963447_sample_demo.pdf', '2025-11-12 13:09:24', '2025-11-12 13:09:24'),
(43, 'Abhi', 'Jasani', 'abhijasani7@gmail.com', '919023450538', 'Jr. Dot Net Developer', '3 Year', '1763013925304_Abhi_Jasani.pdf', '/uploads/1763013925304_Abhi_Jasani.pdf', '2025-11-13 06:05:28', '2025-11-13 06:05:28'),
(44, 'sandeep', 'Dodiya', 'sandeep@gmail.com', '919876543210', 'HR Executive', '3 Year', '1763016662636_sandeep.pdf', '/uploads/1763016662636_sandeep.pdf', '2025-11-13 06:51:03', '2025-11-13 06:51:03'),
(45, 'Sandeep', 'Dodiya', 'sandeeptesting@gmail.com', '918898654444', 'HR Executive', '3 Year', '1763016775555_sandy.pdf', '/uploads/1763016775555_sandy.pdf', '2025-11-13 06:52:56', '2025-11-13 06:52:56'),
(46, 'Lilly', 'Trust', 'Lilly@gmail.com', '917600183877', 'Jr. Dot Net Developer', '1 Year', '1763017653941_testing.pdf', '/uploads/1763017653941_testing.pdf', '2025-11-13 07:07:34', '2025-11-13 07:07:34'),
(47, 'Lilaben', 'Patel', 'Lilatest@gmail.com', '919454845484', 'HR Executive', '3 Year', '1763018744231_testing.pdf', '/uploads/1763018744231_testing.pdf', '2025-11-13 07:25:45', '2025-11-13 07:25:45'),
(48, 'Ruby', 'Black', 'Ruby@gmail.com', '917644523180', 'Jr. Dot Net Developer', '1 Year', '1763018843898_testing.pdf', '/uploads/1763018843898_testing.pdf', '2025-11-13 07:27:24', '2025-11-13 07:27:24'),
(49, 'Testing', 'sandeep', 'testing@gmail.com', '918934574937', 'HR Executive', '3 Year', '1763022239748_testing.pdf', '/uploads/1763022239748_testing.pdf', '2025-11-13 08:24:00', '2025-11-13 08:24:00'),
(50, 'Test', 'Dasktop', 'testingdasktop@gmail.com', '919465467485', 'HR Executive', '3 Year', '1763023342474_testing.pdf', '/uploads/1763023342474_testing.pdf', '2025-11-13 08:42:23', '2025-11-13 08:42:23'),
(51, 'sandeep', 'dodiya', 'sandeeptesting@gmail.com', '914873534756', 'HR Executive', '3 Year', '1763028153502_sandeep.pdf', '/uploads/1763028153502_sandeep.pdf', '2025-11-13 10:02:34', '2025-11-13 10:02:34'),
(52, 'Testing', 'dotnet', 'testing@gmail.com', '918457634876', 'Jr. Dot Net Developer', '3 Year', '1763030035783_sandeep.pdf', '/uploads/1763030035783_sandeep.pdf', '2025-11-13 10:33:56', '2025-11-13 10:33:56'),
(53, 'Niti', 'Patel', 'niti@gmail.com', '914251898307', 'HR Executive', '0 Year', '1763030190427_testing.pdf', '/uploads/1763030190427_testing.pdf', '2025-11-13 10:36:30', '2025-11-13 10:36:30'),
(54, 'ishita', 'mangroliya', 'iman@gmail.com', '919023117139', 'HR Executive', '0 Year', '1763030344278_file-sample.pdf', '/uploads/1763030344278_file-sample.pdf', '2025-11-13 10:39:05', '2025-11-13 10:39:05'),
(55, 'Aksh', 'Saxena', 'akshsaxena600@gmail.com', '917900203428', 'Jr. Dot Net Developer', '1 Year', '1763043204450_Aksh_Saxena_FullStackDeveloper.pdf', '/uploads/1763043204450_Aksh_Saxena_FullStackDeveloper.pdf', '2025-11-13 14:13:25', '2025-11-13 14:13:25'),
(56, 'Satanik', 'Dasgupta', 'satanikdgupta@gmail.com', '917439321611', 'Jr. Dot Net Developer', '3 Year', '1763127723476_Satanik_Dasgupta_cv.docx', '/uploads/1763127723476_Satanik_Dasgupta_cv.docx', '2025-11-14 13:42:06', '2025-11-14 13:42:06'),
(57, 'Riya', 'Patel', 'Patelriyar2001@gmail.com', '919328217771', 'Jr. Dot Net Developer', '1 Year', '1763361990773_riya_resume.pdf', '/uploads/1763361990773_riya_resume.pdf', '2025-11-17 06:46:33', '2025-11-17 06:46:33'),
(58, 'Urja', 'Shah', 'urja124@gmail.com', '917984691611', 'Jr. Dot Net Developer', '2 Year', '1763383319648_sandy.pdf', '/uploads/1763383319648_sandy.pdf', '2025-11-17 12:42:00', '2025-11-17 12:42:00'),
(59, 'Anand ', 'Yadav ', 'yanand647@gmail.com', '917986571073', 'Jr. Dot Net Developer', '1 Year', '1763462929096_Anand.R.pdf', '/uploads/1763462929096_Anand.R.pdf', '2025-11-18 10:48:51', '2025-11-18 10:48:51'),
(60, 'Sonali', 'Lama', 'lamasonali561@gmail.com', '918718852683', 'Jr. Dot Net Developer', '2 Year', '1763463914873_Sonali_Lama.pdf', '/uploads/1763463914873_Sonali_Lama.pdf', '2025-11-18 11:05:15', '2025-11-18 11:05:15'),
(61, 'Pallavi', 'Chaudhari', 'cdacpallavichaudhari@gmail.com', '918668280040', 'Jr. Dot Net Developer', '2 Year', '1763523889681_Pallavi_Chaudhari_Software_engineer.pdf', '/uploads/1763523889681_Pallavi_Chaudhari_Software_engineer.pdf', '2025-11-19 03:44:51', '2025-11-19 03:44:51'),
(62, 'Sandeep', 'Dodiya', 'sdodiya@universalstreamsolution.com', '919876543210', 'Jr. Dot Net Developer', '3 Year', '1763549040446_sandeep.pdf', '/uploads/1763549040446_sandeep.pdf', '2025-11-19 10:44:01', '2025-11-19 10:44:01'),
(63, 'Test', 'Test', 'ghtfr7@gmail.com', '919875321234', 'HR Executive', '1 Year', '1763549477031_Test.docx', '/uploads/1763549477031_Test.docx', '2025-11-19 10:51:17', '2025-11-19 10:51:17'),
(64, 'Raisahmed', 'Shaikhsipai', 'raisshaikh2001@gmail.com', '917284888586', 'Jr. Dot Net Developer', '2 Year', '1763607118390_Resume_Raisahmed_Shaikh.pdf', '/uploads/1763607118390_Resume_Raisahmed_Shaikh.pdf', '2025-11-20 02:52:00', '2025-11-20 02:52:00'),
(65, 'Abhijeet ', 'Pandey ', 'pandeyabhijeet193@gmail.com', '916202507652', 'Jr. Dot Net Developer', '1 Year', '1763615366856_Abhijeetpandey_Resume-6202507652.pdf', '/uploads/1763615366856_Abhijeetpandey_Resume-6202507652.pdf', '2025-11-20 05:09:28', '2025-11-20 05:09:28'),
(66, 'Sufiyan', 'Malek', 'sufiyanmalek453@gmail.com', '919624944526', 'Jr. Dot Net Developer', '1 Year', '1763616063420_CV-Sufiyan_Malek.pdf', '/uploads/1763616063420_CV-Sufiyan_Malek.pdf', '2025-11-20 05:21:04', '2025-11-20 05:21:04'),
(67, 'Sandeep', 'Dodiya', 'sdodiya@universalstreamsolution.com', '919876543210', 'Jr. Dot Net Developer', '3 Year', '1763640680897_sandeep.pdf', '/uploads/1763640680897_sandeep.pdf', '2025-11-20 12:11:21', '2025-11-20 12:11:21'),
(68, 'Ishita', 'Mangroliya', 'sdodiya@universalstreamsolution.com', '919843658746', 'HR Executive', '4 Year', '1763641710402_ishita.pdf', '/uploads/1763641710402_ishita.pdf', '2025-11-20 12:28:31', '2025-11-20 12:28:31'),
(69, 'Sandeep', 'Dodiya', 'sdodiya@universalstreamsolution.com', '918456435663', 'Jr. Dot Net Developer', '3 Year', '1763641812857_sandeep.pdf', '/uploads/1763641812857_sandeep.pdf', '2025-11-20 12:30:13', '2025-11-20 12:30:13'),
(70, 'Sandeep', 'Dodiya', 'sdodiya@universalstreamsolution.com', '919876543223', 'Jr. Dot Net Developer', '5 Year', '1763642943690_sandy.pdf', '/uploads/1763642943690_sandy.pdf', '2025-11-20 12:49:05', '2025-11-20 12:49:05'),
(71, 'Testing', 'Email', 'sdodiya@universalstreamsolution.com', '918597684556', 'HR Executive', '3 Year', '1763644807112_testing.pdf', '/uploads/1763644807112_testing.pdf', '2025-11-20 13:20:09', '2025-11-20 13:20:09'),
(72, 'Yashnika', 'Bhatt', 'yashnikabhatt14@gmail.com', '919685828250', 'Jr. Dot Net Developer', '2 Year', '1763709489415_Yashnika_Bhatt_DotNetDeveloper_Resume.pdf', '/uploads/1763709489415_Yashnika_Bhatt_DotNetDeveloper_Resume.pdf', '2025-11-21 07:18:12', '2025-11-21 07:18:12'),
(73, 'Divya', 'Jain', 'divyajainn0800@gmail.com', '918087288112', 'Jr. Dot Net Developer', '2 Year', '1763884198320_DivyaJain_Resume.pdf', '/uploads/1763884198320_DivyaJain_Resume.pdf', '2025-11-23 07:50:02', '2025-11-23 07:50:02'),
(74, 'Pritam', 'Patil', 'pritampatil8056@gmail.com', '918329797811', 'Jr. Dot Net Developer', '3 Year', '1763961285077_PritamPatilResume._8329797811__1_.pdf', '/uploads/1763961285077_PritamPatilResume._8329797811__1_.pdf', '2025-11-24 05:14:48', '2025-11-24 05:14:48'),
(75, 'Priti', 'Garule', 'garulepriti@gmail.com', '918237928950', 'HR Executive', '0 Year', '1764251623501_F.PRITI_DATTU_GARULE__1__29-Mar-25_11.40.51.pdf', '/uploads/1764251623501_F.PRITI_DATTU_GARULE__1__29-Mar-25_11.40.51.pdf', '2025-11-27 13:53:46', '2025-11-27 13:53:46'),
(76, 'Yogesh', 'Chaudhari', 'yrchaudhari49@gmail.com', '918975744828', 'Jr. Dot Net Developer', '4 Year', '1764343208871_Resume-1.pdf', '/uploads/1764343208871_Resume-1.pdf', '2025-11-28 15:20:11', '2025-11-28 15:20:11'),
(77, 'Suhas', 'Shinde', 'smshinde1999@gmail.com', '919503147643', 'Jr. Dot Net Developer', '3 Year', '1764476088409_Suhas_Shinde_Dotnet_Resume_2_Years_9_Months_Experience.pdf', '/uploads/1764476088409_Suhas_Shinde_Dotnet_Resume_2_Years_9_Months_Experience.pdf', '2025-11-30 04:14:51', '2025-11-30 04:14:51'),
(78, 'Sandeep', 'Dodiya', 'sdodiya@universalstreamsolution.com', '919876543210', 'Jr. Dot Net Developer', '3 Year', '1764832891448_sandeep.pdf', '/uploads/1764832891448_sandeep.pdf', '2025-12-04 07:21:35', '2025-12-04 07:21:35'),
(79, 'Urja', 'Shah', 'urja222@gmail.com', '912323232323', 'Jr. Dot Net Developer', '2 Year', '1765278849587_sandy.pdf', '/uploads/1765278849587_sandy.pdf', '2025-12-09 11:14:10', '2025-12-09 11:14:10');

-- --------------------------------------------------------

--
-- Table structure for table `contact_career_submissions_demo`
--

CREATE TABLE `contact_career_submissions_demo` (
  `id` int NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `experience` varchar(50) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `file_path` varchar(500) DEFAULT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact_career_submissions_demo`
--

INSERT INTO `contact_career_submissions_demo` (`id`, `first_name`, `last_name`, `email`, `contact_no`, `designation`, `experience`, `file_name`, `file_path`, `submitted_at`, `updated_at`) VALUES
(1, 'Test', 'User', 'test@example.com', '12345678', 'Tester', '1', NULL, NULL, '2025-11-12 10:12:57', '2025-11-12 10:12:57'),
(2, 'sandeep', 'Dodiya', 'sandeep@gmail.com', '19624660186', 'Jr. Dot Net Developer', '3 Year', '1762944739593_sandeep.pdf', '/uploads/demo/1762944739593_sandeep.pdf', '2025-11-12 10:52:21', '2025-11-12 10:52:21'),
(3, 'testing', 'mail', 'testing@gmail.com', '18746653456', 'Jr. Dot Net Developer', '1 Year', '1762944808307_testing.pdf', '/uploads/demo/1762944808307_testing.pdf', '2025-11-12 10:53:29', '2025-11-12 10:53:29'),
(4, 'Vaishali', 'Patel', 'Vaishali@gmail.com', '16484843104', 'HR Executive', '3 Year', '1762952402477_Get_Started_With_Smallpdf.pdf', '/uploads/demo/1762952402477_Get_Started_With_Smallpdf.pdf', '2025-11-12 13:00:03', '2025-11-12 13:00:03'),
(5, 'Siva', 'Timmisetty', 'timmisettysivaanil143@gmail.com', '918688052158', 'HR Executive', '5 Year', '1763020322917_Python-0-1.pdf', '/uploads/demo/1763020322917_Python-0-1.pdf', '2025-11-13 07:52:04', '2025-11-13 07:52:04'),
(6, 'Siva', 'Timmisetty', 'timmisettysivaanil143@gmail.com', '918457458446', 'HR Executive', '5 Year', '1763020441002_Siva_Anil_Resume_SAP_Trainee.pdf', '/uploads/demo/1763020441002_Siva_Anil_Resume_SAP_Trainee.pdf', '2025-11-13 07:54:01', '2025-11-13 07:54:01'),
(7, 'Siva', 'Timmisetty', 'timmisettysivaanil143@gmail.com', '919424848191', 'HR Executive', '5 Year', '1763020493498_Siva_Anil_Resume_SAP_Trainee.pdf', '/uploads/demo/1763020493498_Siva_Anil_Resume_SAP_Trainee.pdf', '2025-11-13 07:54:54', '2025-11-13 07:54:54'),
(8, 'Sandeep', 'Dodiya', 'sandeeplinkin@gmail.com', '914875348756', 'Jr. Dot Net Developer', '3 Year', '1763028257299_sandy.pdf', '/uploads/demo/1763028257299_sandy.pdf', '2025-11-13 10:04:18', '2025-11-13 10:04:18'),
(9, 'Sandeep', 'dodiya', 'sandep@gmail.com', '914547567567', 'Jr. Dot Net Developer', '3 Year', '1763028476471_sandy.pdf', '/uploads/demo/1763028476471_sandy.pdf', '2025-11-13 10:07:57', '2025-11-13 10:07:57');

-- --------------------------------------------------------

--
-- Table structure for table `contact_submissions`
--

CREATE TABLE `contact_submissions` (
  `id` int NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `description` text,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact_submissions`
--

INSERT INTO `contact_submissions` (`id`, `first_name`, `last_name`, `email`, `contact_no`, `subject`, `description`, `submitted_at`, `updated_at`) VALUES
(1, 'sandeep', 'dodiya', 'sandeep@gmail.com', '12435672354', 'Testing contact', 'Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact Testing contact ', '2025-09-30 06:36:28', '2025-09-30 06:36:28'),
(2, 'Amit', 'Patel', 'amitp@gmail.com', '916060609989', 'Brand Marketing Help', 'would like to refer clients to your agency.', '2025-10-08 06:00:01', '2025-10-08 06:00:01'),
(3, 'Vaishali', 'Gohel', 'Test@mail.com ', '911234567890', 'Test', ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\n', '2025-10-09 09:30:46', '2025-10-09 09:30:46'),
(4, 'Vaishali', 'Gohel', 'Test@mail.com', '911234567890', 'Test', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\n', '2025-10-09 10:54:40', '2025-10-09 10:54:40'),
(5, 'Test', 'User', 'test@mail.com', '911234567890', 'test', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\n', '2025-10-09 10:56:30', '2025-10-09 10:56:30'),
(6, 'Sandeep', 'Dodiya', 'sandeep@gmail.com', '12387235678', 'Hello testing', ' Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing Hello testing', '2025-10-09 12:43:23', '2025-10-09 12:43:23'),
(7, 'sandy', 'dodiya', 'sandy@gmail.com', '13754345678', 'testing form', ' testing form testing form testing form testing form testing form testing form testing form testing form testing form testing form testing form testing form testing form testing form testing form testing form', '2025-10-09 13:15:09', '2025-10-09 13:15:09'),
(8, 'Sandeep', 'Dodiya', 'sandeep@gmail.com', '380894373457', 'Testing mail', 'Testing mail Testing mail Testing mail Testing mail Testing mail Testing mail Testing mail Testing mail Testing mail Testing mail  Testing mail Testing mail Testing mail Testing mail Testing mail  Testing mail Testing mail Testing mail Testing mail Testing mail  Testing mail Testing mail Testing mail Testing mail Testing mail  Testing mail Testing mail Testing mail Testing mail Testing mail ', '2025-10-10 05:24:20', '2025-10-10 05:24:20'),
(9, 'Sandeep', 'Dodiya', 'sandeep@gmail.com', '14682346235', 'Test', 'Testing form', '2025-10-13 07:06:34', '2025-10-13 07:06:34'),
(10, 'ishita', 'mangaroliya', 'ishitamangroliya7@gmail.com', '919023117139', 'Apply for job', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2025-10-13 13:25:41', '2025-10-13 13:25:41'),
(11, 'Michael', 'Adams', 'michael@listsassistant.com', '19047479442', 'Contact Lists of Physicians, Chiropractors & Podiatrists', 'Hi, \r\n\r\nWe provide verified contact lists of hospitals, labs, insurance companies, and pharmaceutical firms — the ideal audience for healthcare analytics software and data-driven solutions. \r\n\r\nOur contact lists include:\r\n✔️ Verified emails, direct dials, physical addresses, and more\r\n✔️ Filters by region, facility type, organization size, and specialty \r\n\r\nLet me know if you\'re targeting the US or any specific region, and I’ll send pricing and a sample list. \r\n\r\nBest regards,\r\nMichael Adams\r\nSr. Marketing Associate ', '2025-10-21 14:12:20', '2025-10-21 14:12:20'),
(12, 'Sandeep', 'Dodiya', 'sdodiya@universalstreamsolution.com', '11234567893', 'Testing mail', 'Testing mail Testing mail Testing mail Testing mail Testing mail Testing mail Testing mail', '2025-10-31 12:06:18', '2025-10-31 12:06:18'),
(13, 'Urja ', 'Shah', 'Urja@gmail.com', '12378462384', 'Tetsing mail second', 'Tetsing mail second Tetsing mail second Tetsing mail second Tetsing mail second Tetsing mail second', '2025-10-31 12:17:26', '2025-10-31 12:17:26'),
(14, 'Sakshi', 'Dixit', 'sakshi123@gmail.com', '912222222222', 'Test', 'babfdjabfjhfdjaeshfdjkes', '2025-10-31 13:13:12', '2025-10-31 13:13:12'),
(15, 'Sakshi', 'Dixit', 'sakshi123@gmail.com', '912525258787', 'Dot Net Developer', 'Dot Net Project Meeting', '2025-11-01 05:09:01', '2025-11-01 05:09:01'),
(16, 'Urja', 'Shah', 'urja123@gmail.com', '912525285858', 'Hello All', 'fwaffgsGFSgsdgsdg', '2025-11-01 05:11:13', '2025-11-01 05:11:13'),
(17, 'Bhagirathsinh', 'Nakum', 'bhagirathnakum13@gmail.com', '918140777373', 'Appication Apply for MERN Stack Developer / Frontend Developer / Backend Developer', 'My name is Bhagirathsinh Nakum, and I’ve recently completed my B.Tech in Computer Engineering from Atmiya University, Rajkot.\r\n\r\nI’m interested in applying for the MERN Stack / Frontend Internship under the USS Internship Program.\r\nI have experience with React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and shadcn/ui, and have built a Job Portal project using the MERN stack with authentication and real-time features.', '2025-11-03 12:20:57', '2025-11-03 12:20:57'),
(18, 'Urja', 'Shah', 'abc123@gmail.com', '912525256898', 'General Inquiry', 'Testing Testing', '2025-11-06 10:29:47', '2025-11-06 10:29:47'),
(19, 'Pratik', 'Gajera', 'Pratikgajera4088@gmail.com', '918866408329', 'Junior Dotnet developer', 'My self Pratik Gajera. I  have completed my bachelor degree in Bachelor of Computer Application. I have 1.5 year of experience as dotnet developer. ', '2025-11-07 03:32:53', '2025-11-07 03:32:53'),
(20, 'Prem', 'Mistry', 'premmistry52@gmail.com', '919714254745', 'Application for Jr .Net Developer', 'I am writing to express my interest in the .NET Developer position. With a strong background in .NET technologies and hands-on experience in developing web and desktop applications, I am confident in my ability to contribute effectively to your development team', '2025-11-08 11:51:04', '2025-11-08 11:51:04'),
(21, 'Urja ', 'Shah', 'urjashah1519@gmail.com', '917984691611', 'General Inquiry ', 'App and Web Inquiry ', '2025-11-10 04:48:43', '2025-11-10 04:48:43'),
(22, 'Harshada', 'Jadhav', 'harshadajadhav2412@gmail.com', '918839064454', 'Application for .net developer', 'I am Harshada Jadhav, a .NET Developer with 3+ years of experience in designing, developing, and maintaining web applications. I am excited about this job opportunity and believe my skills and experience make me a strong fit for the role.\r\n\r\nPlease find my resume attached for your review. I would be glad to discuss how I can contribute to your team.\r\n\r\nThank you for your time and consideration.', '2025-11-10 09:25:03', '2025-11-10 09:25:03'),
(23, 'Sandeep', 'Dodiya', 'sandeep1@gmail.com', '18758346583', 'Testing database', 'Hello testing', '2025-11-11 05:55:34', '2025-11-11 05:55:34'),
(24, 'Testing', 'Mobile', 'Mobile@gmail.com', '16454548454', 'Testing mobile device', 'Is it working?', '2025-11-11 05:57:06', '2025-11-11 05:57:06'),
(25, 'Angad', 'kumar', 'angad.ak70@gmail.com', '919643574079', 'Jr. Dot Net Developer', ' Experienced Web Developer skilled in .NET development with a strong foundation in .NET and JavaScript\r\n technologies. Having experience in building RESTful APIs, integrating third-party systems, optimizing\r\n performance, and debugging complex issues. Passionate about clean code, modern frameworks, and\r\n collaborative team environments.', '2025-11-11 07:37:16', '2025-11-11 07:37:16'),
(26, 'Ashish', 'Tripathi', 'ashishtripa9694@gmail.com', '916264213844', 'Jr. Dot Net Developer immediate joiner', 'i have all the ability which you are finding and also i am looking same location', '2025-11-12 03:39:59', '2025-11-12 03:39:59'),
(27, 'Sandeep', 'Dodiya', 'Sandeep@gmail.com', '19876543210', 'All form working', 'Testing all form ', '2025-11-12 13:07:19', '2025-11-12 13:07:19'),
(28, 'Raj', 'Shah', 'raj133@gmail.com', '18585588558', 'Hello', 'Testing the form', '2025-11-12 13:10:18', '2025-11-12 13:10:18'),
(29, 'Sandeep', 'Dodiya', 'Sandeepmobilecontact@gmail.com', '919624512181', 'Testing mobile device', 'Baracuda issue testing', '2025-11-13 07:03:00', '2025-11-13 07:03:00'),
(30, 'Siva', 'Timmisetty', 'timmisettysivaanil143@gmail.com', '916165646546', 'dtrestinggjngfkj', 'fjkvdbfvbdfgv', '2025-11-13 10:13:46', '2025-11-13 10:13:46'),
(31, 'Urja', 'Shah', 'urja123@gmail.com', '917984691611', 'Hello World', 'Testing ', '2025-11-17 12:40:51', '2025-11-17 12:40:51'),
(32, 'Urja', 'Shah', 'urja124@gmail.com', '917984691611', 'Testing', 'Testing ', '2025-11-17 12:41:26', '2025-11-17 12:41:26'),
(33, 'Voth', 'VI', 'voth@indmin.cfd', '4367844092422', 'Facebook advertising', 'We\'re looking for Facebook advertising accounts to directly run our own campaigns. Please let me know if this is something you can offer. Thanks', '2025-11-20 06:20:05', '2025-11-20 06:20:05'),
(34, 'Priti', 'Garule', 'garulepriti@gmail.com', '918237928950', 'Application for HR Executive.', 'Hello Sir/Madam,\r\nMy name is Priti Garule. I have completed BCA and I’m currently pursuing MCA. I am interested in applying for the HR Executive position in your company. I am a fresher but I have corporate experience and a good understanding of company processes.\r\nKindly consider my profile. Thank you.', '2025-11-27 14:04:50', '2025-11-27 14:04:50'),
(35, 'Miguel ', 'Esparza', 'mesparzajr@gmail.com', '19395294553', 'Senior Web Developer ready to work !', 'Greetings,\r\nMy name is Miguel Esparza, and I’m a senior web and app developer with over 10 years of experience building production applications for web and mobile. I work across the stack and can handle just about anything you need, including WordPress, custom web apps, mobile apps, and AI-powered solutions.\r\nI’m extremely hands-on and execution-focused. I move fast, communicate clearly, and get things done.\r\nI’m currently in a tough spot and actively looking for remote work. My rate is $30 per hour. I know this is below the typical rate for my experience level, but I need work and I genuinely appreciate your understanding and consideration.\r\nIf there’s any way I can help you or your team, I’d be grateful for the opportunity. I’m available via email, phone, or Zoom to discuss how I can add value.\r\nThank you for your time and consideration, Miguel Esparza - US Citizen\r\nLinkedIn: linkedin.com/in/miguel-esparza-a54233182 Personal Portfolio: mikedavinci.com My AI Agent Site: pilotwizard.ai', '2025-12-02 19:43:46', '2025-12-02 19:43:46'),
(36, 'Urja', 'Shah', 'urja123@gmail.com', '917878787878', 'Hello World', 'Graphic Design Project', '2025-12-04 10:25:57', '2025-12-04 10:25:57'),
(37, 'Andrew', 'Lewis', 'andrew@tech35.pro', '14785003392', 'Vendor Registration Request – Tech35, LLC', 'Dear Vendor Management Team,\r\n\r\nI am submitting Tech35, LLC for consideration as a nationwide vendor partner for low-voltage, IT infrastructure, and managed services.\r\n\r\nAbout Tech35\r\nU.S.-based provider of low-voltage cabling, security systems, and IT infrastructure services\r\nNationwide coverage with vetted technicians and rapid dispatch capability\r\nStrategic partnership with Lumen Technologies, enabling enterprise-grade connectivity, cloud, and security solutions\r\nFully insured and compliant (General Liability, Workers’ Comp, Auto)\r\n\r\nServices & Capabilities\r\nNetwork Cabling & Infrastructure: Cat5e/Cat6/Cat6a/fiber installation, rack assembly, patch panels, structured network design\r\nSecurity Systems: CCTV, access control, alarm wiring, and emergency repair\r\nWireless & POS Support: Wi-Fi optimization, access point placement, retail POS/data cabling\r\nIT & Systems Deployment: Switches, firewalls, servers, routers, staging, configuration, upgrades, preventive maintenance\r\nNationwide Dispatch & Subcontractor Management: 24/7 rapid response, same-day documentation, compliance reporting\r\nEnterprise Solutions via Lumen Partnership: SD-WAN, hybrid cloud, managed firewall, SIEM, hosted VoIP, Microsoft Teams integration, edge compute, and broadcast services\r\n\r\nWhat We Solve\r\nSlow coverage → Same-day nationwide dispatch with vetted technicians\r\nCompliance gaps → Check-in/out, photo documentation, and closeout reports for every job\r\nDowntime → Fast resolution of cabling, Wi-Fi, and IT issues with proactive support\r\n\r\nValue Delivered\r\nFast, reliable nationwide service with local dispatch capability\r\nSOP-driven compliance and reporting for predictable performance\r\nReduced downtime and long-term IT modernization through single-vendor accountability\r\n\r\nCustomer Feedback\r\n“Tech35’s same-day dispatch and photo-documented closeouts have made our IT rollouts smoother and fully compliant.”\r\n — Regional Facilities Manager, National Retail Chain\r\n\r\nAttachment: Please find the Tech35 Capability Statement attached for your review.\r\nNext Step: Kindly confirm the supplier registration process for non-merchandise service providers or forward this request to the appropriate team.\r\n\r\nContacts\r\n 📧 applications@tech35.pro\r\n 📧 Andrew Lewis | andrew@tech35.pro | +1 (478) 500-3392\r\n\r\n\r\n\r\nBest regards,\r\nAndrew Lewis\r\nFounder / CEO\r\nTech35 LLC\r\n(478) 500 3392\r\nandrew@tech35.pro\r\n2180 Satellite Blvd\r\nDuluth, GA 30097\r\n\r\n\r\nTech35 - Capability Statement\r\nhttps://drive.google.com/file/d/1hi7OfiDcEAokeeDuLM39zDj7QxqKmYzs/view?usp=sharing', '2025-12-04 18:42:15', '2025-12-04 18:42:15'),
(38, 'Urja', 'Shah', 'urja567@gmail.com', '917878787878', 'Test', 'Hello World', '2025-12-09 11:10:47', '2025-12-09 11:10:47'),
(39, 'Urja', 'Shah', 'urja111@gmail.com', '914545454545', 'Hello World', 'Graphic Design Project', '2025-12-09 11:11:35', '2025-12-09 11:11:35');

-- --------------------------------------------------------

--
-- Table structure for table `general_contact_submissions`
--

CREATE TABLE `general_contact_submissions` (
  `id` int NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `project_status` varchar(100) DEFAULT NULL,
  `about_project` text,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `general_contact_submissions`
--

INSERT INTO `general_contact_submissions` (`id`, `first_name`, `last_name`, `email`, `contact_no`, `subject`, `project_status`, `about_project`, `submitted_at`, `updated_at`) VALUES
(1, 'Ishita', 'Patel', 'ishita@gmail.com', '16524236482', 'Design issue', 'Planning', 'Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue Design issue ', '2025-09-30 06:38:34', '2025-09-30 06:38:34'),
(2, 'Test', 'Shah', 'abc@gamil.com', '919409409556', 'Website Development', 'Planning', 'Healthcare Project', '2025-10-08 05:35:00', '2025-10-08 05:35:00'),
(3, 'sandeep', 'Dodiya', 'sandeep@gmail.com', '12342354365', 'Testing ', 'Planning', 'Hello Testing', '2025-10-08 06:33:52', '2025-10-08 06:33:52'),
(4, 'Vaishali ', 'QA', 'test@mail.com', '911234567890', 'Testing', 'Planning', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '2025-10-09 09:02:40', '2025-10-09 09:02:40'),
(5, 'VaishaliTest', 'QATest', 'Test121@mail.com', '911234567890', 'Testing', 'In Progress', ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\n', '2025-10-09 09:22:57', '2025-10-09 09:22:57'),
(6, 'VaishaliTestSolution', 'Solution', 'Test@mail.com', '911234567890', 'SOlution', 'In Progress', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\n', '2025-10-09 09:26:05', '2025-10-09 09:26:05'),
(7, 'VaishaliHowWehelp', 'HowWehelp', 'Test@mail.com', '911234567890', 'Testing', 'Completed', ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\n', '2025-10-09 09:28:19', '2025-10-09 09:28:19'),
(8, 'Sandeep', 'Shah', 'xyz@gmail.com', '919090905568', 'Test1', 'Planning', 'Working testing', '2025-10-10 07:17:26', '2025-10-10 07:17:26'),
(9, 'Sakshi', 'Shah', 'abc@gmail.com', '918525896645', 'Admin', 'Planning', 'Testing Purpose', '2025-10-10 08:25:15', '2025-10-10 08:25:15'),
(10, 'ishita', 'mangaroliya', 'ishumangaroliya7@gmail.com', '919023117139', 'inquiry', 'In Progress', 'abcdefghijklmno', '2025-10-13 13:13:29', '2025-10-13 13:13:29'),
(11, 'Sitej ', 'Parikh', 'sales@sinelogixtechnologies.com', '919979553686', 'Are you Looking for Skilled Developers', 'Planning', 'Sitej{TAB}9979553686{TAB}sales@sinelogixtechnologies.com{TAB}Are you looking for skilled developers on a monthly or hourly contract? We provide dedicated developers with 3 to 10 years of experience on a monthly contractual basis with no advance payment required. You pay only at the end of each month, giving you full control and flexibility. Our Key Technologies: PHP, Laravel, Magento, Shopify, WordPress, React JS, Flutter, Android, iOS, Java, SEO, QA Automation. Feel free to contact me at Email: sales@sinelogixtechnologies.com Phone: 9979553686{ENTER}\r\n\r\n ', '2025-10-14 04:23:55', '2025-10-14 04:23:55'),
(12, 'Jorge', 'Lanzas', 'jorge.l@blklabs.co', '17867551868', 'Potential Partnership Collaboration', 'In Progress', 'Subject: Potential Partnership Collaboration\r\nProposal For: General Manager,\r\n\r\nGood Afternoon,\r\n\r\nI’m the owner of BLK Labs, a software development agency based in Africa, with team members also in the US. We specialize in delivering high-quality web and mobile applications, cloud solutions, and technical integrations for clients ranging from startups to established enterprises.\r\n\r\nWe would like to discuss the possibilities on how we can work together.\r\n\r\nA few reasons clients choose to work with us:\r\n- Proven track record delivering SaaS platforms, MVP builds, and enterprise-grade solutions across industries like FinTech, e-commerce, real estate, and government.\r\n- End-to-end capabilities: from user research and UI/UX to full-cycle development (React, Node.js, Flutter, React Native, MongoDB, Firebase) plus QA and SEO optimization.\r\n- Experience with AI-driven solutions (e.g., e-commerce intelligence, investment research, marketing automation) that shows our ability to innovate at scale.\r\n- International portfolio with U.S., UK, Saudi, and African clients — supported by verified 5-star Clutch and Google reviews.\r\n- Competitive rates at $20/hour with the capacity to take on larger contracts immediately.\r\nI’d love to explore how we can support your next project or augment your team with highly skilled engineers. Would you be open to a quick call next week to discuss your needs?\r\n\r\nBest Regards,\r\nJorge Lanzas\r\nVerifiable 100% Job Success Rate: Rated 5/5 by all of our customers\r\nSenior Talent Available for only U$20/hr\r\n\r\n', '2025-10-24 03:48:24', '2025-10-24 03:48:24'),
(13, 'Gloria', 'Spataro', 'GloriaSpataro@Professionalbusinesspages.com', '18149805065', ' Get A Wikipedia Page For Yourself Or For Your Company.', 'Planning', '\r\n\r\nWikipedia is considered to be the World’s most significant tool for reference material. The Wiki links show up on the 1st page of Google 97% of the time. With a Page on one of the most revered reference tools, you are sure to get yourself or your business noticed. So if you\'re thinking of getting a Wikipedia Page created, it\'s the best time of the year.\r\n\r\nIf you are interested in getting more information just respond back to this email.\r\n\r\nThanks,\r\n\r\nGloria Spataro\r\nProfessional Business Page\r\nGloriaSpataro@Professionalbusinesspages.com\r\n\r\nRespond with stop to optout.', '2025-10-25 22:37:03', '2025-10-25 22:37:03'),
(14, 'Niti', 'Patel', 'niti@gmail.com', '14783465345', 'Testing section', 'Completed', 'Testing section Testing section Testing section Testing section ', '2025-10-31 13:18:39', '2025-10-31 13:18:39'),
(15, 'Urja', 'Shah', 'xyz234@gmail.com', '912222225858', 'Web Design', 'Planning', 'Designing Of Website', '2025-11-01 05:00:20', '2025-11-01 05:00:20'),
(16, 'Urja ', 'Shah', 'urja123@gmail.com', '912222258585', 'Test', 'Planning', 'Test Your App', '2025-11-01 05:01:19', '2025-11-01 05:01:19'),
(17, 'Tenetur mollit tempo', 'Repellendus Commodo', ' ndfdfg!@dfg.ghg', '14847717559', 'Consequatur ullam mo', 'In Progress', 'Vel natus nobis enim', '2025-11-04 18:16:14', '2025-11-04 18:16:14'),
(18, 'Urja', 'Shah', 'xyz234@gmail.com', '915555558585', 'Web Development', 'Planning', 'Hello Testing ', '2025-11-06 10:27:01', '2025-11-06 10:27:01'),
(19, 'Urja', 'Shah', 'urja921@gmail.com', '918585859899', 'Graphic Design Project', 'Planning', 'Logo Designing ', '2025-11-06 12:34:26', '2025-11-06 12:34:26'),
(20, 'Urja', 'Shah', 'urjashah1519@gmail.com', '917948691611', 'Website Development', 'Planning', 'Want to develop website', '2025-11-10 04:45:12', '2025-11-10 04:45:12'),
(21, 'Raj ', 'Shah', 'rajshah1995@gmail.com', '18582828285', 'ReactJs', 'Planning', 'Development of product', '2025-11-12 13:11:25', '2025-11-12 13:11:25'),
(22, 'Urja', 'Shah', 'urjashah1519@gmail.com', '917984691611', 'Design & Develop', 'Planning', 'App Design & Develop', '2025-11-17 12:38:43', '2025-11-17 12:38:43'),
(23, 'Urja', 'Shah', 'urja123@gmail.com', '917984691611', 'Testing', 'Planning', 'Hello World', '2025-11-17 12:39:25', '2025-11-17 12:39:25'),
(24, 'Testing', 'Email', 'sdodiya@universalstreamsolution.com', '917364673564', 'Test HTML Email', 'Planning', 'Test HTML Email Test HTML Email Test HTML Email Test HTML Email', '2025-12-04 08:55:21', '2025-12-04 08:55:21'),
(25, 'Urja', 'Shah', 'urja@universalstreamsolution.com', '917984691611', 'App Project', 'Planning', 'App Design & Development', '2025-12-04 10:21:06', '2025-12-04 10:21:06'),
(26, 'Urja', 'Shah', 'urja@universalstreamsolution.com', '915565656565', 'Dot Net Developer', 'Planning', 'Dot Net Development Project', '2025-12-04 10:24:35', '2025-12-04 10:24:35'),
(27, 'Urja', 'Shah', 'urja@universalstreamsolution.com', '919595959595', 'App Project', 'Planning', 'Design & Develop App', '2025-12-09 11:08:28', '2025-12-09 11:08:28');

-- --------------------------------------------------------

--
-- Table structure for table `hire_request_submissions`
--

CREATE TABLE `hire_request_submissions` (
  `id` int NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `developer_title` varchar(150) DEFAULT NULL,
  `about_project` text,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `hire_request_submissions`
--

INSERT INTO `hire_request_submissions` (`id`, `first_name`, `last_name`, `email`, `contact_no`, `subject`, `developer_title`, `about_project`, `submitted_at`, `updated_at`) VALUES
(1, 'Niti', 'Patel', 'niti@gmail.com', '14768354436', 'I need one React js Developer', 'ReactJs Developer', 'I need one React js Developer for fix in my website bug.', '2025-09-30 06:41:05', '2025-09-30 06:41:05'),
(2, 'ABC', 'XYZ', 'john@gmail.com', '918080806699', 'Admin', 'Angular Developer', 'Real-Estate Project', '2025-10-08 05:39:09', '2025-10-08 05:39:09'),
(3, 'Vaishali', 'testuser', 'Test@mail.com', '911234567890', 'test', 'Next.Js Developer', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\n', '2025-10-09 10:58:34', '2025-10-09 10:58:34'),
(4, 'ishita', 'mangaroliya', 'ishitamangaroliya7@gmail.com', '919023117139', 'Apply for job ', 'Next.Js Developer', 'aaaaaaaaaaaaaaaaaaaaaaaaaaa', '2025-10-13 13:27:35', '2025-10-13 13:27:35'),
(5, 'Sandeep', 'dodiya', 'sandeep@gmail.com', '18746874563', 'React project', 'ReactJs Developer', 'React project meeting schedule.', '2025-10-31 13:19:43', '2025-10-31 13:19:43'),
(6, 'Urja', 'Shah', 'urja456@gmail.com', '911234567890', 'Testing', 'Angular Developer', 'Project Of Healthcare', '2025-11-06 10:34:23', '2025-11-06 10:34:23'),
(7, 'Testing', 'Email', 'sdodiya@universalstreamsolution.com', '917564565475', 'Testing Dadicated', 'Next.Js Developer', 'Testing Dadicated Developer', '2025-12-04 09:26:40', '2025-12-04 09:26:40'),
(8, 'Sandeep', 'Dodiya', 'sdodiya@universalstreamsolution.com', '919876574375', 'Email test', 'ReactJs Developer', 'The Code Crew is Coming! --- Email test', '2025-12-04 09:59:33', '2025-12-04 09:59:33'),
(9, 'Urja', 'Shah', 'urja123@gmail.com', '918989898989', 'Hello World', 'Angular Developer', 'Design & Development of project', '2025-12-04 12:25:43', '2025-12-04 12:25:43');

-- --------------------------------------------------------

--
-- Table structure for table `partnership_contact_submissions`
--

CREATE TABLE `partnership_contact_submissions` (
  `id` int NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_no` varchar(20) NOT NULL,
  `organization` varchar(255) NOT NULL,
  `type_of_partnership` varchar(100) NOT NULL,
  `message` text,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `partnership_contact_submissions`
--

INSERT INTO `partnership_contact_submissions` (`id`, `first_name`, `last_name`, `email`, `contact_no`, `organization`, `type_of_partnership`, `message`, `submitted_at`, `updated_at`) VALUES
(1, 'Sandeep', 'Dodiya ', 'sandeep@gmail.com', '12385468273', 'TechAI', 'Technology Partnership', 'Hello Dear \r\nGood morning', '2025-09-30 06:43:13', '2025-09-30 06:43:13'),
(2, 'John', 'Doe', 'def@gmail.com', '919509505566', 'Wipro', 'Business Partnership', 'Want to partner regarding business development', '2025-10-08 05:37:50', '2025-10-08 05:37:50'),
(3, 'Vaishali', 'Gadher', 'Test@mail.com', '911234567890', 'USS', 'Service Partnership', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n\r\n', '2025-10-09 10:52:58', '2025-10-09 10:52:58'),
(4, 'Hitesh', 'Khatwani', 'uss.hitesh@gmail.com', '3769033419912', 'Test', 'Technology Partnership', 'Test 123456', '2025-10-13 06:52:14', '2025-10-13 06:52:14'),
(5, 'ishita', 'mangaroliya', 'ishitamangaroliya7@gmail.com', '919023117139', 'USS', 'Technology Partnership', 'aaaaaaaaaaaaaa', '2025-10-13 13:29:19', '2025-10-13 13:29:19'),
(6, 'Sakshi', 'Dixit', 'sakshi234@gmail.com', '915858589898', 'BlueMind', 'Technology Partnership', 'App Design & Development', '2025-11-06 10:28:05', '2025-11-06 10:28:05'),
(7, 'Sakshi ', 'Dixit', 'sakshi@universalstreamsolution.com', '919645285231', 'TCS', 'Technology Partnership', 'Website Maintenance ', '2025-11-10 04:47:03', '2025-11-10 04:47:03'),
(8, 'Urja', 'Shah', 'urjashah1519@gmail.com', '18585258888', 'TCS', 'Technology Partnership', 'App development ', '2025-11-12 13:12:08', '2025-11-12 13:12:08'),
(9, 'Urja', 'Shah', 'urja123@gmail.com', '917984691611', 'BlueMoon ', 'Technology Partnership', 'Design & Development of Website', '2025-11-17 12:40:15', '2025-11-17 12:40:15'),
(10, 'Testing', 'Email', 'sdodiya@universalstreamsolution.com', '919887654321', 'USS', 'Technology Partnership', 'Let\'s Build Success Together Partnership', '2025-12-04 09:36:56', '2025-12-04 09:36:56'),
(11, 'Testing', 'Email', 'sandeepdodiya1@gmail.com', '896754876845', 'USS', 'Business Partnership', 'Let\'s Build Success Together --- Gmail check', '2025-12-04 09:38:31', '2025-12-04 09:38:31'),
(12, 'Testing', 'Email', 'sandeepdodiya1@gmail.com', '987654321454', 'USS', 'Business Partnership', 'Testing partnership From Auto Email.', '2025-12-04 09:44:11', '2025-12-04 09:44:11'),
(13, 'Sakshi', 'Dixit', 'sakshi234@gmail.com', '918898989898', 'BlueMind', 'Technology Partnership', 'Want to develop a website', '2025-12-04 10:22:13', '2025-12-04 10:22:13'),
(14, 'Sakshi', 'Dixit', 'sakshi234@gmail.com', '919696969696', 'BlueMind', 'Technology Partnership', 'Want to make a website in reactjs', '2025-12-09 11:09:42', '2025-12-09 11:09:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint NOT NULL,
  `role_id` bigint DEFAULT NULL,
  `first_name` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_name` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_login_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_relogin_required` tinyint(1) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `is_verified` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `role_id`, `first_name`, `last_name`, `username`, `email`, `password`, `last_login_at`, `is_relogin_required`, `is_active`, `is_verified`, `created_at`, `updated_at`) VALUES
(1, 1, 'Arzeb', 'Mansuri', 'arzeb', 'amansuri@universalstreamsolution.com', '$2b$12$iB9KKbjjoaKmMT05RBdquueVgLDRPtHwvC/Uz2D2cFBzzBMIOFfpW', '2023-09-19 10:42:49', 0, 1, 1, '2023-07-28 06:22:35', '2025-07-25 06:35:37'),
(2, 1, 'Nisha', 'Patel', 'nisha', 'npatel@universalstreamsolution.com', '$2b$12$iB9KKbjjoaKmMT05RBdquueVgLDRPtHwvC/Uz2D2cFBzzBMIOFfpW', '2023-09-19 10:42:49', 0, 1, 1, '2023-07-28 06:22:35', '2025-07-25 09:56:01'),
(3, 1, 'Jignesh', 'Vaghasiya', 'jignesh', 'uss.jignesh@gmail.com', '$2b$12$iB9KKbjjoaKmMT05RBdquueVgLDRPtHwvC/Uz2D2cFBzzBMIOFfpW', '2024-06-12 06:17:40', 1, 1, 1, '2024-06-12 06:17:40', '2025-07-23 10:52:41'),
(4, 1, 'Andrew', 'Brewer', 'Andrew', 'andrew@prescriptionbliss.com', '$2b$12$iB9KKbjjoaKmMT05RBdquueVgLDRPtHwvC/Uz2D2cFBzzBMIOFfpW', '2024-06-12 06:17:40', 1, 1, 1, '2024-06-12 06:17:40', '2025-07-23 10:52:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_career_submissions`
--
ALTER TABLE `contact_career_submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_submitted_at` (`submitted_at`),
  ADD KEY `idx_designation` (`designation`);

--
-- Indexes for table `contact_career_submissions_demo`
--
ALTER TABLE `contact_career_submissions_demo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_demo_email` (`email`),
  ADD KEY `idx_demo_submitted_at` (`submitted_at`),
  ADD KEY `idx_demo_designation` (`designation`);

--
-- Indexes for table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_submitted_at` (`submitted_at`),
  ADD KEY `idx_subject` (`subject`);

--
-- Indexes for table `general_contact_submissions`
--
ALTER TABLE `general_contact_submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_submitted_at` (`submitted_at`);

--
-- Indexes for table `hire_request_submissions`
--
ALTER TABLE `hire_request_submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_submitted_at` (`submitted_at`);

--
-- Indexes for table `partnership_contact_submissions`
--
ALTER TABLE `partnership_contact_submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_submitted_at` (`submitted_at`),
  ADD KEY `idx_organization` (`organization`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_career_submissions`
--
ALTER TABLE `contact_career_submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `contact_career_submissions_demo`
--
ALTER TABLE `contact_career_submissions_demo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contact_submissions`
--
ALTER TABLE `contact_submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `general_contact_submissions`
--
ALTER TABLE `general_contact_submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `hire_request_submissions`
--
ALTER TABLE `hire_request_submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `partnership_contact_submissions`
--
ALTER TABLE `partnership_contact_submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
