import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { match } from 'assert';
import { Model } from 'mongoose';

@Injectable()
export class CinemaService {
    constructor(@InjectModel('Cinema')private cinemaModel:Model<any>){}

    async createCinema(payload:any):Promise<any>{
    
        return await this.cinemaModel.create(payload);
    
    }
    async cinemaList():Promise<any>{
    
        return await this.cinemaModel.find({}).populate({
            path: 'seats_Id',
            match: { "seats.isBooked": false }
          });
    
    }
}
