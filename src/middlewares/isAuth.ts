import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload{
    sub: string
}

export function isAuth(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    //token exists
    if(!authToken){
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try {
        ///verify token
        const { sub } = verify(
            token, process.env.JWT_SECRET
        ) as Payload

        req.user_id = sub;

        return next()  

    } catch (error) {
        return res.status(401).end()
    }
}