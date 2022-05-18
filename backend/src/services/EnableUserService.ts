import AppError from "../errors/AppError";
import User from "../models/User";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

export default class EnableUserService {
    private userRepository: IUserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(id: number): Promise<User> {
        const findUser = await this.userRepository.findById(id);
        if (!findUser) {
            throw new AppError("usuário não encontrado", 400);
        }
        findUser.active = !findUser.active;
        const user = this.userRepository.create(findUser);

        return user;
    }
}
