import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
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

            errorMessage: "",
            bookDelted: false,

            returnToHomePage: false
        }

        toast.configure()
    }
    
    componentDidMount(){
        document.title = `Book Loading...`;

        axios.get(`https://book-directory-system-api.herokuapp.com/api/books/${this.state.book_id}`)
        .then((res) => {
            document.getElementById('beatLoaders').style.display = "none";
            console.log(res.data.message)
            if(res.data.message.hasOwnProperty("title"))
            {
                document.title = `${res.data.message.title} By ${res.data.message.author}`;
                document.getElementById('bookContainer').style.display = "block";
                this.setState({
                    author: res.data.message.author,
                    book_title: res.data.message.title,
                    book_summary: res.data.message.description,
                    book_cover: res.data.message.cover_image_url
                })
            }
            else
            {
                document.title = "Book Has Been Deleted";
                this.setState({
                    errorMessage: res.data.message,
                    bookDelted: true
                })
            }
        })
        .catch((err) => {
            document.title = "Book Couldn't Load"
            document.getElementById('beatLoaders').style.display = "none";
            console.log(err)
            this.setState({
                errorMessage: "There was a problem while getting this book, try again."
            })
        })
    }
    
    render() {
        const { author, book_title, book_summary, book_cover, errorMessage, bookDelted, returnToHomePage } = this.state;
        const imgStyle = {width: '100%', height: '350px'}

        if(returnToHomePage){
            return <Redirect to="/" />
        }
        else
        {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm">
                        <Link className="navbar-brand" to="/">Book Directory</Link>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="btn btn-outline-info nav-link p-2 mr-3" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="btn btn-outline-info nav-link p-2" to="/post">New Book</Link>
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
                                    <div className="bookAuthor">By: <span className="bookWriter">{author}</span></div>

                                    <br/>
                                    <div className="bookSummary">{book_summary}</div>
                                    
                                    <button class="btn btn-danger mt-3" onClick={() => this.previewDeleteProcess()}>Delete Book</button>
                                </div>
                            </div>
                            
                        </div>

                        {
                            errorMessage ? <div align="center" className="col-12">
                                <b>{errorMessage}</b>

                                {
                                    bookDelted ? "" : <p>Possibly caused by an invalid link.</p>
                                }
                                
                            </div>
                            : null
                        }

                        <div id="beatLoaders" align="center">
                            <BeatLoader size={50} color="#c31432" loading />
                            <b>Book Loading...</b>
                        </div>

                        <div id="deleteBookNotice" align="center">
                            <b>Are you sure you want to delete this book?</b>
                            <div>
                                <button type="button" className="btn btn-danger pt-2 pd-2 pl-4 pr-4 mr-3" onClick={() => this.continueBookDelete()}>Yes <span role="img" aria-label="Yes">✔️</span></button>
                                <button type="button" className="btn btn-info pt-2 pd-2 pl-4 pr-4" onClick={() => this.cancelBookDelete()}>No <span role="img" aria-label="No">✖️</span></button>
                            </div>

                        </div>

                        <div id="tryingBookDelete" align="center">
                            <BeatLoader size={50} color="#c31432" loading />
                            <b>Processing Book Delete...</b>
                        </div>

                    </div>
                </div>
            )
        }
    }

    previewDeleteProcess = () => {
        document.getElementById('deleteBookNotice').style.display = "block"
    }

    cancelBookDelete = () => {
        document.getElementById('deleteBookNotice').style.display = "none"
    }

    continueBookDelete = () => {
        document.getElementById('deleteBookNotice').style.display = "none"
        document.getElementById('tryingBookDelete').style.display = "block"

        axios.delete(`https://book-directory-system-api.herokuapp.com/api/books/${this.state.book_id}`)
        .then((res) => {
            document.getElementById('tryingBookDelete').style.display = "none"

            this.setState({
                returnToHomePage: true
            })
            toast.info(res.data.message, {position: toast.POSITION.TOP_LEFT, autoClose: 5000});
        })
        .catch((err) => {
            toast.error(err.response.data, {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
        })
    }

}

export default Books
