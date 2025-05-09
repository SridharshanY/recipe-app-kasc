import { useLoaderData } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
} from "@mui/material";

const Details = () => {
  const meal = useLoaderData();

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Image Section */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={meal.strMealThumb}
            alt={meal.strMeal}
            sx={{ width: "100%", borderRadius: 2 }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={7}>
          <Typography variant="h3" gutterBottom>
            {meal.strMeal}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Category: {meal.strCategory} | Origin: {meal.strArea}
          </Typography>

          <Typography variant="h5" mt={3}>
            Ingredients
          </Typography>
          <List dense>
            {ingredients.map((item, index) => (
              <ListItem key={index} sx={{ py: 0 }}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h5" mt={4}>
            Instructions
          </Typography>
          <Typography variant="body1" paragraph sx={{ whiteSpace: "pre-line" }}>
            {meal.strInstructions}
          </Typography>

          <MuiLink
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            variant="body1"
            mt={2}
            display="block"
          >
            ▶️ Watch on YouTube
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;
