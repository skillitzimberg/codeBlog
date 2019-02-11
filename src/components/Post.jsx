import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <article class="post">
      <h1>{ props.title }</h1>
      <h3>{ props.date }</h3>
      <div>{ props.content }</div>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;