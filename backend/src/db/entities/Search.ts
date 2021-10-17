import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Search {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  ip!: string;

  @Column()
  artist!: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;
}
