CREATE DATABASE crudBook;

/* se va a ser usa de la base de datos */
USE crudBook;

/* cree la tabla si esta no existe */
CREATE TABLE IF NOT EXISTS `books`(
    `id` INT(10) unsigned NOT NULL AUTO_INCREMENT,
    `author` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    `titulo` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL, 
    `editorial`  VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    `edicion`  VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    `ISBN`  VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `books_ISBN_unique` (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;

SHOW tables;

DESCRIBE books;