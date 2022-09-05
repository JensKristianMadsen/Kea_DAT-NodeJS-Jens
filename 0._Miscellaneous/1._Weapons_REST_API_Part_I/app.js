//Terminal : npm install



// import express: require .!OBS import in a single line
const app = require("express")();
const weapons = [
   {
      name: "Automatic rifles"
   },
   {
      name: "Rifles"

   }
];

// route     // callback function. info: (req, res) === (request, response).
//GET ALL weapons
app.get("/weapons", (req, res) => {

   res.send(weapons);
});


app.get("/weapons/:id", (req, res) => {
   const index = req.params.id - 1;

 if (weapons[index] !== undefined) {
      res.send(weapons[index])
 }

});





//node app.js
app.listen(8080, () => {
   console.log("Server is running on port", 8080);
});

