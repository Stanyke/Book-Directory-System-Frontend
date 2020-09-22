import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import axios from 'axios';

class Books extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            book_id: this.props.match.params.id,
            author: "",
            book_title: "",
            book_summary: "",
            book_cover: "",

            errorMessage: ""
        }
    }
    
    componentDidMount(){
        axios.get(`https://book-directory-system-api.herokuapp.com/api/books/${this.state.book_id}`)
        .then((res) => {
            document.getElementById('beatLoaders').style.display = "none";
            document.getElementById('bookContainer').style.display = "block";
            this.setState({
                author: res.data.message.author,
                book_title: res.data.message.title,
                book_summary: res.data.message.description,
                book_cover: res.data.message.cover_image_url
            })
        })
        .catch((err) => {
            document.getElementById('beatLoaders').style.display = "none";
            this.setState({
                errorMessage: "There was a problem while getting this book, try again."
            })
        })
    }
    render() {
        const { author, book_title, book_summary, book_cover, errorMessage } = this.state;
        const imgStyle = {width: '100%', height: '350px'}
        return (
            <div>
                <nav className="navbar navbar-expand-sm">
                    <Link className="navbar-brand" to="/">Book Directory</Link>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="btn btn-outline-info nav-link p-2" to="/">Home</Link>
                        </li>
                    </ul>
                </nav>


                <div className="container">
                   
                    <div id="bookContainer">
                        
                        <div className="row">

                            <div className="col-md-4">
                                <img src={book_cover} style={imgStyle} alt="Book Cover" />
                            </div>

                            <div className="col-md-8">
                                <div className="bookTitle"><b>{book_title}</b></div>
                                <div className="bookAuthor">By: <span class="bookWriter">{author}</span></div>

                                <br/>
                                <div className="bookSummary">{book_summary}</div>
                            </div>
                        </div>
                        
                    </div>

                    {
                        errorMessage ? <div align="center" className="col-12">
                            {errorMessage}
                            <p>Possibly caused by an invalid link.</p>
                        </div>
                        : null
                    }

                    <div id="beatLoaders" align="center">
                        <BeatLoader size={50} color="#c31432" loading />
                        <b>Book Loading...</b>
                    </div>

                </div>
            </div>
        )
    }
}

export default Books
