import { useState } from "react";

function AddComment({ currentUser, onAddComment }) {
  const [addComment, setAddComment] = useState("");
  const [addImage, setAddImage] = useState(currentUser.image.png);

  function onSubmitHandler(e) {
    e.preventDefault();

    if (!addComment || !addImage) return;

    const newComment = {
      id: currentUser.id,
      content: addComment,
      createdAt: "",
      replyingTo: "",
      user: addImage,
    };
    console.log(newComment);
    onAddComment(newComment);
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex max-w-6xl justify-between rounded-md bg-white p-5"
    >
      <img
        className="mr-4 h-12 w-12 rounded-full"
        src={addImage}
        alt={currentUser.username}
      />
      <textarea
        className="mr-4 h-28 w-full rounded-md border border-solid p-3 text-sm"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Add a comment..."
        value={addComment}
        onChange={(e) => setAddComment(e.target.value)}
      >
        {}
      </textarea>
      <button className="h-12 bg-[#5357B6] text-sm text-white transition-colors duration-200 hover:bg-indigo-700">
        SEND
      </button>
    </form>
  );
}

export default AddComment;
