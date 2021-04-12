import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        .catch(err => console.error(err));
    }

    handleSave = book => {
        if(this.state.savedBooks.map(book => book._id).includes(book._id)) {

        } else {
            API.saveBook(book)
            .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
            .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center"> No Results </h1>
                ) : (
                    <div>
                        { this.props.map(result => (
                            <div className="card mb-4" key={ result._id }>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-fluid" alt={ result.title } src={ result.image } />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h4 className="card-title">{result.title} by: {result.authors}</h4>
                                            <p className="card-text">{result.description}</p>
                                            <div>
                                                <a target="_blank" className="btn badge-pill btn-outline-dark mt-2" href={ result.link }>Links</a>
                                                <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-primary ml-3 mt-3">
                                                    { this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save" }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        )) }
                    </div>
                )}
            </div>
        )
    }
}

export default Results;