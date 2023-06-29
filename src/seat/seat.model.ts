import mongoose from "mongoose";


class seatType{
    seatNo:{
        type: String,
    }

    isBooked:{
        type: Boolean
    }
}


export const SeatSchema = new mongoose.Schema({
     seats:[{
        seatNo:{
            type: String
        },
        isBooked:{
            type: Boolean
        },
        price:{
            type: Number
        }

    }
    ]
})