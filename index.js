const express = require("express")
const fs = require("fs")

 const app= express();
app.use(express.json())

app.get("/",(req,res)=> {
    res.send("Yashika")
})

app.get("/welcome", (req, res)=> {
    console.log(req.query)
    const {name, age} = req.query
    const user = req.query.name || "user"
    const str= age > 18 ? "elegible" : "Not elegible"
    res.send("Welcome"+ user+ " " + str)
})

//http://localhost:8000/lecture/2
app.get("/lecture/:lecture_day", (req, res)=> {
    console.log(req.params)
    fs.readFile(`../day_${req.params.lecture_day}/lecture.txt`)
    //res.send("lectures notes for the day" + req.params.lecture_id)
    res.send(data)
})


app.get("/lecture", (req, res)=> {
res.send("lecture notes...")
})

app.post("/lecture", (req,res)=> {
    console.log(req.url+" "+ req.method)
    res.send("lecture notes...")
})

app.get("/posts", (req, res) => {
    fs.readFile("./posts.json", "utf-8", (err, posts) => {
        if(err){
            return res.send("something went wrong, try again")
        }
        res.send(posts)
    })
})



app.listen(8080,()=> {
    console.log("listening on port 8000")
})