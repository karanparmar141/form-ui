let products = JSON.parse(localStorage.getItem('product')) || [];

const ui = (products) => {
  console.log(products);
  document.getElementById("ui").innerHTML=''
  products.map((product) => {
    let img = document.createElement("img");
    img.src = product.img;
    let title = document.createElement("h2");
    title.innerHTML = product.title;
    let price = document.createElement("h3");
    price.innerHTML = product.price;
    let category = document.createElement("p");
    category.innerHTML = product.category;
    let div = document.createElement("div");
    div.append(img, title, price, category);
    document.getElementById("ui").append(div);
  });
};


ui(products)
const productdata = (e) => {
  e.preventDefault();
  let product = {
    title: document.getElementById("title").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value,
    category: document.getElementById("category").value,
  };
  products.push(product);
  localStorage.setItem("product", JSON.stringify(products));
  ui(products);
};

document.querySelector("form").addEventListener("submit", productdata);

const handlelth = () => {
  let data = products.sort((a, b) => a.price - b.price);
  ui(data);
  console.log(data);
};

document.getElementById("lth").addEventListener("click", handlelth);

const handlehtl = () => {
  let data = products.sort((a, b) => b.price - a.price);
  ui(data);
  console.log(data);
};

document.getElementById("htl").addEventListener("click", handlehtl);

// filter 

const Handelcategory = (cat) => {
  let data = products.filter((value) => value.category == cat);
  ui(data);
};

let cat = ["ios Phone", "android"];

for (let i = 0; i < cat.length; i++) {
  let btn = document.createElement("button");
  btn.innerHTML = cat[i];
  btn.setAttribute("id", cat[i]);
  document.getElementById("btns").append(btn)
}

for (let i = 0; i < cat.length; i++) {
  document
    .getElementById(cat[i])
    .addEventListener("click", () => Handelcategory(cat[i]));
}

// search 
let search=()=>{
  let value=document.getElementById("value").value
  let data = products.filter((val) =>val.name.includes(value.toLowerCase()));
  ui(data);
}

document.getElementById("value").addEventListener("keypress",(e)=>{
  if(e.key == "Enter"){
          search();
      }
})

document.getElementById("search").addEventListener("click",search)