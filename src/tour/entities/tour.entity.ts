import { Type } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";
import { ModelEntity } from "src/global/model.entity";
import { PostEntity } from "src/post/entities/post.entity";
import { UserEnity } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tours')
export class TourEntity extends ModelEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    numbersGuest: number;

    @Column()
    thumbnail: string;

    @Column()
    document: string;

    @ManyToOne(() => UserEnity, (user)=> user.id)
    guide: UserEnity;

    @ManyToOne(()=> PostEntity, (post)=>post.id)
    post: PostEntity;


}
