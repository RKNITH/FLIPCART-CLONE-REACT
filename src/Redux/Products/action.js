import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING
} from "./actionTypes";

export const getProductLoading = () => ({
    type: GET_PRODUCTS_LOADING,
});

export const getProductsSuccess = (data) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
});

export const getProductError = () => ({
    type: GET_PRODUCTS_ERROR,
});