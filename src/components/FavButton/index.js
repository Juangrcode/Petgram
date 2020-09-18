import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import PropTypes from "prop-types";
import { Button } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? AiFillHeart : AiOutlineHeart;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {likes} likes!
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func,
};
