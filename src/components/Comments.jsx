import CommentCard from "./CommentCard";

function Comments({ comments, onSelect, selectedComment, showCommentForm }) {
  return (
    <ul className="max-w-6xl">
      {comments.map((comment) => (
        <CommentCard
          comment={comment}
          onSelect={onSelect}
          selectedComment={selectedComment}
          showCommentForm={showCommentForm}
        />
      ))}
    </ul>
  );
}

export default Comments;
