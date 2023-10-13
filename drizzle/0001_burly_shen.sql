CREATE TABLE `states` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256),
	CONSTRAINT `states_id` PRIMARY KEY(`id`),
	CONSTRAINT `name_idx` UNIQUE(`name`)
);
