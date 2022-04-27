import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { create } from '../actions/recipeActions';

export default function CreateProduct(){
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const sumbitProduct = (e) => {
        e.preventDefault();
        dispatch(create(name, ingredients, description));
        navigate('/');
    }


    useEffect(() => {
        dispatch(create);
    }, [dispatch]);


    return(

            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <div class="card">
                            <form class="form-card" onSubmit={sumbitProduct}>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Recipe Name<span class="text-danger"> *</span></label> <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Recipe name....." onblur="validate(1)" required/> </div>
                                </div>

                                <br></br>
                                <br></br>

                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Ingredients<span class="text-danger"> *</span></label> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"><textarea type="text" rows = "2" cols = "50" id="ingredients" name="ingredients"  onChange={(e) => setIngredients(e.target.value)} placeholder="Enter ingredients....." onblur="validate(5)" required/> </div>
                                </div>

                                <br></br>
                                <br></br>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Description<span class="text-danger"> *</span></label> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"><textarea type="text" rows = "5" cols = "50" id="description" name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description....." onblur="validate(5)" required/> </div>
                                </div>


                                <div class="row justify-content-end">
                                    <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Save</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    )
}