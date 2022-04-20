import { getRepository, Repository } from "typeorm";

import User from "../database/models/User";
import ICreateUserDTO from "../dtos/ICreateUserDTO";
import IUserRepository from "./IUserRepository";

class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }
    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({ where: { email } });
        return user;
    }
    public async create({
        name,
        email,
        password,
    }: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            name,
            email,
            password,
        });
        await this.ormRepository.save(user);
        return user;
    }
}

export default UserRepository;