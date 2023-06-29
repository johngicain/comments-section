import Replies from "./Replies";
import ReplyIcon from "../assets/images/icons/ReplyIcon";

function CommentCard({ friend, onReply, onCommentSelect }) {
  const isSelected = onCommentSelect?.id === friend.id;

  return (
    <li key={friend?.id} className="mb-4 flex flex-col">
      <div className="flex rounded-md bg-white px-2 py-4 md:p-5">
        <div className="mr-5 flex flex-col rounded-lg bg-[#F5F6FA] text-base text-[#5357B6]">
          <button>+</button>
          <p className="font-semibold">{friend.score}</p>
          <button>-</button>
        </div>
        <div className="text-left">
          <div className="mb-2 flex justify-between">
            <div className="mb-2 flex flex-initial flex-row items-center text-xs md:text-sm">
              <img
                className="mr-4 w-8"
                src={friend.user.image.png}
                alt={friend.user.username}
              />
              <strong className="mr-4">{friend.user.username}</strong>
              <span className="text-[#67727E]">{friend.createdAt}</span>
            </div>
            <button
              onClick={() => onReply(console.log(friend.id))}
              className="flex items-center bg-transparent text-xs font-bold text-[#5357B6]"
            >
              <ReplyIcon className="mr-2" />
              {onReply ? "Reply" : "Cancel"}
            </button>
          </div>
          <p className="text-xs sm:text-sm">{friend.content}</p>
        </div>
      </div>
      {friend.replies.length > 0 && (
        <Replies friend={friend} isSelected={isSelected} />
      )}
    </li>
  );
}

export default CommentCard;
