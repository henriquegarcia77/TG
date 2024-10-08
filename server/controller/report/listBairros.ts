import express, { Express, Request, Response } from 'express';
import { Bairros } from '@prisma/client';

export const listBairros: Express = express();

listBairros.get('', async (req: Request, res: Response): Promise<any> => {

    const bairros = Object.values(Bairros);
    res.status(200).json({ bairros });

});