// https://jsonmock.hackerrank.com/api/articles?page={pageNo}

let data
const getArticles = async (pageNo) => {
    let pageArticles = await fetch(`https://jsonmock.hackerrank.com/api/articles?page=${pageNo}`)
        .then(res => { return res.json() }).then((r)=>{
            return r.data
        }).catch((err) => {
            console.log(err)
        })
    return pageArticles
}

const getAllArticles = async function (pageNo) {
    const articles = await getArticles(pageNo);
    if (articles.length > 0) {
        return articles.concat(await getAllArticles(pageNo + 1));
    } else {
        return articles;
    }
};

const apiData = async (pageNo) => {
    return data = await getAllArticles(pageNo)
}

const topArticles = async (limit) => {
    await apiData(1)
    await data.sort((a,b)=>{
        return b.num_comments - a.num_comments
    }) 
    data.length = limit
    data.map((e)=>{
        console.log(e.title)
    })
}

topArticles(2)