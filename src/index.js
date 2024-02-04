const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json()); // Allows you to send JSon DATA
app.use(express.urlencoded());

app.listen(PORT, () => {
  console.log(`Running Express Server on PORT : http://localhost:${PORT}`);
});

const property = [
  {
    id : 1,
    item: "Vella Parks Estate",
    rooms: 2,
    baths: 1.5,
    price: 2500,
  },
  {
    id : 2,
    item: "bachelor Valley",
    rooms: 1,
    baths: 1,
    price: 1570,
  },
  {
    id : 3,
    item: "Lowward Avenue",
    rooms: 1,
    baths: 0.5,
    price: 750,
  },
];
app.get(
  "/Residential-Property",(req, res) => {
    res.send(property);
  }
);

app.get('/Residential-Property/:id', (req, res) => {
    const {id} = (req.params);
    res.send(property[id-1])
})

app.post("/Residential-Property", (req, res) => {
  console.log(req.body);
  property.push(req.body);
  res.send(201);
});


// GET : http://localhost:3000/Residential-Property/propery/1