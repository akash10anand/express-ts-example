import { Prisma } from '@prisma/client';
import {Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../services/db.service';

async function test_list(req: Request, res: Response) {
  const tests = await prisma.tests.findMany();
  res
    .status(200)
    .json(tests);
}

async function test_details(req: Request, res: Response) {
  const suit = await prisma.tests.findUnique({
    where: {
      id: parseInt(req.params?.id)
    }
  });
  res
    .status(200)
    .json(suit);
}

async function test_create_post(req: Request, res: Response) {
  const body = req.body;
  const testData = {
    name: body.name,
    description: body?.description
  }
  try {
    await prisma.projects.create({
      data: testData
    })
    res
      .status(200)
      .json({
        "status": "success",
        "data": testData
      })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      console.error(
        `${error}`
      )
      res
        .status(StatusCodes.CONFLICT)
        .json({
          "status": "failed",
          "message": "Non unique value",
          "meta": error?.meta
        })
    }
  }
}

async function test_update_post(req: Request, res: Response) {
  
}

async function test_delete_post(req: Request, res: Response) {
  
}

export {
  test_list,
  test_details,
  test_create_post,
  test_update_post,
  test_delete_post
}