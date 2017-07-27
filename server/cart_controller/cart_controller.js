module.exports = {
    addToCart: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    let product = req.body;
    console.log("PRODUCT", product);

    dbInstance.post_cart([
        product.watchid,
        // product.inventoryid,
        product.watchimg,
        product.watchname,
        product.watchprice,
        product.watchcolor
      ])
    .then( () => res.status(200).send("AYYEEE" ) )
    .catch( () => res.status(500).send() )

  }
}