import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getEntries } from '@/services/entry';
import { ICard } from '@/components/atoms/card';
import { categoryCases } from '@/utils/constants';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'GET') {
    const response = await getEntries();
    const data = response.body;
    let ins = 0;
    let outs = 0;
    let essentials = 0;
    let personal = 0;
    let investments = 0;
    data.forEach((entry: ICard) => {
      if (entry.type === 'in') {
        ins += Number(entry.value);
      } else {
        outs += Number(entry.value);
        if (categoryCases.essentials.includes(entry.category)) {
          essentials += Number(entry.value);
        } else if (categoryCases.personal.includes(entry.category)) {
          personal += Number(entry.value);
        } else if (categoryCases.investments.includes(entry.category)) {
          investments += Number(entry.value);
        }
      }
    });
    return res
      .status(response.statusCode)
      .send({ ins, outs, essentials, personal, investments });
  }
  return res.status(405).send({ error: 'Método não implementado' });
};

export default handler;
