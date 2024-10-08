import express, { Express, Request, Response } from 'express';
import { Problemas } from '@prisma/client';

export const listProblemas: Express = express();

listProblemas.get('', async (req: Request, res: Response): Promise<any> => {

    const problemas = Object.values(Problemas);
    res.status(200).json({ problemas });

});