CREATE TABLE apartment (
    id SERIAL UNIQUE PRIMARY KEY,
    apt_number INT,
    bedroom_number INT,
    bathroom_number INT,
    address VARCHAR UNIQUE NOT NULL,
    tenant VARCHAR,
    occupied BOOLEAN,
    sqft INT,
    price INT
);


CREATE TABLE office (
    id SERIAL UNIQUE PRIMARY KEY,
    office_number INT,
    floor_number INT,
    sqft INT,
    cubicle_number INT,
    bathroom_number INT,
    address VARCHAR UNIQUE NOT NULL,
    company_name VARCHAR,
    occupied BOOLEAN,
    price INT
);

CREATE TABLE storefront (
    id SERIAL UNIQUE PRIMARY KEY,
    address VARCHAR UNIQUE NOT NULL,
    occupied BOOLEAN,
    price INT,
    kitchen BOOLEAN,
    sqft INT,
    owner VARCHAR,
    outdoor_seating BOOLEAN NOT NULL DEFAULT FALSE
);

