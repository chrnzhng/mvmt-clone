DROP TABLE IF EXISTS cart, users;

CREATE TABLE cart(
    id serial primary key,
    userid int,
    watchid int,
    inventoryid int,
    watchimg text,
    watchname text,
    watchprice int,
    watchcolor text
);

-- insert into cart (userid, watchid, inventoryid, watchimg, watchname, watchprice, watchcolor)
-- values (1, 1, 1, 'https://s3-us-west-1.amazonaws.com/mvmt-clone/1-front.jpeg', 'Gunmetal Sandstone', 135, 'Purp Nurp');

CREATE TABLE users(
    id serial primary key,
    firstname text,
    lastname text,
    auth0token text
);

insert into users ( firstname, lastname, auth0token )
values ( 'test', 'addTest', '2k3jkl;2tjo;i;o23j4o');