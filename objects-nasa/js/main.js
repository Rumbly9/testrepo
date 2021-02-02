//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
const img = document.querySelector("img")
const btn = document.querySelector("button")
const input = document.querySelector("input")

btn.addEventListener("click", function(btnClick){
  fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&thumbs=true&date=${input.value}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        h2.innerText = data.title;
        img.src = data.url;
        h3.innerText = `Copyright: ${data.copyright===undefined?"Unknown":data.copyright}
        ${data.date}

        ${data.explanation}`;
      })
      .catch(err => {
        console.log(`Error ${err}`)
      })
  ;
})
