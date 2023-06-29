import ReplyCard from "./ReplyCard";

function Replies({ friend, onReply, isSelected }) {
  return (
    <ul className="ml-6 mt-6 border-l border-dashed border-[#C5C6EF] pl-6 md:ml-10 md:pl-8">
      {friend.replies.map((reply) => (
        <ReplyCard reply={reply} onReply={onReply} />
      ))}
    </ul>
  );
}

export default Replies;
