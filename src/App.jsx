import { useState } from "react";
import "./App.css";
import imageJuliusomo from "./assets/images/avatars/image-juliusomo.png";
import imageAmyrobson from "./assets/images/avatars/image-amyrobson.png";
import imageMaxblagun from "./assets/images/avatars/image-maxblagun.png";
import imageRamsesmiron from "./assets/images/avatars/image-ramsesmiron.png";
import imageJohngicain from "./assets/images/avatars/image-johngicain.png";
import EditIcon from "./assets/images/icons/EditIcon";
import DeleteIcon from "./assets/images/icons/DeleteIcon";
import PlusIcon from "./assets/images/icons/PlusIcon";
import MinusIcon from "./assets/images/icons/MinusIcon";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";
import CommentCard from "./components/CommentCard";

const thread = {
  currentUser: {
    id: 4,
    image: {
      png: imageJohngicain,
      webp: "./assets/images/avatars/image-johngicain.webp",
    },
    username: "johngicain",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: imageAmyrobson,
          webp: "./assets/images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: imageMaxblagun,
          webp: "./assets/images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: imageRamsesmiron,
              // webp: "/assets/images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: imageJohngicain,
              // webp: "./assets/images/avatars/image-juliusomo.webp",
            },
            username: "johngicain",
          },
        },
      ],
    },
  ],
};

const initialComments = thread.comments;

function App() {
  const [replyComment, setReplyComment] = useState(initialComments);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  function setReplyHandler(comment) {
    setReplyComment((prevComments) => {
      return [...prevComments, comment];
    });
    setShowCommentForm((showCommentForm) => !showCommentForm);
  }

  function setSelectedCommentHandler(comment) {
    setSelectedComment((selected) =>
      selected?.id === comment.id ? comment : null
    );
    console.log(selected.id, selected.username);
  }

  return (
    <>
      <Comments
        comments={replyComment}
        onSelect={setSelectedCommentHandler}
        selectedComment={selectedComment}
        showCommentForm={showCommentForm}
      />
      {/* {replyComment.map((comment) => (
        <CommentCard comment={comment} />
      ))} */}
      {!showCommentForm && (
        <AddComment
          onSelect={setSelectedCommentHandler}
          currentUser={thread.currentUser}
          onAddComment={setReplyHandler}
        />
      )}
    </>
  );
}

export default App;
