import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    active: boolean;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
