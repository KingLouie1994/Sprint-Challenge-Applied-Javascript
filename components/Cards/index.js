// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function getArticles() {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            articleCreator(response.data.article);
        })
        .catch(error => {
            document.body.innerText = error.message;
        });
}


function articleCreator(data) {

    const divCard = document.createElement('div');
    const divHead = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    divCard.classList.add('card');
    divHead.classList.add('headline');
    divAuthor.classList.add('author');
    divImg.classList.add('img-container');

    divHead = data.

}
