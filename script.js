console.log("this is me Dhaananjay")

const url='	https://api.adviceslip.com/advice';

const advices=async ()=>{
    let num=Math.floor((Math.random()*214)+1);
    const smile=document.querySelector(".smile");
    try{
        const data=await fetch(`${url}/${num}`);
        const resp=await data.json();
        const advice = resp.slip.advice;
        console.log(advice)
        
        smile.innerHTML=advice;
        return advice;
    }
    catch (error) {
        console.error('Error fetching advice:', error);
        smile.innerHTML=`Error fetching advice: ${error}`;
    }
   
    
}


const btn=document.querySelector(".btn");

btn.addEventListener("click",(()=>{
    advices();
}))


// console.log(num);