import { Request, Response } from 'express';

import * as userModel from '../model/user.model';

const getUser = async (req: Request, res: Response) => {
  try {
    const {
      params: { userId },
    } = req;
    const data = await userModel.getUser(userId);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { body: user } = req;

    console.log(user);
    const userId = await userModel.loginUser(user);

    res.status(201).send({ userId });
  } catch (error) {}
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const data = await userModel.createUser(body);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
};

export { getUser, loginUser, createUser };
