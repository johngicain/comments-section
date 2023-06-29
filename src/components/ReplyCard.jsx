import ReplyIcon from "../assets/images/icons/ReplyIcon";

function ReplyCard({ reply, onReply, isSelected }) {
  return (
    <li
      key={reply.id}
      className="mb-4 flex rounded-md bg-white px-2 py-4 md:p-5"
    >
      <div className="mr-5 flex h-28 flex-col rounded-lg bg-[#F5F6FA] text-base text-[#5357B6]">
        <button>+</button>
        <p className="font-semibold">{reply.score}</p>
        <button>-</button>
      </div>
      <div className="text-left">
        <div className="mb-2 flex justify-between">
          <div className="mb-2 flex flex-initial flex-row items-center text-xs md:text-sm">
            <img
              className="mr-4 w-8 rounded-full"
              src={reply.user.image.png}
              alt={reply.user.username}
            />
            <strong className="mr-4">{reply.user.username}</strong>
            <span className="text-[#67727E]">{reply.createdAt}</span>
          </div>
          <button className="flex items-center bg-transparent text-xs font-bold text-[#5357B6]">
            <ReplyIcon className="mr-2" />
            Reply
          </button>
        </div>
        <p className="text-xs sm:text-sm">
          <strong className="text-[#5357B6]">{"@" + reply.replyingTo} </strong>
          {reply.content}
        </p>
      </div>
    </li>
  );
}

export default ReplyCard;
