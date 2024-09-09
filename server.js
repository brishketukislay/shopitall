const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const app = express();
// to parse PUT json 
connectDb();
app.use(express.json());
app.use(errorHandler)

// app.get('/',(req,res)=>{
//     res.status(200).json({message:'home page'})
// })

app.use('/api/items', require('./routes/appRoutes'));

app.listen(8000,()=>{
    console.log('app working');
})