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

  },
    getCart: (req, res, next ) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_cart()
    .then( (products) => res.status(200).send( products ) )
    .catch( () => res.status(500).send() )
  }

}