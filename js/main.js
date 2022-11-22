document.querySelector('button').addEventListener('click', preapi)

async function preapi(){
    const pname = document.querySelector('input').value
    try{
        // const response = await fetch(`https://presapi.herokuapp.com/api/${pname}`)
        const response = await fetch(`https://uspres.onrender.com/api/${pname}`)
        const data = await response.json()
        console.log(data)

      document.getElementById('number').innerText = data.number
      document.getElementById('fName').innerText = data.firstname
      document.getElementById('lname').innerText = data.lastname
      document.getElementById('term').innerText = data.term
      document.getElementById('party').innerText = data.party
      document.getElementById('birthstate').innerText = data.birthstate
      document.getElementById('facts').innerText = data.facts
      document.getElementById('image').src = data.image
      
    } catch(error) {
        console.log(error)
    }
}
