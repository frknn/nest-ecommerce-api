import { Customer } from "src/customers/entities/customer.entity";
import { Product } from "src/products/entities/product.entity";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: 'My Store' })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  contactPhone: string;

  @Column({ nullable: true })
  adress: string;

  @OneToMany(() => Product, product => product.merchant)
  products: Product[];

  @OneToMany(() => Customer, customer => customer.merchant)
  customers: Customer[];
}
