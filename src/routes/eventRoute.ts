import { createEvent, getAllEvents, updateEvent } from '@controllers/eventController';
import { Router } from 'express';

export const eventRouter = Router();

eventRouter.route('/create').post(createEvent);
eventRouter.route('/events').get(getAllEvents);
eventRouter.route('/update/:id').put(updateEvent);
