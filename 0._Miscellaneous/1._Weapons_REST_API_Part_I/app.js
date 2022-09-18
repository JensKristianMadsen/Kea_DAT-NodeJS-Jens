//Terminal : npm install

const express = require("express");
const app = express();

app.use(express.json());

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

app.post("/weapons", (req,res) => {

   const weapon = req.body;

   // Output weapon book to the console for debugging
   console.log(weapon);
   weapons.push(weapon);
   res.send("Weapon is added to the datase");


});

app.put("/weapons/:id", (req,res) => {

   const weapon = req.body;

  const bil = "string";

console.log(!!bil)

   // Output weapon book to the console for debugging
   console.log(weapon);
   weapons[+req.params.id -1] =weapon;
   res.send("Weapon is added to the datase");


});

app.delete("/weapons/:id", (req,res) => {



   weapons.splice(0,+req.params.id -1);
   res.send("Weapon is added to the datase");


});


//node app.js
app.listen(8080, () => {
   console.log("Server is running on port", 8080);
});

