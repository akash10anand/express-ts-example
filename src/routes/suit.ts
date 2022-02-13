import express from 'express';
import {
  suit_list,
  suit_details,
  suit_create_post,
  suit_update_post
} from './../controllers/suit';

const suiteRouter = express.Router();


suiteRouter.get('/', suit_list);

suiteRouter.get('/:id', suit_details);

suiteRouter.post('/create', suit_create_post);

suiteRouter.get('/:id/edit', suit_update_post);

export default suiteRouter;