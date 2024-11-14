


fetch("https://striveschool-api.herokuapp.com/books" )
.then(response =>{
    console.log("response", response)
    return response.json()
})
.then(books => {
    //i dati dei books "li troviamo" qui
    console.log("BOOKS",books)

    const ul= document.getElementById("books-data")
    books.forEach(book => {
        const newColumn = document.createElement("div")
        newColumn.classList.add("col","col-12","c ol-md-6","col-lg-4")
        newColumn.innerHTML = `
        <div class="card h-100">
        <img src="${book.img}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${book.title} </h5>
                <p class="card-text">${book.price}$</p>
            </div>
        <div class="card-body">
            <a href="#" class="btn btn-danger" onklick="removeBook(event)">Delete/a>
            <a href="#" class="btn btn-success">Add to basket</a>
        </div>
    </div>
    `
    const row = document.getElementById("books-data")
    row.appendChild(newColumn)

    })
})

.catch(error =>{
    console.log("error",error)
})

const removeBook = function(e){
    console.log("rimuovi libro", e.target)
    
    e.target.closest(".card").classList.add("d-none")
}