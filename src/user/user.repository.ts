import { BaseRepository } from "../repo/BaseRepository";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "./dto/user.dto";
import { UserEnity } from "./entities/user.entity";

@Injectable()
export class UserRepository extends BaseRepository<UserEnity,Repository<UserEnity>, UserDto> 
    {
    constructor(
        @InjectRepository(UserEnity)
        protected readonly repository: Repository<UserEnity>
    ){
        super(repository)
    }
}