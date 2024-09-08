const express = require('express');
const router = express.Router();
const {getItemList, addItem, getItemById, updateItem, deleteItem} = require('../controllers/listController')

//get item list
router.route('/').get(getItemList).post(addItem);

// for adding a new item in the list
// router.route('/');

router.route('/:id').get(getItemById).put(updateItem).delete(deleteItem);

// router.route('/:id');

// router.route('/:id');

module.exports = router;