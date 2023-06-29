import mongoose, { Schema } from "mongoose";


export const CinemaShcema = new mongoose.Schema({
    cinema_name: {
        type: String
    },
    duration: {
        type: String
    },
    director_name: {
        type: String
    },
    
    description: {
        type: String
    },
    seats_Id:[
        { type: Schema.Types.ObjectId, ref: 'Seat' }
    ]
},
    {
        timestamps: true
    })