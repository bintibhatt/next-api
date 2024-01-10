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

  return (
    <div>
      <h1>Comments Page</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <br />
      <button onClick={submitComment}>Submit Comment</button>
      <br />
      <br />
      {/* <button onClick={fetchComments}>Load Comments</button> */}
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
