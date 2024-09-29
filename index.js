// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    // Calculate the distance from HQ (located at 42)
    const distance = Math.abs(someValue - 42); // Absolute value to avoid negative distances
    return distance;
}
  function distanceFromHqInFeet(someValue) {
    const distanceInBlocks=distanceFromHqInBlocks(someValue);
    return distanceInBlocks*264
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start); // Use absolute value
    return distance * 264;
}

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance= (Math.abs(destination-start))*264;
    if(distance<=400){
        return 0;
    }else if(distance<=2000){
        const fare=(distance-400)*2/100;
        return fare;
    }else if(distance<2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }
  }