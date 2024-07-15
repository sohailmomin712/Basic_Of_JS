import NonFictions from '../nonfiction.json'
import BookCard from './BookCard';
export default function NonFiction() {

  console.log(NonFictions)
  
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        { NonFictions.map( el=>{
        return(
          <BookCard title={el.title} author={el.author} year={el.year} price={el.price} img={el.img}  />
          
          )
      })
       }
      </div>
    </div>
  );
}
