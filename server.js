import express from "express";
import { productsRouter } from "./routes/products.js";
import { authRouter } from "./routes/auth.js";

const PORT = 8000;

const app = express();

app.use(express.json());

app.use(express.static("public"));
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);

app
  .listen(PORT, () => console.log(`Server is running on the port ${PORT}`))
  .on("error", (err) => {
    console.error("Failed to start server", err);
  });
