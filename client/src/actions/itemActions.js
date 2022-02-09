import axios from 'axios';
import { GET_ITEM, GET_ITEM2, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res =>
            dispatch({
                type: GET_ITEM,
                payload: res.data
            })
        );
        // .get(`/api/items/${id}`)
        // .then(res =>
        //     dispatch({
        //         type: GET_ITEM,
        //         payload: res.data
        //     })
        // );
}

export const getItems2 = (id) => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`/api/items/${id}`)
        .then(res =>
            dispatch({
                type: GET_ITEM2,
                payload: res.data
            })
        );
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
