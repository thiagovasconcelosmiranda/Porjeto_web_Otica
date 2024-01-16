document.querySelector('#button--contact').addEventListener('click', ()=>{
    inputError();
});

function inputError(){
    let num = 0;
    let input = document.querySelectorAll('.contact--form input, textarea');
    input.forEach(item =>{
        let id = item.id;
        if(id){
            if(item.value){
                document.getElementById(id).classList.remove('input-error');
                document.getElementById("error-"+id).style.visibility="hidden";
                num++; 
            }else{
                document.getElementById(id).classList.add('input-error');
                document.getElementById("error-"+id).style.visibility="visible";
            }
        } 
    });

    if(num == 5){
        document.querySelector('#button--contact').type="submit";
        return;
    }
}