 const express = require("express");
 const bodyParser = require("body-parser");
 const app = express();

 app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res)
{
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var W = Number(req.body.num1);
  var H = Number(req.body.num2);
  Hm = (H*H);
  var result = W/Hm;
  res.send("Your BMI is " + result + " kg/m^2");
});

app.listen(3000, function()
{
  console.log("Server has started on port 3000");
});
