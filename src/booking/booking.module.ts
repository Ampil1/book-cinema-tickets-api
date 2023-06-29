import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingShcema } from './booking.model';
import { SeatModule } from '../seat/seat.module';
import { CinemaModule } from '../cinema/cinema.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingShcema }]),
    SeatModule,
    CinemaModule
  ],
  providers: [BookingService],
  controllers: [BookingController],
  exports: [BookingService, MongooseModule]
})
export class BookingModule {}
