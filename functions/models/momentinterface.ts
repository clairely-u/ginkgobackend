import { ObjectId } from 'mongodb';

export interface Moment {
    _id?: ObjectId,
    title: string;
    date: string;
    description?: string
    //add optional picture later.
}