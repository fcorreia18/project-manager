import AppError from "../../errors/AppError";
import User from "../../models/User";
import IUserRepository from "../../repositories/user/IUserRepository";
import UserRepository from "../../repositories/user/UserRepository";

export default class EnableUserService {
    private userRepository: IUserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(id: number): Promise<User> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new AppError("usuário não encontrado", 400);
        }
        user.active = !user.active;
        delete user.password;
        await this.userRepository.save(user);
        return user;
    }
}
