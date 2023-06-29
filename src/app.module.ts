import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CinemaModule } from './cinema/cinema.module';
import { SeatModule } from './seat/seat.module';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';

import * as dotenv from 'dotenv';

dotenv.config();
@Global()
@Module({
  imports: [
      MongooseModule.forRootAsync({
        useFactory: () => ({
          uri: process.env.MONGO_DB_URL,
          useNewUrlParser: true,
        useUnifiedTopology: true
        }),
      }),
      CinemaModule,
      SeatModule,
      UserModule,
      BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
