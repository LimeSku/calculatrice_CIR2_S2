-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 02 mai 2023 à 18:23
-- Version du serveur : 5.7.24
-- Version de PHP : 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `calcweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `errors`
--

CREATE TABLE `errors` (
  `id` int(11) NOT NULL,
  `created_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `errors`
--

INSERT INTO `errors` (`id`, `created_at`) VALUES
(1, '2023-05-02'),
(2, '2023-05-02');

-- --------------------------------------------------------

--
-- Structure de la table `success`
--

CREATE TABLE `success` (
  `id` int(11) NOT NULL,
  `timeTakenMs` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `success`
--

INSERT INTO `success` (`id`, `timeTakenMs`, `created_at`) VALUES
(1, 65, '2023-05-02'),
(2, 23725, NULL),
(3, 5598, NULL),
(4, 305120, NULL),
(5, 4074, NULL),
(6, 2828, NULL),
(7, 3129, NULL),
(8, 12098, NULL),
(9, 6341, NULL),
(10, 3807, NULL),
(11, 2303, '2023-05-02'),
(12, 26997, '2023-05-02'),
(13, NULL, '2023-05-02');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `errors`
--
ALTER TABLE `errors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `success`
--
ALTER TABLE `success`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `errors`
--
ALTER TABLE `errors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `success`
--
ALTER TABLE `success`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
