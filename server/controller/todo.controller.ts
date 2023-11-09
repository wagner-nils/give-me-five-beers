import { Request, Response } from 'express';

import * as todoModel from '../model/todo.model';

const getTodo = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const {
      params: { userId },
    } = req;
    const data = await todoModel.getTodo(userId);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

const postTodo = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const data = await todoModel.postTodo(body);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
};

export { getTodo, postTodo };
