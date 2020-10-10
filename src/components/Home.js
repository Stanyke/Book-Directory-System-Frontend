import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            books: [],
            errorMessage: '',
            currentPage: '1',
            booksPerPage: '5'
        }

        toast.configure()
    }
    

    componentDidMount(){
        document.title = `Books Homepage`;

        axios.get('https://book-directory-system-api.herokuapp.com/api/books')
        .then((res) => {
            document.getElementById('beatLoaders').style.display = "none";
            this.setState({
                books: res.data.books
            })
            document.title = `Page ${this.state.currentPage} | Books Homepage`;
        })
        .catch((err) => {
            document.getElementById('beatLoaders').style.display = "none";
            this.setState({
                errorMessage: "There was a problem while getting books, try again."
            })
        })
    }

    trimCharacter(string){
        var length = 150;
        var trimmedString = string.length > length ? 
                            string.substring(0, length - 3) : 
                            string;
        return trimmedString
    }
    
    render() {

        const divCardImg = { width: `100%`, height: `300px` }

        const { books, errorMessage, currentPage, booksPerPage } = this.state

        const indexOfLastPage = currentPage * booksPerPage;
        const indexOfFirstPage = indexOfLastPage - booksPerPage;
        const currentBooks = books.slice(indexOfFirstPage, indexOfLastPage);

        const totalBooks = books.length;
        const bookPagination = (booksPerPage, totalBooks) => {
            const booksPageNumbers = []

            for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++)
            {
                booksPageNumbers.push(i)
            }

            return(
                <ul className="pagination">
                {
                    booksPageNumbers.map(bookNumber => (
                        <li key={bookNumber} className="page-item">
                            <Link to="" className="page-link" onClick={() => this.switchPagination(bookNumber)}>
                                {bookNumber}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            )
        }


        return (
            <div>
                <nav className="navbar navbar-expand-sm">
                    <Link className="navbar-brand" to="/">Book Directory</Link>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="btn btn-outline-info nav-link p-2" to="/post">New Book</Link>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    <div className="row">
                    
                    {
                        currentBooks.length ?
                        currentBooks.map(book => <div key={book._id} className="col-md-4 col-sm-6 mt-4" align="center">
                            <div className="card col-md-12">
                                <img className="card-img-top" src={book.cover_image_url} alt="Book cover" style={divCardImg} />
                                <div className="card-body">
                                    <h4 className="card-title">{book.title}</h4>
                                    <p className="card-text">{this.trimCharacter(book.description)} <Link to={"book/"+book._id} class="readMoreLink">Read More</Link></p>
                                    <p className="authorName" align="left">Author: <b>{book.author}</b></p>
                                    <Link className="previewLink btn btn-primary nav-link p-2" to={"book/"+book._id}>Preview</Link>
                                </div>
                            </div>
                        </div>) : null
                    }

                    {
                        errorMessage ? <div align="center" className="col-12"></div>
                        : null
                    }
                    
                        <div id="beatLoaders" align="center">
                            <BeatLoader size={50} color="#c31432" loading />
                            <b>Books Loading...</b>
                        </div>

                        
                        
                    </div>

                </div>

                <div class="container">
                    {
                        currentBooks.length ? bookPagination(booksPerPage, totalBooks) : null
                    }
                </div>
                
                
            </div>
        )
    }

    switchPagination = (proposedBookPage) => {
        document.title = `Page ${proposedBookPage} | Books Homepage`;
        toast.info(`Page ${proposedBookPage}`, {position: toast.POSITION.TOP_LEFT, autoClose: 1000});
        this.setState({
            currentPage: proposedBookPage
        })
    }
}

export default Home
