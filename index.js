require('dotenv').config(); // Load environment variables from .env

const express = require("express");
const cors = require('cors');
const db = require('./models');

const productRouter = require('./router/productRouter');
const commandeRouter = require('./router/commandeRouter');
// const adminRouter = require('./router/adminRouter');
// const sellerRouter = require('./router/sellerRouter');
// const userRouter = require('./router/userRouter');
// const cartRouter = require('./router/cartRouter');
// const wishListRouter = require('./router/wishListRouter');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/product", productRouter);
app.use("/api/commande", commandeRouter);
// app.use("/api/admin", adminRouter);
// app.use("/api/seller", sellerRouter);
// app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/wishList", wishListRouter);

db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error("Error syncing the database:", error);
  });
