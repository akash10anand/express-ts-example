import express from 'express';
import {
  test_list,
  test_details,
  test_create_post,
  test_update_post
} from '../controllers/test';

const testRouter = express.Router();


testRouter.get('/', test_list);

testRouter.get('/:id', test_details);

testRouter.post('/create', test_create_post);

testRouter.get('/:id/edit', test_update_post);

export default testRouter;