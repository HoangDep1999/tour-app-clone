import { TourEntity } from "src/tour/entities/tour.entity";
import { RepoInterface } from "./RepoInterface";

export interface ITourRepository extends RepoInterface<TourEntity>{
    
}