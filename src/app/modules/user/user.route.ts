import express from 'express';
import { USER_ROLE } from '../../../enums/user';
import { upload } from '../../../helpers/upload';
import auth from '../../middleware/auth';
import { validateRequest } from '../../middleware/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
   '/create',
   validateRequest(UserValidation.createUserZodSchema),
   UserController.createUser
);
router.get('/', auth(USER_ROLE.ADMIN), UserController.getAllUsers);
router.get('/me', auth(USER_ROLE.ADMIN), UserController.userProfile);
router.patch(
   '/',
   upload.single('image'),
   auth(USER_ROLE.ADMIN),
   UserController.updateUser
);
export const UserRoutes = router;
