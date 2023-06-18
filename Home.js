let viewbtn = document.querySelector("#category  button");
let container = document.getElementById("cont");
const data = [
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKHFR-Mmi5bxCfcbEhCyP93q4fvn2LT4H3g&usqp=CAU",
    category:"Night City",

  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQd-MI3LYTZDJ8V4-cpMWyTvbMekK5_Jt1tJSdhxEjWr0AVuVexiL-dI__odG2_FJ0M8&usqp=CAU",
    category:"Firework",

  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMixg0eDqwLSQBBzjvjpdGK1dH6wEvMSEruA&usqp=CAU",
    category:"Culture",
  }
]

viewbtn.addEventListener("click",function(){
display(data);
function display(data){

data.forEach((element)=>{
  let card = document.createElement("div");
  let image = document.createElement("img");
  let cate = Document.createElement("h1");

  image.setAttribute("src", element.img);
  cate.innerText = element.category;

  card.append(image,cate);
  container.append(card);
})
}
})