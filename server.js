if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    //.parse() 
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/mybrary", 
				 {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
// mongoose.connect(process.nextTick.DATABASE_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })
// const db = mongoose.connection 
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

// app.listen(process.env.PORT || 2000)
app.listen(process.env.PORT || 2000, process.env.IP, function(){
	console.log("Server has started");
});