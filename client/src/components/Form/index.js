import React from "react";

function Form(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search">
                        <h2>Search & Save</h2>
                    </label>

                    <input 
                    id="search"
                    name="search"
                    placeholder="Search"
                    onChange={props.handleInputChange}
                    value={props.search}
                    className="form-control"
                    type="text"
                    />
                    <button onClick={props.handleFormSubmit} className="btn btn-dark mt-2 mb-4">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;