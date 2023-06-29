import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BookingService {
    constructor(@InjectModel('Booking')private bookingModel:Model<any>){}

    async bookSeat(payload:any):Promise<any>{
    
        return await this.bookingModel.create(payload);
    
    }
    async cinemaList():Promise<any>{
    
        return await this.bookingModel.find().populate('seats_Id');
    
    }
}
