// we need to create a call api

fetch('./assets/data/skills.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);

    let allCards = document.querySelector("#allCards");
    // how can we test what our loop will be called, we can use a console log to 
   // find it out
    console.log(allCards);
    let arrLength = data.skills.length;

    for (let i = 0; i < arrLength; i++) {
        console.log(i);

        let one_card = document.createElement('div');
        one_card.setAttribute('class', 'one_card');

        let image = document.createElement('img');
        image.setAttribute('src', data.skills[i].image_path);

        let title = document.createElement('h3');
        title.textContent = data.skills[i].title;

        let para = document.createElement('p');
        para.textContent = data.skills[i].text;

        let confidence = document.createElement('h4');
        confidence.textContent = `Confidence : ${data.skills[i].confidence}/10`;

        one_card.appendChild(image);
        one_card.appendChild(title);
        one_card.appendChild(para);
        one_card.appendChild(confidence);

        allCards.appendChild(one_card);
    }
});

// now that we have the data we can loop through with a for loop 
