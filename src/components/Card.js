import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import "./style/Card.css";

const Card = (props) => {
  const { img, title, description } = props;

  const [likes, setLikes] = React.useState(0);
  const [liked, setLiked] = React.useState(false);

  const handleLikes = () => {
    // let numLikes = ""
    setLikes(likes + 1);
    setLiked(true);

    // if(numLikes === false){
    //   return 
    // }
  };


  const newStyle = {
    display: liked ? `you $ {likes} others likes this post` : 'block'
  }



  // {newMessages ? <h4>you have {newMessages.length} unread {newMessages.length > 1 ? 'messages' : 'message'}</h4> :<h4>you are all caught up</h4>}
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="special-like">
        <div className="active-like" style={newStyle}>
          <AiOutlineLike />
          <span>{likes} others</span>
        </div>
        <span>{liked && <p>You liked this post!</p>}</span>
      </div>
      <hr />
      <button onClick={handleLikes}>
        <AiOutlineLike />
        <span>Like</span>
      </button>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
