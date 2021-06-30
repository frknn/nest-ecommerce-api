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

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  contactEmail: string;

  @Column()
  contactPhone: string;

  @Column()
  adress: string;

  @OneToMany(() => Product, product => product.merchant)
  products: Product[];

  @OneToMany(() => Customer, customer => customer.merchant)
  customers: Customer[];
}
