import React from "react";
import PropTypes from "prop-types";
import { Book } from "./Book";
import { Hiring } from "./Hiring";
import { NotHiring } from "./NotHiring";

export class Library extends React.Component {
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

Library.propTypes = { books: PropTypes.array }

export default Library
