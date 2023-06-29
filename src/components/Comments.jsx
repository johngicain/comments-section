import CommentCard from "./CommentCard";

function Comments({ friends, onReply, onCommentSelect }) {
  return (
    <ul className="max-w-6xl">
      {friends.map((friend) => (
        <CommentCard
          friend={friend}
          onReply={onReply}
          onCommentSelect={onCommentSelect}
        />
      ))}
    </ul>
  );
}

export default Comments;
