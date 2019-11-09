console.log("Exercise 4: ReadBooks");

interface Book {
    title: string;
    isRead: boolean;
}

const libro1 = "Canción de hielo y fuego";
const libro2 = "La rueda del tiempo";
const libro3 = "Harry Potter y la piedra filosofal";
const libro4 = "El código da Vinci";

const books = [
    {title: libro1, isRead: true},
    {title: libro2, isRead: true},
    {title: libro3, isRead: false},
    {title: libro4, isRead: false},
]

const isBookRead = (books:Array<Book>, titleToSearch:string) : boolean => {

    return books.find(book => book.title === titleToSearch).isRead;
}

console.log(`${libro1} ${isBookRead(books, libro1)?"leído":"no leído"}`);
console.log(`${libro2} ${isBookRead(books, libro2)?"leído":"no leído"}`);
console.log(`${libro3} ${isBookRead(books, libro3)?"leído":"no leído"}`);
console.log(`${libro4} ${isBookRead(books, libro4)?"leído":"no leído"}`);
