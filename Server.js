const express = require('express')
const app = express()


const DateMiddleWare = (req,res,next)=>{
    
   const date  = new Date()
   const day = date.getDay()
   const hours = date.getHours()
   if(day>=1 && day<=5 && hours>=9 && hours <=17){
    next()
   }
  else {
        res.send('we Are Closed')
    } 
}

app.get('/Home.css', (req,res)=>{
    res.sendFile(__dirname+'/Home.css')
})

app.use(DateMiddleWare)
 app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/Home.html')
 })
 app.get('/Our_Services', (req,res)=>{
    res.sendFile(__dirname+'/Our_Services.html')
 })
 app.get('/Contact_Us', (req,res)=>{
    res.sendFile(__dirname+'/Contact_Us.html')
})

app.listen(3000, err=> err? console.log(err) : console.log(`server is running on 3000...`));


