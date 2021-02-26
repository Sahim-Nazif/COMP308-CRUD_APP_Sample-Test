const Task=require('../models/Task')

const add_task=(req, res)=>{
    
    res.render('addtask')
}
const create_task= (req, res)=>{

    const task=new Task(req.body)
    //const {taskName}=req.body
    // const existingTask=Task.findOne({taskName})
    // if (existingTask) {
    //     req.flash('error_msg', 'This task already exists')
    // }
    
    task.save()
        .then((result)=>{
            res.redirect('/')
            console.log(result)
        })
        .catch((err)=>{
            req.flash('error_msg', 'Could not add task')
            console.log(err)
        })

}

//first get the task by id, the task that is click on the index page

const get_task_byId=async (req, res, next)=>{

    await Task.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err, docs)=>{
        if (err) {
            req.flash('error_msg', 'Could not find the task')
            next(err)
        }else{
            res.render('updatetask', {task:docs})
        }
    })

}
//update the task

const update_task=async (req, res)=>{

    await Task.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true}, (err, docs)=>{
        if (err) {
            req.flash('error_msg', 'Could not update the task')
            console.log(err)
        }else{
            //req.flash('success_msg', 'Task updated successfully')
            res.redirect('/')
        }
    })
  
}

//delete a task

const delete_task=(req, res)=>{
    
    const id=req.params.id

    Task.findByIdAndDelete(id)
        .then((result)=>{

            res.redirect('/')
            
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports={
    create_task,
    add_task,
    get_task_byId,
    update_task,
    delete_task

}