import { Router, Request, Response } from 'express';
import { handleCreatedUser, handleLogin } from './controllers/userControllers'
import { body } from 'express-validator'

const router = Router();

router.get('/test', (req: Request, res: Response) => {
    res.send("Server online");
});

router.post('/auth/register',
    body('handle').notEmpty().isString().withMessage("Handle no puede ir vacio"),
    body('name').notEmpty().isString().withMessage("Name no puede ir vacio"),
    body('password').notEmpty().isString().isStrongPassword().isLength({ min: 8 }).withMessage("Password no puede ir vacio"),
    body('email').notEmpty().isString().withMessage("Email no puede ir vacio").isEmail(),
    handleCreatedUser
)
router.post('/auth/login',
    body('email').notEmpty().isString().withMessage("Email is required"),
    body('password').notEmpty().isString().isLength({min:8}).withMessage("Password is required"),
    handleLogin)


export default router;