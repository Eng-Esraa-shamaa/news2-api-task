const express=require('express')
const News=require("../models/news2")
const router=new express.Router()



// router.post('/news',(req,res)=>{
//     console.log(req.body)
//     res.send('running')
// })
router.post('/news',(req,res)=>{
    const news=new News(req.body)
    news.save().then(()=>{
        res.status(200).send(news)
    }).catch((e)=>
    res.status(400).send(e)
)
})




router.get('/news',(req,res)=>{
    News.find({}).then((news)=>{
        res.status(200).send(news)
    }).catch((e)=>{
        res.status(500).send('internal server error')
    })
})

// router.get('/news/:id',(req,res)=>{
//     const _id=req.params.id
//     user.findById(_id).then((news)=>{
//         if(!news){
//             return res.status(400).send("unable to find user")
//         }
//         res.status(200).send(news)
//     }).catch((e)=>{
//         res.status(500).send('internal server error')
//     })
// })




module.exports= router