import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import KPI from "./models/KPI.js";

import { kpis, products, transactions } from "./data/data.js";

import kpiRoutes from "./routes/kpi.js";
import Transaction from "./models/Transaction.js";
import transactionRoutes from "./routes/transaction.js";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";
import morgan from "morgan";


//setup configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());




// ROUTES

app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);
// mongoose setup   

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).
    then(async () => {
        app.listen(PORT, () => console.log(`server port : ${PORT}`));
        //await mongoose.connection.db.dropDatabase();
        //KPI.insertMany(kpis);

        //Product.insertMany(products);

     //Transaction.insertMany(transactions);
    }

    )
    .catch((error) => console.log(`${error} is met`));