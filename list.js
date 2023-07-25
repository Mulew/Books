window.addEventListener("load", (event) => {
            event.preventDefault();
            let books = JSON.parse(localStorage.getItem("bo"));
            if (books !== null) {
               /* for(let i=0;i<books.length;i++){
                    console.log(books[i].author + " by " + books[i].title);
                } 
                 OR 
                books.forEach( function(book1) {
                    console.log(book1.author + " by " + book1.title);
                    
                });*/
                books.forEach(function(book1){
                    let books_container=document.querySelector("#books");
                    let title=book1.title;
                    let author=book1.author;
                    let paragrapgh=document.createElement("p");
                    paragrapgh.innerHTML=title + " by " + author;
                    books_container.appendChild(paragrapgh);
                });
            }
        });