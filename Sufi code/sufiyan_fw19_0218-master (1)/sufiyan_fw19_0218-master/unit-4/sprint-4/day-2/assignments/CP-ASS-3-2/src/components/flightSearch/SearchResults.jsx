const SearchResults = ({data}) => {
      return (
          <table >
            {/* add columnsheadings */}
            <tr>
              <th>DEPARTURE</th>
              <th>DURATION</th>
              <th>ARRIVAL</th>
              <th>PRICE</th>
            </tr>
            
            <tbody data-testid="flight-results">
          
          {
            data.map((el,i)=>(

              <tr key={i} >
                <td>{el.departure}</td>
                <td>{el.duration}</td>
                <td>{el.arrival}</td>
                <td>{el.price}</td>
              </tr>
              
            ))
          }

       
            </tbody>
          </table>
      );
    
  };
  export default SearchResults;
  