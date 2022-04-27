import { CREATE_RECIPE_FAIL, CREATE_RECIPE_REQUEST, CREATE_RECIPE_SUCCESS, DELETE_RECIPE_FAIL, DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS, RECIPE_DETAILS_FAIL, RECIPE_DETAILS_REQUEST, RECIPE_DETAILS_SUCCESS, RECIPE_LIST_FAIL, RECIPE_LIST_REQUEST, RECIPE_LIST_SUCCESS, UPDATE_RECIPE_FAIL, UPDATE_RECIPE_REQUEST, UPDATE_RECIPE_SUCCESS } from '../constants/recipeConstants';


//all recipe reducer
export const recipeListReducer = (
    state = {recipes: []},
    action
) => {
    switch(action.type){
        case RECIPE_LIST_REQUEST:
            return {loading: true};
        case RECIPE_LIST_SUCCESS:
            return {loading: false, recipes: action.payload};
        case RECIPE_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

//one recipe reducer
export const recipeDetailsReducer = (
    state = {recipe: {}, loading: true},
    action
) => {
    switch(action.type){
        case RECIPE_DETAILS_REQUEST:
            return{loading: true};
        case RECIPE_DETAILS_SUCCESS:
            return {loading: false, recipe: action.payload};
        case RECIPE_DETAILS_FAIL:
            return{loading: false, error: action.payload};
        default:
            return state;
    }
};

//create recipe reducer
export const createRecipeReducer = (
    state = {product: {}, loading: true},
    action
) => {
    switch(action.type){
        case CREATE_RECIPE_REQUEST:
            return{loading: true};
        case CREATE_RECIPE_SUCCESS:
            return {loading: false};
        case CREATE_RECIPE_FAIL:
            return{loading: false, error: action.payload};
        default:
            return state;
    }
};


//update recipe reducer
export const updateRecipeReducer = (
    state = {},
    action
) => {
    switch(action.type){
        case UPDATE_RECIPE_REQUEST:
            return{loading: true};
        case UPDATE_RECIPE_SUCCESS:
            return {loading: false};
        case UPDATE_RECIPE_FAIL:
            return{loading: false, error: action.payload};
        default:
            return state;
    }
};

//deleted one recipe reducer
export const deleteRecipeReducer = (
    state = {},
    action
) => {
    switch(action.type){
        case DELETE_RECIPE_REQUEST:
            return{loading: true};
        case DELETE_RECIPE_SUCCESS:
            return {loading: false};
        case DELETE_RECIPE_FAIL:
            return{loading: false, error: action.payload};
        default:
            return state;
    }
};