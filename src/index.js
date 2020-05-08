import React from 'react';
import { render } from 'react-dom';

const Book = ({ title="No Title Provided", author="No Author", pages=0, freeBookmark=false }) => <section>
    <h2>{title}</h2>
    <p>by: {author}</p>
    <p>Pages: {pages} pages</p>
    <p>Free bookmark today: { freeBookmark ? "Yes!" : "No." }</p>
</section>

const Hiring = () => <div>
    <p>The library is hiring. Go to www.library.com/jobs for more.</p>
</div>

const NotHiring = () => <div>
    <p>The library is not hiring. Check back later for more.</p>
</div>

class Library extends React.Component {
    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
        ]
    }
    state = { 
        open: true,
        freeBookmark: true,
        hiring: false,
        data: [],
        loading: false
    }
    componentDidMount() {
        this.setState({ loading: true });
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }));
    }
    componentDidUpdate = () => 
        console.log("The component is now updated.");
    componentWillUnmount = () => 
        console.log("The component is now being unmounted.");
    toggleOpenClosed = () => 
        this.setState(prevState => ({ open: !prevState.open }));
    toggleHiring = () => 
        this.setState(prevState => ({ hiring: !prevState.hiring }));
    render() {
        const { books } = this.props;
        return (
            <div>
                { this.state.hiring ? <Hiring/> : <NotHiring/> }
                { 
                    this.state.loading
                    ? "loading..."
                    : <div>
                        {this.state.data.map(product => 
                            <div key={product.id}>
                                <h3>Library Product of the Week</h3>
                                <h4>{product.name}</h4>
                                <img alt={product.name} src={product.image} height={100}/>
                            </div>)}
                    </div>
                }
                <h1>The library is { this.state.open ? "open" : "closed" }.</h1>
                <button onClick={this.toggleOpenClosed}>
                    {this.state.open ? "Close." : "Open."}</button>
                <button onClick={this.toggleHiring}>Change Hiring.</button>
                { books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages} />
                  ) 
                }
            </div>
        )
    }
}

const bookList = [
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "Second Book Woah", "author": "Someone Important", "pages": 123124 },
    { "title": "Third or Fourth IDK", "author": "Someone Who Knows", "pages": 3333 }
]

render(
    <Library books={bookList}/>, 
    document.getElementById('root')
);