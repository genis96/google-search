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