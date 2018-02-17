import React from 'react'
import SearchResult from './SearchResult';


class SearchMusic extends React.Component {
    state = {
        query: 'Muse'
      }
      /*
      updateQuery = (query) => {
        this.setState({ query: query.trim() })
      }*/
    
render(){
    const { query } = this.state


return  <div >

        
             
                <SearchResult query = {query}/>

        
          </div>
         }
        }

export default SearchMusic
