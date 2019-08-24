BEGIN;
DROP TABLE IF EXISTS cities CASCADE;
CREATE TABLE cities (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    city  VARCHAR NOT NULL
);

INSERT INTO cities(name, city) VALUES ('Fares', 'Gaza');


COMMIT;