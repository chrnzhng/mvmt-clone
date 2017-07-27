INSERT INTO cart (
    userid,
    watchid,
    inventoryid,
    watchimg,
    watchname,
    watchprice,
    watchcolor
    )

values (
    1, $1, 2, $2, $3, $4, $5
);