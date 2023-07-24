const books = async () => {
    try{
        let res = await fetch("https://www.anapioficeandfire.com/api/books/")
        let data = res
        console.log(data)
    }catch(error){
        console.log("failed to fetch", error)
    }}

    books()