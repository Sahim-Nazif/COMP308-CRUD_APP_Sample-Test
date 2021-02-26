const express=require('express')
const router=express.Router()
const {all_tasks}=require('../controllers/indexController')

router.get('/', all_tasks)


module.exports=router;