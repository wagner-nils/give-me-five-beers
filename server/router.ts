import { Router } from 'express';
import { createUser, getUser, postTodo, getTodo } from './controller';

const router = Router();

router.get('/', (req, res) => {
  res.send('hello from router, i love typescript');
});

router.get('/user', getUser);
router.get('/todo', getTodo);

router.post('/user', createUser);
router.post('/todo', postTodo);

export default router;
