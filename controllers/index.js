const awesomeFunction = (req, res, next) => {
    res.json('Gavin Neal');
};
const anotherPerson = (req, res, next) => {
    res.json('Madison Neal'); // one of the methods for the response object (res)
};

module.exports = {awesomeFunction, anotherPerson};