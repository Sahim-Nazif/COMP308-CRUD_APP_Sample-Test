const Task=require('../models/Task')


const create_Task= (req, res)=>{

    const task=new Task(req.body)
    const {taskName}=req.body
    const existingTask=Task.findOne({taskName})
    if (existingTask) {
        req.flash('error_msg', 'This task already exists')
    }
    task.save((err, tasks)=>{

        if (err){
            req.flash('error_msg', err.message)
        }
        res.redirect('/')
    })

}

module.exports={
    create_Task
}