import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { createRecipeReducer, deleteRecipeReducer, recipeDetailsReducer, recipeListReducer, updateRecipeReducer } from "./reducers/recipeReducers";

const initialState = {};
const reducer = combineReducers({
    recipeList: recipeListReducer,
    recipeDetails: recipeDetailsReducer,
    createRecipe: createRecipeReducer,
    updateRecipe: updateRecipeReducer,
    deleteRecipe: deleteRecipeReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)) );

export default store; 

