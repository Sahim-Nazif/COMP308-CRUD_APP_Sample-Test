const Task=require('../models/Task')


const all_tasks=(req, res)=>{

    Task.find().sort()
    .then((result)=>{
        res.render('index',{title:'All Tasks', tasks:result})
        //console.log(result)
    })
    .catch((err)=>{
         req.flash('error_msg', 'No Tasks to display')
    })
  
}


module.exports={

    all_tasks,

}

