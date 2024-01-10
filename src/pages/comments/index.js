import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    // fetch("http://localhost:3000/api/comments")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <div>
      <h1>Comments Page</h1>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            {comment.id} {" -   "}
            {comment.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CommentsPage;
