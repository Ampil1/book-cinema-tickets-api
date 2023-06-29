import mongoose, { Schema } from "mongoose";


export const BookingShcema = new mongoose.Schema({
    user_id: {
        type: String
    },
    email: {
        type: String
    },
    mobileNo: {
        type: String
    },
    seatNo:{
     type: String
    },
    seats_Id: [
        { type: Schema.Types.ObjectId, ref: 'Seat' }
    ],
    cinema_id: [
        { type: Schema.Types.ObjectId, res: 'Cinema' }
    ]
},
    {
        timestamps: true
    })