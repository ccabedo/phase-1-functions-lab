
  function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue)
  }

  distanceFromHqInBlocks();


  function distanceFromHqInFeet(feet){
    return Math.abs(42 - feet)* 264
 }  
 distanceFromHqInFeet();



 function distanceTravelledInFeet(start, destination) {
    const startDistance = start*264
    const destinationDistance = destination*264
    return Math.abs(startDistance - destinationDistance)
 }
  
 distanceTravelledInFeet();

 function calculatesFarePrice(start, destination) {
    const startDistance = start*264
    const destinationDistance = destination*264
    const result = Math.abs(startDistance - destinationDistance);
    if(result <= 400){
        return 0
    }else if(result > 400 && result < 2000){
        const newResult = result - 400
        const cents = (newResult)*.02
        return cents
    }else if(result > 2000 && result < 2500){
        const newNewResult = Math.abs(result - 2000);
        const twentyFive = newNewResult*25;
        return 25;
    } else {
        return 'cannot travel that far'
    }
 }
