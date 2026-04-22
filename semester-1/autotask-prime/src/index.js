// import { DateTime } from "luxon";
// import { getPrimes, isPrime } from 'primes-and-factors';
import primeNumber from 'prime-number';
// import primes from 'primes';

/*
setInterval(() => {
hh.textContent = DateTime
.local()
.setLocale('ru')
.toFormat('dd.LL.y HH:mm:ss');
}, 1000);
*/



var url = window.location.search.replace("?", "");
// const tes = document.getElementById("tes");
if (url){
    url = Number(url);
    const primes = [];
    for (let i = 2; i <= url; i++) {
        if (primeNumber(i)) {
            primes.push(i);
        }
    }
    title_id.textContent = primes.length;
}else{
    url = 0;
}



