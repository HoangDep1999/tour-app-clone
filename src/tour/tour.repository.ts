import { TourEntity } from "src/tour/entities/tour.entity";
import { BaseRepository } from "../repo/BaseRepository";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TourDto } from "./dto/tour.dto";
import { ITourRepository } from "src/interface/ITourRepository";

@Injectable()
export class TourRepository extends BaseRepository<TourEntity,Repository<TourEntity>, TourDto> 
    {
    constructor(
        @InjectRepository(TourEntity)
        protected readonly repository: Repository<TourEntity>
    ){
        super(repository)
    }
}