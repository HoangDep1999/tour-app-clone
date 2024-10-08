import { Injectable } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';

@Injectable()
export class TourService {
  create(createTourDto: CreateTourDto) {
    return 'This action adds a new tour';
  }

  findAll() {
    return `This action returns all tour`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tour`;
  }

  update(id: number, createTourDto: CreateTourDto) {
    return `This action updates a #${id} tour`;
  }

  remove(id: number) {
    return `This action removes a #${id} tour`;
  }
}
