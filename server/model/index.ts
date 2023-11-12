import { model } from 'mongoose';

import {
  todoSchema,
  userSchema,
  barSchema,
  choiceSchema,
} from '../schema/index';

const TodoModel = model('todo', todoSchema);
const UserModel = model('user', userSchema);
const BarModel = model('bar', barSchema);
const ChoiceModel = model('choice', choiceSchema);

export { TodoModel, UserModel, BarModel, ChoiceModel };
