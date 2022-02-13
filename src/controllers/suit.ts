import express from 'express';
import prisma from '../services/db.service';

async function suit_list(req: express.Request, res: express.Response) {
  const suits = await prisma.suits.findMany();
  res
    .status(200)
    .json(suits);
}

async function suit_details(req: express.Request, res: express.Response) {
  const suit = await prisma.suits.findUnique({
    where: {
      id: parseInt(req.params?.id)
    }
  });
  res
    .status(200)
    .json(suit);
}

async function suit_create_post(req: express.Request, res: express.Response) {
  
}

async function suit_update_post(req: express.Request, res: express.Response) {
  
}

async function suit_delete_post(req: express.Request, res: express.Response) {
  
}

export {
  suit_list,
  suit_details,
  suit_create_post,
  suit_update_post,
  suit_delete_post
}