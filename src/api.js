import { API_URL } from "./config";


const getMealById = async (mealID) => {
   try {
      const response = await fetch(API_URL + "lookup.php?i=" + mealID);
      const data = await response.json();
      return data;
   } catch (error) {
      console.log(error);
   }
}

const getAllCategories = async () => {
   try {
      const response = await fetch(API_URL + "categories.php" );
      const data = await response.json();
      return data;
   } catch (error) {
      console.log(error);
   }
}

const getFilteredCategory = async(catname) => {
   try {
      const response = await fetch(API_URL + "filter.php?c=" + catname);
      const data = await response.json();
      return data;
   } catch (error) {
      console.log(error);
   }
}

export { getMealById, getAllCategories, getFilteredCategory }