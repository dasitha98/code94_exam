import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useParams } from 'react-router';

function Recipe(props){
    
    const {recipe} = props;
    const navigation = useNavigate();
    //const params = useParams();

    // const editeRecipe = () => {
    //     navigation(`/updaterecipe/${recipe._id}`)
    // }

    // const deletepro = useSelector(state => state.deleteProduct);
    // const {deleproduct} = deletepro;



// function navigatedelete (id) {
//     axios.delete("http://localhost:5000/product/deleteproduct/" + id)
//     .then((response) => {
//       console.log(response.data);
//     })
//   }

        const editeRecipe = () => {
            navigation(`/recipe/${recipe._id}`)
        }



    return(
        <div key={recipe._id} className="card">

        <div className="card-body">
            <a href="product.html">
                <h2>{recipe.name}</h2>
            </a>
            <div>
                <button type='submit' onClick={editeRecipe}>Details</button>
            </div>
        </div>
    </div>
    )
}

export default Recipe;