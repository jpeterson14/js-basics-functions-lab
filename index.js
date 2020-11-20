// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance > 42) {
        return distance - 42
    } else {
        return 42 - distance
    }

}
function distanceFromHqInFeet(block) {
    let distance = distanceFromHqInBlocks(block)
    return (distance * 264)
}
function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance === 264) {
        return 0
    } else if (400 <= distance && distance <= 2000) {
      return (distance - 400) * 0.02;
    }
    else if (2000 <= distance && distance <= 2500) {
      return 25;
    }
    else if (2500 < distance) {
      return 'cannot travel that far';
    }
  }