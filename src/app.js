import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFoundHandler.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("VR Furnish API running");
});

/* bắt route không tồn tại */
app.use(notFound);

/* xử lý lỗi */
app.use(errorHandler);

export default app;
