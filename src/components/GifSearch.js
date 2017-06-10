import React from 'react';

class GifSearch extends React.Component {

  constructor(){
    super()
    this.state = {
      search: ''
    }
  }

  handleChange(event){
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()

    this.props.onSubmit(this.state.search)
  }

  render(){
    return(
      <div>
          <form onSubmit={this.handleSubmit.bind(this)} action="#">
              <input value={this.state.search} onChange={this.handleChange.bind(this)} name="search" type="text"></input>
              <input type="submit" />
          </form>
      </div>
    )
  }

}

export default GifSearch
