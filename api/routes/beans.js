const { Router } = require("express");
const router = new Router();
const fs = require("fs");
const uuid = require("uuid-random");
const { generateOrderNr, generateETA } = require("../utils/utils");
const DataStore = require("nedb-promise");

const Orderdata = new DataStore({
  filename: "db/orders.db",
  autoload: true,
});
console.log(Orderdata);

router.get("/", async (req, res) => {
  const menu = fs.createReadStream("data/menu.json");
  menu.pipe(res);
});

router.post("/order/:uuid", async (req, res) => {
  let uuid = req.params.uuid;
  const order = {
    eta: generateETA(),
    orderNr: generateOrderNr(),
    items: req.body.items,
    total: req.body.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
    timeStamp: Date.now(),
    id: uuid,
  };
  const neworder = await Orderdata.insert(order);
  console.log(neworder);

  setTimeout(() => {
    res.send(JSON.stringify(neworder));
  }, 2000);
});

router.get("/key", (req, res) => {
  const key = {
    key: uuid(),
  };
  res.send(JSON.stringify(key));
});

router.get("/profile/:uuid", async (req, res) => {
  const id = req.params.uuid;
  const getorders = await Orderdata.find({ id: id });
  ///hämta dokumentet med nyckel uuid i databasen
  console.log(getorders);

  //Skicka tillbaka till frontend
  res.status(200).send(JSON.stringify(getorders));
});

module.exports = router;
