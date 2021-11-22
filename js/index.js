
const form = document.querySelector('#github-form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const search = document.querySelector('#search').value
    const searchName = search.split(' ').join('')

    fetch('https://api.github.com/users/'+searchName)
    .then((response)=> response.json())
    .then((data)=> {

        document.querySelector('#user-list').innerHTML = `<li>${data.name}</li>`;
        document.querySelector('#avatar').innerHTML = `<a target='_blank' href='https:www.github.com/${searchName}'> <img src='${data.avatar_url}'/></a>`;
    })
