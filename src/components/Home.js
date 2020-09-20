import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            books: [],
            errorMessage: ''
        }
    }
    

    componentDidMount(){
        axios.get('https://book-directory-system-api.herokuapp.com/api/books')
        .then((res) => {
            document.getElementById('beatLoaders').style.display = "none";
            this.setState({
                books: res.data.books
            })
        })
        .catch((err) => {
            document.getElementById('beatLoaders').style.display = "none";
            this.setState({
                errorMessage: "There was an error while getting books, try again."
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

        const { books, errorMessage } = this.state
        return (
            <div>
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand" href="#">Book Directory</a>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="btn btn-outline-info nav-link p-2" to="/post">New Book</Link>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    <div className="row">
                    
                    {
                        books.length ?
                        books.map(book => <div key={book._id} className="col-md-4 mt-4" align="center">
                            <div className="card col-md-12">
                                <img className="card-img-top" src={book.cover_image_url} alt="Book cover" style={divCardImg} />
                                <div className="card-body">
                                    <h4 className="card-title">{book.title}</h4>
                                    <p className="card-text">{this.trimCharacter(book.description)} <a href={"books/"+book._id} class="readMoreLink">Read More</a></p>
                                    <Link className="previewLink btn btn-primary nav-link p-2" to={"books/"+book._id}>Preview</Link>
                                </div>
                            </div>
                        </div>) : null
                    }

                    {
                        errorMessage ? <div align="center" className="col-12"></div>
                        : null
                    }
                    
                    </div>

                    <div id="beatLoaders" align="center">
                        <BeatLoader size={50} color="#c31432" loading />
                        <b>Books Loading...</b>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
