import express from 'express';
import prisma from '../services/db.service';

async function test_list(req: express.Request, res: express.Response) {
  const tests = await prisma.tests.findMany();
  res
    .status(200)
    .json(tests);
}

async function test_details(req: express.Request, res: express.Response) {
  const suit = await prisma.tests.findUnique({
    where: {
      id: parseInt(req.params?.id)
    }
  });
  res
    .status(200)
    .json(suit);
}

async function test_create_post(req: express.Request, res: express.Response) {
  
}

async function test_update_post(req: express.Request, res: express.Response) {
  
}

async function test_delete_post(req: express.Request, res: express.Response) {
  
}

export {
  test_list,
  test_details,
  test_create_post,
  test_update_post,
  test_delete_post
}