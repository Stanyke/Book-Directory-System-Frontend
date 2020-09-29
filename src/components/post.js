import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

class Post extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            book_title: '',
            book_highlight: '',
            book_upload_type: '',
            book_cover_from_device: '',
            book_cover_from_url: '',
            author: '',
            processData: false,
            newBookID: ''
        }

        toast.configure()
    }
    
    render() {
        const textareaStyle = { width: `100%`, height: `150px`, overflow: `auto`, resize: `none` }
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
                    
                    <form onSubmit={this.submitBook}>
                        
                        <div className="form-group">
                            <label><b>Book Title:</b></label>
                            <input type="text" className="form-control" id="book_title" placeholder="Book Title" value={this.state.book_title} onChange={(value) => this.setState({book_title: value.target.value})} />
                        </div>

                        <div className="form-group">
                            <label><b>Book Highlight:</b></label>
                            <textarea className="form-control" id="book_highlight" placeholder="Book Highlight" style={textareaStyle} value={this.state.book_highlight} onChange={(value) => this.setState({book_highlight: value.target.value})} />
                        </div>

                        <div className="form-group">
                            <label><b>Author:</b></label>
                            <input type="text" className="form-control" id="author" placeholder="Author's Name" value={this.state.author} onChange={(value) => this.setState({author: value.target.value})} />
                        </div>

                        <div className="form-group">
                            <label><b>Book Cover Upload Type:</b></label>
                            <select className="form-control" id="preferredBookUploadType" value={this.state.book_upload_type} onChange={(value) => this.preferredBookUploadType(value.target.value)}>
                                <option value="">Choose Your Preferred Option</option>
                                <option value="upload from device">Upload From Device</option>
                                <option value="upload from url">Upload From A Link</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label><b>Book Cover:</b></label>

                            <input type="file" className="form-control" id="book_cover_from_device" onChange={(value) => this.setState({book_cover_from_device: value.target.files[0]})} accept="image/*" required disabled />

                            <input type="text" className="form-control" id="book_cover_from_url" placeholder="Book Cover URL (Link)" value={this.state.book_cover_from_url} onChange={(value) => this.setState({book_cover_from_url: value.target.value})} required disabled />
                        </div>

                        <button type="submit" className="form-control btn btn-info mt-1"  id="publishBookButton">Publish Book</button>

                    </form>

                    <div id="beatLoadersForPostingBook" align="center">
                        <BeatLoader size={50} color="#c31432" loading />
                        <b>Please Wait...</b>
                    </div>

                    <div id="redirectionPreviewAfterPublishingBook" align="center">
                        <b>Preview your newly published book?</b> 
                        <div>
                            <Link className="btn btn-primary p-2 mr-4" to={"book/"+this.state.newBookID}>Cool <span role="img" aria-label="Cool">😆</span></Link>
                            <button className="btn btn-danger p-2" onClick={() => this.closeAfterBookPublishNotice()}>Nope <span role="img" aria-label="Nope">😮</span></button>
                        </div>
                    </div>

                    <br/>
                </div>

            </div>
        )
    }

    closeAfterBookPublishNotice = () => {
        document.getElementById('redirectionPreviewAfterPublishingBook').style.display = "none"
        document.getElementById('book_title').value = ""
        document.getElementById('book_highlight').value = ""
        document.getElementById('author').value = ""
        document.getElementById('preferredBookUploadType').value = ""
        document.getElementById('book_cover_from_device').setAttribute("type", "text")
        document.getElementById('book_cover_from_device').setAttribute("type", "file")
        document.getElementById('book_cover_from_url').value = ""
    }


    preferredBookUploadType = (value) => {
        this.setState({
            book_upload_type: value
        })

        if(value === "upload from device"){
            document.getElementById('book_cover_from_device').style.display = "block"
            document.getElementById('book_cover_from_url').style.display = "none"
            document.getElementById('book_cover_from_url').required = false
            document.getElementById('book_cover_from_device').required = true
            document.getElementById('book_cover_from_device').disabled = false
        }
        else if(value === "upload from url"){
            document.getElementById('book_cover_from_device').style.display = "none"
            document.getElementById('book_cover_from_url').style.display = "block"
            document.getElementById('book_cover_from_device').required = false
            document.getElementById('book_cover_from_url').required = true
            document.getElementById('book_cover_from_url').disabled = false
        }
        else{
            document.getElementById('book_cover_from_device').style.display = "block"
            document.getElementById('book_cover_from_url').style.display = "block"
            document.getElementById('book_cover_from_device').required = true
            document.getElementById('book_cover_from_url').required = true
            document.getElementById('book_cover_from_url').disabled = true
            document.getElementById('book_cover_from_device').disabled = true
        }
    }


    submitBook = (event) => {
        event.preventDefault()

        const {book_title, book_highlight, book_cover_from_device, book_cover_from_url, book_upload_type, author} = this.state;

        if(this.state.book_upload_type !== "")
        {
            const uploadTypeValue = this.state.book_upload_type

            if(uploadTypeValue === 'upload from url')
            {
                if(book_cover_from_url === '' || book_title === '' || book_highlight === '' || author === '' || book_title === '')
                {
                    toast.info('One or more input field is empty', {position: toast.POSITION.TOP_LEFT, autoClose: 2000});
                }
                else{
                    this.setState({
                        processData: true
                    })
                }
            }
            else{
                if(book_cover_from_device === '' || book_title === '' || book_highlight === '' || author === '' || book_title === '')
                {
                    toast.info('One or more input field is empty', {position: toast.POSITION.TOP_LEFT, autoClose: 2000});
                }
                else{
                    this.setState({
                        processData: true
                    })
                }
            }

            if(this.state.processData)
            {
                document.getElementById('beatLoadersForPostingBook').style.display = "block";
                document.getElementById('publishBookButton').disabled = true;

                if(book_upload_type === "upload from url")
                {
                    const publishBookData = {
                        title: book_title,
                        description : book_highlight,
                        cover_image: book_cover_from_url,
                        author
                    }

                    axios.post('https://book-directory-system-api.herokuapp.com/api/books', publishBookData)
                    .then((res) => {
                        document.getElementById('beatLoadersForPostingBook').style.display = "none";
                        document.getElementById('publishBookButton').disabled = false;
                        toast.info(res.data.message, {position: toast.POSITION.TOP_LEFT, autoClose: 2000});

                        console.log(res.data)
                        this.setState({
                            newBookID: res.data.book._id
                        })
                        document.getElementById('redirectionPreviewAfterPublishingBook').style.display = 'block'
                    })
                    .catch((err) => {
                        document.getElementById('beatLoadersForPostingBook').style.display = "none";
                        document.getElementById('publishBookButton').disabled = false;

                        const errorStatus = err.response.status;
                        if(errorStatus === 417)
                        {
                            toast.error(err.response.data.message, {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
                        }

                        if(errorStatus === 500 && err.response.data.hasOwnProperty("message"))
                        {
                            toast.error(err.response.data.message, {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
                        }
                        else{
                            toast.error(err.response.data, {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
                        }

                    })
                }
                else
                {
                    const fileInput = document.getElementById('book_cover_from_device');
                    const filePath = fileInput.value; 
        
                    const allowedFileExtensions =  /(\.jpg|\.jpeg|\.png|\.gif)$/i;
                    
                    if (!allowedFileExtensions.exec(filePath))
                    {
                        fileInput.value = '';
                        toast.error('File selected is not an image file, allowed file types are jpg, jpeg, png & gif.', {position: toast.POSITION.TOP_LEFT, autoClose: 5000});
                        document.getElementById('beatLoadersForPostingBook').style.display = "none";
                        document.getElementById('publishBookButton').disabled = false;
                    }
                    else
                    {

                        const reader = new FileReader();
                        reader.readAsDataURL(book_cover_from_device);

                        reader.onerror = () => {
                            toast.error('There was an error processing your file, try again.', {position: toast.POSITION.TOP_LEFT, autoClose: 5000});
                            document.getElementById('beatLoadersForPostingBook').style.display = "none";
                            document.getElementById('publishBookButton').disabled = false;
                        };

                        reader.onloadend = () => {
                            const base64EncodedImage = reader.result;

                            
                            const publishBookData = {
                                title: book_title,
                                description : book_highlight,
                                cover_image: base64EncodedImage,
                                author
                            }

                            axios.post(`https://book-directory-system-api.herokuapp.com/api/books_with_file`, publishBookData)
                            .then((res) => {
                                document.getElementById('beatLoadersForPostingBook').style.display = "none";
                                document.getElementById('publishBookButton').disabled = false;
                                toast.info(res.data.message, {position: toast.POSITION.TOP_LEFT, autoClose: 2000});

                                console.log(res.data)
                                this.setState({
                                    newBookID: res.data.book._id
                                })
                                document.getElementById('redirectionPreviewAfterPublishingBook').style.display = 'block'
                            })
                            .catch((err) => {
                                document.getElementById('beatLoadersForPostingBook').style.display = "none";
                                document.getElementById('publishBookButton').disabled = false;

                                const errorStatus = err.response.status;
                                if(errorStatus === 417)
                                {
                                    toast.error(err.response.data.message, {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
                                }

                                if(errorStatus === 500 && err.response.data.hasOwnProperty("message"))
                                {
                                    toast.error(err.response.data.message, {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
                                }
                                else{
                                    toast.error(err.response.data, {position: toast.POSITION.TOP_LEFT, autoClose: 8000});
                                }

                            })
                        };
                    }                 
                }
            }
        }
        else
        {
            toast.info('Choose a book cover upload type', {position: toast.POSITION.TOP_LEFT, autoClose: 2000});
        }
        
    }


}

export default Post
