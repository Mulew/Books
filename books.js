   let submit=document.getElementById("submit");
        let books=[];
        submit.addEventListener("click",(event)=>{
            event.preventDefault();
            let title=document.getElementById("title").value;
            let author=document.getElementById("author").value;
            let book1={};
            book1.author=author;
            book1.title=title;
            books.push(book1);
            localStorage.setItem("bo",JSON.stringify(books));//store at local storage
            window.alert(title + " " + "By " + author + " Added");
        });


        

