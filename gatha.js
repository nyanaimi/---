const btn = document.getElementById("btn")

const gatha = document.getElementById('typed');

const Names = ["素材/ルフィ.png","素材/チョッパー.png","素材/バギー.png"];

btn.addEventListener("click",function()
{
let array = []
for (let i=0; i<1; i++) {
  array.push(Math.floor(Math.random() * 3) );
}
gatha.textContent = array;

const one = document.getElementById("pic");
one.src = Names[array];

// console.log(Names[array]);
console.log(array);
});






