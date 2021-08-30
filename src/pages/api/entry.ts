import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { uuid } from 'uuidv4';
import {
  addNewEntry,
  deleteEntry,
  getEntries,
  getEntry,
  updateEntry,
} from '@/services/entry';
import { badRequest } from '@/interfaces/api-responses';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query;

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const response = await addNewEntry({ ...body, id: uuid() });
    return res.status(response.statusCode).send(response);
  }
  if (req.method === 'GET') {
    if (!id) {
      const response = await getEntries();
      return res.status(response.statusCode).send(response);
    }
    const response = await getEntry(id.toString());
    return res.status(response.statusCode).send(response);
  }
  if (req.method === 'PATCH') {
    if (!id) {
      return res.status(400).send(badRequest('id'));
    }
    const body = JSON.parse(req.body);
    const response = await updateEntry(id.toString(), body);
    return res.status(response.statusCode).send(response);
  }
  if (req.method === 'DELETE') {
    if (!id) {
      return res.status(400).send(badRequest('id'));
    }
    const response = await deleteEntry(id.toString());
    return res.status(response.statusCode).send(response);
  }
  return res.status(405).send({ error: 'Método não implementado' });
};

export default handler;
