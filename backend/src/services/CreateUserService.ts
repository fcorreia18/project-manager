import { hash } from "bcryptjs";

import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

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
        const user = this.userRepository.create({
            name,
            email,
            password: passwordHash,
        });
        return user;
    }
}

export default CreateUserService;
