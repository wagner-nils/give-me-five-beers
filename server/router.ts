import { Router } from 'express';

import * as userController from './controller/user.controller';
import * as todoController from './controller/todo.controller';
import * as barController from './controller/bar.controller';
import * as ChoiceController from './controller/choice.controller';
import auth from './middleware/auth';

const router = Router();

router.get('/', auth, (req, res) => {
  res.send('hello from router, i love typescript');
});

router.post('/login', userController.loginUser);
router.post('/signup', userController.createUser);

router.get('/user/:userId', userController.getUser);
router.post('/user', userController.createUser);

router.get('/user/:userId/todo', todoController.getTodo);
router.post('/todo', todoController.postTodo);
router.put('/todo/:todoId/:type', todoController.markTodo);

// todo: refactor route structure
// only for bar; has nothing to do with choice
router.get('/choice/:type', barController.getRandomBar);
router.get('/choice/:type/:id', barController.getChosenBar);

router.post('/choice/:type', ChoiceController.postBeerOption);

// router.post('/insertbar', barController.insertBar);

// config
router.post('/config/:type', userController.editConfig);

router.get('/user/:userId/wishlist', userController.getWishlist);
router.get('/user/:userId/wishlist/detail', userController.getWishlistDetail);
router.post('/wishlist', userController.addToWishlist);

export default router;
