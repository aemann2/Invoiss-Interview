-- Setup

-- Assume DB = postgresql

-- Given the table:

CREATE TABLE something 
(
    id uuid NOT NULL,
    name  CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL,
    phone CHARACTER VARYING(255),
    birthday DATE,
    age INTEGER
);

-- create a trigger/function which will calculate the age on insert or modify given the birthday


-- So I know what this is asking, but I've never created a function / trigger in SQL and cannot seem to get the syntax right. What what follows is basically pseudocode:

-- I know PGSQL has an age() function that calculates age based on a date, and that the function should be something along the lines of this:

-- CREATE FUNCTION calculate_age(birthday date) RETURNS integer AS $$
--     SELECT EXTRACT(YEAR FROM age(cast(birthday as date))) FROM something;
-- $$ LANGUAGE SQL;

-- And the trigger should look something like this:

-- CREATE TRIGGER update_age
--     BEFORE UPDATE OR INSERT OF birthday ON something
--     EXECUTE PROCEDURE calculate_age(birthday)

INSERT INTO something(id, name, email, phone, birthday) values('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'adam', 'adam@test.com', '555-555-5555', '1-01-1950');

-- And when the above action is performed, the person's age should get added to the 'age' column of the table. 



