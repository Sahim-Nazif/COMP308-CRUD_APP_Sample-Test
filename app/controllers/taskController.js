const Task=require('../models/Task')


const create_Task= (req, res)=>{

    const task=new Task(req.body)
    const {taskName}=req.body
    const existingTask=Task.findOne({taskName})

}