import { Router } from 'express';

import * as userController from './controller/user.controller';
import * as todoController from './controller/todo.controller';
import * as barController from './controller/bar.controller';

const router = Router();

router.get('/', (req, res) => {
  res.send('hello from router, i love typescript');
});

router.get('/user/:userId', userController.getUser);
router.post('/user', userController.createUser);

router.get('/user/:userId/todo', todoController.getTodo);
router.post('/todo', todoController.postTodo);
router.put('/todo/:todoId/:type', todoController.markTodo);

// todo: refactor route structure
// only for bar
router.get('/choice/:type', barController.getRandomBar);

// router.post('/insertbar', barController.insertBar);

export default router;
