const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const Inventory = require("./inventorySchema.jsx");
const mongoose = require("mongoose");
// api calls can be done at http://localhost:3000/add
const mongoURI =
  //"mongodb+srv://<name>:RM3ujqehrZU55mnc@cluster0.xwczseb.mongodb.net/buyumetask";
  "place mongouri";

const PORT = 3000;

//middlewares
//app.use(bodyParser());

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("connection to mongoDB is extablished Successfully");
  })
  .catch((error) => {
    console.log("error");
  });

router.post("/add", async (req, res) => {
  const { payload } = req.body;

  try {
    if (inventory) {
      const updatedQuantity = inventory.quantity + quantity;
      await Inventory.updateOne({ productId }, { quantity: updatedQuantity });
    } else {
      const newInventory = new Inventory({ productId, quantity });
      await newInventory.save();
    }

    res.status(200).send({ message: "Product quantity added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
