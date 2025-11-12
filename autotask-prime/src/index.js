import { DateTime } from "luxon";

/*
setInterval(() => {
hh.textContent = DateTime
.local()
.setLocale('ru')
.toFormat('dd.LL.y HH:mm:ss');
}, 1000);
*/

function getNatural(n){
    if(n <= 0){
        return [];
    }
    return Array.from({ length: n }, (_, index) => index + 1);

}

var url = window.location.search.replace("?", "");
if (url){
    url = Number(url);
}else{
    url = 0;
}

const nature = getNatural(url);


hh.textContent = nature.length - 2;