const Recipe = require('../model/recipeModel');

const getAllRecipe = async (req,res) => {
    const recipes = await Recipe.find({});
    res.send(recipes);
}

const getRecipe = async (req,res) => {
    const recipe = await Recipe.findById(req.params.id);
    if(recipe){
        res.send(recipe);
    }else{
        res.status(404).send({message: 'Recipe not found'});
    }
}


const createRecipe = async (req,res) => {
    const recipe = await Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        description: req.body.description,
    });

    const createRecipe = await recipe.save();
    res.send({
        _id: createRecipe._id,
        name: createRecipe.name,
        ingredients: createRecipe.ingredients,
        description: createRecipe.description,
    })
}


const updateRecipe = async (req,res) => {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);

    if(recipe){
        recipe.name = req.body.name || recipe.name;
        recipe.ingredients = req.body.ingredients || recipe.ingredients;
        recipe.description = req.body.description || recipe.description;

        const updateRecipe = await recipe.save();
        res.send({
            _id: updateRecipe.id,
            name: updateRecipe.name,
            ingredients: updateRecipe.ingredients,
            description: updateRecipe.description,
        });
    }else{
        res.status(404).send({message: 'recipe not found'});
    }
}

const deleteRecipe = async(req,res) => {
    const recipe = await Recipe.findByIdAndDelete(req.params.id)
    if(recipe){
        res.send({message: 'Deleted successfully'});
    }else{
        res.status(404).send({message: 'recipe not found'});
    }
}

module.exports = {
    getAllRecipe,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}
