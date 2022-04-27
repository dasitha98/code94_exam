import './index.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RecipeScreen from './screens/RecipeScreen';
import HomeScreen from './screens/HomeScreen';
import CreateRecipe from './screens/CreateRecipe';
import UpdateRecipe from './screens/UpdateRecipe';
import Navbarfooter from './screens/Navbarfooter';
import Navbarheader from './screens/Navbarheader';

function App() {
  return (
    <BrowserRouter>

      <Navbarheader/>
             <main>

              <Routes>
                <Route path="/recipe/:id" element={<RecipeScreen/>} exact></Route>
                <Route path="/" element={<HomeScreen/>} exact></Route>
                <Route path="/updaterecipe/:id" element={<UpdateRecipe/>}></Route>
                <Route path="/createrecipe" element={<CreateRecipe/>}></Route>
              </Routes>

            </main>
      <Navbarfooter/>

    </BrowserRouter>
  );
}

export default App;
