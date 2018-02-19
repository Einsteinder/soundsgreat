import React from 'react'


class SearchMusic extends React.Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }
    onSubmit = e => {
        e.preventDefault();
    
        
          this.props.onSearch(this.state.query);
        
      };
    render() {

        return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand">SoundsGreat</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">

                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                    <input 
                    className="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Search" 
                    onChange={(event) => this.updateQuery(event.target.value)}
                    aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    }
}






export default SearchMusic