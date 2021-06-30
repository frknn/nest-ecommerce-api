import { Asset } from "src/assets/entities/asset.entity";
import { Category } from "src/categories/entities/category.entity";
import { Merchant } from "src/merchants/entities/merchant.entity";
import { Variant } from "src/variants/entities/variant.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
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
  price: number;

  @Column()
  smallImage: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @OneToMany(() => Variant, variant => variant.product)
  variants: Variant[];

  @ManyToOne(() => Category, category => category.products)
  category: Category;

  @ManyToOne(() => Merchant, merchant => merchant.products)
  merchant: Merchant;

  @OneToMany(() => Asset, asset => asset.product)
  images: Asset[];
}
