import type { Response, NextFunction } from "express"
import type { IExtendedRequest } from "../types/express.js"
import AppError from "../errors/app-error.js"
import { StatusCodes } from "http-status-codes"
import type { UserRoles } from "../constants/user-roles.js"

export const allowRoles = (allowedRoles: UserRoles[]) => {
    return (req: IExtendedRequest, _res: Response, next: NextFunction) => {
        if(!allowedRoles.includes(req.user!.role)){
            throw new AppError("You are not allowed to perform this action", StatusCodes.FORBIDDEN)
        }
        next()
    }
}