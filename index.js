import express from "express";
import cors from "cors";
import user from "./src/invoiceRouter.js";

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api',user)


app.listen(3005);