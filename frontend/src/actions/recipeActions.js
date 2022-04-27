
import Axios from 'axios';
import { CREATE_RECIPE_FAIL, CREATE_RECIPE_REQUEST, CREATE_RECIPE_SUCCESS, DELETE_RECIPE_FAIL, DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS, RECIPE_DETAILS_FAIL, RECIPE_DETAILS_REQUEST, RECIPE_DETAILS_SUCCESS, RECIPE_LIST_FAIL, RECIPE_LIST_REQUEST, RECIPE_LIST_SUCCESS, UPDATE_RECIPE_FAIL, UPDATE_RECIPE_REQUEST, UPDATE_RECIPE_SUCCESS } from '../constants/recipeConstants';

//list all recipe
export const ListRecipes = () => async (dispatch) => {
    dispatch({
        type: RECIPE_LIST_REQUEST,
    });
    try{
        const{data} = await Axios.get('/recipe/getallrecipe');
        dispatch({type: RECIPE_LIST_SUCCESS, payload: data});
    }catch (error){
        dispatch({type: RECIPE_LIST_FAIL, payload: error.message});
    }
};


//get one recipe
export const detailaRecipe = (recipeId) => async (dispatch) => {
    dispatch({type: RECIPE_DETAILS_REQUEST, payload: recipeId});

    try{
        const {data} = await Axios.get(`/recipe/getrecipe/${recipeId}`);
        dispatch({type: RECIPE_DETAILS_SUCCESS, payload: data});
    }catch(error){
        dispatch({
            type: RECIPE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : 
                    error.message,
        });
    }
};

//create a recipe
export const create = (name, ingredients, description) => async (dispatch) => {
    dispatch({type: CREATE_RECIPE_REQUEST, payload: {name, ingredients, description}});

    try{
        const {data} = await Axios.post('/recipe/createrecipe', {name, ingredients, description});
        dispatch({type: CREATE_RECIPE_SUCCESS, payload: data});
    }catch(error){
        dispatch({
            type: CREATE_RECIPE_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : 
                    error.message,
        });
    }
};


//update recipe
export const update = ({Id, name, ingredients, description}) => async (dispatch) => {
    dispatch({type: UPDATE_RECIPE_REQUEST, payload: {Id, name, ingredients, description}});

    try{
        const {data} = await Axios.put('/recipe/updaterecipe' + Id, {name, ingredients, description});
        dispatch({type: UPDATE_RECIPE_SUCCESS, payload: data});
    }catch(error){
        dispatch({
            type: UPDATE_RECIPE_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : 
                    error.message,
        });
    }
};


//delete recipe
export const deleterec = (recipeId) => async (dispatch) => {
    dispatch({type: DELETE_RECIPE_REQUEST, payload: {recipeId}});

    try{
        const {data} = await Axios.put(`/recipe/deleterecipe/${recipeId}`);
        dispatch({type: DELETE_RECIPE_SUCCESS, payload: data});
    }catch(error){
        dispatch({
            type: DELETE_RECIPE_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message : 
                    error.message,
        });
    }
};