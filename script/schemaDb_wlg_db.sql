--
-- Database: wlg_db
--

CREATE DATABASE wlg_db;

-- ENTITIES

--
-- Schema entity devices
--

CREATE TABLE IF NOT EXISTS "devices" (
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity gps
--

CREATE TABLE IF NOT EXISTS "gps" (
	Imei numeric  NOT NULL,
	Models varchar(130) ,
	SN numeric  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity sim
--

CREATE TABLE IF NOT EXISTS "sim" (
	SimNo numeric  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation 1:m _gps Devices - GPS
ALTER TABLE devices ADD COLUMN _gps INTEGER  REFERENCES "gps"(_id);

-- relation 1:m _sim Devices - Sim
ALTER TABLE devices ADD COLUMN _sim INTEGER  REFERENCES "sim"(_id);
