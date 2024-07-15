import React from "react";
const Post = ({data}) => {
  return (
    <div className="post">
      <h1>
        {/* Here show the title of the post  */}
        {data.title}
      </h1>
      <h3>
        {/* Here show the body of the post  */}
        {data.body}
      </h3>
    </div>
  );
};

export default Post;
