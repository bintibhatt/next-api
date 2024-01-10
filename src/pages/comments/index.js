import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setComment("");
    fetchComments();
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div>
      <h1>Comments Page</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <br></br>
      <br></br>
      <button onClick={fetchComments}>Load Comments</button>
      <br></br>
      <br></br>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            {comment.id} {" -   "}
            {comment.text}
            {" -   "}
            {" -   "}
            {" -   "}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default CommentsPage;
