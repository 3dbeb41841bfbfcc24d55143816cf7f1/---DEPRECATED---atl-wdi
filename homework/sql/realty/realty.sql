1. SELECT AVG (sqft) FROM office;
2. SELECT COUNT(*) FROM apartment;
3. SELECT COUNT(*) from apartment WHERE occupied=FALSE;
4. SELECT company_name FROM office;
5. SELECT * FROM storefront WHERE kitchen=TRUE;
6. SELECT * FROM storefront WHERE sqft=(SELECT MAX(sqft) FROM storefront) AND outdoor_seating=TRUE;
7. SELECT * FROM office WHERE sqft=(SELECT MIN(sqft) FROM office);
8. SELECT * FROM office WHERE cubicle_number=(SELECT MIN(cubicle_number) FROM office);
9. SELECT * FROM office WHERE cubicle_number=(SELECT MAX(cubicle_number) FROM office) AND bathroom_number=(SELECT MAX(bathroom_number) FROM office);
