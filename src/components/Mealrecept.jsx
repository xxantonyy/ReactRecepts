import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

export function Mealrecept () {
   const {id} = useParams();
   const [name, setName] = useState([]);


   useEffect(()=>{
      getMealById(id).then(item=> setName(item.meals))
   },[id])

   const items = name[0];
   console.log(items);
   
   return <>
      <div>
         {!name.length ? <Preloader />: 
         <div>
            {items.strMeal}
            </div>}
      </div>
   </>
}