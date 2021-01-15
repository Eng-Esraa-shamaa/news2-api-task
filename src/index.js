const express=require('express')
const News=require('./models/news2')
const newsRouter=require('./routers/news')


require('./db/mongoose')


const app=express()

app.use(express.json())

app.use(newsRouter)



const port=5000



app.listen(port,()=>console.log('server is running'))
