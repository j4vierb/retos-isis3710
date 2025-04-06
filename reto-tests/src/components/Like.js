import { useState } from "react";

function Like() {
  const [likes, setLikes] = useState(0);
  const handleIncrement = () => {
    setLikes(likes + 1)
  };

  const handleDecrement = () => {
    setLikes(likes - 1)
  };

  return (
    <div className="like-component">
      <p>Likes: {likes}</p>
      <button id="increment" onClick={handleIncrement}>
        Like
      </button>
      <button id="decrement" onClick={handleDecrement}>
        {" "}
        Dislike
      </button>
    </div>
  );
}

export default Like;