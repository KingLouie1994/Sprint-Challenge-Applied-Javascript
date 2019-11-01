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

function articleCreator(data) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorsName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorsName = data.authorName;

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(img);
    author.append(authorsName);

    return card;
}

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        Object.keys(response.data.articles).forEach(event => {
            response.data.articles[event].forEach(event2 => {
                cardContainer.append(articleCreator(event2));
            })
        })
    })
    .catch(error => {
        console.log(error);
    })