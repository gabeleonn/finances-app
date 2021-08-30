import { ICard } from '@/components/atoms/card';

export interface ApiResponse {
  message?: string;
  statusCode: number;
  body?: any;
}

export const created: ApiResponse = {
  message: 'Item criado com sucesso.',
  statusCode: 201,
};

export const notFound: ApiResponse = {
  message: 'Nenhum item encontrado.',
  statusCode: 404,
};

export const badRequest = (field: string): ApiResponse => ({
  statusCode: 200,
  message: `O campo ${field} é requirido.`,
});

export const success = (data: ICard | ICard[]): ApiResponse => ({
  statusCode: 200,
  body: data,
});

export const successDelete: ApiResponse = {
  statusCode: 200,
  message: 'Item deletado.',
};

export const serverError: ApiResponse = {
  message: 'Erro no servidor',
  statusCode: 500,
};
