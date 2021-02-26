const express=require('express')
const dotenv=require('dotenv');
const morgan=require('morgan');
const compress=require('compression')
const mongoose=require('mongoose')
const flash= require('connect-flash')
const taskRoutes=require('./app/routes/taskRoutes')
const indexRoutes=require('./app/routes/indexRoutes')
const session=require('express-session');
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
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(flash())
app.use((req, res, next)=>{
    res.locals.success_msg=req.flash('success_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();
    
})
//db connection
mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser:true, 
        useUnifiedTopology:true,
        useCreateIndex: true, 
      
        })
        .then(()=> console.log('Mongo-DB Connected...'))
        .catch(err => console.log(err));

app.use(express.static('public/css'));


app.use('/', indexRoutes)
app.use('/task', taskRoutes)
app.listen(process.env.PORT , ()=>{

    console.log(`The app is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT }`)

})


