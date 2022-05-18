import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../models/User";

export default interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    create(createUserDTO: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
}
