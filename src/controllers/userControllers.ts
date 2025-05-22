import User from '../models/Users';
import { Request, Response } from 'express';
import handleSlug from '../utils/slug';
import { logger } from '../utils/logger';
import { hasPassword } from '../utils/auth';
import { validationResult } from 'express-validator';
import { verifyPassword } from '../utils/auth'


export const handleCreatedUser = async (req: Request, res: Response) => {
    let errors = validationResult(req)
    if (errors.isEmpty()) {
        res.status(400).json({ code: "400", msg: errors.array })
        logger.error({ code: 400, msg: errors.array })
        return
    }
    try {
        const { name, email } = req.body
        const findUser = await User.findOne({ email });
        if (findUser) {
            res.status(422).json({ code: 422, msg: "Email is already register" });
            logger.error({ code: 422, msg: "Email is already register" });
            return
        }
        const handle = await handleSlug("Oscar Varela", { lower: true });
        const password = await hasPassword(req.body.password);
        const user = new User({
            name,
            email,
            password,
            handle
        });

        await user.save();
        res.status(201).json({ code: 201, msg: 'User created succesful' });
        return
    } catch (error) {
        logger.error(error);
        res.status(500).json({ code: 500, msg: "Error on server" });
        return
    }
};

export const handleLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body
 
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({ code: "400", msg: errors.array })
        logger.error({ code: 400, msg: errors.array })
        return
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(401).json({ code: 401, msg: 'Email is not register' })
            logger.error("Email is not register")
            return
        }
        const findPassword = await verifyPassword(password, user.password)
        if (findPassword) {
            res.status(200).json({ user })
            return
        } else {
            res.status(401).json({ code: 400, msg: 'Email or Password are invalid' })
            logger.error("Email or Password are invalid")
            return
        }
    } catch (error) {
        logger.info(error)
        logger.error(error instanceof Error ? error.message : String(error));

    }


}
