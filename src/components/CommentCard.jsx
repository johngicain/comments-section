import Replies from "./Replies";
import ReplyIcon from "../assets/images/icons/ReplyIcon";

function CommentCard({ comment, onSelect, selectedComment, showCommentForm }) {
  const isSelected = selectedComment?.id === comment.id;

  // console.log(isSelected.replies);

  function onSelectHandler() {
    onSelect(isSelected);
  }

  return (
    <li key={comment.id} className="mb-4 flex flex-col">
      <div className="flex rounded-md bg-white px-2 py-4 md:p-5">
        <div className="mr-5 flex flex-col rounded-lg bg-[#F5F6FA] text-base text-[#5357B6]">
          <button>+</button>
          <p className="font-semibold">{comment.score}</p>
          <button>-</button>
        </div>
        <div className="w-full text-left">
          <div className="mb-2 flex justify-between">
            <div className="mb-2 flex flex-initial flex-row items-center text-xs md:text-sm">
              <img
                className="mr-4 w-8 rounded-full"
                src={comment.user.image.png}
                alt={comment.user.username}
              />
              <strong className="mr-4">{comment.user.username}</strong>
              <span className="text-[#67727E]">{comment.createdAt}</span>
            </div>
            <button
              onClick={() => onSelectHandler(comment.id, comment.user.username)}
              className="flex items-center bg-transparent text-xs font-bold text-[#5357B6]"
            >
              <ReplyIcon className="mr-2" />
              {showCommentForm ? "Cancel" : " Reply"}
            </button>
          </div>
          <p className="text-xs sm:text-sm">{comment.content}</p>
        </div>
      </div>
      {comment.replies && <Replies comment={comment} isSelected={isSelected} />}
    </li>
  );
}

export default CommentCard;
