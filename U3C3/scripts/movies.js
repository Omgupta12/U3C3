// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallet=localStorage.getItem("amount")
document.getElementById('wallet').innerHTML=wallet

let getdata=JSON.parse(localStorage.getItem('movie'))||[]

async function search(){
let movies=document.getElementById("search").value
    try{
        let res=await fetch(`https://www.omdbapi.com/?apikey=4bed0960&s=${movies}`);

        let data= await res.json();
        // console.log(data.Search)
        appendmovies(data.Search)
    }
    catch(err){
        console.log(err)
    }
}

function appendmovies(data){
    document.getElementById("movies").innerHTML=null

    data.forEach(function(el){

        let div=document.createElement('div')

        let img=document.createElement('img')
        img.src=el.Poster

        let title=document.createElement('p')
        title.innerHTML=el.Title

        let btn=document.createElement('button')
        btn.innerText="Book Now"
        btn.setAttribute("class",'book_now')

        btn.addEventListener('click',function(){
            getdata.push(el)
            localStorage.setItem("movie",JSON.stringify(getdata))
            window.location.href="checkout.html"
        })


        div.append(img,title,btn)
        document.getElementById("movies").append(div)



    })
}