import React from 'react'



class SearchResult extends React.Component {

    render() {
        const musics = this.props.query
        return <div className="container">
            <div className="row">
                {(musics) && musics.map((music) => (
                    <div className="col-md-4" key={music.id}>
                        <img src={music.album.images[0].url} alt={music.id} width="300" height="300" />
                        <label htmlFor={music.id}></label>
                        <video controls width="300" height="30" id={music.id}>
                            <source src={music.preview_url} type="video/mp4" />
                        </video>
                        <h2>{music.name}</h2>
                        <p>Popularity:{music.popularity}</p>
                        <p>Album: <a href={music.album.external_urls.spotify}>{music.album.name}</a></p>
                        <p>Artist: <a href={music.album.artists[0].external_urls.spotify}>{music.album.artists[0].name}</a></p>
                    </div>


                ))}
                {(!musics.length)&&<p>Sorry, we cannot find anything about {this.props.searchkey}</p>}
            </div>
        </div>

    }
}


export default SearchResult
