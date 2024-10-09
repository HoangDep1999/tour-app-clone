import { BaseRepository } from "../repo/BaseRepository";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PostEntity } from "./entities/post.entity";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostRepository extends BaseRepository<PostEntity,Repository<PostEntity>, CreatePostDto> 
    {
    constructor(
        @InjectRepository(PostEntity)
        protected readonly repository: Repository<PostEntity>
    ){
        super(repository)
    }
}