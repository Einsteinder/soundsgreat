import React from 'react'



class SearchResult extends React.Component {

    render() {
        const musics = this.props.query
        return <div className="container">
            <div className="row">
                {(musics) && musics.map((music) => (
                    <div className="col-md-4" key={music.id}>
                        <img src={music.album.images[0].url} alt={music.id} width="300" height="300" />
                        <video controls width="300" height="30">
                            <source src={music.preview_url} type="video/mp4" />
                        </video>
                        <h2>{music.name}</h2>
                        <p>{music.album.name}</p>
                        <p>{music.album.artists[0].name}</p>
                    </div>


                ))}

            </div>
        </div>

    }
}


export default SearchResult
