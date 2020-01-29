var express=require("express"); 
var bodyParser=require("body-parser"); 
  
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/newdb'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 

}) 

var app=express() 
 
  
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
  
app.post('/details', function(req,res){ 
    var agentId = req.body.agentId; 
    var insuranceCompany =req.body.insuranceCompany; 
    var product = req.body.product; 
    var customerName =req.body.customerName; 
    var customerEmail =req.body.customerEmail; 
    var premiumFreq =req.body.premiumFreq; 
    var policyNo =req.body.policyNo; 
    var premiumAmt =req.body.premiumAmt; 
    var yearly =req.body.yearly; 
  
    var data = { 
        "agentId":agentId,
        "insuranceCompany": insuranceCompany, 
        "product":product, 
        "customerName":customerName, 
        "customerEmail":customerEmail,
         "premiumFreq":premiumFreq,
         "policyNo":policyNo,
         "premiumAmt":premiumAmt,
         "yearly":yearly
    } 
db.collection('details').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
    return res.redirect('success.html'); 
   
})  

  
app.get('/',function(req,res){ 
 
    res.set({ 
        'Access-control-Allow-Origin': '*'
        }); 
    return res.redirect('index.html'); 
    }).listen(3000) 
      
      
    console.log("server listening at port 3000"); 