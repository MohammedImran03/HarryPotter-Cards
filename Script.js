//Declaration of Variables
let div=document.createElement("div")
div.setAttribute("class","Container");
let p=document.createElement("div");
p.setAttribute("class","row");
p.classList.add("row" ,"m-3")
div.append(p);
//Retrive data through fetch method using Promise
let promisedata = new Promise((resolve, reject)=>{
    fetch("https://hp-api.onrender.com/api/characters").then((data)=> data.json()).then((response)=>{
        actorslist(response);
    });

});
promisedata.then((data)=> console.log(data)).catch((err)=>console.log(err));
//Function for List from API
function actorslist(response){
    response.forEach(({name,image,ancestry,actor,wand,house,hogwartsStudent,hogwartsStaff})=>{
        let {core}=wand;
        let position;
        if(ancestry==null || ancestry==""){
            ancestry="UnKnown";
        }
        if(core==null || core==""){
            core="UnKnown";
        }
        if(house==null || house==""){
            house="UnKnown";
        }
        if(hogwartsStudent==true && hogwartsStaff==false){
            position="hogwartsStudent";
        }
        if(hogwartsStudent==false && hogwartsStaff==true){
            position="hogwartsStaff";
        }
        if((hogwartsStudent==null && hogwartsStaff==null) || (hogwartsStudent=="" && hogwartsStaff=="") ){
            position="Antogonist";
        }
        // console.log(name,image,ancestry,actor,core);
        //Data Input to UI via HTML elements in Javscript
        p.innerHTML+=`<div class="main col-lg-4 col-sm-12 col-md-6">
            <div class="card text-white mb-3" style="max-width: 15rem;">
            <h3 class="card-title">${name}</h3>
             <img src="${image}" class="card-img-top">
             <div class="card-body">
             <h6 class="card-title">${position}</h6>
             <h6 class="card-title">Ancetry: ${ancestry}</h6>
             <h6 class="card-title">House: ${house}</h6>
             <h6 class="card-title">Wand Name: ${core}</h6>
             <h6 class="card-title">Actor: ${actor}</h6>
             </div>
           </div>
              </div>`
        document.body.append(p);
    });
}