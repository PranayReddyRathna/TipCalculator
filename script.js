const billTotalInputdiv=document.getElementById('billTotalInput')
const tipinputdiv=document.getElementById('tipInput')
const numberOfPeoplediv=document.getElementById('numberOfPeople')
const perPersonTotaldiv=document.getElementById('perPersonTotal')

let numberofpeople=Number(numberOfPeoplediv.innerText)
const calculateBill=()=>{
  const billtotal=Number(billTotalInputdiv.value)
  const tippercent=Number(tipinputdiv.value)/100
  const tipamount=billtotal*tippercent
  const total=tipamount+billtotal
  perPersonTotaldiv.innerText=(total/numberofpeople).toLocaleString('US-en')
}

const increasePeople=()=>{
  numberofpeople+=1
  numberOfPeoplediv.innerText=numberofpeople
  calculateBill()
}

const decreasePeople=()=>{
  if(numberofpeople<=1){
    return 
  }
  numberofpeople-=1
  numberOfPeoplediv.innerText=numberofpeople
  calculateBill()
}