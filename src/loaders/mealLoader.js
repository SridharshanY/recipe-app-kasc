import axios from "axios";

export const mealLoader = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const meal = response.data.meals?.[0];
    if (!meal) throw new Error("Meal not found");
    return meal;
  } catch (error) {
    throw new Response("Meal not found", { status: 404 }, {message: error});
  }
};