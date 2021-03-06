import { Prisma } from '@prisma/client';
import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import prisma from '../services/db.service';

async function suit_list(req: Request, res: Response) {
  const suits = await prisma.suits.findMany();
  res
    .status(200)
    .json(suits);
}

async function suit_details(req: Request, res: Response) {
  const suit = await prisma.suits.findUnique({
    where: {
      id: parseInt(req.params?.id)
    }
  });
  res
    .status(200)
    .json(suit);
}

async function suit_create_post(req: Request, res: Response) {
  const body = req.body;
  const suiteData = {
    name: body.name,
    description: body?.description
  }
  try {
    await prisma.projects.create({
      data: suiteData
    })
    res
      .status(200)
      .json({
        "status": "success",
        "data": suiteData
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

async function suit_update_post(req: Request, res: Response) {

}

async function suit_delete_post(req: Request, res: Response) {

}

export {
  suit_list,
  suit_details,
  suit_create_post,
  suit_update_post,
  suit_delete_post
}