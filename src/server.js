import express from "express";
import products from "./routes/products";
import cart from "./routes/cart";
import index from "./routes/index";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/carrito", cart);
app.use("/api/productos", products);
app.use("/", index);

app.listen(port, () => {
  console.log(`"server is running on port ${port}`);
});
