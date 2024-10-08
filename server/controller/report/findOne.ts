import express, { Express, Request, Response } from 'express';
import { database } from '../../database';

export const findOne: Express = express();

findOne.get('/:id', async (req: Request, res: Response): Promise<any> => {

    const idParam = req.params.id;
    const id = parseInt(idParam);

    const report = await database.report.findUnique({
        where: { id }
    });

    if (!report) {
        return res.status(404).json({ message: 'Report not found' });
    }

    res.status(200).json({
        message: 'Report found',
        report,
    });

});