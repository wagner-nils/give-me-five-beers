import { Router } from 'express';

import * as userController from './controller/user.controller';
import * as todoController from './controller/todo.controller';

const router = Router();

router.get('/', (req, res) => {
  res.send('hello from router, i love typescript');
});

router.get('/user/:userId', userController.getUser);
router.post('/user', userController.createUser);

router.get('/user/:userId/todo', todoController.getTodo);
router.post('/todo', todoController.postTodo);
router.put('/todo/:todoId/:type', todoController.markTodo);

export default router;
