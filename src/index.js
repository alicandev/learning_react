import React from "react";
import { render } from "react-dom";
import Library from "./Library"

const bookList = [
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "Second Book Woah", "author": "Someone Important", "pages": 123124 },
    { "title": "Third or Fourth IDK", "author": "Someone Who Knows", "pages": 3333 }
]

render(
    <Library books={bookList}/>, 
    document.getElementById('root')
);