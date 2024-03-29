import { getRepository, Repository } from "typeorm";

import ICreateClientDTO from "../../dtos/ICreateClientDTO";
import Client from "../../models/Client";
import IClientRepository from "./IClientRepository";

export default class ClientRepository implements IClientRepository {
    private ormRepository: Repository<Client>;
    constructor() {
        this.ormRepository = getRepository(Client);
    }
    async findAll(): Promise<Client[]> {
        return this.ormRepository.find();
    }
    async findById(id: number): Promise<Client | undefined> {
        return this.ormRepository.findOne(id);
    }

    async create({
        name,
        email,
        password,
        bi,
        code,
    }: ICreateClientDTO): Promise<Client> {
        const client = this.ormRepository.create({
            name,
            email,
            password,
            bi,
            code,
        });
        await this.ormRepository.save(client);
        return client;
    }

    async save(client: Client): Promise<Client> {
        return this.ormRepository.save(client);
    }
}
