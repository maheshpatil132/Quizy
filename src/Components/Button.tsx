
import React, {  useState } from 'react'

interface User {
    name : String,
    age: number
}




const Button : React.FC = () => {

  const [count, setCount] = useState<number>(0)

   let user : User = {
     name:"mahesh",
     age : 123
   }

   let values: Array<String> = ["Mahesh" , "hitesh" , "Magan"]

  return (

    <div>
        {user.name}
         {
          values.map((elem : String, index : any)=>{
            return(
              <h1 key={index}>{elem}</h1>
            )
          })
         }
       <button onClick={()=>setCount(count+1)} className='btn'>Click me</button>
       <h1>{count}</h1>
         
    </div>
  )
}

export default Button