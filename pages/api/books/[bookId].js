import { books } from "@component/data/books";
import { getSession } from "next-auth/react"
import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {

    const session = await getSession({ req })
    console.log(session);

    // if (!session) {
    //     return res.status(401).json({ error: "Unauthorized" })
    // }

    const { bookId } = req.query;
    const index = books.findIndex(bk => bk.id.toString() === bookId);

    if (index === -1) {
        return res.status(404).json({ msg: "Not Found" });
    }

    else if (req.method === "PUT") {
        const { title, overview, author } = req.body;
        books[index] = { id: bookId, title, overview, author };
        return res.status(200).json(books[index]);
    }

    else if (req.method === "DELETE") {
        books.splice(index, 1);
        return res.status(200).json(books);
    }

}
