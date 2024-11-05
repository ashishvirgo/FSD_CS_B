
const div=document.createElement("div");
div.id="Div-1";
div.style.backgroundColor="yellow";
div.style.width="500px";
div.style.height="500px"
document.body.appendChild(div);
const para=document.createElement("p");
para.id="para-1";
para.style.color="red";
para.innerHTML="<h4>This is my first paragraph</h4>";
div.appendChild(para);
const btn1=document.createElement("button");
btn1.id="btn-1";
btn1.innerText="Add Para";
div.prepend(btn1);
btn1.addEventListener("click",()=>{
const para1=document.createElement("p");
para1.id="para-2";
para1.style.color="green";
para1.innerHTML="<h4>This is my new paragraph</h4>";
div.appendChild(para1);
})
btn1.addEventListener("click",()=>{
    const div1=document.createElement("div");
    div1.id="para-2";
    div1.style.color="green";
    div1.style.backgroundColor="aqua";
    div1.style.width="100px";
    div1.style.height="100px"
    
    div.appendChild(div1);
    })