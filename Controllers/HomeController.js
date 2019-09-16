const axios = require('axios');

exports.getHomePage = (req,res) => {
    res.render('index',{title:'Speech To Text'});
}



