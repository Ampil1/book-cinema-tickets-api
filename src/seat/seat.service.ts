import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'dns';
import { Model } from 'mongoose';
import { SeatModule } from './seat.module';

@Injectable()
export class SeatService {
    constructor(@InjectModel('Seat')private seatModel:Model<any>){}

    async createSeat(payload:any):Promise<any>{
    
        return await this.seatModel.updateOne(payload);
    
    }

    async seatList(): Promise<any>{
        return await this.seatModel.aggregate([
            {
              $match: {
                "seats.isBooked": false
              }
            },
            {
              $addFields: {
                seats: {
                  $filter: {
                    input: "$seats",
                    as: "seat",
                    cond: { $eq: ["$$seat.isBooked", false] }
                  }
                }
              }
            }
          ])  
    }


    async SeatBoked (payload: any):Promise<any>{
        console.log("seat_id",payload)
      const data= await this.seatModel.updateOne(
            { "seats.seatNo": payload.seatNo}, 
            { $set: { "seats.$.isBooked": true } },
         )
         return data
    }

}
