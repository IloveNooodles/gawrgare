// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sortDate } from '@/utils/date';
import * as fs from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';

type Data = {
  title: string;
  description: string;
  githubLink: string;
  websiteLink?: string;
  techStackUsed: string;
  category: string;
  date: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  const jsonDir = join(process.cwd(), 'json');
  const fileDir = join(jsonDir, '/projects.json');
  const fileContents = await fs.readFile(fileDir, 'utf-8');

  const transformedData = eval(fileContents);
  const sortedData = transformedData.sort(sortDate);

  res.status(200).json(transformedData);
}
