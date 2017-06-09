import React from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  constructor(){
    super()

    this.state = {
      gifArray: [],
      searchTerm: ""
    };
  }

  componentWillMount(){
    fetch('http://api.giphy.com/v1/gifs/search?q=puppy&api_key=dc6zaTOxFJmzC')
    .then(text => text.json())
    .then(text => this.setState({
        gifArray: text.data
    }))
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(event.target.childNodes[0].defaultValue)
    // this.setState({
    //   searchTerm: event.target.childNodes[0].defaultValue
    // })
    fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.childNodes[0].defaultValue}&api_key=dc6zaTOxFJmzC`)
    .then(text => text.json())
    .then(text => this.setState({gifArray: text.data}) )
  }

  // fetchSearch(){
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.childNodes[0].defaultValue}&api_key=dc6zaTOxFJmzC`)
  //   .then(text => text.json())
  //   .then(text => console.log(text.data))
  // }

  render(){
    return (
      <div>
        < GifSearch handleSubmit={this.handleSubmit.bind(this)}/>
        < GifList gifList={this.state.gifArray} />
      </div>
    )
  }


}

export default GifListContainer
