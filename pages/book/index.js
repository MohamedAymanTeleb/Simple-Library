import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Index() {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: "", author: "" });
    const [editingBookId, setEditingBookId] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const res = await fetch("/api/books");
        const data = await res.json();
        setBooks(data);
    };

    // Handle input change for book title and author
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newBook.title && newBook.author) {
            if (editingBookId) {

                const res = await fetch(`/api/books/${editingBookId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: editingBookId,
                        title: newBook.title,
                        author: newBook.author,
                        overview: "Updated Book Overview"
                    }),
                });

                const updatedBook = await res.json();

                const updatedBooks = books.map(book =>
                    book.id === editingBookId ? updatedBook : book
                );
                setBooks(updatedBooks);
                setEditingBookId(null);

            } else {
                // Add a new book
                const newBookObject = {
                    id: uuid(),
                    title: newBook.title,
                    author: newBook.author,
                    overview: "Book Overview"
                };

                const res = await fetch(`/api/books`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newBookObject),
                });

                const addedBook = await res.json();
                setBooks([...books, addedBook]);

            }

            setNewBook({ title: "", author: "" });

        }
    };

    const handleUpdateClick = (book) => {
        setNewBook({ title: book.title, author: book.author });
        setEditingBookId(book.id);
    };

    const handleDeleteClick = async (book) => {

        const res = await fetch(`/api/books/${book.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.ok) {
            const updatedBooks = books.filter(b => b.id !== book.id);
            setBooks(updatedBooks)
        } else {
            console.error("Failed to delete the book");
        }
    };

    return (
        <>
            {/* Welcome Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                color: '#333',
                textAlign: 'center',
                padding: '20px'
            }}>
                <h1 className='text-primary' style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                }}>Welcome to books branch</h1>
            </div>

            {/* Form to Add/Update Book */}
            <div className="container p-4">
                <h2 className='text-center'>{editingBookId ? "Update Book" : "Add a New Book"}</h2>
                <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                    <input
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        value={newBook.title}
                        onChange={handleChange}
                        className="form-control mb-2 w-50"
                        required
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author Name"
                        value={newBook.author}
                        onChange={handleChange}
                        className="form-control mb-2 w-50"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        {editingBookId ? "Update Book" : "Add Book"}
                    </button>
                </form>
            </div>

            {/* Book List Section */}
            <div className='container-fluid d-flex flex-row flex-wrap justify-content-around'>
                {books.map(
                    (book) => 
                        <div key={book.id} className='col-3 m-2 border p-2' style={{ backgroundColor: 'lightblue' }}>
                            <p>&quot;{book.title}&quot;</p>
                            <p className='fw-bold'>{book.author}</p>
                            <p className='fw-bold'>ID : {book.id}</p>
                            <div className='row container'>
                                <button
                                    type="button"
                                    className="btn btn-primary m-1"
                                    onClick={() => handleUpdateClick(book)}
                                >
                                    Update Book
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger m-1"
                                    onClick={() => handleDeleteClick(book)}
                                >
                                    Delete Book
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}
