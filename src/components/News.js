import React, { Component } from 'react'
import axios from 'axios'

export class Books extends Component {
    state = {
        books: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('/news')
            .then(res => this.setState({
                books: res,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {
        const { books, isLoaded } = this.state;
        const { data } = books;
        console.log(this.state)
        if (isLoaded) {
            return (
                <div>
                    {data.map(book => (
                       "... => ..."
                    ))}

                </div>
            )
        }

        return <h3>Loading...</h3>
    }
}

export default Books