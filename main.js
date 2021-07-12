class Products{
    constructor(title, url, des, recommended){
        this.title = title
        this.url = url
        this.des = des
        this.recommended = recommended
    }
}
 
let products = [
    new Products(
        "BASIC PUFFER PARKA",
        "https://www.zara.com/uk/en/basic-puffer-parka-p08281321.html?v1=88815817&v2=1862634",
        "PUFFER PARKA WITH A HIGH COLLAR, AN ADJUSTABLE HOOD AND LONG SLEEVES. FRONT ZIP POCKETS ON THE CHEST AND HIP",
        recommended = [
            "https://www.zara.com/uk/en/purl-knit-sweater-p01775302.html?v1=81208454&v2=1862634",
            "https://www.zara.com/uk/en/double-faced-faux-suede-jacket-p06318405.html?v1=83629982&v2=1862634",
            "https://www.zara.com/uk/en/slim-straight-fit-jeans-p07215450.html?v1=91613504&v2=1862634"
        ]
        ),
        new Products(
        "PURL-KNIT SWEATER",
        "https://www.zara.com/uk/en/purl-knit-sweater-p01775302.html?v1=81208454&v2=1862634",
        "SWEATER MADE OF SPUN COTTON FABRIC. FEATURING A ROUND NECKLINE, LONG SLEEVES AND RIBBED TRIMS",
        recommended = [
            "https://www.zara.com/uk/en/double-faced-faux-suede-jacket-p06318405.html?v1=83629982&v2=1862634",
            "https://www.zara.com/uk/en/slim-straight-fit-jeans-p07215450.html?v1=91613504&v2=1862634",
            "https://www.zara.com/uk/en/textured-wool-blazer-p04393593.html?v1=82336715&v2=1863746"
        ]
        ),
        new Products(
        "DOUBLE-FACED FAUX SUEDE JACKET",
        "https://www.zara.com/uk/en/double-faced-faux-suede-jacket-p06318405.html?v1=83629982&v2=1862634",
        "COLLARED JACKET WITH LONG SLEEVES. MATCHING FAUX SHEARLING LINING. WELT POCKETS AT THE HIP. ZIP-UP FRONT",
        recommended = [
            "https://www.zara.com/uk/en/technical-backpack-with-pocket-p02191300.html?v1=85333305&v2=1864015",
            "https://www.zara.com/uk/en/slim-straight-fit-jeans-p07215450.html?v1=91613504&v2=1862634",
            "https://www.zara.com/uk/en/purl-knit-sweater-p01775302.html?v1=81208454&v2=1862634"
        ]
        ),
        new Products(
            "SLIM STRAIGHT FIT JEANS",
            "https://www.zara.com/uk/en/slim-straight-fit-jeans-p07215450.html?v1=91613504&v2=1862634",
            "FADED SLIM FIT, STRAIGHT-LEG JEANS WITH FIVE POCKETS AND ZIP FLY AND TOP BUTTON FASTENING",
            recommended = [
                "https://www.zara.com/uk/en/double-faced-faux-suede-jacket-p06318405.html?v1=83629982&v2=1862634",
                "https://www.zara.com/uk/en/technical-backpack-with-pocket-p02191300.html?v1=85333305&v2=1864015",
                "https://www.zara.com/uk/en/textured-wool-blazer-p04393593.html?v1=82336715&v2=1863746"
            ]
        ),
        new Products(
            "TEXTURED WOOL BLAZER",
            "https://www.zara.com/uk/en/textured-wool-blazer-p04393593.html?v1=82336715&v2=1863746",
            "BLAZER MADE OF A LIGHTWEIGHT TEXTURED WOOL. FEATURING A LAPEL COLLAR, LONG SLEEVES WITH BUTTONED CUFFS, HIP PATCH POCKETS AND A BUTTON-UP FRONT",
            recommended = [
                "https://www.zara.com/uk/en/basic-puffer-parka-p08281321.html?v1=88815817&v2=1862634",
                "https://www.zara.com/uk/en/slim-straight-fit-jeans-p07215450.html?v1=91613504&v2=1862634",
                "https://www.zara.com/uk/en/technical-backpack-with-pocket-p02191300.html?v1=85333305&v2=1864015"
            ]
        ),
        new Products(
            "TECHNICAL BACKPACK WITH POCKET",
            "https://www.zara.com/uk/en/technical-backpack-with-pocket-p02191300.html?v1=85333305&v2=1864015",
            "BACKPACK MADE OF TECHNICAL FABRIC. THE MAIN COMPARTMENT FASTENS WITH A ZIP AND FEATURES INSIDE POCKETS",
            recommended = [
                "https://www.zara.com/uk/en/basic-puffer-parka-p08281321.html?v1=88815817&v2=1862634",
                "https://www.zara.com/uk/en/double-faced-faux-suede-jacket-p06318405.html?v1=83629982&v2=1862634",
                "https://www.zara.com/uk/en/slim-straight-fit-jeans-p07215450.html?v1=91613504&v2=1862634"
            ]
        ),
];

const productContainer = document.querySelector(".product-container")

products.forEach(item => {
    let product = document.createElement("div")
    product.className = "product " + item.title

    product.onclick = () => window.open("file:///C:/Users/hello/PycharmProjects/AngoUk/AngoUk/product-page.html?title="+item.title+"&url="+item.url+"&des="+item.des+"&rec1="+item.recommended[0]+"&rec2="+item.recommended[1]+"&rec3="+item.recommended[2])

    let title = document.createElement("h1")
    title.textContent = item.title

    let description = document.createElement("p")
    description.textContent = item.des

    product.appendChild(title)
    product.appendChild(description)
    
    productContainer.appendChild(product)
});

function productSearch(){
    let inputText = document.getElementById("search-box").value.toLowerCase()
    console.log("input text: " + inputText)
    products.forEach(item => {

        const itemHtml = document.getElementsByClassName(item.title)[0]

        if(item.title.toLowerCase().indexOf(inputText) > -1 ||
            item.des.toLowerCase().indexOf(inputText) > -1){
                itemHtml.style.display = "" // removes none
            }
            else {
                itemHtml.style.display = "none" // does not display/ render 
            }
    });
}