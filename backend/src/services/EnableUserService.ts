import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

export default class EnableUserService {
    private userRepository: IUserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
}
