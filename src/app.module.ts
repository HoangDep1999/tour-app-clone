import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TourModule } from './tour/tour.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { PostModule } from './post/post.module';
import { TourEntity } from './tour/entities/tour.entity';
import { UserEnity } from './user/entities/user.entity';
import { PostEntity } from './post/entities/post.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tour_app_clone',
      entities: [
        TourEntity, UserEnity, PostEntity
      ],
      synchronize: true,
    }),
    UserModule, TourModule, PostModule, LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
