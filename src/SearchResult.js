import React from 'react'
import * as SpotifyAPI from './SpotifyAPI'



class SearchResult extends React.Component {
    state = {
        result: []
      }


      componentDidMount() {
        let resultMusics = []
        SpotifyAPI.search(this.props.query).then((musics) => {
            if(typeof musics !=='undefined'){
                       

                for(let i=0;i<musics.length;i++){
    
                      resultMusics.push(musics[i])
                  }
                  this.setState({ result:resultMusics })  

              }
            })
           

        
    
        
}
  render(){
    const musics = this.state.result

      return       <ol className="books-grid">         
      
           {(typeof(musics!=='undefined')|| musics!==[]|| musics) && musics.map((music) => (
                        <li  key={music.id} >
                        
                            <div>{music.title}</div>

                        </li>
                ))}  
                
                              </ol>

        
        }
  }


export default SearchResult
