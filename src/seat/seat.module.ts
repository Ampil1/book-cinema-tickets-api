import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { SeatSchema } from './seat.model'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Seat', schema: SeatSchema }]),
  ],
  providers: [SeatService],
  controllers: [SeatController],
  exports: [SeatService, MongooseModule]
})
export class SeatModule {}
