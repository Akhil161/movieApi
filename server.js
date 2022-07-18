let express = require("express")
let data = require("./data.json")


let server = express();
let port = process.env.PORT || 4000;

server.get("/movies",(req,res) => {
    res.json(data);
})
server.get("/genre",(req,res) => {
    let allgenre = data.map((el) => {
        return el.genre;
    })

    let uniquegenreObjects = []
    for (let i = 0; i < allgenre.length; i++) {
        let genreId = allgenre[i]["_id"]; 
        
        let index = uniquegenreObjects.findIndex((el) => {
            return el._id== genreId;
        });

        if(index == -1){
            uniquegenreObjects.push(allgenre[i]);
        }
    }
    
    res.json(uniquegenreObjects);
})


server.listen(port,() =>{
    console.log(`listing on port number ${port}`);
});