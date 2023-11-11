import { model } from 'mongoose';

import { todoSchema, userSchema, barSchema } from '../schema/index';

const TodoModel = model('todo', todoSchema);
const UserModel = model('user', userSchema);
const BarModel = model('bar', barSchema);

export { TodoModel, UserModel, BarModel };
