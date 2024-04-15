const books = async () => {
    try {
        let response = await fetch("https://www.anapioficeandfire.com/api/books/")
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.log("failed to fetch", error)
    }
}

books()