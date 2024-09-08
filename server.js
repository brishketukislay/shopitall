const express = require('express');
const app = express();
// to parse PUT json 
app.use(express.json());

// app.get('/',(req,res)=>{
//     res.status(200).json({message:'home page'})
// })

app.use('/api/items', require('./routes/appRoutes'));

app.listen(8000,()=>{
    console.log('app working');
})