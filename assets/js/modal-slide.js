let type = ['image/jpeg' , 'image/jpg', 'image/png'];

document.querySelectorAll('.modal--feedback').forEach(modal => {
    modal.querySelector('.modal--feedback-info .close-i').addEventListener('click', () => {
        modal.style.display = "none";
        modal.querySelectorAll('input, textarea').forEach(item =>{
             document.getElementById(item.id).classList.remove('error');
             document.getElementById('msg-'+item.id).style.visibility="hidden";
             document.getElementById(item.id).classList.remove('errorTextarea');

        });
    });
    document.querySelector('.feedback-card-button button').addEventListener('click', ()=>{
        modal.style.display = "flex";
    });

    document.getElementById('button-feedback').addEventListener('click', ()=>{
         errorInput();
    });
});

function errorInput(){
    let count = 0;
    document.querySelectorAll('.modal--feedback input, .modal--feedback textarea').forEach(item =>{
       
        let id = item.id;
         if(parseInt(id)){
           if(item.value){
             count++;
             document.getElementById('msg-'+id).style.visibility="hidden";
             document.getElementById(id).classList.remove('error');
             document.getElementById(id).classList.remove('errorTextarea');
             if(item.type === 'file'){
                  (type.indexOf(item.files[0]['type']) > -1 && count++);
             }
           }else{
            document.getElementById('msg-'+id).style.visibility="visible";
           document.getElementById(id).classList.add('error');
           document.getElementById(id).classList.add('errorTextarea');
           }
         }
    });
    
    if(count === 5){
       document.getElementById('button-feedback').type="submit";
    }  
}
function upload(){
    let image = document.getElementById(6).files[0];
    let span = document.getElementById('msg-6');
 
    span.style.visibility="visible";
   
    if(type.indexOf(image.type) > -1){
     span.style.color="rgb(0, 110, 255)";
     span.innerHTML= image.name;
 
    }else{
     span.innerHTML= 'Arquivo invalido!';
    }
 }
 

