const mongodb = require('../db/connect'); // we connect to the db
const ObjectId = require('mongodb').ObjectId;  // String. Primary key in your application

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id); // The req.params property is an object containing properties 
                                              //  mapped to the named route “parameters”.
  // If you have the route / contacts /:id, then the “id” property is available as req.params.id
  const result = await mongodb
    .getDb()
    .db('contacts')
    .collection('contacts')
    .find({ _id: userId });  // db.collection.find(query, projection, options)
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle };