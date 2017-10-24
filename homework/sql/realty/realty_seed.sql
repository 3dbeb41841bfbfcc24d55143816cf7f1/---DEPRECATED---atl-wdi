INSERT INTO apartment (id, apt_number, bedroom_number, bathroom_number, address, tenant, occupied, sqft, price) VALUES (DEFAULT, 602, 2, 2, '123 Jones Drive', 'Steve Holt', TRUE, 800, 1250);
INSERT INTO apartment (id, apt_number, bedroom_number, bathroom_number, address, tenant, occupied, sqft, price) VALUES (DEFAULT, 603, 3, 2, '124 Jones Drive', 'Gob Bluth', TRUE, 1000, 1700);

INSERT INTO office (id, office_number, floor_number, sqft, cubicle_number, bathroom_number, address, company_name, occupied, price) VALUES (DEFAULT, 101, 14, 12000, 300, 14, '321 Jones Boulevard', 'Bluth Company', FALSE, 75000);  
INSERT INTO office (id, office_number, floor_number, sqft, cubicle_number, bathroom_number, address, company_name, occupied, price) VALUES (DEFAULT, 103, 5, 8000, 125, 7, '323 Jones Boulevard', 'Bob Loblaw, Atty @ Law', FALSE, 35000);

INSERT INTO storefront (id, address, occupied, price, kitchen, sqft, owner, outdoor_seating) VALUES (DEFAULT, '1200 Lighthouse Road', TRUE, 4000, TRUE, 3000, 'George Michael', FALSE);
INSERT INTO storefront (id, address, occupied, price, kitchen, sqft, owner, outdoor_seating) VALUES (DEFAULT, '1204 Lighthouse Road', FALSE, 3000, FALSE, 2500, 'Jimbo', TRUE);  

