
const getArticlesList = async() => {
    const { data } = await axios.get('/blog/list');
    // console.log(data);

    const articleList = data.rezalt.list;
    const htmlAticleCard = articleList.reduce((html, item) => {
        return html += `<div class="articleCard">
            <div class="nameBook"> ${item.nameBook} </div>
            <div class="bookAuthor"> ${item.bookAuthor} </div>
            <div class="userRating"> ${item.userRating} </div>
        </div>     
        `; 
    }, '');

    const root = document.querySelector('.root');
    root.innerHTML = htmlAticleCard;
}

getArticlesList();
