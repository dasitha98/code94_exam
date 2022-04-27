import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailaRecipe } from '../actions/recipeActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RecipeScreen(){
   
    const params = useParams();
    const navigate = useNavigate();
   
    const dispatch = useDispatch();
    const recipeId = params.id;

    const recipeDetails = useSelector(state => state.recipeDetails);
    const {loading, error, recipe} = recipeDetails;
   
    
    useEffect(() => {
        dispatch(detailaRecipe(recipeId));
    }, [dispatch, recipeId]);


    

   //navigate 
    function editrecipe(){
            navigate(`/updaterecipe/${params.id}`);
    }
  
    //delete recipe
    function deleterecipe (){
        alert('Are ou sure you want to delete the recipe?');
        axios.delete("http://localhost:5000/recipe/deleterecipe/"+params.id)
        navigate('/');
    }

    return(
        <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <div class="card">
                    {loading? (
                            <LoadingBox></LoadingBox>
                            ):error? (
                                <MessageBox variant="danger">{error}</MessageBox>
                            ):(  
                        <form class="form-card">
                        
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Recipe Name<span class="text-danger"> *</span></label>
                                <input type="text" id="name" name="name" value={recipe.name} onblur="validate(1)"/> </div>
                            </div>

                            <br></br>
                            <br></br>

                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Ingredients<span class="text-danger"> *</span></label> </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex">
                                <textarea type="text" rows = "2" cols = "50" id="ingredients" name="ingredients" value={recipe.ingredients}/> </div>
                            </div>

                            <br></br>
                            <br></br>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Description<span class="text-danger"> *</span></label> </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex">
                                <textarea type="text" rows = "5" cols = "50" id="description" name="description" value={recipe.description} /> </div>
                            </div>


                            <div class="row justify-content-end">
                                <div class="form-group col-sm-6"> <button type="submit" onClick={editrecipe} class="btn-block btn-primary">Update</button> </div>
                                <div class="form-group col-sm-6"> <button type="submit" onClick={deleterecipe} class="btn-block btn-primary">Delete</button> </div>
                            </div>

                            

                        </form>
                                            )}

                    </div>
                </div>
            </div>
        </div>

    );
}

export default RecipeScreen;