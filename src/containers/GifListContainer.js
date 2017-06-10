import React from 'react';

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const url = 'http://api.giphy.com/v1/gifs/search?q='
const key = '&api_key=dc6zaTOxFJmzC'

export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifList: []
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    getFetch(searchTerm) {
        fetch(url+searchTerm+key)
            .then(res=>res.json())
            .then(response => {
                this.setState({
                    gifList: response.data.slice(0,3)
                })
            })
    }

    onSubmit(searchTerm) {
        this.getFetch(searchTerm)
    }

    render() {
        return (
            <div>
                <GifSearch onSubmit={this.onSubmit}/>
                <GifList gifList={this.state.gifList}/>
            </div>
        )
    }

}
