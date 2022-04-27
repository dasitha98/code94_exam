const express = require('express');
const router = express.Router();
const controller = require('../controller/recipe.con');


module.exports = function() {
    router.get('/getallrecipe', controller.getAllRecipe);
    router.get('/getrecipe/:id', controller.getRecipe);
    router.post('/createrecipe', controller.createRecipe);
    router.put('/updaterecipe/:id', controller.updateRecipe);
    router.delete('/deleterecipe/:id', controller.deleteRecipe);

    return router;
}