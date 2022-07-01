import express from 'express';
import { getClient } from '../src/db'
import { ObjectId  } from 'mongodb';
import { Moment } from '../models/momentinterface';


const routes = express.Router();

routes.get('/moments', async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db()
                                .collection<Moment>('memories')
                                .find().toArray();
        res.json(results);
    } catch (err) {
        console.error('Error', err)
        res.status(500).json({message:" Whoops, something went wrong here."})
    }
})

routes.post('/moments', async (req, res) => {
    const moment = req.body as Moment;
    try {
        const client = await getClient();
        await client.db()
                    .collection<Moment>('memories')
                    .insertOne(moment);
        res.status(201).json(moment);
    } catch (err) {
        console.error('Error', err);
        res.status(500).json({message:'Whoops, something went wrong. Could not add moment.'});
    }
})