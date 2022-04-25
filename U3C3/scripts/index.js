// Store the wallet amount to your local storage with key "amount"
let count=localStorage.getItem(Number('amount'))||[]

function addToWallet(){
    let amount=document.getElementById('amount').value

    count=Number(amount)
    let X=localStorage.getItem("amount")
    if(X==null){
        Number(X=0)
    }
    let sum=Number(X)+Number(amount)
    count=sum;

localStorage.setItem("amount",count)
document.getElementById('wallet').innerHTML=count



}