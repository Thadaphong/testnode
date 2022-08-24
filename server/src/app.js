let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/status',function (req,res) {
   res.send('Hello nodejs server')   
})


//  การสร้าง user
app.post('/user/', function (req, res) {
    res.send('ทําการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
   })


   // แก้ไข  user
app.put('/user/:userId', function (req, res) {
    res.send('ทำการแก้ไข้ผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
   })


  // ลบ user
app.delete('/user/:userId', function (req, res) {
 res.send('ทําการลบผุ้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
})









let port = 8081
app.listen(port,function(){

    console.log('Server running on :'+ port)
})




// app.get('/hello/:person', function (req,res) {
//     console.log('hello - ' + req.params.person)
//     res.send('sey hello with ' + req.params.person)
//    })
   
// // get user by id
// app.get('/user/:userId', function (req, res) {
//     console.log('hello - ' + req.params.userId)
//     res.send('ดูข้อมูลผู้ใช้งาน' + req.params.userId)
//    })

//    // get all user
// app.get('/users', function (req, res) {
//     res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
//    })