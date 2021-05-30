const counters=document.querySelectorAll('.counter');
// console.log(counters);
counters.forEach(counter=>{
    // console.log(counter);
    counter.innerText="0";
    const updatecounter=()=>{
    //    const target=Number(counter.getAttribute('data-target'));
    const target = +counter.getAttribute('data-target');
    //    console.log(typeof target,target);
    const ctr= +counter.innerText;
    // console.log(typeof ctr,ctr);
    const increment=target/100;
    // console.log(increment);
    if(ctr < target){
        counter.innerText=`${Math.ceil(ctr+increment)}`;
        setTimeout(updatecounter,100);
    }
    };
    updatecounter();
})