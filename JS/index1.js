function hello(){
    console.log("Hello User");
}
hello();
const hello1=()=>{
    console.log("Hello User1");
}
hello1();
function sum(x,y,z){
    return (x+y+z);
}
const sum1=(x,y,z)=>{
    return(x+y+z);
}
const result=sum(10,12,13);
console.log(result);
console.log(sum1(2,4,5));
