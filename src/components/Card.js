import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import "./style/Card.css";

const Card = (props) => {
  const {img, title, description} = props

  const {likes, setLikes} = React.useState(0)

  const handleLikes = () => {
    setLikes(prev => prev + 1)
  }

  return (
    <div className="card">
        <img
          src={img} alt=""
        />
        <div className="active-like"><AiOutlineLike /></div>
        <hr/>
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
