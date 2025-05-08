import { Search } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState(null);

  const handleIngredient = (event) => {
    setIngredient(event.target.value);
  };

  const handleRecipe = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`
      );
      const data = response.data.meals;
      setMeals(data || []); // Set to empty array if no meals found
    } catch (error) {
      console.error("Error fetching meals:", error);
      setMeals([]);
    }
  };

  return (
    <Box mt={4} display="flex" flexDirection="column" alignItems="center">
      <Box width="540px" mb={4}>
        <TextField
          onChange={handleIngredient}
          value={ingredient}
          fullWidth
          label="Enter ingredient"
          InputProps={{
            endAdornment: (
              <IconButton size="large" color="inherit" onClick={handleRecipe}>
                <Search sx={{ color: "black" }} />
              </IconButton>
            ),
          }}
        />
      </Box>

      <Box>
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <Typography key={meal.idMeal} variant="h6" gutterBottom>
              {meal.strMeal}
            </Typography>
          ))
        ) : meals && meals.length === 0 ? (
          <Typography variant="h6" color="text.secondary">
            No meals found.
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default Home;
