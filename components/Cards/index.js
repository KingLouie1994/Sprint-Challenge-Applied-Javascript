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


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        Object.keys(response.data.articles).forEach(element => {
            response.data.articles[element].forEach(element2 => {
                articleHolder.appendChild(articleCreator(element2));
            });
        });
    })
    .catch(error => {
        document.body.innerText = error.message;
    });

let articleHolder = document.querySelector('.cards-container');

function articleCreator(data) {

    const divCard = document.createElement('div');
    const divHead = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const span3 = document.createElement('span');

    divCard.classList.add('card');
    divHead.classList.add('headline');
    divAuthor.classList.add('author');
    divImg.classList.add('img-container');

    divHead.textContent = data.headline;
    img.src = data.authorPhoto;
    span3.textContent = `By ${data.authorName}`;

    divCard.appendChild(divHead);
    divCard.appendChild(divAuthor);
    divAuthor.appendChild(divImg);
    divImg.appendChild(img);
    divAuthor.appendChild(span3);

    return divCard;
}





