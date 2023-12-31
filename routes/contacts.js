const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll); // HTTP verb, URL path/pattern, function called to handle that pattern
router.get('/:id', contactsController.getSingle); // /:id = path/pattern  (the req in the getSinlge function)
router.post('/', contactsController.createContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
