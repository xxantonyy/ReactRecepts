import { CategoryItem } from "./CategoryItem"

export function CategoryList ({catalog = []}) {
   return <div className='list'>
      {
         catalog.map(data => (
            <CategoryItem key={data.idCategory} {...data}/>
         ))
      }
   </div>
}