--liquibase formatted sql
--changeset Siva:12
--comment: Initial creation of table Siva
--validCheckSum: ANY
Create Table CBA_SIVA_GIT (
   ID INTEGER,
   NAME VARCHAR(10),
   PRIMARY KEY (ID)
);
 
--rollback drop table CBA_SIVA_GIT;