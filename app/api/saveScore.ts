import type { NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { PrismaClient, Prisma } from '@prisma/client'
import { prisma } from '../../db'
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest) {
  try {

  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ message: 'Failed to save data', error }, { status: 500 });
  }
}

// const prisma = new PrismaClient()

export default withApiAuthRequired(async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body)
  const id: string = data.id
  const scoreId: string = data.scoreId
  const scores: Prisma.ScoreCreateWithoutFarmInput = data.scores

  // If no score exists create score table
  if (scoreId == undefined || scoreId == null) {
    const createScore = await prisma.farm.update({
      where: {
        id: id,
      },
      data: {
        score: {
          create: scores,
        },
      },
    })
    res.json(createScore)
  }
  // If score-table exists update it
  else {
    const updateScore = await prisma.score.update({
      where: {
        id: scoreId,
      },
      data: scores,
    })
    res.json(updateScore)
  }
})
