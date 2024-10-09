import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourDto } from './dto/tour.dto';
import { TourEntity } from './entities/tour.entity';

@Controller('tour')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Post()
  async create(@Body() tourDto: TourDto): Promise<TourEntity> {
    console.log(tourDto);
    
    return this.tourService.create(tourDto);
  }

  @Get()
  async findAll(): Promise<TourEntity[]> {
    return this.tourService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tourService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() tourDto: TourDto) {
    return this.tourService.update(+id, tourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tourService.remove(+id);
  }
}
