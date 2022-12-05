const { fetchBlogs } = require("../services/itemServices")

const catalogController = require("express").Router()

catalogController.get("/",async (req,res)=>{
    const blogs = await fetchBlogs()
    res.render("catalog", {blogs ,title:"Catalog Page"})
})
module.exports = catalogController