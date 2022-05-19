import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import Client from "../../models/Client";

export default interface IClientRepository {
    findAll(): Promise<Client[]>;
    findById(id: number): Promise<Client | undefined>;
    create(client: ICreateClientDTO): Promise<Client>;
    save(client: Client): Promise<Client>;
}
