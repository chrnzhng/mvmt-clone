DROP TABLE IF EXISTS cart, users;

CREATE TABLE cart(
    id SERIAL PRIMARY KEY,
    userid INT,
    watchid INT,
    inventoryid INT,
    watchimg TEXT,
    watchname TEXT,
    watchprice INT,
    watchcolor TEXT
);

-- insert into cart (userid, watchid, inventoryid, watchimg, watchname, watchprice, watchcolor)
-- values (1, 1, 1, 'https://s3-us-west-1.amazonaws.com/mvmt-clone/1-front.jpeg', 'Gunmetal Sandstone', 135, 'Purp Nurp');

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    auth0token TEXT
);

INSERT INTO users ( firstname, lastname, auth0token )
VALUES ( 'test', 'addTest', '2k3jkl;2tjo;i;o23j4o');