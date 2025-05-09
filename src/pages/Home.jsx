import { Search } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

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

      <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', rowGap: 2}}>
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <Card sx={{width: 345}}>
              <CardMedia
                component='img'
                height="140"
                image={meal.strMealThumb}
                alt="Meal Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{meal.strMeal}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={meal.strYoutube}>View Video</Button>
                <Button size="small" component={Link} to={`/details/${meal.idMeal}`}>View Recipe</Button>
              </CardActions>
            </Card>
          ))
        ) : meals && meals.length === 0 ? (
          <Typography variant="h6" color="text.secondary">
            No meals found.
          </Typography>
        ) : null}
      </Container>
    </Box>
  );
};

export default Home;
