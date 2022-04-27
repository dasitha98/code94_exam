import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recipe from '../components/Recipe';
import { ListRecipes } from '../actions/recipeActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function HomeScreen(){

    const dispatch = useDispatch();
    const recipeList = useSelector((state) => state.recipeList);
    const{loading, error, recipes} = recipeList;

    
    useEffect(() => {

        dispatch(ListRecipes());

    },[dispatch]);




    return(

        <div>
            {loading? (
            <LoadingBox></LoadingBox>
            ):error? (
                <MessageBox variant="danger">{error}</MessageBox>
            ):(
                <div className="row center">
                    {recipes.map((recipe) =>(

                        <Recipe key={recipe._id} recipe={recipe}></Recipe>

                        ))
                    }  
            </div>
            )}
            
        </div>
    );
}

export default HomeScreen;