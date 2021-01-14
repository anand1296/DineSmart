-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2019 at 05:49 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `creates_session`
--

CREATE TABLE `creates_session` (
  `CId` int(11) NOT NULL,
  `SId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `creates_session`
--

INSERT INTO `creates_session` (`CId`, `SId`) VALUES
(14, 99),
(14, 100),
(14, 101),
(3, 102),
(3, 103),
(3, 104),
(3, 105),
(3, 106),
(3, 107),
(3, 108),
(3, 109),
(3, 110),
(3, 111),
(3, 112),
(3, 113),
(3, 114),
(3, 115),
(3, 116),
(3, 117),
(3, 118),
(3, 119),
(3, 120),
(3, 121),
(3, 122),
(3, 123),
(3, 124),
(3, 125),
(3, 126),
(3, 127),
(3, 128),
(3, 129),
(3, 130),
(3, 131),
(3, 132),
(3, 133),
(6, 134),
(6, 135),
(6, 136),
(6, 137),
(6, 138),
(6, 139),
(6, 140),
(6, 141),
(6, 142),
(6, 143),
(6, 144),
(6, 145),
(6, 146),
(6, 147),
(6, 148);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CId` int(11) NOT NULL,
  `CName` varchar(50) NOT NULL,
  `CPassword` varchar(25) NOT NULL,
  `CDoB` date NOT NULL,
  `CEmail` varchar(50) NOT NULL,
  `CPhone` varchar(15) NOT NULL,
  `CImageAddress` varchar(50) NOT NULL,
  `CWalletAmount` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CId`, `CName`, `CPassword`, `CDoB`, `CEmail`, `CPhone`, `CImageAddress`, `CWalletAmount`) VALUES
(1, 'Anand', 'anand', '2019-01-01', 'anand026@gmail.com', '87886855', '', 1000),
(3, 'vishal', 'vishal', '2019-01-03', 'vishal070@gmail.com', '34635465', '', 1600),
(4, 'shivani', 'shivani', '2019-05-01', 'shivani030@gmail.com', '87685544', '', 2000),
(6, 'anoop', 'anoop', '2019-05-03', 'anoop029@gmail.com', '8976666556', '', 740),
(7, 'aman', 'aman', '2019-01-01', 'aman@gmail.com', '987654321', '', 0),
(8, 'John Doe', 'doe', '2019-01-01', 'qwerty@gmail.com', '1234567', '', 0),
(9, 'pranav', 'pranav', '2012-01-01', 'pranav@gmail.com', '877655655', '', 0),
(10, 'anay', 'anay', '2019-01-01', 'anay@naik.com', '676786775', '', 0),
(11, 'nandan', 'nandan', '2019-07-01', 'nandan@pd.com', '898768787', '', 0),
(12, 'sandy', 'vienna', '1969-01-01', 'sandy69@gmail.com', '69696969', '', 0),
(13, 'newUser11', 'newUser', '2012-01-01', 'newUser11@gmail.com', '88766859', '', 0),
(14, 'Shivam', 'shivam69', '1997-08-28', 'shiv.kurtarkar@gmail.com', '7758822266', '', 1000),
(15, 'qwerty', 'qwerty', '1998-08-01', 'asdfg@gmail.com', '987654', '', 0),
(16, 'Vishal S', 'vishal69', '1950-01-08', 'vishalsharma1907@gmail.com', '9405948380', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `describes_fooddetails`
--

CREATE TABLE `describes_fooddetails` (
  `ItemID` int(11) NOT NULL,
  `Type` enum('Starters','Main Course','Breads','Rice','Beverages','Soups','Desserts','Quick Bites','Salads') NOT NULL,
  `Name` varchar(50) NOT NULL,
  `nonVeg` tinyint(1) NOT NULL DEFAULT '0',
  `Ingredients` varchar(1000) NOT NULL DEFAULT 'ingredients.ingredients.ingredients',
  `caloriesInOneServing` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `describes_fooddetails`
--

INSERT INTO `describes_fooddetails` (`ItemID`, `Type`, `Name`, `nonVeg`, `Ingredients`, `caloriesInOneServing`) VALUES
(1, 'Soups', 'Veg Sweet Corn Soup', 0, 'Sweet corn kernels, carrots, cauliflower, french beans, cornflour, butter, garlic, ginger, salt', 101),
(2, 'Soups', 'Veg Manchow Soup', 0, 'Cabbage, carrots, celery, spring onions, cauliflower, vegetable stock, oil, garlic, ginger, green chillies, capsicum, tomatoes, mint leaves, coriander, cornflour, salt, soy sauce, black peppercorns', 128.8),
(3, 'Soups', 'Veg Hot & Sour Soup', 0, 'Oil, garlic, cabbage, carrot, cauliflower, spring onions, coriander, vegetable stock, brown vinegar, soy sauce, chilli sauce, ground black pepper, cornflour, water', 152),
(4, 'Soups', 'Veg Wonton Soup', 0, 'Oil, green chillies, garlic, spring onions, cabbage, french beans, carrot, salt, grated cheese, plain flour, ginger, spinach, vegetable stock, ground black pepper', 196.9),
(5, 'Soups', 'Veg Clear Soup', 0, 'Oil, onions, carrots, green peas, cabbage, vegetable stock, soy sauce, salt, ground black pepper', 48.9),
(6, 'Soups', 'Tomato Soup', 0, 'Tomatoes, yellow gram, butter, onions, sugar, salt', 30),
(7, 'Soups', 'Chicken Sweet Corn Soup', 1, 'Sweet corn kernels, chicken stock, cornflour, salt, egg, diced chicken, vinegar', 136),
(8, 'Soups', 'Chicken Manchow Soup', 1, 'Chicken pieces, chicken stock, ginger, garlic, green chillies, coriander, french beans, carrots, cabbage, capsicum, mushrooms, onions, pepper, soy sauce, cornflour, spring onion, oil, salt', 102.7),
(9, 'Soups', 'Chicken Hot & Sour Soup', 1, 'Vegetable oil, red chillies, ginger, garlic, celery, carrots, mushrooms, soy sauce, chicken pieces, (tofu), cornstarch, egg, rice vinegar, white pepper, salt, sesame oil', 91),
(10, 'Soups', 'Chicken Tomato Soup', 1, 'Chicken broth, chicken cubes, corn, tomato puree, tomatoes, green chilies, onion, garlic, bay leaf, cumin, salt, chili powder, pepper, cayenne pepper', 203.3),
(11, 'Quick Bites', 'Garlic Bread', 0, 'Butter, garlic powder, parsley, loaf bread, shredded cheese', 350),
(12, 'Quick Bites', 'Paneer Shawarma', 0, 'Paneer, wheat flour rotis, garlic cloves, cumin seeds, onion, lemon juice, green chilli, olive oil, salt, mayonnaise, tahini, beetroot, carrots, iceberg lettuce', 456),
(13, 'Quick Bites', 'Chicken Shawarma', 1, 'Olive oil, lemon, garlic, kosher salt, cumin, coriander, black pepper, turmeric, cinnamon, cayenne pepper, chicken pieces, onion, yogurt, lemon, red pepper flakes', 440),
(14, 'Quick Bites', 'French Fries', 0, 'Potatoes, water, oregano, salt, chili powder, oil', 312),
(15, 'Quick Bites', 'Veg Grilled Sandwich', 0, 'Potato, onion, tomato, cucumber, bread, chaat masala, cumin powder, butter, coriander, green chilies, garlic, ginger, lemon juice', 348),
(16, 'Quick Bites', 'Cheese Grilled Sandwich', 0, 'Bread, butter, cheese', 497),
(17, 'Quick Bites', 'Pav Bhaji', 0, 'Vegetable oil, garlic, green chili peppers, onions, ginger, tomatoes, cauliflower, cabbage, green peas, carrots, potatoes, pav bhaji masala, salt, lemon juice, butter, onion, cilantro', 600),
(18, 'Quick Bites', 'Masala Dosa', 0, 'Black gram, bengal gram, regular rice, idli dosa rice, beaten rice, potatoes, oil, mustard seeds, cumin, ginger, onions, curry leaves, green chilies, turmeric, butter', 387),
(19, 'Quick Bites', 'Bhel Puri', 0, 'Onion, coconut, green chili pepper, cilantro, lemon juice, ginger, salt, water, puffed rice', 350),
(20, 'Quick Bites', 'Shev Puri', 0, 'Papdis made from whole wheat flour, green chutney made of coriander leaves and mint leaves, red chutney made from dry red chilies and garlic, sev which is crisp fried gram flour vermecilli, potatoes, onions, tomatoes', 320),
(21, 'Quick Bites', 'Chicken Nuggets', 1, 'Flour, egg, breadcrumbs, chicken, salt, pepper, oil, garlic powder', 296),
(22, 'Quick Bites', 'Crunchy Chicken Strips', 1, 'Chicken, buttermilk, hot sauce, eggs, flour, salt, pepper, paprika, garlic powder, baking powder, oil', 299),
(23, 'Quick Bites', 'Butter Corn', 0, 'Sweet corn kernels, butter, lemon juice, salt, black pepper powder, chaat masala', 77),
(24, 'Quick Bites', 'Veg Wrap', 0, 'Whole wheat roti, carrot, onion, tomato, lettuce, green chili, cream cheese, garlic, lemon juice, pepper powder, mustard powder, salt, olive oil', 235),
(25, 'Quick Bites', 'Chicken Momos', 1, 'Flour, baking powder, salt water, minced chicken, onions, black pepper powder, oil, garlic paste, soy sauce, salt, vinegar, cabbage, carrots, onions, garlic, cornflour, red chilies, sugar', 390),
(26, 'Quick Bites', 'Roasted Chicken Sandwich', 1, 'Chicken, olive oil, vinegar, lemon juice, garlic and herb seasoning, black pepper, fresh dill, butter, garlic powder, salt, french bread, mayonnaise, tomato, lettuce leaves', 395),
(27, 'Quick Bites', 'Tandoori Chicken Sandwich', 1, 'Chicken, lemon juice, yogurt, ginger, garlic cloves, cumin, coriander, cayenne pepper, turmeric, sourdough bread, fresh mint leaves, jalapeno chili, onion, vinegar, mayonnaise', 533),
(28, 'Quick Bites', 'Veg Momos', 0, 'Flour, baking powder, salt water, cabbage, carrots, onions, garlic, oil, vinegar, soy sauce, salt, pepper, cornflour, red chilies, sugar', 280),
(29, 'Quick Bites', 'Idli Sambar', 0, 'Gram, coriander seeds, cumin, methi seeds, red chilies, coconut, lentils, water, tamarind, salt, shallots, beans, carrot, pumpkin, tomato, turmeric, curry leaves, mustard seeds', 312),
(30, 'Quick Bites', 'Chole Bhatoore', 0, 'Chickpeas, water, salt, baking soda, oil, turmeric powder, red chili powder, coriander powder, dry mango powder, green chili, garam masala powder, cumin seeds, bay leaf, cinnamon, cloves, onion, tomatoes, ginger, garlic cloves, green chili', 427),
(31, 'Salads', 'Classic Caesar Salad', 0, 'Garlic cloves, salt, ground pepper, lemon juice, Dijon mustard, egg yolk, virgin olive oil, romaine lettuce, parmesan cheese, croutons', 212),
(32, 'Salads', 'Garden Salad', 0, 'Lettuce leaves, tomatoes, radishes, carrots, cucumbers', 45),
(33, 'Salads', 'Green Salad', 0, 'Onions, green bell pepper, salad greens, tomato, garlic, black pepper, salt, vinegar salad dressing', 152),
(37, 'Salads', 'Oriental Chicken Crunch Salad', 1, 'Sesame seeds, almonds, chicken chunks, green onions, poppy seeds, chow mein noodles, lettuce, sugar, vinegar, salt, pepper, olive oil', 196.8),
(38, 'Starters', 'Gobi Manchurian', 0, 'Cauliflower, whole wheat flour, corn flour, ginger garlic paste, red chili powder, black pepper powder, soy sauce, salt, water, oil, ginger, garlic, tomato ketchup, vinegar, spring onions', 295),
(39, 'Starters', 'Paneer Pakora', 0, 'Paneer, besan, turmeric powder, red chili powder, garam masala, carom seeds, water, salt, mustard oil, chaat masala', 275),
(40, 'Starters', 'Paneer Tikka', 0, 'Paneer, capsicum, tomato, onions, salt, pepper', 278),
(41, 'Starters', 'Veg Seekh Kebab', 0, 'Oil, cumin seeds, onion, ginger-garlic paste, green chili, besan, cabbage, carrot, peas, beans, coriander leaves, mint leaves, cashews, potato, turmeric, garam masala, lemon juice, bread crumbs, chaat masala', 336),
(42, 'Starters', 'Chicken Tikka', 1, 'Chicken, gram flour, yogurt, green and red bell pepper, tomatoes, onion, salt, oil, lemon juice, ginger-garlic paste, red chili powder, pepper, turmeric, fenugreek leaves, garam masala, coriander powder', 222),
(43, 'Starters', 'Tandoori Chicken', 1, 'Chicken, yogurt, ginger-garlic paste, garam masala, red chili powder, pepper, coriander, salt, turmeric, fenugreek leaves, lemon juice, oil', 220),
(44, 'Starters', 'Chicken Tangdi Kebab', 1, 'Chicken drumsticks, yogurt, lime juice, ginger-garlic paste, turmeric powder, red chili powder, garam masala, cumin powder, mint leaves, salt, butter, oil, mint leaves, cilantro, green chili', 150),
(45, 'Starters', 'Fish Tikka', 1, 'Fish fillets, pickled chilies, lemon juice, red chili powder, garlic paste, fenugreek seeds, coriander, yogurt, butter, fennel seeds, ginger paste, garam masala, cumin seeds, salt', 193),
(46, 'Starters', 'Fish Fry', 1, 'Fish fillets, oil, ginger-garlic paste, lemon juice, salt, turmeric, garam masala, coriander, red chili powder, rice flour, besan, salt, kasuri methi', 90),
(47, 'Starters', 'Masala Prawns Fry', 1, 'Oil, prawns, cinnamon, fennel seeds, cardamom, onion, green chili, curry leaves, ginger-garlic paste, chilli powder, garam masala, tomato, water, salt', 240),
(48, 'Starters', 'Chicken Crispy', 1, 'Chicken, oil, flour, salt, cornstarch, onion, green chilies, green and red capsicum, green chili sauce', 204),
(49, 'Starters', 'Chilli Chicken', 1, 'Chicken cubes, red chilli sauce, soy sauce, pepper, corn flour, salt, water, onion, garlic, bell epper, spring onions, celery', 284.6),
(50, 'Starters', 'Chicken Lollipop', 1, 'Chicken drumsticks, ginger-garlic paste, red chili powder, garam masala, salt, corn flour, onion, ginger, garlic, soy sauce, vinegar, red chili paste, sugar, spring onions', 442),
(51, 'Starters', 'Chicken Manchurian', 1, 'Chicken cubes, egg white, pepper, soy sauce, chili powder, corn flour, ginger-garlic paste, salt, oil, onion, tomato sauce, vinegar, capsicum, scallions', 221),
(52, 'Starters', 'Chicken 65', 1, 'Chicken cubes, egg white, corn flour, oil, ginger-garlic paste, yogurt, pepper powder, curry leaves, salt, garlic, green chilies', 250),
(53, 'Starters', 'Pepper Chicken', 1, 'Onions, ginger-garlic paste, tomatoes, pepper corn, red chili powder, garam masala powder, curry leaves, cumin, cardamoms, cinnamon, chicken cubes, salt', 280),
(54, 'Main Course', 'Mushroom Gravy', 0, 'Butter, sliced mushrooms, salt, all-purpose flour, black pepper, thyme leaves', 119),
(55, 'Main Course', 'Paneer Gravy', 0, 'Paneer, capsicum, garlic, green chilies, onions, tomatoes, garam masala, fenugreek leaves, water, cream, butter, coriander leaves, salt, kashmiri red chilies', 389),
(56, 'Main Course', 'Kadai Paneer', 0, 'Paneer, capsicum, garlic, green chilies, onions, tomatoes, garam masala, fenugreek leaves, water, cream, butter, coriander leaves, salt, kashmiri red chilies', 248),
(57, 'Main Course', 'Palak Paneer', 0, 'Paneer, spinach, oil, green chilies, onions, ginger-garlic paste, tomatoes, salt, cashewnuts, garam masala, fenugreek leaves, cumin, cardamoms, cinnamon, cloves', 405),
(58, 'Main Course', 'Mixed Veg Korma', 0, 'Coconut, cashew nuts, gram, poppy seeds, fennel seeds, bay leaf, cumin, cardamom, cloves, cinnamon, oil, onions, chilli, ginger-garlic paste, tomatoes, beans, carrots, cauliflower, potatoes, green peas', 344),
(59, 'Main Course', 'Veg Kolhapuri', 0, 'Coconut, black pepper, cumin, poppy and sesame seeds, cinnamon, cloves, fenugreek seeds, nutmeg, potato, beans, green peas, carrots, sliced bell pepper, onions', 205),
(60, 'Main Course', 'Chicken Masala', 1, 'Onion, garlic, ginger, green chili, coriander, fenugreek seeds, garam masala, turmeric, salt, tomato paste, chicken, tomatoes, potatoes, cilantro, water', 126),
(61, 'Main Course', 'Chicken Kolhapuri', 1, 'Chicken, yogurt, turmeric powder, red chilli, garlic paste, salt, lime juice, peanut oil, bay leaf, cinnamon, cloves, black pepper, onions, coconut, tomato, coriander', 293),
(62, 'Main Course', 'Chicken Handi', 1, 'Chicken, onion, tomatoes, curd, oil, salt, bay leaf, cumin seeds, cardamom, peppercorn, cloves, cinnamon, red chili powder, ginger-garlic paste', 105),
(63, 'Main Course', 'Kadai Chicken', 1, 'Chicken, capsicums, onions, tomatoes, oil, red chili, cumin, ginger-garlic paste, salt, cashew nuts', 400),
(64, 'Main Course', 'Butter Chicken', 1, 'Chicken, oil, butter, onion, ginger, garlic, tomato paste, garam masala, chili powder, cumin, salt, black pepper, heavy cream', 485),
(65, 'Main Course', 'Chicken Hyderabadi', 1, 'Coconut, onions, chicken, oil, garam masala, ginger-garlic paste, turmeric, red chili, chicken curry masala, yogurt, water, pepper, coriander, mint leaves, green chilies', 400),
(66, 'Main Course', 'Chicken Tikka Masala', 1, 'Chicken, yogurt, lemon juice, garlic, ginger, salt, onion, tomato puree, heavy cream, paprika, chili powder', 270),
(67, 'Main Course', 'Chicken Mugalai', 1, 'Chicken, garlic paste, cinnamon, cardamom, coriander powder, cumin powder, red chili powder, chicken stock, salt, heavy cream, garam masala', 293),
(68, 'Main Course', 'Chicken Patiala', 1, 'Chicken, yogurt, cumin, cinnamon, cloves, cardamoms, peppercorns, salt, red chili powder, ginger-garlic paste, oil, onions, red chilies, tomato puree, green chilies', 212),
(69, 'Main Course', 'Chicken Patiala', 1, 'Chicken, yogurt, cumin, cinnamon, cloves, cardamoms, peppercorns, salt, red chili powder, ginger-garlic paste, oil, onions, red chilies, tomato puree, green chilies', 212),
(70, 'Main Course', 'Dal Tadka', 0, 'Lentils, green chilies, onion, tomato, ginger, turmeric powder, garam masala, water, kasuri methi, cream, coriander leaves, salt', 230),
(71, 'Main Course', 'Veg Biryani', 0, 'Basmati rice, potato, carrot, green peas, onion, ginger-garlic paste, ,mint leaves, coriander leaves, green chili, biryani masala powder, tomato, water, oil, cashews, yogurt, salt, lemon juice', 318),
(72, 'Main Course', 'Chicken Biryani', 1, 'Chicken, basmati rice, potato, carrot, green peas, onion, ginger-garlic paste, ,mint leaves, coriander leaves, green chili, biryani masala powder, tomato, water, oil, cashews, yogurt, salt, lemon juice', 470),
(73, 'Main Course', 'Mutton Biryani', 1, 'Mutton, basmati rice, potato, carrot, green peas, onion, ginger-garlic paste, ,mint leaves, coriander leaves, green chili, biryani masala powder, tomato, water, oil, cashews, yogurt, salt, lemon juice', 352),
(74, 'Main Course', 'Egg Biryani', 1, 'Egg, basmati rice, potato, carrot, green peas, onion, ginger-garlic paste, ,mint leaves, coriander leaves, green chili, biryani masala powder, tomato, water, oil, cashews, yogurt, salt, lemon juice', 410),
(75, 'Main Course', 'Jeera Rice', 0, 'Basmati rice, cumin seeds', 246),
(76, 'Main Course', 'Chapati', 0, 'Wheat flour, oil', 120),
(77, 'Main Course', 'Tandoori Roti', 0, 'Wheat flour, oil, salt, water, butter', 155),
(78, 'Main Course', 'Naan', 0, 'Wheat flour, oil, salt, water, butter', 137),
(79, 'Main Course', 'Veg Fried Rice', 0, 'Rice, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 228),
(80, 'Main Course', 'Veg Schezwan Fried Rice', 0, 'Rice, schezwan sauce, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 417.9),
(81, 'Main Course', 'Egg Fried Rice', 1, 'Rice, egg, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 228),
(82, 'Main Course', 'Chicken Fried Rice', 1, 'Rice, chicken, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 329),
(83, 'Main Course', 'Chicken Triple Fried Rice', 1, 'Rice, chicken, egg, noodles, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 345),
(84, 'Main Course', 'Mutton Fried Rice', 1, 'Rice, mutton, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 360),
(85, 'Main Course', 'Veg Noodles', 0, 'Noodles, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 286),
(86, 'Main Course', 'Chicken Hakka Noodles', 1, 'Noodles, chicken, egg, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 375.6),
(87, 'Main Course', 'Chicken Schezwan Noodles', 1, 'Noodles, chicken, schezwan sauce garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 218),
(88, 'Main Course', 'Egg Noodles', 1, 'Noodles, egg, garlic, olive oil, soy sauce, vinegar, pepper, salt, carrots, bell peppers, beans, cabbage, spring onions, mushrooms', 385),
(89, 'Main Course', 'Mutton Kolhapuri', 1, 'Mutton, yogurt, turmeric powder, red chilli, garlic paste, salt, lime juice, peanut oil, bay leaf, cinnamon, cloves, black pepper, onions, coconut, tomato, coriander', 292),
(90, 'Main Course', 'Mutton Masala', 1, 'Mutton, onion, garlic, ginger, green chili, coriander, fenugreek seeds, garam masala, turmeric, salt, tomato paste, tomatoes, potatoes, cilantro, water', 292),
(91, 'Main Course', 'Chicken Sukka', 1, 'Chicken, ghee, onion, cloves, salt, cumin, coconut, ghee roasting', 293),
(92, 'Main Course', 'Chicken Cafreal', 1, 'Chicken, water, salt, coriander, cinnamon, cloves, ginger, green chilies, garlic, cumin seeds, onion rings', 293),
(93, 'Main Course', 'Prawns Curry', 1, 'Prawns, onion, garlic, ginger, green chili, coriander, fenugreek seeds, garam masala, turmeric, salt, tomato paste, chicken, tomatoes, potatoes, cilantro, water', 168),
(94, 'Main Course', 'Cheese Margherita Pizza', 0, 'Cheese, pizza base, pizza sauce', 257),
(95, 'Main Course', 'Chicken Pizza', 1, 'Cheese, pizza base, chicken, pizza sauce', 280),
(96, 'Main Course', 'Pasta in Red Sauce', 0, 'Pasta, red pasta sauce, mushrooms, bell peppers', 206),
(97, 'Main Course', 'Pasta in White Sauce', 0, 'Pasta, white pasta sauce, mushrooms, bell peppers', 315),
(98, 'Beverages', 'Tea', 0, 'Water, tea powder, milk', 2),
(99, 'Beverages', 'Coffee', 0, 'Milk, coffee powder, water', 1),
(100, 'Beverages', 'Chocolate Shake', 0, 'Milk, chocolate powder, chocolate sauce', 119),
(101, 'Beverages', 'Mango Shake', 0, 'Milk, mango juice', 150),
(102, 'Beverages', 'Strawberry Shake', 0, 'Milk, strawberry juice', 158),
(103, 'Beverages', 'Sprite', 0, 'Sprite', 146),
(104, 'Beverages', 'Pepsi', 0, 'Pepsi', 140),
(105, 'Beverages', 'Coke', 0, 'Coke', 150),
(106, 'Desserts', 'Black Forest Pastry', 1, 'Whipped cream, flour, chocolate powder, cherries', 441),
(107, 'Desserts', 'Chocolate Brownie', 1, 'Chocolate powder, brownie batter', 112),
(108, 'Desserts', 'Chocolate Hazelnut', 0, 'Chocolate powder, hazelnuts', 522.1),
(109, 'Desserts', 'Serradura Jar', 1, 'Graham crackers powder, white cream', 357),
(110, 'Desserts', 'Chocolate Mousse', 1, 'Chocolate powder, refridgerated,sugar', 454),
(111, 'Starters', 'Chicken Tawa', 1, 'Chicken, ginger-garlic paste, tomato puree', 156),
(120, 'Starters', 'Veg Crispy', 0, 'Potato, cauliflower, oil, flour, salt, cornstarch, onion, green chilies, green and red capsicum, green chili sauce', 140),
(222, 'Starters', 'Paneer Crispy', 0, 'Paneer, oil, flour, salt, cornstarch, onion, green chilies, green and red capsicum, green chili sauce', 218);

-- --------------------------------------------------------

--
-- Table structure for table `dines_at`
--

CREATE TABLE `dines_at` (
  `CId` int(11) NOT NULL,
  `OId` int(11) NOT NULL,
  `RId` int(11) NOT NULL,
  `TId` int(11) NOT NULL,
  `priviledgePoints` int(11) NOT NULL DEFAULT '0',
  `transactionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dines_at`
--

INSERT INTO `dines_at` (`CId`, `OId`, `RId`, `TId`, `priviledgePoints`, `transactionId`) VALUES
(3, 65, 111, 1114, 0, 8),
(3, 67, 111, 1113, 0, 9),
(3, 65, 111, 1114, 0, 10),
(3, 66, 111, 1111, 0, 11),
(3, 67, 111, 1113, 0, 12),
(3, 69, 111, 1112, 0, 13),
(3, 69, 111, 1112, 0, 14),
(3, 66, 111, 1111, 0, 16474211),
(3, 69, 111, 1112, 0, 16474212),
(3, 0, 111, 1115, 0, 16474213),
(3, 70, 111, 1117, 0, 16474214),
(3, 71, 111, 1116, 0, 16474215),
(6, 72, 112, 1123, 0, 16474216),
(6, 73, 111, 1118, 0, 16474217),
(6, 74, 112, 1121, 0, 16474218),
(6, 75, 112, 1124, 0, 16474219),
(6, 0, 112, 1126, 0, 16474220),
(6, 0, 112, 1128, 0, 16474221),
(6, 76, 112, 1127, 0, 16474222),
(6, 77, 111, 1112, 0, 16474223),
(6, 0, 111, 1117, 0, 16474224),
(6, 0, 111, 1115, 0, 16474225),
(6, 0, 111, 1118, 0, 16474226),
(6, 78, 111, 1113, 0, 16474227),
(6, 0, 111, 1111, 0, 16474228),
(6, 79, 111, 1116, 0, 16474229),
(6, 0, 112, 1121, 0, 16474230);

-- --------------------------------------------------------

--
-- Table structure for table `food_menu`
--

CREATE TABLE `food_menu` (
  `ItemID` int(11) NOT NULL,
  `RId` int(11) NOT NULL,
  `Rate` int(11) NOT NULL,
  `FRating` decimal(2,1) NOT NULL DEFAULT '3.2',
  `recommended` tinyint(1) NOT NULL DEFAULT '0',
  `chefsSpecial` tinyint(1) NOT NULL DEFAULT '0',
  `FImageAddress` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `food_menu`
--

INSERT INTO `food_menu` (`ItemID`, `RId`, `Rate`, `FRating`, `recommended`, `chefsSpecial`, `FImageAddress`) VALUES
(1, 114, 90, '3.2', 0, 0, 'assets\\Menu\\soups\\vegsweetcorn.jpg'),
(1, 116, 60, '3.2', 0, 0, 'assets\\Menu\\soups\\vegsweetcorn.jpg'),
(1, 120, 100, '3.2', 0, 0, 'assets\\Menu\\soups\\vegsweetcorn.jpg'),
(1, 122, 100, '3.2', 0, 0, 'assets\\Menu\\soups\\vegsweetcorn.jpg'),
(1, 124, 160, '3.2', 0, 0, 'assets\\Menu\\soups\\vegsweetcorn.jpg'),
(2, 113, 100, '3.2', 0, 0, 'assets\\Menu\\soups\\vegmanchow.jpg'),
(2, 114, 90, '3.2', 0, 0, 'assets\\Menu\\soups\\vegmanchow.jpg'),
(2, 117, 100, '3.2', 0, 0, 'assets\\Menu\\soups\\vegmanchow.jpg'),
(2, 118, 90, '3.2', 0, 0, 'assets\\Menu\\soups\\vegmanchow.jpg'),
(2, 119, 80, '3.2', 0, 0, 'assets\\Menu\\soups\\vegmanchow.jpg'),
(2, 125, 60, '3.2', 0, 0, 'assets\\Menu\\soups\\vegmanchow.jpg'),
(4, 112, 120, '3.2', 0, 0, 'assets\\Menu\\soups\\vegwonton.jpg'),
(4, 115, 100, '3.2', 0, 0, 'assets\\Menu\\soups\\vegwonton.jpg'),
(4, 121, 80, '3.2', 0, 0, 'assets\\Menu\\soups\\vegwonton.jpg'),
(5, 118, 40, '3.2', 0, 0, 'assets\\Menu\\soups\\vegclear.jpg'),
(5, 123, 50, '3.2', 0, 0, 'assets\\Menu\\soups\\vegclear.jpg'),
(6, 111, 70, '3.2', 0, 1, 'assets\\Menu\\soups\\tomatosoup.jpg'),
(6, 112, 100, '3.2', 0, 0, 'assets\\Menu\\soups\\tomatosoup.jpg'),
(6, 116, 90, '3.2', 0, 0, 'assets\\Menu\\soups\\tomatosoup.jpg'),
(6, 117, 70, '3.2', 0, 0, 'assets\\Menu\\soups\\tomatosoup.jpg'),
(6, 120, 90, '3.2', 0, 0, 'assets\\Menu\\soups\\tomatosoup.jpg'),
(6, 121, 50, '3.2', 0, 0, 'assets\\Menu\\soups\\tomatosoup.jpg'),
(8, 111, 100, '3.2', 0, 0, 'assets\\Menu\\soups\\chickmanchow.jpg'),
(8, 113, 150, '3.2', 0, 0, 'assets\\Menu\\soups\\chickmanchow.jpg'),
(8, 115, 120, '3.2', 0, 0, 'assets\\Menu\\soups\\chickmanchow.jpg'),
(8, 119, 90, '3.2', 0, 0, 'assets\\Menu\\soups\\chickmanchow.jpg'),
(8, 122, 120, '3.2', 0, 0, 'assets\\Menu\\soups\\chickmanchow.jpg'),
(8, 125, 90, '3.2', 0, 0, 'assets\\Menu\\soups\\chickmanchow.jpg'),
(9, 123, 100, '3.2', 0, 0, 'assets\\Menu\\soups\\chickhotsour.jpg'),
(9, 124, 200, '3.2', 0, 0, 'assets\\Menu\\soups\\chickhotsour.jpg'),
(11, 116, 90, '3.2', 0, 0, 'assets\\Menu\\quick bites\\garlicbread.jpg'),
(11, 124, 250, '3.2', 0, 0, 'assets\\Menu\\quick bites\\garlicbread.jpg'),
(12, 117, 60, '3.2', 0, 0, 'assets\\Menu\\quick bites\\paneershawarma.jpg'),
(12, 119, 50, '3.2', 0, 0, 'assets\\Menu\\quick bites\\paneershawarma.jpg'),
(13, 117, 70, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickshawarma.jpg'),
(13, 119, 60, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickshawarma.jpg'),
(14, 117, 100, '3.2', 0, 0, 'assets\\Menu\\quick bites\\frenchfry.jpg'),
(14, 124, 200, '3.2', 0, 0, 'assets\\Menu\\quick bites\\frenchfry.jpg'),
(15, 117, 110, '3.2', 0, 0, 'assets\\Menu\\quick bites\\veggrill.jpg'),
(16, 113, 120, '3.2', 0, 0, 'assets\\Menu\\quick bites\\cheesegrill.jpg'),
(16, 117, 150, '3.2', 0, 0, 'assets\\Menu\\quick bites\\cheesegrill.jpg'),
(17, 114, 50, '3.2', 0, 0, 'assets\\Menu\\quick bites\\pavbhaji.jpg'),
(17, 120, 110, '3.2', 0, 0, 'assets\\Menu\\quick bites\\pavbhaji.jpg'),
(17, 125, 150, '3.2', 0, 0, 'assets\\Menu\\quick bites\\pavbhaji.jpg'),
(18, 114, 50, '3.2', 0, 0, 'assets\\Menu\\quick bites\\masaladosa.jpg'),
(18, 120, 130, '3.2', 0, 0, 'assets\\Menu\\quick bites\\masaladosa.jpg'),
(18, 125, 130, '3.2', 0, 0, 'assets\\Menu\\quick bites\\masaladosa.jpg'),
(19, 118, 50, '3.2', 0, 0, 'assets\\Menu\\quick bites\\bhelpuri.jpg'),
(21, 111, 150, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickennugg.jpg'),
(21, 115, 180, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickennugg.jpg'),
(22, 113, 200, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickstrip.jpg'),
(22, 115, 200, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickstrip.jpg'),
(22, 116, 120, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickstrip.jpg'),
(23, 111, 60, '3.2', 0, 0, 'assets\\Menu\\quick bites\\buttercorn.jpg'),
(23, 118, 30, '3.2', 0, 0, 'assets\\Menu\\quick bites\\buttercorn.jpg'),
(23, 123, 30, '3.2', 0, 0, 'assets\\Menu\\quick bites\\buttercorn.jpg'),
(25, 117, 120, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickmomo.jpg'),
(25, 121, 120, '3.2', 0, 0, 'assets\\Menu\\quick bites\\chickmomo.jpg'),
(26, 121, 90, '3.2', 0, 0, 'assets\\Menu\\quick bites\\roastchick.jpg'),
(29, 112, 60, '3.2', 0, 0, 'assets\\Menu\\quick bites\\idlisam.jpg'),
(29, 122, 70, '3.2', 0, 0, 'assets\\Menu\\quick bites\\idlisam.jpg'),
(30, 112, 90, '3.2', 0, 0, 'assets\\Menu\\quick bites\\cholebhat.jpg'),
(30, 122, 80, '3.2', 0, 0, 'assets\\Menu\\quick bites\\cholebhat.jpg'),
(30, 123, 70, '3.2', 0, 0, 'assets\\Menu\\quick bites\\cholebhat.jpg'),
(31, 113, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\caesar.jpg'),
(31, 114, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\caesar.jpg'),
(31, 115, 150, '3.2', 0, 0, 'assets\\Menu\\salads\\caesar.jpg'),
(31, 116, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\caesar.jpg'),
(31, 117, 120, '3.2', 0, 0, 'assets\\Menu\\salads\\caesar.jpg'),
(31, 118, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\caesar.jpg'),
(31, 120, 120, '3.2', 0, 0, 'assets\\Menu\\salads\\caesar.jpg'),
(32, 111, 160, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 112, 90, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 113, 60, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 115, 150, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 116, 50, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 118, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 119, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 120, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 121, 50, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 124, 120, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(32, 125, 70, '3.2', 0, 0, 'assets\\Menu\\salads\\gardensal.jpg'),
(33, 111, 150, '3.2', 0, 0, 'assets\\Menu\\salads\\greensal.jpg'),
(33, 114, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\greensal.jpg'),
(33, 119, 100, '3.2', 0, 0, 'assets\\Menu\\salads\\greensal.jpg'),
(33, 121, 60, '3.2', 0, 0, 'assets\\Menu\\salads\\greensal.jpg'),
(33, 122, 60, '3.2', 0, 0, 'assets\\Menu\\salads\\greensal.jpg'),
(33, 123, 60, '3.2', 0, 0, 'assets\\Menu\\salads\\greensal.jpg'),
(33, 125, 50, '3.2', 0, 0, 'assets\\Menu\\salads\\greensal.jpg'),
(37, 112, 150, '3.2', 0, 0, 'assets\\Menu\\salads\\orientalchicksal.jpg'),
(37, 117, 200, '3.2', 0, 0, 'assets\\Menu\\salads\\orientalchicksal.jpg'),
(37, 122, 200, '3.2', 0, 0, 'assets\\Menu\\salads\\orientalchicksal.jpg'),
(37, 123, 250, '3.2', 0, 0, 'assets\\Menu\\salads\\orientalchicksal.jpg'),
(37, 124, 350, '3.2', 0, 0, 'assets\\Menu\\salads\\orientalchicksal.jpg'),
(38, 114, 170, '3.2', 0, 0, 'assets\\Menu\\starters\\gobiman.jpg'),
(38, 122, 100, '3.2', 0, 0, 'assets\\Menu\\starters\\gobiman.jpg'),
(38, 123, 80, '3.2', 0, 0, 'assets\\Menu\\starters\\gobiman.jpg'),
(39, 114, 180, '3.2', 0, 0, 'assets\\Menu\\starters\\paneerpak.jpg'),
(39, 117, 60, '3.2', 0, 0, 'assets\\Menu\\starters\\paneerpak.jpg'),
(39, 123, 80, '3.2', 0, 0, 'assets\\Menu\\starters\\paneerpak.jpg'),
(40, 114, 200, '3.2', 0, 0, 'assets\\Menu\\starters\\paneertikka.jpg'),
(42, 111, 200, '3.2', 0, 0, 'assets\\Menu\\starters\\chicktikka.jpg'),
(43, 112, 300, '3.2', 0, 0, 'assets\\Menu\\starters\\chicktandoori.jpg'),
(43, 125, 250, '3.2', 0, 0, 'assets\\Menu\\starters\\chicktandoori.jpg'),
(44, 112, 180, '3.2', 0, 0, 'assets\\Menu\\starters\\chicktang.jpg'),
(45, 112, 180, '3.2', 0, 0, 'assets\\Menu\\starters\\fishtikka.jpg'),
(45, 113, 150, '3.2', 0, 0, 'assets\\Menu\\starters\\fishtikka.jpg'),
(45, 120, 250, '3.2', 0, 0, 'assets\\Menu\\starters\\fishtikka.jpg'),
(45, 121, 300, '3.2', 0, 0, 'assets\\Menu\\starters\\fishtikka.jpg'),
(45, 122, 200, '3.2', 0, 0, 'assets\\Menu\\starters\\fishtikka.jpg'),
(46, 117, 120, '3.2', 0, 0, 'assets\\Menu\\starters\\fish fry.jpg'),
(46, 120, 300, '3.2', 0, 0, 'assets\\Menu\\starters\\fish fry.jpg'),
(46, 121, 350, '3.2', 0, 0, 'assets\\Menu\\starters\\fish fry.jpg'),
(46, 125, 200, '3.2', 0, 0, 'assets\\Menu\\starters\\fish fry.jpg'),
(47, 118, 150, '3.2', 0, 0, 'assets\\Menu\\starters\\masalaprawns.jpg'),
(47, 120, 350, '3.2', 0, 0, 'assets\\Menu\\starters\\masalaprawns.jpg'),
(47, 121, 350, '3.2', 0, 0, 'assets\\Menu\\starters\\masalaprawns.jpg'),
(49, 116, 180, '3.2', 0, 0, 'assets\\Menu\\starters\\chillichick.jpg'),
(49, 118, 120, '3.2', 0, 0, 'assets\\Menu\\starters\\chillichick.jpg'),
(50, 115, 100, '3.2', 0, 0, 'assets\\Menu\\starters\\chicklolli.jpg'),
(50, 116, 200, '3.2', 0, 0, 'assets\\Menu\\starters\\chicklolli.jpg'),
(50, 124, 150, '3.2', 0, 0, 'assets\\Menu\\starters\\chicklolli.jpg'),
(51, 115, 100, '3.2', 0, 0, 'assets\\Menu\\starters\\chickman.jpg'),
(51, 119, 150, '3.2', 0, 0, 'assets\\Menu\\starters\\chickman.jpg'),
(52, 113, 180, '3.2', 0, 0, 'assets\\Menu\\starters\\chick65.jpg'),
(52, 116, 200, '3.2', 0, 0, 'assets\\Menu\\starters\\chick65.jpg'),
(52, 119, 160, '3.2', 0, 0, 'assets\\Menu\\starters\\chick65.jpg'),
(52, 121, 250, '3.2', 0, 0, 'assets\\Menu\\starters\\chick65.jpg'),
(52, 124, 150, '3.2', 0, 0, 'assets\\Menu\\starters\\chick65.jpg'),
(55, 113, 140, '3.2', 0, 0, 'assets\\Menu\\Main course\\paneergravy.jpg'),
(55, 114, 220, '3.2', 0, 0, 'assets\\Menu\\Main course\\paneergravy.jpg'),
(55, 118, 180, '3.2', 0, 0, 'assets\\Menu\\Main course\\paneergravy.jpg'),
(56, 114, 200, '3.2', 0, 0, 'assets\\Menu\\Main course\\kadaipan.jpg'),
(56, 116, 180, '3.2', 0, 0, 'assets\\Menu\\Main course\\kadaipan.jpg'),
(57, 114, 210, '3.2', 0, 0, 'assets\\Menu\\Main course\\palakpan.jpg'),
(57, 116, 190, '3.2', 0, 0, 'assets\\Menu\\Main course\\palakpan.jpg'),
(64, 111, 180, '3.2', 0, 0, 'assets\\Menu\\Main course\\butter chick.jpg'),
(64, 117, 150, '3.2', 0, 0, 'assets\\Menu\\Main course\\butter chick.jpg'),
(65, 111, 250, '3.2', 0, 0, 'assets\\Menu\\Main course\\hydchick.jpg'),
(65, 112, 320, '3.2', 0, 0, 'assets\\Menu\\Main course\\hydchick.jpg'),
(65, 118, 220, '3.2', 0, 0, 'assets\\Menu\\Main course\\hydchick.jpg'),
(66, 118, 220, '3.2', 0, 0, 'assets\\Menu\\Main course\\chicktik.jpg'),
(66, 121, 120, '3.2', 0, 0, 'assets\\Menu\\Main course\\chicktik.jpg'),
(67, 118, 210, '3.2', 0, 0, 'assets\\Menu\\Main course\\mughlaichick.jpg'),
(68, 113, 320, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickpatiala.jpg'),
(68, 121, 250, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickpatiala.jpg'),
(70, 122, 100, '3.2', 0, 0, 'assets\\Menu\\Main course\\daltadka.jpg'),
(70, 125, 120, '3.2', 0, 0, 'assets\\Menu\\Main course\\daltadka.jpg'),
(72, 122, 150, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickbiryani.jpg'),
(87, 124, 240, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickshezwannoodle.jpg'),
(91, 112, 200, '3.2', 0, 0, 'assets\\Menu\\Main course\\chicksukka.jpg'),
(91, 119, 180, '3.2', 0, 0, 'assets\\Menu\\Main course\\chicksukka.jpg'),
(91, 120, 200, '3.2', 0, 0, 'assets\\Menu\\Main course\\chicksukka.jpg'),
(92, 115, 200, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickcaf.jpg'),
(92, 119, 200, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickcaf.jpg'),
(92, 120, 200, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickcaf.jpg'),
(92, 125, 160, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickcaf.jpg'),
(95, 117, 190, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickpizza.jpg'),
(95, 123, 400, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickpizza.jpg'),
(95, 124, 350, '3.2', 0, 0, 'assets\\Menu\\Main course\\chickpizza.jpg'),
(97, 115, 120, '3.2', 0, 0, 'assets\\Menu\\Main course\\pastawhite.jpg'),
(97, 123, 320, '3.2', 0, 0, 'assets\\Menu\\Main course\\pastawhite.jpg'),
(98, 116, 20, '3.2', 0, 0, 'assets\\Menu\\Beverages\\tea.jpg'),
(98, 119, 20, '3.2', 0, 0, 'assets\\Menu\\Beverages\\tea.jpg'),
(98, 122, 35, '3.2', 0, 0, 'assets\\Menu\\Beverages\\tea.jpg'),
(98, 124, 40, '3.2', 0, 0, 'assets\\Menu\\Beverages\\tea.jpg'),
(98, 125, 20, '3.2', 0, 0, 'assets\\Menu\\Beverages\\tea.jpg'),
(99, 111, 20, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coffee.jpg'),
(99, 114, 30, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coffee.jpg'),
(99, 116, 30, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coffee.jpg'),
(99, 122, 45, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coffee.jpg'),
(99, 123, 40, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coffee.jpg'),
(99, 124, 50, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coffee.jpg'),
(99, 125, 30, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coffee.jpg'),
(100, 113, 120, '3.2', 0, 0, 'assets\\Menu\\Beverages\\chocoshake.jpg'),
(100, 117, 120, '3.2', 0, 0, 'assets\\Menu\\Beverages\\chocoshake.jpg'),
(100, 123, 150, '3.2', 0, 0, 'assets\\Menu\\Beverages\\chocoshake.jpg'),
(101, 112, 120, '3.2', 0, 0, 'assets\\Menu\\Beverages\\mangoshake.jpg'),
(101, 117, 120, '3.2', 0, 0, 'assets\\Menu\\Beverages\\mangoshake.jpg'),
(101, 120, 120, '3.2', 0, 0, 'assets\\Menu\\Beverages\\mangoshake.jpg'),
(101, 122, 150, '3.2', 0, 0, 'assets\\Menu\\Beverages\\mangoshake.jpg'),
(102, 113, 150, '3.2', 0, 0, 'assets\\Menu\\Beverages\\strawberryshake.jpg'),
(102, 117, 140, '3.2', 0, 0, 'assets\\Menu\\Beverages\\strawberryshake.jpg'),
(103, 112, 40, '3.2', 0, 0, 'assets\\Menu\\Beverages\\sprite.jpg'),
(103, 115, 40, '3.2', 0, 0, 'assets\\Menu\\Beverages\\sprite.jpg'),
(103, 118, 30, '3.2', 0, 0, 'assets\\Menu\\Beverages\\sprite.jpg'),
(103, 121, 60, '3.2', 0, 0, 'assets\\Menu\\Beverages\\sprite.jpg'),
(104, 119, 40, '3.2', 0, 0, 'assets\\Menu\\Beverages\\pepsi.jpg'),
(104, 120, 30, '3.2', 0, 0, 'assets\\Menu\\Beverages\\pepsi.jpg'),
(104, 121, 60, '3.2', 0, 0, 'assets\\Menu\\Beverages\\pepsi.jpg'),
(105, 111, 30, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coke.jpg'),
(105, 114, 50, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coke.jpg'),
(105, 115, 40, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coke.jpg'),
(105, 118, 30, '3.2', 0, 0, 'assets\\Menu\\Beverages\\coke.jpg'),
(106, 112, 70, '3.2', 0, 0, 'assets\\Menu\\desserts\\blackforest.jpg'),
(106, 113, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\blackforest.jpg'),
(106, 114, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\blackforest.jpg'),
(106, 115, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\blackforest.jpg'),
(106, 118, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\blackforest.jpg'),
(106, 120, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\blackforest.jpg'),
(106, 121, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\blackforest.jpg'),
(106, 125, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\blackforest.jpg'),
(107, 121, 60, '3.2', 0, 0, 'assets\\Menu\\desserts\\brownie.jpg'),
(107, 123, 100, '3.2', 0, 0, 'assets\\Menu\\desserts\\brownie.jpg'),
(108, 114, 120, '3.2', 0, 0, 'assets\\Menu\\desserts\\chocohaz.jpg'),
(108, 117, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\chocohaz.jpg'),
(108, 118, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\chocohaz.jpg'),
(108, 120, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\chocohaz.jpg'),
(108, 123, 100, '3.2', 0, 0, 'assets\\Menu\\desserts\\chocohaz.jpg'),
(108, 125, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\chocohaz.jpg'),
(109, 111, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\serr.jpg'),
(109, 112, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\serr.jpg'),
(109, 116, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\serr.jpg'),
(109, 119, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\serr.jpg'),
(109, 122, 60, '3.2', 0, 0, 'assets\\Menu\\desserts\\serr.jpg'),
(109, 124, 160, '3.2', 0, 0, 'assets\\Menu\\desserts\\serr.jpg'),
(110, 111, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\mousse.jpg'),
(110, 113, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\mousse.jpg'),
(110, 115, 80, '3.2', 0, 0, 'assets\\Menu\\desserts\\mousse.jpg'),
(110, 116, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\mousse.jpg'),
(110, 117, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\mousse.jpg'),
(110, 119, 90, '3.2', 0, 0, 'assets\\Menu\\desserts\\mousse.jpg'),
(110, 122, 60, '3.2', 0, 0, 'assets\\Menu\\desserts\\mousse.jpg'),
(110, 124, 150, '3.2', 0, 0, 'assets\\Menu\\desserts\\mousse.jpg'),
(120, 111, 169, '3.2', 0, 1, 'assets\\Menu\\starters\\vegcrispy.jpg'),
(222, 111, 150, '3.2', 0, 0, 'assets\\Menu\\starters\\paneercrispy.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `gives_order`
--

CREATE TABLE `gives_order` (
  `CId` int(11) NOT NULL,
  `OId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_chosen`
--

CREATE TABLE `order_chosen` (
  `OId` int(11) NOT NULL,
  `ItemID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `OId` int(110) NOT NULL,
  `ItemID` int(110) NOT NULL,
  `qty` int(110) NOT NULL,
  `price` int(110) NOT NULL,
  `pending` int(11) NOT NULL,
  `preparing` int(11) NOT NULL,
  `ready` int(11) NOT NULL,
  `served` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`OId`, `ItemID`, `qty`, `price`, `pending`, `preparing`, `ready`, `served`) VALUES
(45, 106, 1, 70, 0, 0, 0, 0),
(45, 109, 1, 80, 0, 0, 0, 0),
(46, 55, 1, 220, 0, 0, 0, 0),
(46, 56, 1, 200, 0, 0, 0, 0),
(46, 57, 1, 210, 0, 0, 0, 0),
(47, 99, 4, 30, 0, 0, 0, 0),
(47, 105, 4, 50, 0, 0, 0, 0),
(48, 4, 1, 100, 0, 0, 0, 0),
(48, 8, 2, 120, 0, 0, 0, 0),
(48, 50, 2, 100, 0, 0, 0, 0),
(48, 51, 3, 100, 0, 0, 0, 0),
(49, 6, 2, 70, 0, 0, 0, 0),
(49, 8, 3, 100, 0, 0, 0, 0),
(50, 32, 2, 160, 0, 0, 0, 0),
(50, 33, 3, 150, 0, 0, 0, 0),
(51, 42, 2, 200, 0, 0, 0, 0),
(51, 120, 3, 169, 0, 0, 0, 0),
(52, 6, 2, 70, 0, 0, 0, 0),
(52, 8, 3, 100, 0, 0, 0, 0),
(53, 6, 1, 70, 0, 0, 0, 0),
(54, 8, 1, 100, 0, 0, 0, 0),
(55, 8, 2, 100, 0, 0, 0, 0),
(56, 8, 3, 100, 0, 0, 0, 0),
(57, 8, 3, 100, 0, 0, 0, 0),
(58, 21, 1, 150, 0, 0, 0, 0),
(59, 64, 1, 180, 0, 0, 0, 0),
(60, 21, 1, 150, 0, 0, 0, 0),
(61, 21, 2, 150, 0, 0, 0, 0),
(62, 64, 1, 180, 0, 0, 0, 0),
(63, 6, 1, 70, 0, 0, 0, 0),
(63, 32, 1, 160, 0, 0, 0, 0),
(63, 42, 1, 200, 0, 0, 0, 0),
(63, 64, 1, 180, 0, 0, 0, 0),
(64, 64, 1, 180, 0, 0, 0, 0),
(65, 109, 1, 80, 0, 0, 0, 0),
(66, 64, 1, 180, 0, 0, 0, 0),
(67, 23, 1, 60, 0, 0, 0, 0),
(68, 110, 1, 90, 0, 0, 0, 0),
(69, 64, 2, 180, 0, 0, 0, 0),
(70, 6, 1, 70, 0, 0, 0, 0),
(71, 6, 21, 70, 0, 0, 0, 0),
(71, 23, 1, 60, 0, 0, 0, 0),
(72, 6, 1, 100, 0, 0, 0, 0),
(72, 106, 1, 70, 0, 0, 0, 0),
(73, 32, 1, 160, 0, 0, 0, 0),
(74, 6, 1, 100, 0, 0, 0, 0),
(75, 4, 1, 120, 0, 0, 0, 0),
(76, 4, 1, 120, 0, 0, 0, 0),
(77, 6, 1, 70, 0, 0, 0, 0),
(78, 8, 1, 100, 0, 0, 0, 0),
(79, 21, 1, 150, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_table`
--

CREATE TABLE `order_table` (
  `OId` int(110) NOT NULL,
  `CId` int(110) NOT NULL,
  `bill` int(110) NOT NULL,
  `paid` tinyint(1) NOT NULL DEFAULT '0',
  `date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
) ;

-- --------------------------------------------------------

--
-- Table structure for table `otpver`
--

CREATE TABLE `otpver` (
  `otp_id` int(110) NOT NULL,
  `cemail` varchar(50) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `otpver`
--

INSERT INTO `otpver` (`otp_id`, `cemail`, `time`) VALUES
(2541, 'vishalsharma1907@gmail.com', '2019-07-01 07:14:46');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `PId` int(11) NOT NULL,
  `Cashless` tinyint(1) NOT NULL,
  `Status` enum('Not Paid','Paid','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rest_info`
--

CREATE TABLE `rest_info` (
  `RId` int(11) NOT NULL,
  `RName` varchar(50) NOT NULL,
  `RAddress` varchar(50) NOT NULL,
  `RMap` blob NOT NULL,
  `RFastFood` tinyint(1) NOT NULL,
  `RTables` int(11) NOT NULL,
  `RCuisine` enum('Goan','Continental','Chinese','North Indian','South Indian') NOT NULL,
  `RRating` decimal(2,1) NOT NULL,
  `ROpeningTime` time NOT NULL,
  `RClosingTime` time NOT NULL,
  `RImgAddress` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rest_info`
--

INSERT INTO `rest_info` (`RId`, `RName`, `RAddress`, `RMap`, `RFastFood`, `RTables`, `RCuisine`, `RRating`, `ROpeningTime`, `RClosingTime`, `RImgAddress`) VALUES
(111, 'Red Chillies', 'Panjim, Goa', '', 0, 30, 'Continental', '3.7', '11:00:00', '22:00:00', 'assets\\Restaurants\\redchilly.jpg'),
(112, 'Goan Majestic', 'Ponda, Goa', '', 0, 22, 'Goan', '3.0', '10:00:00', '23:00:00', 'assets\\Restaurants\\goanmajestic.jpg'),
(113, 'Sher-e-Punjab', 'Margao, Goa', '', 0, 50, 'North Indian', '5.0', '11:00:00', '22:00:00', 'assets\\Restaurants\\sherepunjab.jpg'),
(114, 'Navtara', 'Vasco, Goa', '', 1, 30, 'South Indian', '2.7', '10:00:00', '23:00:00', 'assets\\Restaurants\\navtara.jpg'),
(115, 'KFC', 'Porvorim, Goa', '', 1, 50, 'Continental', '1.0', '13:00:00', '23:30:00', 'assets\\Restaurants\\kfc.jpg'),
(116, 'Ancient Rock', 'Panjim, Goa', '', 0, 30, 'North Indian', '1.0', '07:00:00', '22:00:00', 'assets\\Restaurants\\ancientrock.jpg'),
(117, 'MFC Royal Inn Family Restaurant', 'Panjim, Goa', '', 1, 10, 'Chinese', '1.0', '09:00:00', '17:00:00', 'assets\\Restaurants\\mfc.jpg'),
(118, 'Foodland Garden Retreat ', 'Panjim, Goa', '', 0, 20, 'North Indian', '1.0', '10:00:00', '22:00:00', 'assets\\Restaurants\\foodland.jpg'),
(119, 'Temptations', 'Panjim, Goa', '', 1, 15, 'Chinese', '1.0', '05:00:00', '23:00:00', 'assets\\Restaurants\\temptations.jpg'),
(120, 'Chicken Food Court', 'Panjim, Goa', '', 1, 30, 'Continental', '1.0', '06:00:00', '22:00:00', 'assets\\Restaurants\\cfc.jpg'),
(121, 'The Fisherman''s Wharf', 'Calangute, Goa', '', 0, 30, 'Continental', '1.0', '12:00:00', '22:00:00', 'assets\\Restaurants\\wharf.jpg'),
(122, 'Tapri', 'Margao, Goa', '', 1, 5, 'Continental', '1.0', '14:00:00', '23:00:00', 'assets\\Restaurants\\tapri.jpg'),
(123, 'Curlies', 'Anjuna, Goa', '', 0, 20, 'North Indian', '1.0', '09:00:00', '23:00:00', 'assets\\Restaurants\\curlies.jpg'),
(124, 'The Black Sheep Bistro', 'Panjim, Goa', '', 1, 20, 'Continental', '1.0', '14:00:00', '23:45:00', 'assets\\Restaurants\\bsb.jpg'),
(125, 'Kokni Kanteen', 'Panjim, Goa', '', 0, 15, 'Goan', '1.0', '05:00:00', '23:00:00', 'assets\\Restaurants\\koknikanteen.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `rest_manager`
--

CREATE TABLE `rest_manager` (
  `RId` int(3) NOT NULL,
  `RManager` varchar(20) NOT NULL,
  `RMPassword` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rest_manager`
--

INSERT INTO `rest_manager` (`RId`, `RManager`, `RMPassword`) VALUES
(111, 'Aniket Lawande', 'RedChillies'),
(112, 'Ishan Gude', 'GoanMajestic'),
(113, 'Sandesh Rai', 'ShereEPunjab'),
(115, 'Mainak Chakraborty', 'KFC');

-- --------------------------------------------------------

--
-- Table structure for table `rest_reviews`
--

CREATE TABLE `rest_reviews` (
  `RId` int(11) NOT NULL,
  `RReview` text NOT NULL,
  `RRating` int(1) NOT NULL,
  `CId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rest_reviews`
--

INSERT INTO `rest_reviews` (`RId`, `RReview`, `RRating`, `CId`) VALUES
(111, 'Great food. Nice ambiance.', 4, 1),
(111, 'Average food. Slightly pricey', 3, 3),
(111, 'Amazing food and ambiance. Expensive AF.', 4, 4),
(112, 'Great.', 5, 4),
(112, 'Above average.', 3, 6),
(112, 'Average.', 3, 7),
(113, 'Hats off. No complaints.', 5, 10),
(111, 'aaa', 3, 10),
(111, 'bbbb', 4, 10),
(111, 'Superb!', 4, 10),
(111, 'cccc', 4, 10),
(111, 'amazing!', 3, 10),
(111, 'Doe''s rating', 3, 8),
(111, 'Not worth it the second time!', 3, 1),
(112, 'Slow service!', 2, 1),
(111, '', 5, 3),
(111, '', 5, 1),
(112, 'Not good service!', 3, 14);

-- --------------------------------------------------------

--
-- Table structure for table `r_order`
--

CREATE TABLE `r_order` (
  `OId` int(11) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  `Bill_amount` int(11) NOT NULL,
  `list` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `r_table`
--

CREATE TABLE `r_table` (
  `TId` int(10) NOT NULL,
  `RId` int(11) NOT NULL,
  `name` varchar(110) NOT NULL,
  `book` int(110) NOT NULL,
  `date` date NOT NULL,
  `time` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `r_table`
--

INSERT INTO `r_table` (`TId`, `RId`, `name`, `book`, `date`, `time`) VALUES
(1111, 111, 'Table for 4 (near restroom)', 1, '2019-07-01', '13:00:00.000000'),
(1112, 111, 'Table for 3 (near kitchen)', 1, '2019-07-01', '13:00:00.000000'),
(1113, 111, 'Table for 2 (near kitchen)', 1, '2019-07-01', '13:00:00.000000'),
(1114, 111, 'Table for 5 (near entrance)', 0, '0000-00-00', '00:00:00.000000'),
(1115, 111, 'Table For 4 (near back entrance)', 1, '2019-07-01', '13:00:00.000000'),
(1116, 111, 'Table for 8 (seaview)', 1, '2019-07-01', '13:00:00.000000'),
(1117, 111, 'Table for 2 (seaview)', 1, '2019-07-01', '13:00:00.000000'),
(1118, 111, 'Table For 6 (near restroom)', 1, '2019-07-01', '13:00:00.000000'),
(1121, 112, 'Table for 4 (center of restaurant)', 1, '2019-07-04', '13:00:00.000000'),
(1122, 112, 'Table for 3 (center of restaurant)', 0, '2019-06-30', '14:00:00.000000'),
(1123, 112, 'Table for 2 (left side of entrance)', 0, '2019-07-01', '13:00:00.000000'),
(1124, 112, 'Table for 5 (near restroom)', 0, '2019-07-01', '13:00:00.000000'),
(1126, 112, 'Table for 8 (seaview)', 0, '2019-07-01', '13:00:00.000000'),
(1127, 112, 'Table for 2 (near entrance)', 0, '2019-07-01', '13:00:00.000000'),
(1128, 112, 'Table for 6 (right side of entrance)', 0, '2019-07-01', '13:00:00.000000'),
(1131, 113, 'Table for 4 (near kitchen)', 0, '0000-00-00', '00:00:00.000000'),
(1132, 113, 'Table for 3 (seaview)', 0, '0000-00-00', '00:00:00.000000'),
(1133, 113, 'Table for 2 (near restroom)', 0, '0000-00-00', '00:00:00.000000'),
(1134, 113, 'Table for 5 (near back entrance)', 0, '0000-00-00', '00:00:00.000000'),
(1136, 113, 'Table for 8 (seaview)', 0, '0000-00-00', '00:00:00.000000'),
(1137, 113, 'Table for 2 (near entrance)', 0, '2019-06-30', '15:00:00.000000'),
(1138, 113, 'Table for 6 (near restroom)', 0, '0000-00-00', '00:00:00.000000'),
(1141, 114, 'Table for 4 (near kitchen)', 0, '0000-00-00', '00:00:00.000000'),
(1142, 114, 'Table for 3 (facing parking)', 0, '2019-06-29', '13:00:00.000000'),
(1143, 114, 'Table for 2 (facing parking)', 0, '2019-06-29', '13:00:00.000000'),
(1144, 114, 'Table for 5', 0, '0000-00-00', '00:00:00.000000'),
(1146, 114, 'Table for 8', 0, '0000-00-00', '00:00:00.000000'),
(1147, 114, 'Table for 2', 0, '0000-00-00', '00:00:00.000000'),
(1148, 114, 'Table for 6', 0, '0000-00-00', '00:00:00.000000');

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `SId` int(11) NOT NULL,
  `TId` int(11) NOT NULL,
  `PId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`SId`, `TId`, `PId`) VALUES
(99, 1122, 0),
(100, 1142, 0),
(101, 1143, 0),
(102, 1115, 0),
(108, 1111, 0),
(109, 1111, 0),
(112, 1114, 0),
(113, 1114, 0),
(114, 1113, 0),
(115, 1111, 0),
(116, 1112, 0),
(117, 1114, 0),
(118, 1114, 0),
(119, 1111, 0),
(120, 1111, 0),
(121, 1114, 0),
(122, 1111, 0),
(123, 1112, 0),
(124, 1114, 0),
(125, 1113, 0),
(126, 1114, 0),
(127, 1111, 0),
(128, 1113, 0),
(129, 1112, 0),
(130, 1112, 0),
(131, 1115, 0),
(132, 1117, 0),
(133, 1116, 0),
(134, 1123, 0),
(135, 1118, 0),
(136, 1121, 0),
(137, 1124, 0),
(138, 1126, 0),
(139, 1128, 0),
(140, 1127, 0),
(141, 1112, 0),
(142, 1117, 0),
(143, 1115, 0),
(144, 1118, 0),
(145, 1113, 0),
(146, 1111, 0),
(147, 1116, 0),
(148, 1121, 0);

-- --------------------------------------------------------

--
-- Table structure for table `takes_order`
--

CREATE TABLE `takes_order` (
  `RId` int(11) NOT NULL,
  `OId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `takes_order`
--

INSERT INTO `takes_order` (`RId`, `OId`) VALUES
(112, 45),
(114, 46),
(114, 47),
(115, 48),
(111, 49),
(111, 50),
(111, 51),
(111, 52),
(111, 53),
(111, 54),
(111, 55),
(111, 56),
(111, 57),
(111, 58),
(111, 59),
(111, 60),
(111, 61),
(111, 62),
(111, 63),
(111, 64),
(111, 65),
(111, 66),
(111, 67),
(111, 68),
(111, 69),
(111, 70),
(111, 71),
(112, 72),
(111, 73),
(112, 74),
(112, 75),
(112, 76),
(111, 77),
(111, 78),
(111, 79);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `creates_session`
--
ALTER TABLE `creates_session`
  ADD PRIMARY KEY (`SId`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CId`),
  ADD UNIQUE KEY `CEmail` (`CEmail`);

--
-- Indexes for table `describes_fooddetails`
--
ALTER TABLE `describes_fooddetails`
  ADD PRIMARY KEY (`ItemID`);

--
-- Indexes for table `dines_at`
--
ALTER TABLE `dines_at`
  ADD PRIMARY KEY (`transactionId`);

--
-- Indexes for table `food_menu`
--
ALTER TABLE `food_menu`
  ADD UNIQUE KEY `ItemID` (`ItemID`,`RId`);

--
-- Indexes for table `otpver`
--
ALTER TABLE `otpver`
  ADD PRIMARY KEY (`otp_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`PId`);

--
-- Indexes for table `rest_info`
--
ALTER TABLE `rest_info`
  ADD PRIMARY KEY (`RId`);

--
-- Indexes for table `rest_manager`
--
ALTER TABLE `rest_manager`
  ADD PRIMARY KEY (`RId`),
  ADD UNIQUE KEY `RId` (`RId`);

--
-- Indexes for table `r_order`
--
ALTER TABLE `r_order`
  ADD PRIMARY KEY (`OId`);

--
-- Indexes for table `r_table`
--
ALTER TABLE `r_table`
  ADD PRIMARY KEY (`TId`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`SId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `creates_session`
--
ALTER TABLE `creates_session`
  MODIFY `SId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `CId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `describes_fooddetails`
--
ALTER TABLE `describes_fooddetails`
  MODIFY `ItemID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=223;
--
-- AUTO_INCREMENT for table `dines_at`
--
ALTER TABLE `dines_at`
  MODIFY `transactionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16474231;
--
-- AUTO_INCREMENT for table `otpver`
--
ALTER TABLE `otpver`
  MODIFY `otp_id` int(110) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2542;
--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `PId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `rest_info`
--
ALTER TABLE `rest_info`
  MODIFY `RId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;
--
-- AUTO_INCREMENT for table `r_order`
--
ALTER TABLE `r_order`
  MODIFY `OId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `r_table`
--
ALTER TABLE `r_table`
  MODIFY `TId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1149;
--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `SId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
