
const BookId = ({ book }) => {
    return (<>
        <div
            style={{
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
            }}>{book.title}</h1>
            <h4 className="text-primary">by {book.author}</h4>
        </div>

        {/* Description of the book */}
        <div className="container d-flex flex-row border rounded p-3" >
            <p className="mx-1 text-primary">
                {book.overview}
            </p>

        </div>

    </>
    )
};

export default BookId;

export async function getStaticProps(context) {

    const { bookid } = context.params;
    const res = await fetch(`http://localhost:3000/api/books`);
    const data = await res.json();
    const book = data.find(b => b.id.toString() === bookid);

    return {
        props: {
            book
        }
    }
};

export function getStaticPaths() {
    return {
        paths: [
            { params: { bookid: "1" } },
            { params: { bookid: "2" } },
            { params: { bookid: "3" } },
        ],
        fallback: "blocking"
    }
}
