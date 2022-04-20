import IUserRepository from "../database/repositories/IUserRepository";
import UserRepository from "../database/repositories/UserRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
}
class createUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async execute({ name, email, password }: IRequest) {
        const user = this.userRepository.create({
            name,
            email,
            password,
        });
    }
}

export default createUserService;
