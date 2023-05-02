-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 29. 20:09
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `colorball`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `coin`
--

CREATE TABLE `coin` (
  `Coin_playerid` int(11) NOT NULL,
  `Coin_coin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `coin`
--

INSERT INTO `coin` (`Coin_playerid`, `Coin_coin`) VALUES
(1, 12),
(2, 6);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `item`
--

CREATE TABLE `item` (
  `item_itemid` int(11) NOT NULL,
  `item_name` varchar(35) COLLATE utf8_hungarian_ci NOT NULL,
  `item_kep` varchar(35) COLLATE utf8_hungarian_ci NOT NULL,
  `item_ar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `login`
--

CREATE TABLE `login` (
  `username` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `login`
--

INSERT INTO `login` (`username`, `password`) VALUES
('bance23', 'jelszo123'),
('playmaker1210', 'password123');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `player`
--

CREATE TABLE `player` (
  `player_id` int(11) NOT NULL,
  `player_name` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `player_join_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `player`
--

INSERT INTO `player` (`player_id`, `player_name`, `player_join_date`) VALUES
(1, 'bance23', '2022-11-23'),
(2, 'Playmaker1210', '2022-11-24'),
(14, 'thewarrior', '2022-12-01');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `score`
--

CREATE TABLE `score` (
  `score_id` int(11) NOT NULL,
  `score_playerid` int(11) NOT NULL,
  `score_points` int(11) NOT NULL,
  `score_date` date NOT NULL,
  `score_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `score`
--

INSERT INTO `score` (`score_id`, `score_playerid`, `score_points`, `score_date`, `score_time`) VALUES
(1, 1, 213, '2022-11-02', '05:51:12'),
(2, 2, 245, '2023-03-05', '00:10:23'),
(3, 1, 8594, '2023-03-01', '00:13:25'),
(4, 2, 400, '2023-03-20', '00:05:06'),
(5, 2, 400, '2023-03-20', '00:05:06'),
(6, 2, 400, '2023-03-21', '00:05:06'),
(7, 2, 2, '2023-03-21', '00:00:09'),
(8, 2, 1, '2023-03-21', '00:00:03'),
(9, 2, 13, '2023-03-21', '00:00:52'),
(11, 1, 1, '2023-04-03', '00:00:06'),
(12, 1, 11, '2023-04-03', '00:00:44'),
(15, 2, 213, '2023-04-29', '05:51:12'),
(16, 1, 1, '2023-04-29', '00:00:03'),
(17, 2, 2, '2023-04-29', '00:00:08'),
(18, 2, 1, '2023-04-29', '00:00:03'),
(19, 2, 1, '2023-04-29', '00:00:05'),
(20, 2, 1, '2023-04-29', '00:02:05'),
(21, 2, 3, '2023-04-29', '00:00:12'),
(22, 2, 1, '2023-04-29', '00:00:07'),
(23, 2, 1, '2023-04-29', '00:00:03');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `shop`
--

CREATE TABLE `shop` (
  `shop_playerid` int(11) NOT NULL,
  `shop_itemid` int(11) NOT NULL,
  `shop_itemowned` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `coin`
--
ALTER TABLE `coin`
  ADD KEY `Coin_playerid` (`Coin_playerid`);

--
-- A tábla indexei `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_itemid`);

--
-- A tábla indexei `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`player_id`);

--
-- A tábla indexei `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`score_id`),
  ADD KEY `score_playerid` (`score_playerid`);

--
-- A tábla indexei `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`shop_playerid`),
  ADD KEY `shop_playerid` (`shop_playerid`),
  ADD KEY `shop_itemid` (`shop_itemid`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `item`
--
ALTER TABLE `item`
  MODIFY `item_itemid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `player`
--
ALTER TABLE `player`
  MODIFY `player_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT a táblához `score`
--
ALTER TABLE `score`
  MODIFY `score_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT a táblához `shop`
--
ALTER TABLE `shop`
  MODIFY `shop_playerid` int(11) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `coin`
--
ALTER TABLE `coin`
  ADD CONSTRAINT `coin_ibfk_1` FOREIGN KEY (`Coin_playerid`) REFERENCES `player` (`player_id`);

--
-- Megkötések a táblához `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `score_ibfk_1` FOREIGN KEY (`score_playerid`) REFERENCES `player` (`player_id`);

--
-- Megkötések a táblához `shop`
--
ALTER TABLE `shop`
  ADD CONSTRAINT `shop_ibfk_1` FOREIGN KEY (`shop_playerid`) REFERENCES `player` (`player_id`),
  ADD CONSTRAINT `shop_ibfk_2` FOREIGN KEY (`shop_itemid`) REFERENCES `item` (`item_itemid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
