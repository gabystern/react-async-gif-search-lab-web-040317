import React from 'react';

class GifSearch extends React.Component {

  constructor(){
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          <input type='text' placeholder='search' value={this.state.value} onChange={this.handleChange.bind(this)}/>
          <input type='submit' value="ClickMe" />
        </form>
      </div>
    )
  }

}

export default GifSearch
