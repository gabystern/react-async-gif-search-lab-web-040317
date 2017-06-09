import React from 'react';

export default function GifList(props) {
    return(
      <div>
      <p>Gif Search</p>
        <ul>
          {props.gifList.map(gif => <li id={gif.id}>{gif.id}</li>)}
        </ul>
      </div>
  )
}
