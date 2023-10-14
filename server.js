const express = require('express')
const app = express()
const Bookmark = require('./models/bookmarkModel')
const mongoose = require('mongoose')
 

app.use(express.json())
// routes 

app.get('/', (req, res) =>{
    res.send('hello node API')
})

app.post('/addBookmark', async(req, res)=>{
    try {
        const bookmark = await Bookmark.create(req.body)
        res.status(200).json(bookmark)
    }catch(error){
        console.log(error.message)
        res.status(500).json({mesage: error.message})
    }
})

app.get('/bookmarks', async(req, res)=>{
    try{
        const bookmarks = await Bookmark.find({});
        res.status(200).json(bookmarks)
    }catch(err){
        res.status(500).json({message: err.mesage})
    }
})

app.delete('/bookmark/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const bookmark = await Bookmark.findByIdAndDelete(id);
        if(!bookmark){
            return res.status(404).json({message: `Cannot find any product with Id ${id}`})
        }else{ 
            res.status(200).json(bookmark)
        }
    }catch(err){
        res.status(500).json({message: err.mesage})
    }
})

mongoose.
connect('mongodb+srv://fasanmiadenike:FxDbA3opcWlnVTXG@newsapi.hjwt7py.mongodb.net/news-api?retryWrites=true&w=majority')
.then(() =>{
    console.log('Connected to DB')
    app.listen(3000, ()=>{
        console.log('node API app is running on port 3000')
    })
}).catch((err)=>{
    console.log(err)
})