const Card=({data})=>{
    return (
        <div style={{border:"1px solid ",display:"grid" ,gridTemplateColumns:"repeat(4,1fr",gap:"6px", marginTop:"20px"}} data-testid="data-list">
            {data.map((item,index)=>{
                return(
                    <div key={index} style={{border:"1px solid "}}   data-testid="superhero-list">
                        {/*All the content of the card has to be added over here*/}
                        <h1>Hero Name:{item.name}</h1> 
                        <h4>Height:{item.height}</h4>
                        <h4>Weight:{item.weight}</h4>
                        <h4>Power Level:{item.power}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;