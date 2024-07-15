import { useState } from 'react';
import Card from './Card';
const InputTags=()=>{
    const[name,setName]=useState('')
    const[height,setHeight]=useState(0)
    const[weight,setWeight]=useState(0)
    const[power,setPower]=useState(0)
    const [data,setData]=useState([])

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,height,weight,power);
        const d={name,height,weight,power}
        if(name&&height&&weight&&power){
    setData((el)=>[...el,d])
        }
    }
    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder='Name' data-testid="input-name" value={name} onChange={(e)=>setName(e.target.value)} type="text"/>

            <input height="height" placeholder='Enter Height in cms' value={height} onChange={(e)=>setHeight(e.target.value)} data-testid="input-height" type="text"/>

            <input weight='weight'  placeholder='Enter Weight in kgs' value={weight} onChange={(e)=>setWeight(e.target.value)} data-testid="input-weight" type="text"/>

            <input disabled={power>=10 || power<0} powerlevel="powerlevel"  placeholder='Power Level' value={power} onChange={(e)=>setPower(e.target.value)} data-testid="input-power" type="text"/> 

            <button  disabled={!name||!height||!weight||!power} data-testid="add-button">Add SuperHero</button>

        </form>

        <button data-testid="most-powerfull">Most Powerful Superhero</button>
        <button data-testid="all-superheroes">Show All</button>
        <Card data={data}/>
        </>


    )
}

export default InputTags;