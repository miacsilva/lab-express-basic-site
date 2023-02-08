const express = require ("express")
const app = express ()

//Link the public folder (images, css, sounds, etc)
app.use(express.static("public"))


/* app.get("/home", (request, response) => {
    response.send("<h1>Welcome to the Homepage</h1>")
}) */

app.get("/home", (request, response) => {// linkar o ficheiro html
    response.sendFile(__dirname +"/views/home.html")
})
app.get("/about", (request, response) => {
    response.sendFile(__dirname +"/views/about.html")
})
app.get("/works", (request, response) => {
    response.sendFile(__dirname +"/views/works.html")
})
app.get("/photo-gallery", (request, response) => {
    response.sendFile(__dirname +"/views/photo-gallery.html")
})

app.listen(3000, () => console.log ("Server running on port 3000")) //port number and callback function that triggers 
