-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: mariadb106.server640683.nazwa.pl:3306
-- Czas generowania: 01 Lip 2022, 17:21
-- Wersja serwera: 10.6.7-MariaDB-log
-- Wersja PHP: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `server640683_projekt`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `currency`
--

CREATE TABLE `currency` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `symbol` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin2;

--
-- Zrzut danych tabeli `currency`
--

INSERT INTO `currency` (`id`, `name`, `symbol`) VALUES
(1, 'Polski złoty', 'PLN'),
(2, 'Euro', 'EUR'),
(3, 'Dolar amerykański', 'USD'),
(4, 'Dirham Zjednoczonych Emiratów Arabskich', 'AED'),
(6, 'Afgani', 'AFN'),
(7, 'Lek', 'ALL'),
(8, 'Dram', 'AMD'),
(9, 'Gulden antylski', 'ANG'),
(10, 'Kwanza', 'AOA'),
(11, 'Peso argentyńskie', 'ARS'),
(12, 'Dolar australijski', 'AUD'),
(13, 'Florin arubański', 'AWG'),
(14, 'Manat azerbejdżański', 'AZN'),
(15, 'Marka zamienna', 'BAM'),
(26, 'Dolar barbadoski', 'BBD'),
(27, 'Taka', 'BDT'),
(28, 'Lew bułgarski', 'BGN'),
(29, 'Dinar bahrajski', 'BHD'),
(30, 'Frank burundyjski', 'BIF'),
(31, 'Dolar bermudzki', 'BMD'),
(32, 'Dolar brunejski', 'BND'),
(33, 'Boliviano boliwijskie', 'BOB'),
(34, 'Real brazylijski', 'BRL'),
(35, 'Dolar bahamski', 'BSD'),
(36, 'Bitcoin', 'BTC'),
(37, 'Ngultrum', 'BTN'),
(38, 'Pula ', 'BWP'),
(39, 'Rubel białoruski', 'BYN'),
(40, 'Dolar belizeński', 'BZD'),
(41, 'Dolar kanadyjski', 'CAD'),
(42, 'Frank kongijski', 'CDF'),
(43, 'Frank szwajcarski', 'CHF'),
(44, 'Unidad de Fomento', 'CLF'),
(45, 'Peso chilijskie', 'CLP'),
(46, 'Pinyin yuán', 'CNH'),
(47, 'Renminbi ', 'CNY'),
(48, 'Peso kolumbijskie', 'COP'),
(49, 'Colon kostarykański', 'CRC'),
(50, 'Peso kubańskie wymienialne', 'CUC'),
(51, 'Peso kubańskie', 'CUP'),
(52, 'Escudo Zielonego Przylądka', 'CVE'),
(53, 'Korona czeska', 'CZK'),
(54, 'Frank Dżibuti', 'DJF'),
(55, 'Korona duńska', 'DKK'),
(56, 'Peso dominikańskie', 'DOP'),
(57, 'Dinar algierski', 'DZD'),
(58, 'Funt egipski', 'EGP'),
(59, 'Nakfa ', 'ERN'),
(60, 'Birr ', 'ETB'),
(61, 'Dolar Fidżi', 'FJD'),
(62, 'Funt falklandzki', 'FKP'),
(63, 'Brytyjski funt szterling', 'GBP'),
(64, 'Lari gruziński', 'GEL'),
(65, 'Funt Guernsey', 'GGP'),
(66, 'Cedi ', 'GHS'),
(67, 'Funt Gibraltar ', 'GIP'),
(68, 'Dalasi ', 'GMD'),
(69, 'Frank gwinejski', 'GNF'),
(70, 'Quetzal ', 'GTQ'),
(71, 'Dolar gujański', 'GYD'),
(72, 'Dolar Hongkongu', 'HKD'),
(73, 'Lempira ', 'HNL'),
(74, 'Kuna chorwacka ', 'HRK'),
(75, 'Gourde ', 'HTG'),
(76, 'Forint ', 'HUF'),
(77, 'Rupia indonezyjska', 'IDR'),
(78, 'Nowy izraelski szekel', 'ILS'),
(79, 'Funt Manx', 'IMP'),
(80, 'Rupia indyjska', 'INR'),
(81, 'Dinar iracki', 'IQD'),
(82, 'Rial irański', 'IRR'),
(83, 'Korona islandzka', 'ISK'),
(84, 'Funt Jersey', 'JEP'),
(85, 'Dolar jamajski', 'JMD'),
(86, 'Dinar jordański', 'JOD'),
(87, 'Jen', 'JPY'),
(88, 'Szyling kenijski', 'KES'),
(89, 'Som', 'KGS'),
(90, 'Riel kambodżański', 'KHR'),
(91, 'Frank Komorów', 'KMF'),
(92, 'Won północnokoreański', 'KPW'),
(93, 'Won południowokoreański', 'KRW'),
(94, 'Dinar kuwejcki', 'KWD'),
(95, 'Dolar kajmański', 'KYD'),
(96, 'Tenge', 'KZT'),
(97, 'Kip laotański', 'LAK'),
(98, 'Funt libański', 'LBP'),
(99, 'Rupia lankijska', 'LKR'),
(100, 'Dolar liberyjski', 'LRD'),
(101, 'Loti', 'LSL'),
(102, 'Dinar libijski', 'LYD'),
(103, 'Dirham marokański', 'MAD'),
(104, 'Lej Mołdawii', 'MDL'),
(105, 'Ariary', 'MGA'),
(106, 'Denar macedoński', 'MKD'),
(107, 'Kiat', 'MMK'),
(108, 'Tugrik', 'MNT'),
(109, 'Pataca', 'MOP'),
(110, 'Ugija', 'MRU'),
(111, 'Rupia Mauritiusu', 'MUR'),
(112, 'Rupia malediwska', 'MVR'),
(113, 'Kwacha malawijska', 'MWK'),
(114, 'Peso meksykańskie', 'MXN'),
(115, 'Ringgit', 'MYR'),
(116, 'Metical', 'MZN'),
(117, 'Dolar namibijski', 'NAD'),
(118, 'Naira ', 'NGN'),
(119, 'Cordoba', 'NIO'),
(120, 'Korona norweska', 'NOK'),
(121, 'Rupia nepalska', 'NPR'),
(122, 'Dolar nowozelandzki', 'NZD'),
(123, 'Rial omański', 'OMR'),
(124, 'Balboa ', 'PAB'),
(125, 'Sol', 'PEN'),
(126, 'Kina', 'PGK'),
(127, 'Peso filipińskie', 'PHP'),
(128, 'Rupia pakistańska', 'PKR'),
(129, 'Guaraní ', 'PYG'),
(130, 'Rial katarski', 'QAR'),
(131, 'Lej rumuński', 'RON'),
(132, 'Dinar serbski', 'RSD'),
(133, 'Rubel rosyjski', 'RUB'),
(134, 'Frank rwandyjski', 'RWF'),
(135, 'Rial saudyjski', 'SAR'),
(136, 'Dolar Wysp Salomona', 'SBD'),
(137, 'Rupia seszelska', 'SCR'),
(138, 'Funt sudański', 'SDG'),
(139, 'Korona szwedzka', 'SEK'),
(140, 'Dolar singapurski', 'SGD'),
(260, 'Funt Świętej Heleny', 'SHP'),
(261, 'Leone ', 'SLL'),
(262, 'Szyling somalijski', 'SOS'),
(263, 'Dolar surinamski', 'SRD'),
(264, 'Funt południowosudański', 'SSP'),
(265, 'Dobra', 'STD'),
(266, 'Colón salwadorski', 'SVC'),
(267, 'Funt syryjski', 'SYP'),
(268, 'Lilangeni', 'SZL'),
(269, 'Bat ', 'THB'),
(270, 'Somoni ', 'TJS'),
(271, 'Manat turkmeński', 'TMT'),
(272, 'Dinar tunezyjski', 'TND'),
(273, 'Palanga', 'TOP'),
(274, 'Lira turecka', 'TRY'),
(275, 'Dolar Trynidadu i Tobago', 'TTD'),
(276, 'Dolar tajwański', 'TWD'),
(277, 'Szyling tanzański', 'TZS'),
(278, 'Hrywna ', 'UAH'),
(279, 'Szyling ugandyjski', 'UGX'),
(280, 'Peso urugwajskie', 'UYU'),
(281, 'Sum', 'UZS'),
(282, 'Boliwar', 'VES'),
(283, 'Đong ', 'VND'),
(284, 'Vatu', 'VUV'),
(285, 'Tala', 'WST'),
(286, 'Środkowoafrykański frank CFA', 'XAF'),
(287, 'Dolar wschodniokaraibski', 'XCD'),
(288, 'Frank CFA (Afryka Zachodnia)', 'XOF'),
(289, 'Frank CFP', 'XPF'),
(290, 'Rial jemeński', 'YER'),
(291, 'Rand', 'ZAR'),
(292, 'Kwacha zambijska', 'ZMW'),
(293, 'Dolar Zimbabwe', 'ZWL');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `currency`
--
ALTER TABLE `currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
