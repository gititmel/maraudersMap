-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2016 at 12:33 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feo_mmap`
--

-- --------------------------------------------------------

--
-- Table structure for table `submitlocation`
--

CREATE TABLE `submitlocation` (
  `ID` int(11) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `type` varchar(30) NOT NULL,
  `zip` int(5) NOT NULL,
  `rate` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `submitlocation`
--

INSERT INTO `submitlocation` (`ID`, `lat`, `lng`, `type`, `zip`, `rate`) VALUES
(1, 40.698677, -73.985939, 'bathroom', 0, 0),
(2, 40.698677, -73.985939, 'bathroom', 11201, 0),
(3, 40.698677, -73.985939, 'bathroom', 11201, 0),
(4, 40.698677, -73.985939, 'bathroom', 11201, 0),
(5, 40.698677, -73.985939, 'bathroom', 11201, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `submitlocation`
--
ALTER TABLE `submitlocation`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `submitlocation`
--
ALTER TABLE `submitlocation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
