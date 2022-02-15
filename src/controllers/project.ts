import { Request, Response } from 'express';
import prisma from './../services/db.service';


async function project_list(req: Request, res: Response) {
  const projects = await prisma.projects.findMany();
  res
    .status(200)
    .json(projects);
}

async function project_details(req: Request, res: Response) {
  const project = await prisma.projects.findUnique({
    where: {
      id: parseInt(req.params?.id)
    }
  });
  res
    .status(200)
    .json(project);
}

async function project_suits(req: Request, res: Response) {
  const suits = await prisma.suits.findMany({
    where: {
      project_id: parseInt(req.params?.project_id)
    }
  });
  res
    .status(200)
    .json(suits);

}

async function project_create_post(req: Request, res: Response) {
  const body = req.body;
  console.log(body);
  await prisma.projects.create({
    data: {
      name: body.name,
      description: body?.description
    }
  })
  res
    .status(200)
    .json({ "msg": "Project created succesfully." })
}

async function project_update_post(req: Request, res: Response) {

}

async function project_delete_post(req: Request, res: Response) {

}

export {
  project_list,
  project_details,
  project_suits,
  project_create_post,
  project_update_post,
  project_delete_post
}