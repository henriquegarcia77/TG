import express, { Express, Request, Response } from 'express';
import { database } from '../../database';

export const findAll: Express = express();

findAll.get('', async (req: Request, res: Response): Promise<any> => {

    const reports = await database.report.findMany();

    if (!reports) {
        return res.status(404).json({ message: 'Reports not found' });
    }

    res.status(200).json({
        message: 'Reports found',
        reports,
    });

});