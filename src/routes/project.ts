import express from 'express';
import {
  project_list,
  project_details,
  project_suits,
  project_create_post,
  project_update_post
} from './../controllers/project';

const projectRouter = express.Router();


projectRouter.get('/', project_list);

projectRouter.get('/:id', project_details);

projectRouter.get('/:project_id/suits', project_suits);

projectRouter.post('/create', project_create_post);

projectRouter.get('/:id/edit', project_update_post);

export default projectRouter;