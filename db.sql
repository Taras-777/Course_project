SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;


CREATE TABLE IF NOT EXISTS `mydb`.`private_investor` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `mydb`.`business_incubator` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `number_of_seats` INT NOT NULL,
    `address` VARCHAR(45) NOT NULL,
    `website` VARCHAR(45) NOT NULL,
    `private_investor_id` INT NOT NULL,
    PRIMARY KEY (`id`, `private_investor_id`),
    INDEX `fk_business_incubator_private_investor1_idx` (`private_investor_id` ASC) VISIBLE,
    CONSTRAINT `fk_business_incubator_private_investor1`
FOREIGN KEY (`private_investor_id`)
REFERENCES `mydb`.`private_investor` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `mydb`.`startup` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NOT NULL,
    `business_model` VARCHAR(45) NOT NULL,
    `competitors` VARCHAR(45) NULL,
    `marketing_strategy` VARCHAR(45) NULL,
    `amount_of_investment` INT NOT NULL,
    `website` VARCHAR(45) NOT NULL,
    `date_of_foundation` DATE NOT NULL,
    `twitter_address` VARCHAR(45) NOT NULL,
    `head` VARCHAR(45) NOT NULL,
    `stage_of_development` VARCHAR(45) NOT NULL,
    `business_incubator_id` INT NOT NULL,
    PRIMARY KEY (`id`, `business_incubator_id`),
    INDEX `fk_startup_business_incubator1_idx` (`business_incubator_id` ASC) VISIBLE,
    CONSTRAINT `fk_startup_business_incubator1`
FOREIGN KEY (`business_incubator_id`)
REFERENCES `mydb`.`business_incubator` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `mydb`.`investment_manager` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(45) NOT NULL,
    `id_number` VARCHAR(45) NOT NULL,
    `startup_id` INT NOT NULL,
    PRIMARY KEY (`id`, `startup_id`),
    INDEX `fk_investment_manager_startup1_idx` (`startup_id` ASC) VISIBLE,
    CONSTRAINT `fk_investment_manager_startup1`
FOREIGN KEY (`startup_id`)
REFERENCES `mydb`.`startup` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `mydb`.`application` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `startup_name` VARCHAR(45) NOT NULL,
    `round` INT NOT NULL,
    `state` VARCHAR(45) NOT NULL,
    `investment_manager_id` INT NOT NULL,
    PRIMARY KEY (`id`, `investment_manager_id`),
    INDEX `fk_application_investment_manager1_idx` (`investment_manager_id` ASC) VISIBLE,
    CONSTRAINT `fk_application_investment_manager1`
FOREIGN KEY (`investment_manager_id`)
REFERENCES `mydb`.`investment_manager` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `mydb`.`investment_company` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(45) NOT NULL,
    `website` VARCHAR(45) NOT NULL,
    `date_foundation` DATE NOT NULL,
    `office_address` VARCHAR(45) NOT NULL,
    `head_of_the_company` VARCHAR(45) NOT NULL,
    `investment_manager_id` INT NOT NULL,
    `application_id` INT NOT NULL,
    PRIMARY KEY (`id`, `investment_manager_id`, `application_id`),
    INDEX `fk_investment_company_investment_manager_idx` (`investment_manager_id` ASC) VISIBLE,
    INDEX `fk_investment_company_application1_idx` (`application_id` ASC) VISIBLE,
    CONSTRAINT `fk_investment_company_investment_manager`
FOREIGN KEY (`investment_manager_id`)
REFERENCES `mydb`.`investment_manager` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
    CONSTRAINT `fk_investment_company_application1`
FOREIGN KEY (`application_id`)
REFERENCES `mydb`.`application` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `mydb`.`round_funding` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `amount_of_investment` INT NOT NULL,
    `startup_id` INT NOT NULL,
    PRIMARY KEY (`id`, `startup_id`),
    INDEX `fk_round_funding_startup1_idx` (`startup_id` ASC) VISIBLE,
    CONSTRAINT `fk_round_funding_startup1`
FOREIGN KEY (`startup_id`)
REFERENCES `mydb`.`startup` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

insert into mydb.private_investor (first_name,last_name) value("Roman","Bondarchyk");
insert into mydb.private_investor (first_name,last_name) value("Emilie","Bashirian");
insert into mydb.private_investor (first_name,last_name) value("Natalie ","Powlowski");

insert into mydb.business_incubator(number_of_seats,address,website,private_investor_id) value (40, "Lviv","https://www.google.com",1);
insert into mydb.business_incubator(number_of_seats,address,website,private_investor_id) value (10, "Kuiv","https://www.google.com",3);
insert into mydb.business_incubator(number_of_seats,address,website,private_investor_id) value (5, "Odessa","https://www.google.com",2);

insert into mydb.startup(name,description,business_model,competitors,marketing_strategy,amount_of_investment,website,date_of_foundation,twitter_address,head,stage_of_development,business_incubator_id) value
("NNG","lorem ipsum","lorem ipsum", "google","lorem ipsum",5,"https://www.google.com", "2020:10:02", "https://twitter.com","Javier Goodwin","growth stage",1);
insert into mydb.startup(name,description,business_model,competitors,marketing_strategy,amount_of_investment,website,date_of_foundation,twitter_address,head,stage_of_development,business_incubator_id) value
("ananasiki","lorem ipsum","lorem ipsum", "google","lorem ipsum",5,"https://www.google.com", "2020:10:02", "https://twitter.com","Javier Goodwin","growth stage",1);
insert into mydb.startup(name,description,business_model,competitors,marketing_strategy,amount_of_investment,website,date_of_foundation,twitter_address,head,stage_of_development,business_incubator_id) value
("NNG","lorem ipsum","lorem ipsum", "google","lorem ipsum",5,"https://www.google.com", "2020:10:02", "https://twitter.com","Javier Goodwin","growth stage",1);
insert into mydb.investment_manager(full_name,id_number,startup_id) value ("Natalie Powlowski",471754,1);
insert into mydb.investment_manager(full_name,id_number,startup_id) value ("Irving Parker",14541,3);
insert into mydb.investment_manager(full_name,id_number,startup_id) value ("Natalie Powlowski",47754,2);

insert into mydb.application(startup_name,round,state,investment_manager_id) value("web1",1,"considered",1 );
insert into mydb.application(startup_name,round,state,investment_manager_id) value("web2",3,"considered",1 );
insert into mydb.application(startup_name,round,state,investment_manager_id) value("web3",2,"considered",3 );

insert into mydb.investment_company(description,website,date_foundation,office_address,head_of_the_company,investment_manager_id,application_id) value("lorem ipsum","https://twitter.com", "2023:10:02", "Kyiv","Natalie Powlowski",1,2);
insert into mydb.investment_company(description,website,date_foundation,office_address,head_of_the_company,investment_manager_id,application_id) value("lorem ipsum","https://twitter.com", "2023:10:02", "Lviv","Javier Goodwin",3,1);
insert into mydb.investment_company(description,website,date_foundation,office_address,head_of_the_company,investment_manager_id,application_id) value("lorem ipsum","https://twitter.com", "2023:10:02", "Odesa","Jonathan Rau",2,3);

insert into mydb.round_funding(name,amount_of_investment,startup_id) value ("KA-45717",10000,2);
insert into mydb.round_funding(name,amount_of_investment,startup_id) value ("TK-47770",1000000,3);
insert into mydb.round_funding(name,amount_of_investment,startup_id) value ("BA-45787",100000,1);
