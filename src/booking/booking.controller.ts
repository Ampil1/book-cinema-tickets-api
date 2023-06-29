import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CinemaService } from '../cinema/cinema.service';
import { SeatService } from '../seat/seat.service';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
   constructor(
    private readonly bookingServices:BookingService,
    private readonly cinemaService: CinemaService,
    private readonly seatServices: SeatService){}


    @Post('/book')
    public async BookTickets(@Body() bodyData: any): Promise<any> {
        try {

            const bookedSeats = await this.seatServices.SeatBoked(bodyData);
            
            const response = await this.bookingServices.bookSeat(bodyData);
        
            if (response) return { response_code: HttpStatus.OK, response_data: "Seat Booked Successfully" };
            else return { response_code: HttpStatus.BAD_REQUEST, response_data: "something went wrong" }
        } catch (e) {
            return { response_code: HttpStatus.INTERNAL_SERVER_ERROR, response_data: e.message }
        }

    }

}
