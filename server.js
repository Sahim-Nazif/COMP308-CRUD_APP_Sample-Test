const express=require('express')
const dotenv=require('dotenv');
const morgan=require('morgan');
const compress=require('compression')
const app=express()



dotenv.config();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views', './app/views');
app.set('view engine', 'ejs');



if (process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
    console.log('the app is in development phase')

} else if (process.env.NODE_ENV==='production') {

    app.use(compress());
    console.log('the app is in production phase ')
}



app.use(express.static('public/css'));


app.listen(process.env.PORT , ()=>{

    console.log(`The app is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT }`)

})


