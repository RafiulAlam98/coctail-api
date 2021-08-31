const inputContainer =document.getElementById("input-container")
const cardContainer = document.getElementById("card-container")



const loadData = () =>{
  const inputValue = inputContainer.value;
  console.log(inputValue)
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
  fetch(url)
  .then(res => res.json())
  .then(data => loadUser(data.drinks))
}

const loadUser = users => {
  users.forEach(user => {
    // console.log(user)
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card">
        <img src='${user.strDrinkThumb}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${user.strDrink}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
      cardContainer.appendChild(div)
  });
}