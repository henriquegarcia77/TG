import express, { Router } from "express";
import { createReport } from "../controller/report/create";
import { findOne } from "../controller/report/findOne";
import { findAll } from "../controller/report/findAll";
import { listBairros } from "../controller/report/listBairros";
import { listProblemas } from "../controller/report/listProblemas";

export const reportRoutes: Router = express.Router();

reportRoutes.use("/", findAll);
reportRoutes.use("/id", findOne);
reportRoutes.use("/", createReport);
reportRoutes.use("/bairros", listBairros);
reportRoutes.use("/problemas", listProblemas);