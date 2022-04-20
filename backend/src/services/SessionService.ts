import { hash } from "bcryptjs";

import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

interface IRequest {
    email: string;
    password: string;
}
class SessionService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({ email, password }: IRequest): Promise<null> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
        }
        return null;
    }
}

export default SessionService;
