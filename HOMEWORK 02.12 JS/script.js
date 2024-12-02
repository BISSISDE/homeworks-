const TheBook = {
    title: 'Macbeth',
    author: 'William Shakespeare',
    pages: 100,
    isRead: false,
    
    readBook() {
        alert(`Сіз "${this.title}" кітабын "${this.author}" жазған оқып жатырсыз.`);
    },

    toggleReadStatus() {
        this.isRead = !this.isRead; 
        alert(`Оқу күйі жаңартылды: ${this.isRead}.`);
    }
    
}

alert(`Title is ${TheBook.title} \n 
        Author the book is ${TheBook.author} \n
        Pages of the book is ${TheBook.pages} \n
        IsRead ${TheBook.isRead}`);
TheBook.readBook();
TheBook.toggleReadStatus();

