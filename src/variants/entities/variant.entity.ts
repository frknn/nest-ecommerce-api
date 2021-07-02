import { Option } from "src/options/entities/option.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Variant {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  name: string;

  @OneToMany(() => Option, option => option.variant, { eager: true, cascade: ["insert", "update", "remove"] })
  options: Option[]

  @ManyToOne(() => Product, product => product.variants)
  product: Product

  @Column()
  productId: number;

}
