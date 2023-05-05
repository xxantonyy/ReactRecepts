import { Link } from "react-router-dom"

export function Meal(props){
   const {strMeal,idMeal,strMealThumb} = props

   return (
      <div className="card">
         <div className="card-image">
            <img src={strMealThumb} alt={strMeal} />
         </div>
         <div className="card-content">
            <span className="card-title">{strMeal}</span>
         </div>
         <div className="card-action">
            <Link to={`/meal/${idMeal}`}className="btn waves-effect green darken-2 back-button">Watch recipe</Link>
         </div>
      </div>
   );


}