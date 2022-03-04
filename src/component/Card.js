import React from 'react';

function Card(props) {
  const { id, url, title } = props.obj;
  return (
    <div className="card" id={id} onClick={props.handleClick}>
      <img src={url} alt={title}></img>
    </div>
  );
}

export default Card;
