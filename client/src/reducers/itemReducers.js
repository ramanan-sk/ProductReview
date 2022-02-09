import {v1 as uuid} from "uuid"; 
import { GET_ITEM, GET_ITEM2, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types';

const initialState = {
    product: [],
    product2: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEM:
            return {
                ...state,
                product: action.payload,
                loading: false
            }
        case GET_ITEM2:
            return {
                ...state,
                product2: action.payload, //state.item.filter(item => item.brand == action.payload),
                loading: false
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading:true
            }
    default:
        return state;
    }
}