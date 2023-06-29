import { Module, forwardRef } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CinemaController } from './cinema.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CinemaShcema } from './cinema.model';
import { SeatModule } from '../seat/seat.module';
import { SeatService } from '../seat/seat.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cinema', schema: CinemaShcema }]),
    forwardRef(() => SeatModule),
  ],
  providers: [CinemaService,SeatService],
  controllers: [CinemaController],
  exports: [CinemaService, MongooseModule]
})
export class CinemaModule {}
