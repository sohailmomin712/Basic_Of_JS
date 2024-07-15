import { useState } from "react";

// import module.css here;
const UserDetails = ({ item }) => {

  // console.log(item.avatar)
  return (
    <>
      <div data-testid="user-container">
        <img src={item.avatar} alt="" />  {/* user image */}
        <div>
          <div>
            <h3 data-testid="user-fname">{item.first_name}</h3>
            <h3 data-testid="user-lname">{item.last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{item.address}</p>
          </div>
        </div>
        <div>  
        
          <h3 data-testid="user-karma">{item.karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{item.followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{item.posts}</h3>
        </div>
        <button data-testid="follow-btn">  {item.is_following ? "Unfollow" : 'Follow'}</button>
      </div>
    </>
  );
};
export default UserDetails;