import { useState } from "react"

export const Todo = ({item}) => {

    const [ isEdit, setIsEdit]  = useState(false)
  return (
    <div className="todo">
        {isEdit ? <div>Modo editar</div> 
        : <div>
     {item.title}
        <button onClick={()=>setIsEdit(true)}>Edit</button>
     <button>Delete</button>
 </div>}
    </div>

    
    )
}
