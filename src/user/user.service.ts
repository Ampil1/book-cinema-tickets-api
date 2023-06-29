import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel:Model<any>
    ){}


    async regitration(payload:any):Promise<any>{
        return await this.userModel.create(payload);
    }
    async login( payload: any):Promise<any>{
        return await this.userModel.findById(payload);
    }

    async findbyEmail(email):Promise<any>{
       return await this.userModel.findOne({email:email});
    }

    async loginUpdate(id): Promise<any>{
        return await this.userModel.findByIdAndUpdate(id,{Islogin:true});
    }
}
