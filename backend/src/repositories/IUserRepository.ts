import User from "../database/models/User";
import ICreateUserDTO from "../dtos/ICreateUserDTO";

export default interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    create(createUserDTO: ICreateUserDTO): Promise<User>;
}
