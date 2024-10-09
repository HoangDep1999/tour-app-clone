import { Inject, Injectable } from '@nestjs/common';
import { TourDto } from './dto/tour.dto';
import { TourEntity } from './entities/tour.entity';
import { TourRepository } from './tour.repository';

@Injectable()
export class TourService {
  constructor(
    @Inject('TourRepository')
    private readonly tourRepository: TourRepository,
    
  ){}
  async create(tourDto: TourDto) : Promise<TourEntity>{
    return await this.tourRepository.create(tourDto);
  }

  async findAll(): Promise<TourEntity[]> {
    return this.tourRepository.findAll();
  }

  findOne(id: number) {
    return this.tourRepository.findById(+id);
  }

  update(id: number, tourDto: TourDto) {
    return `This action updates a #${id} tour`;
  }

  remove(id: number) {
    return `This action removes a #${id} tour`;
  }
}
