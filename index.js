


fetch("https://striveschool-api.herokuapp.com/books" )
.then(response =>{
    console.log("response", response)
})
.catch(error =>{
    console.log("error",error)
})