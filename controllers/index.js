const awesomeFunction = (req, res, next) => {
    res.json('Gavin Neal');
};
const anotherPerson = (req, res, next) => {
    res.json('Madison Neal');
};

module.exports = {awesomeFunction, anotherPerson};