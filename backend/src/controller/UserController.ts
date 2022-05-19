import { Request, Response } from "express";

import UserRepository from "../repositories/UserRepository";
import SessionService from "../services/SessionService";
import CreateUserService from "../services/user/CreateUserService";
import EnableUserService from "../services/user/EnableUserService";

class UserController {
    async getUsers(request: Request, response: Response): Promise<Response> {
        const userRepository = new UserRepository();
        const users = await userRepository.findAll();
        return response.status(200).json(users);
    }
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { name, email, password } = request.body;
        const userRepository = new UserRepository();
        const createUser = new CreateUserService(userRepository);

        const user = await createUser.execute({ name, email, password });
        return response.json(user);
    }

    async enable(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const userRepository = new UserRepository();
        const enableUser = new EnableUserService(userRepository);
        const user = await enableUser.execute(+id);
        return response.status(200).json(user);
    }

    async session(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const userRepository = new UserRepository();
        const sessionService = new SessionService(userRepository);
        const session = sessionService.execute({ email, password });

        return response.status(200).json(session);
    }
}

export default UserController;
