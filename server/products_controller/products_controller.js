module.exports = {
  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

     dbInstance.allWatches()
      .then( products => res.status(200).send( products ) )
      .catch( () => res.status(500).send() );
  },

};