const express = require("express");
const db = require('./models');

const product = require('./router/productRouter')
const commande = require('./router/commandeRouter')
// const admin = require('./routes/admin')
// const seller = require('./routes/seller')
// const user = require('./routes/user')
// const cart = require('./routes/cart')
// const wishList = require('./routes/wishList')


const app = express();
const PORT = 8000
const cors=require('cors')


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));


app.use("/api/product",product);
app.use("/api/commande",commande)
// app.use("/admin",admin)
// app.use("/seller",seller)
// app.use("/user",user)
// app.use("/cart",cart)
// app.use("/wishList",wishList)


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port 8000");
  });
}).catch(error => {
  console.error("Error syncing the database:", error);
});