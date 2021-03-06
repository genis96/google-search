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

    // GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey

    // volumeInfo, thumbnail, imageLinks
    makeNewBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
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
                <div>
                    <h2>Results</h2>
                    <Results books={this.state.books}></Results>
                </div>
            </div>
        )
    }
}

export default Search;