//@desc get the list
//@route /api/items
//@access public

const getItemList = (req, res) => {
    res.status(200).json({ message: 'item list' })
}

//@desc add new item
//@route POST /api/items
//@access public
const addItem = (req,res)=>{
    console.log('request body', req.body);
    
    res.status(201).json({message: 'create item'})
}

//@desc get item by id
//@route /api/items
//@access public
const getItemById = (req,res)=>{
        res.status(200).json({message:`get item number ${req.params.id}`})
}

//@desc update item
//@route /api/items
//@access public
const updateItem = (req,res)=>{
    res.status(200).json({message: `update list for ${req.params.id}`})
}

//@desc delete an item
//@route /api/items
//@access public
const deleteItem = (req,res)=>{
    res.status(200).json({message: `delete item ${req.params.id}`})
}
module.exports = {getItemList, addItem, getItemById, updateItem, deleteItem}