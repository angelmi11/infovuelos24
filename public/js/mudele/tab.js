
const d = document;
let btnItems = d.querySelectorAll('.item .btn-item');
export function acordeonAeropuerts () {
   for(let i =0;i<btnItems.length;i++){
       btnItems[i].addEventListener('click',function(e){

        let btn = e.target;
        if(btn.className =='btn-item active'){
            removerClass();
        }else{
            removerClass();
            btn.classList.add('active')
        }


       })
   }
    

}

function removerClass(){

    for(let i =0;i<btnItems.length;i++){
        btnItems[i].classList.remove('active');
    }
}