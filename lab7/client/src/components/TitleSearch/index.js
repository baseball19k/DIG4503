import React from 'react';

class TitleSearch extends React.Component {

    titleSearchFormSubmit = () => {

        // Get the input's value
        let title = document.querySelector('#titleSearch').value;

        // Test if title is an empty string
        // If so, change it to a value
        if(title.length === 0) {
            title = "0";
        }

        // Look for movies based on the title
        fetch("http://localhost:80/movies/title/" + title)
        .then((res) => { return res.json() })
        .then((processed) => {
            // Call the callback function given to the class component
            this.props.callback(processed);
        });

    }

    render() {
        return(
            <div>
                <h2>Search for Movies by their Title:</h2>
                <input
                    type="text"
                    id="titleSearch"
                    onKeyUp={this.titleSearchFormSubmit}
                />
            </div>
        );
    }

}

export default TitleSearch;
