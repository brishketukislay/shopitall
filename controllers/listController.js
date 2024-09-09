const asyncHandler = require('express-async-handler');
const ItemList = require('../models/itemModel')
//@desc get the list
//@route /api/items
//@access public

const getItemList = asyncHandler(async(req, res) => {
    const itemList = await ItemList.find();
    res.status(200).json(itemList)
})

//@desc add new item
//@route POST /api/items
//@access public
const addItem = asyncHandler(async(req,res)=>{
    console.log('request body', req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All fields are mandatory');
    }
    const newItem = await ItemList.create({
        name, email, phone
    });
    res.status(201).json(newItem);
})

//@desc get item by id
//@route /api/items
//@access public
const getItemById = asyncHandler(async(req,res)=>{
    const item = await ItemList.findById(req.params.id);
    if(!item){
        res.status(404);
        throw new Error('Item not found');
    }
        res.status(200).json(item);
})

//@desc update item
//@route /api/items
//@access public
const updateItem = asyncHandler(async(req,res)=>{
    const item = await ItemList.findById(req.params.id);
    if(!item){
        res.status(404);
        throw new Error('Item not found');
    }
    const updateItem = await ItemList.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updateItem)
})

//@desc delete an item
//@route /api/items
//@access public
const deleteItem = asyncHandler(async(req,res)=>{
    const item = await ItemList.findById(req.params.id);
    if(!item){
        res.status(404);
        throw new Error('Item not found');
    }
    await ItemList.deleteOne();
    res.status(200).json(item);
})
module.exports = {getItemList, addItem, getItemById, updateItem, deleteItem}