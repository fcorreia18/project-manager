import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import AppError from "../../errors/AppError";
import User from "../../models/User";
import IUserRepository from "../../repositories/IUserRepository";
import UserRepository from "../../repositories/UserRepository";

export default class UpdateUserService {
    private userRepository: IUserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(id: number, user: ICreateUserDTO): Promise<User> {
        const findUser = await this.userRepository.findById(id);
        if (!findUser) {
            throw new AppError("usuário não encontrado", 404);
        }
        const saveUser = Object.assign(findUser, user);
        console.log(saveUser);
        await this.userRepository.save(saveUser);
        return saveUser;
    }
}
