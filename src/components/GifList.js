import React, {Component} from 'react';
// export default function GifList(props) {
//     return(
//       <div>
//       <p>Gif Search</p>
//         <ul>
//           {props.gifList.map(gif => <li id={gif.id}>{gif.id}</li>)}
//         </ul>
//       </div>
//   )
// }

const GifList = (props) => {
  return(
    <div>
      <ul>
        {props.gifList.map(gif => {
          return <li key={gif.id}><img src={gif.images.downsized_medium.url}/></li>
        })}
      </ul>
    </div>
  )
}

export default GifList
