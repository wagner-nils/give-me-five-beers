import { model } from 'mongoose';

import { todoSchema, userSchema } from '../schema/index';

const TodoModel = model('todo', todoSchema);
const UserModel = model('user', userSchema);

export { TodoModel, UserModel };
