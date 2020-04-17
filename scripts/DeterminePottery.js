let potteryToSell = []
const DeterminePottery = () => {
    if(Pottery.potteryObject.weight > 3){
        Pottery.potteryObject.price = 40
        potteryToSell.push(Pottery.potteryObject)
        console.log(potteryObject.price)
    }else if(Pottery.potteryObject.weight < 3){
        Pottery.potteryObject.price = 20
    }
}