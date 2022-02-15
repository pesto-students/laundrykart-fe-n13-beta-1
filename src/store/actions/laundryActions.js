import { GET_LAUNDRY_LIST, LAUNDRY_LIST_FAILED, LAUNDRY_LIST_SUCCESS } from "../actionTypes/laundryTypes";

export const getLaundryList = () => ({
    type: GET_LAUNDRY_LIST,
    payload: {},
});

export const laundryListSuccess = (data) => ({
    type: LAUNDRY_LIST_SUCCESS,
    payload: data,
});

export const laundryListFailed = (error) => ({
    type: LAUNDRY_LIST_FAILED,
    payload: error,
});