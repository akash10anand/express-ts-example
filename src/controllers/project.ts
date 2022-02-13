import express from 'express';
import prisma from './../services/db.service';


async function project_list(req: express.Request, res: express.Response) {
  const projects = await prisma.projects.findMany();
  res
    .status(200)
    .json(projects);
}

async function project_details(req: express.Request, res: express.Response) {
  const project = await prisma.projects.findUnique({
    where: {
      id: parseInt(req.params?.id)
    }
  });
  res
    .status(200)
    .json(project);
  
}

async function project_suits(req: express.Request, res: express.Response) {
  const suits = await prisma.suits.findMany({
    where: {
      project_id: parseInt(req.params?.project_id)
    }
  });
  res
    .status(200)
    .json(suits);
  
}

async function project_create_post(req: express.Request, res: express.Response) {
  
}

async function project_update_post(req: express.Request, res: express.Response) {
  
}

async function project_delete_post(req: express.Request, res: express.Response) {
  
}

export {
  project_list,
  project_details,
  project_suits,
  project_create_post,
  project_update_post,
  project_delete_post
}