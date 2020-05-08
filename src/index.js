import React from 'react';
import { render } from 'react-dom';

const ROOT = document.getElementById('root');

const Book = ({ title, author, pages }) =>
    <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages} pages</p>
    </section>

const Hiring = () =>
    <div>
        <p>The library is hiring. Go to www.library.com/jobs for more.</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The library is not hiring. Check back later for more.</p>
    </div>

class Library extends React.Component {
    state = { 
        open: true,
        freeBookmark: true,
        hiring: false
    }
    
    toggleOpenClosed = () => 
        this.setState(prevState => ({open: !prevState.open}))
    
    toggleHiring = () =>
        this.setState(prevState => ({hiring: !prevState.hiring}))
    
    render() {
        console.log(this.state);
        let {books} = this.props;
        return (
            <div>
                { this.state.hiring ? <Hiring/> : <NotHiring/> }
                <h1>The library is {this.state.open ? "open" : "closed"}.</h1>
                <button onClick={this.toggleOpenClosed}>{this.state.open ? "Close." : "Open."}</button>
                <button onClick={this.toggleHiring}>Change Hiring.</button>
                { books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages} />
                ) }
            </div>
        );
    }
}

const bookList = [
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "Second Book Woah", "author": "Someone Important", "pages": 123124 },
    { "title": "Third or Fourth IDK", "author": "Someone Who Knows", "pages": 3333 }
]

let body = <Library books={bookList}/>

render(body, ROOT);