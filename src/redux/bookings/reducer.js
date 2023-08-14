import { ADD_BOOKING, DELETE_BOKKING } from "./actionTypes";
import initialState from "./initialState";

const nextBookingId = (bookings)=>{
    const maxId = bookings.reduce((maxId,booking)=>(booking.id,maxId),-1);
    return maxId+1;
}

function reducer (state=initialState,action){
    switch (action.type){
        case ADD_BOOKING:
            return [...state, {id:nextBookingId(state),...action.payload}];
        case DELETE_BOKKING:
            const updatedState = state.filter((booking)=>booking.id != action.payload)
            return updatedState;
        default: 
            return state;
    }
};

export default reducer;