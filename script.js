setInterval(()=>{
  data=new Date();
 let h=data.getHours();
 let m=data.getMinutes();
 let s=data.getSeconds();
 let hr =30*h+m/2;
 let mr=6*m;
 let sr=6*s;
 console.log(sr);

 hour.style.transform = `rotate(${hr}deg)`;
 minute.style.transform = `rotate(${mr}deg)`;
 second.style.transform = `rotate(${sr}deg)`;
},1000);