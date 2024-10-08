import express, { Express, Request, Response } from "express";
import { database } from "../../database";
import { Bairros, Problemas } from "@prisma/client";

export const createReport: Express = express();

createReport.post("/", async (req: Request, res: Response): Promise<any> => {
    const { email, bairro, problema } = req.body;
    const bairros = Object.values(Bairros);
    const problemas = Object.values(Problemas);

    if (!email || !bairro || !problema) {
        return res.status(400).json({
            message: "Missing fields"
        });
    }

    if (bairro !== bairros.find((b) => b === bairro)) {
        return res.status(400).json({
            message: "Invalid bairro"
        });
    }

    if (problema !== problemas.find((p) => p === problema)) {
        return res.status(400).json({
            message: "Invalid problema"
        });
    }

    try {
        const report = await database.report.create({
            data: {
                email,
                bairro,
                problema
            }
        });

        return res.status(201).json(report);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        });
    }

});