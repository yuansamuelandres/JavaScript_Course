// In the name of Allah

/* Challenge 1: Variable & Concatenation */
let
    card_Title = "Elzero"
    card_Description = "Elzero Web School" 
    card_Date = "25/10";

let card = `
    <div class="card">
        <h3>Hello ${card_Title}</h3>
        <p>${card_Description}</p>
        <span>${card_Date}</span>
    </div>`

document.write(card.repeat(4))