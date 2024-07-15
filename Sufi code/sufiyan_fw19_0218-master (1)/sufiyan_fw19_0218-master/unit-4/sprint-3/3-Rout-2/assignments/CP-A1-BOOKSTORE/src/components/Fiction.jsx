import Fictions from '../fiction.json'
import BookCard from './BookCard';

export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
      { Fictions.map( el=>{
        
        return(
          <BookCard title={el.title} author={el.author} year={el.year} price={el.price} img={el.img}  />
          
          )
      })
       }
      </div>
    </div>
  );
}
