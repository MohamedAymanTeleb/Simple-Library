import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

// SSR  Server-Side Rendering
export default function JKRowling({ books }) {
    const router = useRouter();
    const routeFunc = () => {
        router.push(`/authors`);
    };
    return (
        <>
            <div className='p-3 d-flex justify-content-center'>
                <button
                    onClick={routeFunc}
                    className='bg-danger text-white'
                >Back</button>
            </div>
            <div className="container my-3" style={{
                backgroundColor: '#e0f7fa',
                color: '#0d47a1',
                padding: '20px',
                borderRadius: '8px',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h2 className='p-1 bg-primary text-white text-center border rounded '>J. K. Rowling</h2>
                <div className='container-fluid d-flex flex-row flex-wrap justify-content-around ' >
                    {books.items.map(
                        book => (
                            <div key={book.id} className='col-3 m-2 border p-2' style={{ backgroundColor: 'lightblue', }} onClick={() => { }}>
                                <p>&quot;{book.volumeInfo.title}&quot;</p>
                                <p className='fw-bold'>{book.volumeInfo.authors}</p>
                                <Link href={`../book/${book.id}`}>More Details</Link>
                            </div>
                        )
                    )}

                </div >
            </div>
        </>)

}
export async function getServerSideProps(context) {

    const session = await getSession(context)

    if (!session) return {
        redirect: {
            destination: "/api/auth/signin?callbackUrl=/authors/jkrowling"
        }
    }

    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:"J.K. Rowling"`)
    const data = await res.json()
    return {
        props: {
            books: data
        }
    }
}