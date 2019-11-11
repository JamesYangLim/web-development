const express = require('express');
const app = express()
const router = express.Router();

// custom middleware create
const LoggerMiddleware = (req,res,next) =>{
    // console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    console.log("Time:", new Date())
    next();
}


// // application level middleware
// app.use(LoggerMiddleware);


// // users route
// app.get('/users',(req,res)=>{
//     res.json({
//         'status':true
//     })
// })


// // save route
// app.post('/save',(req,res)=>{
//     res.json({
//         'status':true
//     })
// })

// app.listen(3002,(req,res)=>{
//     console.log('server running on port 3002')
// })

router.get("/user/:id",(req,res,next)=>{
  console.log('Request URL:', req.originalUrl)
  next()
},(req,res,next)=>{
  console.log('Request Type:', req.method)
  next()
},(req,res)=>{
  res.json({
      status:true,
      id:req.params.id
  })
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


// app.use('/',router)

// app.listen(3000,(req,res)=>{
//   console.log('server running on 3000')
// })
