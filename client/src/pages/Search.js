import React from "react";
import API from "../utils/API";
import Form from "../components/Form";
import Results from "../components/Results";

class Search extends React.Component {
    state = {
        books: [],
        value: ""
    };

    componentDidMount() {
        this.searchBook();
    }

    searchBook = query => {
        API.getBook(query) 
            .then(res => this.setState({ books: res.data.items.map(bookData => this.makeNewBook(bookData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleSubmitForm = e => {
        e.preventDefault();
        this.searchBook(this.state.search);
    };


    render() {
        return (
            <div>
                <Form>
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                </Form>
            </div>
        )
    }
}

export default Search;