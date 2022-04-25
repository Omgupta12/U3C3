// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet=localStorage.getItem("amount")
document.getElementById('wallet').innerHTML=wallet

let getdata=JSON.parse(localStorage.getItem('movie'))
console.log(getdata)

function appenddata(data){
    data.forEach(function(el){
        let div=document.createElement('div')

        let img=document.createElement('img')
        img.src=el.Poster

        let title=document.createElement('p')
        title.innerHTML=el.Title

        
        let btn=document.createElement('button')
        btn.innerText="Confirm"
        btn.setAttribute("id",'confirm')

        btn.addEventListener('click',function(){
            
                 wallet=wallet-100
                localStorage.setItem('amount',wallet)
                document.getElementById("wallet").innerHTML=wallet

               alert("Booking successful!")
           
        
        })

        div.append(img,title,btn)
        document.getElementById("movie").append(div)
    })
}
appenddata(getdata)