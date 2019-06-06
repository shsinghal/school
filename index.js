const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/' , function (req,res) {
  res.render('home')
})

app.get('/home',function(req,res) {
 res.render('home');
})

app.get('/about-us',function(req,res){ 
      res.render('about');
    })
app.get('/community' , function(req,res){
    res.render('community');
})

app.get('/blog' , function(req,res){
    res.redirect('https://medium.com/@aditiagrawal_49691');
})

app.get('/contact',function(req,res)
{
  res.render('contact');
})
app.get('/be-a-trailblazer',function(req,res)
{
  res.render('be-a-trailblazer');
})


app.listen(7000,function(){
  console.log('Magic happens on port 7000');
})