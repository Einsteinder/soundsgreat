import React from 'react'
import * as SpotifyAPI from './SpotifyAPI'
import SearchResult from './SearchResult';


class SearchResultContainer extends React.Component {
    state = {
        result: []
    }



async componentDidMount(props) {
    if (this.props.query) {
        const musics = await SpotifyAPI.search(this.props.query)
            this.setState({ result: musics.tracks.items })
    }
}
async componentWillReceiveProps(newProps) {
    if (newProps.query && newProps.query !== this.props.query) {
        const musics = await SpotifyAPI.search(newProps.query)
        this.setState({ result: musics.tracks.items })
    }
}

render() {
    if (!this.props.query){
        return <h1>Search songs through key words</h1>
    }
    const songs = this.state.result

    return <SearchResult query={songs} searchkey={this.props.query}/>
}

}
export default SearchResultContainer