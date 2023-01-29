import axios from "axios";
import { useState } from "react";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setComment] = useState("");
  const addComment = async () => {
    const response = await axios.post(`/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText,
    });

    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setComment("");
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <label for="name">Name</label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <label for="comment">Comment</label>
      <textarea
        id="comment"
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
