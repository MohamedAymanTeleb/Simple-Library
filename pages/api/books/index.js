import { books } from "@component/data/books";
import { getSession } from "next-auth/react"

export default async function handler(req, res) {

    const session = await getSession({ req })
    if (!session) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    if (req.method === "POST") {
        const { id, title, overview, author } = req.body;
        const newBook = { id, title, overview, author };
        books.push(newBook);
        return res.status(200).json(newBook);
    }
    res.status(200).json(books);
}
