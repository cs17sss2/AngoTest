const urlParams = new URLSearchParams(window.location.search)
const title = urlParams.get('title')
const url = urlParams.get('url')
const des = urlParams.get('des')
const recommended = [
    urlParams.get('rec1'),
    urlParams.get('rec2'),
    urlParams.get('rec3')
]
console.log(urlParams)
console.log(title)
console.log(url)
console.log(des)
console.log(recommended)

const productContainer = document.querySelector("product-info")

const productTitle = document.querySelector(".title h1")
productTitle.textContent = title;

const productDescription = document.querySelector(".description p")
productDescription.textContent = des;

const productUrl = document.querySelector(".url p")
let a = document.createElement("a")
a.href = url;
a.textContent = url;
productUrl.appendChild(a)

const recommendedList = document.querySelector(".recommendations ul")
recommended.forEach(item => {
    let recommend = document.createElement("li")
    let a = document.createElement("a")
    
    a.href = item;
    a.textContent = item;
    recommend.appendChild(a)
    recommendedList.appendChild(recommend)
})
