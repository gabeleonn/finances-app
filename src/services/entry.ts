import { writeFileSync, readFileSync } from 'fs';
import path from 'path';
import { ICard } from '@/components/atoms/card';
import {
  ApiResponse,
  created,
  notFound,
  serverError,
  success,
  successDelete,
} from '@/interfaces/api-responses';

const writeChanges = (newData: any): void => {
  writeFileSync(
    path.join(process.cwd(), 'src', 'data', 'database.json'),
    JSON.stringify(newData)
  );
};

let database = JSON.parse(
  readFileSync(
    path.join(process.cwd(), 'src', 'data', 'database.json')
  ).toString()
);

export const addNewEntry = async (data: ICard): Promise<ApiResponse> => {
  try {
    database.push(data);
    writeChanges(database);
    return created;
  } catch (error) {
    return serverError;
  }
};

export const updateEntry = async (
  id: string,
  data: ICard
): Promise<ApiResponse> => {
  try {
    const filtered = database.filter((entry: any) => entry.id === id);
    if (filtered.length > 0) {
      const newDatabase = database.map((entry: any) => {
        if (entry.id === id) {
          return { ...data, id };
        }
        return entry;
      });
      database = newDatabase;
      writeChanges(newDatabase);
      return success(data);
    }
    return notFound;
  } catch (error) {
    return serverError;
  }
};

export const deleteEntry = async (id: string): Promise<ApiResponse> => {
  try {
    const filtered = database.filter((entry: any) => entry.id === id);
    if (filtered.length > 0) {
      const newDatabase = database.filter((entry: any) => entry.id !== id);
      database = newDatabase;
      writeChanges(newDatabase);
      return successDelete;
    }
    return notFound;
  } catch (error) {
    return serverError;
  }
};

export const getEntries = async (): Promise<ApiResponse> => {
  try {
    return success(database);
  } catch (error) {
    return serverError;
  }
};

export const getEntry = async (id: string): Promise<ApiResponse> => {
  try {
    const filtered = database.filter((entry: any) => entry.id === id);
    if (filtered.length > 0) {
      return success(filtered[0]);
    }
    return notFound;
  } catch (error) {
    return serverError;
  }
};
