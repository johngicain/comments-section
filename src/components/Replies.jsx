import ReplyCard from "./ReplyCard";

function Replies({ comment, isSelected }) {
  return (
    <ul className="ml-6 mt-6 border-l border-dashed border-[#C5C6EF] pl-6 md:ml-10 md:pl-8">
      {comment.replies.map((reply) => (
        <ReplyCard reply={reply} isSelected={isSelected} />
      ))}
    </ul>
  );
}

export default Replies;
