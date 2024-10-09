import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { TourRepository } from './tour.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourEntity } from './entities/tour.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TourEntity])],
  controllers: [TourController],
  providers: [TourService,
    {
      useClass: TourRepository,
      provide: 'TourRepository',
    }
  ],
})
export class TourModule {}
