import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function MealDetails() {
   const { id } = useParams();
   const [meal, setMeal] = useState(null);
   const [videoId, setVideoId] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      getMealById(id).then((data) => {
         setMeal(data.meals[0]);
         setVideoId(getVideoId(data.meals[0].strYoutube));
      });
   }, [id]);

   const handleBack = () => {
      navigate(-1);
   }
   const getVideoId = (url) => {
      const videoId = url.split("v=")[1];
      return videoId ? videoId : null;
   };

   const playerOpts = {
      playerVars: {
         controls: 1,
      },
   };

   const backgroundStyle = {
      backgroundColor: "#F5DEB3",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#333",
      padding: "20px",
   };

   const imageStyle = {
      border: "5px solid #fff",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
   };

   return (
      <>
         {meal && (
            <div className="meal-details" style={backgroundStyle}>
               <h1 className="meal-details__title">{meal.strMeal}</h1>
               <img
                  className="meal-details__image"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  style={imageStyle}
               />
               <p className="meal-details__description">{meal.strInstructions}</p>
               <p className="meal-details__category">
                  Category: {meal.strCategory}
               </p>
               <p className="meal-details__origin">Origin: {meal.strArea}</p>
               <ul className="meal-details__ingredients">
                  {Object.entries(meal)
                     .filter(([key, value]) => key.startsWith("strIngredient") && value)
                     .map(([key, value]) => (
                        <li key={key} className="meal-details__ingredient">
                           "{value}" - {meal[`strMeasure${key.slice(13)}`]}
                        </li>
                     ))}
               </ul>
               {videoId && meal.strYoutube !== "" && (
                  <div className="meal-details__video">
                     <YouTube videoId={videoId} opts={playerOpts} />
                     <div className="card-action">
                        <Link className="btn green darken-2 halfway-fab waves-effect back-button" onClick={handleBack}>Back</Link>
                     </div>
                  </div>
               )}
            </div>
         )}
      </>
   );
}