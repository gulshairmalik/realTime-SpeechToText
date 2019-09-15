const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Hello Gulshair!')
});

app.listen(3000);