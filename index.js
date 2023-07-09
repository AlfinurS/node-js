import colors from 'colors'

const initFirst = () => {

  const trafficLight = ["green", "yellow", "red"];
 
  let currentIndex = 0;
  const setNextIndex = () => {
    if (currentIndex >= 0 || currentIndex < trafficLight.length) {
      currentIndex = currentIndex + 1;
    }
    if (currentIndex === trafficLight.length) {
      currentIndex = 0;
    }
  }
  let currentNumb = 0;
  while (currentNumb <= 60) {
      let check = true;
      for (let n = 2; n < currentNumb; n++){
          if (currentNumb % n === 0) {
              check = false;
              break;
          }
      }
      if (check) 
      console.log(colors[trafficLight[currentIndex]](currentNumb));
      
      setNextIndex();
      currentNumb++;
  }
}

initFirst();
