import React from 'react';
import { render } from 'react-dom';

const ROOT = document.getElementById('root');

let Book = ({ title, author, pages }) =>
    <section>
        <h2>{ title }</h2>
        <p>by: { author }</p>
        <p>Pages: { pages } pages</p>
    </section>

class Library extends React.Component {
    state = { 
        open: true,
        freeBookmark: true 
    }
    
    toggleOpenClosed = () => 
        this.setState(prevState => ({ open: !prevState.open }))
    
    render() {
        console.log(this.state);
        let { books } = this.props;
        return (
            <div>
                <h1>The library is { this.state.open ? "open" : "closed" }.</h1>
                <button onClick={ this.toggleOpenClosed }>Change</button>
                { books.map(
                    (book, i) =>
                        <Book
                            key={ i }
                            title={ book.title }
                            author={ book.author }
                            pages={ book.pages }
                        />
                ) }
            </div>
        );
    }
}

let bookList = [
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "Second Book Woah", "author": "Someone Important", "pages": 123124 },
    { "title": "Third or Fourth IDK", "author": "Someone Who Knows", "pages": 3333 }
]

let body = <Library books={ bookList }/>

render(body, ROOT);