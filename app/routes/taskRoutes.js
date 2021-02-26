const express=require('express')
const router=express.Router()
const {create_task, 
        add_task,
        get_task_byId, 
        update_task, 
        delete_task}=require('../controllers/taskController')



router.get('/delete/:id', delete_task)
router.get('/addtask', add_task)
router.post('/addtask', create_task)
router.get('/update/:id', get_task_byId)
router.post('/update/:id', update_task)





module.exports=router;