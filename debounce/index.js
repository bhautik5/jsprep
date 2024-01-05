const btn = document.querySelector('.btn')
const incBtn = document.querySelector('.increment_btn')
const incEvent = document.querySelector('.increment_event')

let increment_btn = 0;
let increment_event = 0;

// Debounce on Button
const myDebounce = (fn, d) => {
    let time;
    return (...args)=>{
        if(time){clearTimeout(time)}
        time = setTimeout(()=>{
            fn(...args);
        }, d);
    }
}
const debounceFn = myDebounce(()=>{
    incEvent.innerHTML = ++increment_event;
}, 800)
btn.addEventListener('click',function(){
    incBtn.innerHTML = ++increment_btn
    debounceFn('arg1','arg2');
})

// Debounce on search
let searchKeyword=0;
const getData =function(){
    // console.log(document.querySelector('.search').value);
    console.log("searching "+ searchKeyword++);
}
const doSomeMegic = function (fn, d){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        if(timer){clearTimeout(timer);}
        timer = setTimeout(() => {
            fn.apply(context,args)
            // fn(...arguments)
        },d)
    }
} 
const betterFunction = doSomeMegic(getData, 700);





// throttle on Button
const btn1 = document.querySelector('.btn1')
const incBtn1 = document.querySelector('.increment_btn1')
const incEvent1 = document.querySelector('.increment_event1')

let increment_btn1 = 0;
let increment_event1 = 0;
const myThrottle = (fn, d)=>{
    let flag = true;
    return (function() {
        let context = this;
        let args = arguments;
        if(flag) {
            fn.apply(context, args)
            flag= false;
            setTimeout(()=>{
                flag = true;
            },d)
            
        }
        
    })
} 
// const myThrottle = (fn, d) =>{
//     let last = 0;
//     return (...args) => {
//         let now = new Date().getTime();
//         if(now - last < d ) return
//         last = now;
//         return fn(...args);
//     }
// }
let throttleFn = myThrottle(()=>{
    incEvent1.innerHTML = ++increment_event1;
},900)
btn1.addEventListener('click',()=>{
    incBtn1.innerHTML = ++increment_btn1;
    throttleFn();
});



// Throttling on window resize
const windowThrottle = (fn, d) => {
    let flag = true;
    return (...args) => {
        if(flag) {
            fn(...args);
            flag = false;
            setTimeout(()=>{
                flag = true;
            }, d)
        }
    }

}
const windowresizeFn = () => {
    console.log("window resize")
}
window.addEventListener('resize',windowThrottle(windowresizeFn,500))   