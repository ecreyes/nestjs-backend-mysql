import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Product } from '../product/product.entity'
import { User } from '../user/user.entity'

@Entity('links')
export class Link {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    code: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToMany(() => Product)
    @JoinTable({
        name: 'link_products',
        joinColumn: {
            name: 'link_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'product_id',
            referencedColumnName: 'id',
        },
    })
    products: Product[]
}
