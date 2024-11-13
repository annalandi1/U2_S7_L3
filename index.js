


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
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
`
    });
})
.catch(error =>{
    console.log("error",error)
})