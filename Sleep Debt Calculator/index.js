const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 8
        break;
      case 'wednesday':
        return 8
        break;
      case 'thursday':
        return 8
        break;
      case 'friday':
        return 8
        break;
      case 'saturday':
        return 8
        break;
      case 'sunday':
        return 8
        break;
      default:
        return 'Error!';
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 12; 
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log("You got " + (idealSleepHours - actualSleepHours) + "more than enough sleep");
    } else if (actualSleepHours < idealSleepHours) {
      console.log("Go back to bed you need " + (idealSleepHours - actualSleepHours) + " hours more sleep");
    } else {
      console.log('Error');
    }
  };
  
  calculateSleepDebt();