import { hash } from "bcryptjs";

import AppError from "../../errors/AppError";
import IUserRepository from "../../repositories/user/IUserRepository";
import UserRepository from "../../repositories/user/UserRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}
class CreateUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({ name, email, password }: IRequest) {
        const passwordHash = await hash(password, 8);
        const findEmail = await this.userRepository.findByEmail(email);
        if (findEmail) {
            throw new AppError("Email já está em uso", 400);
        }
        const user = await this.userRepository.create({
            name,
            email,
            password: passwordHash,
        });
        delete user.password;
        return user;
    }
}

export default CreateUserService;
