import { Body, Controller, HttpStatus, Post,Get} from '@nestjs/common';
import { SeatService } from './seat.service';

@Controller('seat')
export class SeatController {
    constructor(private readonly seatService: SeatService) { }

    @Post('/create')
    public async createSeat(@Body() bodyData: any): Promise<any> {
        try {


            const response = await this.seatService.createSeat(bodyData);

            if (response) return { response_code: HttpStatus.OK, response_data: "Data Created Successfully" };
            else return { response_code: HttpStatus.BAD_REQUEST, response_data: "something went wrong" }
        } catch (e) {
            return { response_code: HttpStatus.INTERNAL_SERVER_ERROR, response_data: e.message }
        }

    }

    @Get('/list')
    public async seatList(): Promise<any> {
        try {

            const response = await this.seatService.seatList();

            if (response) return { response_code: HttpStatus.OK, response_data: response };
            else return { response_code: HttpStatus.BAD_REQUEST, response_data: "something went wrong" }
        } catch (e) {
            return { response_code: HttpStatus.INTERNAL_SERVER_ERROR, response_data: e.message }
        }

    }
}

