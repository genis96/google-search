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