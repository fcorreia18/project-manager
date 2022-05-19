import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password?: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
