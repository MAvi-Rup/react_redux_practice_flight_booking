import { ADD_BOOKING, DELETE_BOKKING } from "./actionTypes"

 
export const addBooking = (bookingData) =>{
    return {
        type: ADD_BOOKING,
        payload: bookingData,
    };
}

export const deleteBooking = (bookingId)=>{
    return{
        type:DELETE_BOKKING,
        payload:bookingId
    }
}