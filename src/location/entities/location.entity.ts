import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('locationgroup')
export class LocationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    
}
