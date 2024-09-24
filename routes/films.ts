import { Router } from "express";

import path from "node:path";

import { Film} from "../types";

import { serialize, parse } from "../utils/json";

const router = Router();

const jsonDbPath = path.join(__dirname, "/../data/pizzas.json");


const defaultPizzas: Film[] = [
    {
      id: 1,
      title: "4 fromages",
     director : "ayoub",
     duration: 4,
    },
    {
        id: 2,
        title: "4 fromages",
       director : "ayoub",
       duration: 4,
    },
    {
        id: 1,
        title: "4 fromages",
       director : "ayoub",
       duration: 4,
    },
  ];

  
  router.get("/", (req, res) => {
    if (req.query.order && typeof req.query.order !== "string") {
      return res.sendStatus(400);
    }})


export default router;