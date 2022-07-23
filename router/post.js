const express=require("express");
const router=express.Router();
const User=require('../model/User')

router.get('/', async (req,res)=>{
    try {
        const listuser= await User.find();
        return res.status(200).json({data:listuser});
    } 
    catch (error) {
        res.json({message:error})
    }
})

router.post('/',async(rep,res)=>{
    try {
        const user = await User.create(req.body);
        await user.save();
        return res.status(200).json({data:user});
    } 
    catch (error) {
        res.json({message:error})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.status(200).json({data:user});            
    } catch (error) {
        res.json({message:error})
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        return res.status(200).json({ data:{message:"Đã xoá thành công!"}});
    } 
    catch (error) {
        res.json({message:error})
    }
  });

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        return res.status(200).json({
            data:user
        });
    }  
    catch (error) { 
        res.json({message:error}) 
    }
 });

module.exports=router