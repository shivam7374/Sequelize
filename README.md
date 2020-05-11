# Sequelize
Sequelize npm package
# DATABASEl: Sequelize Basics

## Setup Database
Open Mysql shell
```shell
$ mysql -u root
```
Inside mysql shell, create database , user and grant rigths

```mysql-sql
CREATE DATABASE sampledb1
$ create databaes sampledb1;

CREATE USER with PASSWORD samplepass1
create user sampleuser1 identified by 'samplepass1';

GRANT RIGHTS
grant all privileges on sampledb1.* to sampleuser1;
```