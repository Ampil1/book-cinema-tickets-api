import { Controller,Post,Get, Body, HttpStatus } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { SeatService } from '../seat/seat.service';

@Controller('cinema')
export class CinemaController {
    constructor(private readonly cinemaService: CinemaService,
        private readonly seatServices: SeatService){}

    @Post('/create')
    public async createCinema(@Body() bodyData: any): Promise<any> {
        try {
            const findSeatList = await this.seatServices.seatList();
            // console.log("nnnnnnn",findSeatList[0]._id)
            bodyData.seats_Id=findSeatList[0]._id
            const response = await this.cinemaService.createCinema(bodyData);
        
            if (response) return { response_code: HttpStatus.OK, response_data: "Data Created Successfully" };
            else return { response_code: HttpStatus.BAD_REQUEST, response_data: "something went wrong" }
        } catch (e) {
            return { response_code: HttpStatus.INTERNAL_SERVER_ERROR, response_data: e.message }
        }

    }

    @Get('/list')
    public async cinemaList(): Promise<any> {
        try {

            const response = await this.cinemaService.cinemaList();

            if (response) return { response_code: HttpStatus.OK, response_data: response };
            else return { response_code: HttpStatus.BAD_REQUEST, response_data: "something went wrong" }
        } catch (e) {
            return { response_code: HttpStatus.INTERNAL_SERVER_ERROR, response_data: e.message }
        }

    }
   
}
