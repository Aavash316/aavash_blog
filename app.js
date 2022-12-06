const express = require('express') 
const parser = require('body-parser') 

const ejs = require('ejs')

const _ = require('lodash')

const homeStartingContent = 'asdfsdfasdfasdfasdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf'

const aboutContent = 'dfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfdfasdfasdfasdfasdfsdfsdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf'

const contactContent = 'ghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjkghjk'



const app = express()


var posts = []


app.set('view engine' , 'ejs')

app.use(parser.urlencoded({extended : true}))

app.use(express.static('public'))

app.get('/',(req, res) =>{
    res.render('home.ejs',{homeStartingContent   : homeStartingContent ,
         posts : posts})
    
})

app.get('/about' , (req,res)=>{
    res.render('about.ejs',{aboutContent:aboutContent})
})


app.get('/contact',(req,res) => {
    res.render('contact.ejs',{contactContent :contactContent})
}) 

app.get('/compose',(req,res) =>{
    res.render('compose.ejs')
})


app.post('/compose', (req,res)=>{
    const   post = {title : req.body.title , post :req.body.post}
    posts.push(post)  
    
    res.redirect('/')
})

app.get('/posts/:blog' , (req,res) =>{
    posts.forEach((blog)=>{
        if(_.lowerCase(blog.title) == _.lowerCase(req.params.blog)){
            const title = blog.title
            const post = blog.post
            res.render('post.ejs' , {title : title , post : post})
        }
    })
})

app.listen(5000, () =>{

    console.log('listening on port 5000')
}) 