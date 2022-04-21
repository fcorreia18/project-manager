import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

import AppError from "../errors/AppError";
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

    public async execute({ email, password }: IRequest): Promise<Response> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Credenciais inválidas", 401);
        }
        const passwordCompare = await compare(password, user.password);
        if (!passwordCompare) {
            throw new AppError("Credenciais invalidas", 401);
        }
        const token = sign(
            user.id.toString(),
            "2088AWDJKLSJlhasp8q9023wjalALSKDJ",
            {
                expiresIn: "id",
            }
        );
        return {
            token,
            user,
        };
    }
}

export default SessionService;
