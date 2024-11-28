const item_name = document.querySelector(".item_name")
const item_description = document.querySelector(".item_description")
const post_btn = document.querySelector(".post_btn")
const update_btn = document.querySelector(".update_btn")
const post_ariya = document.querySelector(".post_ariya")
const allPost = document.querySelector(".allPost")
const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")
let arry = [];
let indexcunt;


post_btn.addEventListener("click", function(){
    if((item_name.value =="") && (item_description.value =="") ){
        error2.innerHTML = "Please Enter Something"
        error2.style.display= "inline-block"         
    } else if( item_name.value==""){
        error2.innerHTML = "Please Enter Post Titel"
        error2.style.display= "inline-block"
    }else if( item_description.value==""){
        error2.innerHTML = "Please Enter Post Description"
        error2.style.display= "inline-block"
    }
    else{
        arry.push({
            item_name : item_name.value,
            item_description : item_description.value,
        })
    
        allPost.innerHTML= "";
        post ();
        item_description.value=""
        item_name.value=""
        error2.style.display= "none"
    }

   
})

update_btn.addEventListener("click", function(){
    arry[indexcunt].item_name = item_name.value;
    arry[indexcunt].item_description = item_description.value;
    
    allPost.innerHTML="";
    
    item_description.value=""
    item_name.value=""
    post();
    post_btn.style.display=('inline-block')
    update_btn.style.display=('none')
    error2.style.display= "none"
})



function post (){
    arry.map(value => {

        allPost.innerHTML +=`<div class="post_ariya">
        <div class="post_title">
            <h1>${value.item_name}</h1>
          </div>
          <div class="post_contant">
            <p>${value.item_description}
            </p>
          </div>
          <button type="button" class="btn btn-success edit_btn">Edit</button>
          <button type="button"  class="btn btn-danger delete_btn">Delete</button>`
    })

    let deletBtn = document.querySelectorAll(".delete_btn")

    deletBtnCnv= Array.from(deletBtn);

    deletBtnCnv.map((value,index) =>{
        value.addEventListener("click", function(){
            arry.splice(index,1)
            
            allPost.innerHTML="";
            post();
        })
    })


    let edit_btn = document.querySelectorAll(".edit_btn");

    editBtnCnv= Array.from(edit_btn);

    editBtnCnv.map((value,index) =>{
        value.addEventListener("click",function(){
            item_name.value = arry[index].item_name;
            item_description.value = arry[index].item_description;
            post_btn.style.display=('none')
            update_btn.style.display=('inline-block')
            indexcunt=index;
        })

       
    })

  
}