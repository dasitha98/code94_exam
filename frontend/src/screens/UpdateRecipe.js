import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { detailaRecipe } from '../actions/recipeActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function UpdateRecipe(){

    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');

    const params = useParams();
    const dispatch = useDispatch();
    const recipeId = params.id; 
    const navigation = useNavigate();

    const recipeDetails = useSelector(state => state.recipeDetails);
    const { loading,error,recipe } = recipeDetails;


    //update
    const sumbitRecipe = (e) => {
        e.preventDefault();
            
                const speaker = {
                    name: name,
                    ingredients: ingredients,
                    description: description
                }
            
                console.log(speaker);
            
                axios.put('http://localhost:5000/recipe/updaterecipe/' + recipeId, speaker)
                  .then(res => console.log(res.data));
        navigation('/');
    }



    //setting states
    useEffect(() => {
        if(recipe){
          setName(recipe.name);
          setIngredients(recipe.ingredients);
          setDescription(recipe.description);
        };
        
      },[recipe]);


    useEffect(() => {
            dispatch(detailaRecipe(recipeId));
    }, [dispatch, recipeId]);
    




    const changeName = (e) => {
        setName(e);
    }
    const changeIngredient = (e) => {
        setIngredients(e);
    }
    const changeDescription = (e) => {
        setDescription(e);
    }





    return(

        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <div className="card">
                    {loading? (
                            <LoadingBox></LoadingBox>
                            ):error? (
                                <MessageBox variant="danger">{error}</MessageBox>
                            ):(  
                        <form className="form-card" onSubmit={sumbitRecipe}>
                        
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Recipe Name<span className="text-danger"> *</span></label>
                                <input type="text" id="name" name="name" value={name} onChange={(e) => changeName(e.target.value)} placeholder="Enter Recipe name....." onblur="validate(1)" required/> </div>
                            </div>

                            <br></br>
                            <br></br>

                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Ingredients<span className="text-danger"> *</span></label> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                <textarea type="text" rows = "2" cols = "50" id="ingredients" name="ingredients" value={ingredients} onChange={(e) => changeIngredient(e.target.value)} placeholder="Enter ingredients....." onblur="validate(5)" required/> </div>
                            </div>

                            <br></br>
                            <br></br>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Description<span className="text-danger"> *</span></label> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                <textarea type="text" rows = "5" cols = "50" id="description" name="description" value={description} onChange={(e) => changeDescription(e.target.value)}  placeholder="Enter Description....." onblur="validate(5)" required/> </div>
                            </div>


                            <div className="row justify-content-end">
                                <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary">Update</button> </div>
                            </div>
                            

                        </form>
                                            )}

                    </div>
                </div>
            </div>
        </div>



    )

};