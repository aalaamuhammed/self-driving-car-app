const trips = [
  {
    id: 1,
    date: 'Yesterday',
    score: 7.2,
    distance: '45.6 mi',
    from: 'Midtown, San Jose, CA',
    to: 'Downtown, San Francisco, CA',
  },
  {
    id: 2,
    date: 'Oct 12',
    score: 8.3,
    distance: '837.9 mi',
    from: 'Burbank Avenue, San Martin, CA',
    to: 'Llagas Avenue, Los Angeles, CA',
  },
];

const drivingData = [
  {
    id: 1,
    status: 'bad',
    action: 'breaking',
    // icon: require('../assets/images/Icon/BreakingBad.png'),
  },
  {
    id: 2,
    status: 'fair',
    action: 'speeding',
    // icon: require('../assets/images/Icon/SpeedingFair.png'),
  },
  {
    id: 3,
    status: 'good',
    action: 'breaking',
    // icon: require('../assets/images/Icon/BreakingGood.png'),
  },
];
const favouritePlaces = [
  {id: 1, image: require('_assets/images/i6.jpg')},
  {id: 2, image: require('_assets/images/i7.png')},
  {id: 3, image: require('_assets/images/i8.png')},

];
const parkingsSpots = [
  {
    id: 1,
    name: 'VolKswagen Arteon',
    title: 'Parking 1',
    startingPrice: 7,
    endingPrice: 10,
    timeToarrive: 20,
    verificationCode: 'WDcv893',
    rating: 4.2,
    licenseCode: 'S54C56V',
    width: 150,
    height: 70,
    spots: 20,
    image: require('_assets/images/i3.png'),
    coordinate: {
      latitude: 37.78735,
      longitude: -122.4334,
    },
    description: `Description about this parking lot
   Open year 2018
   Secure with CTV`,
  },
  {
    id: 2,
    name: 'Shevroliah',

    title: 'Parking 2',
    startingPrice: 7,
    endingPrice: 20,
    timeToarrive: 10,
    verificationCode: 'Ertg126',
    licenseCode: 'V51C72T',
    width: 150,
    height: 60,
    rating: 3.8,
    spots: 25,
    image: require('_assets/images/i5.png'),
    coordinate: {
      latitude: 37.78845,
      longitude: -122.4344,
    },
    description: `Description about this parking lot
   Open year 2014
   Secure with CTV`,
  },
  {
    id: 3,
    name: 'Teota',
    startingPrice: 5,
    endingPrice: 30,
    timeToarrive: 14,
    verificationCode: 'Cvds124',
    licenseCode: 'M21B50A',
    price: 10,
    rating: 4.9,
    spots: 50,
    width: 150,
    height: 60,
    image: require('_assets/images/i5.png'),
    coordinate: {
      latitude: 37.78615,
      longitude: -122.4314,
    },
    description: `Description about this parking lot
   Open year 2019
   Secure with CTV`,
  },
  {
    id: 4,
    name: 'Teota',
    startingPrice: 5,
    endingPrice: 30,
    timeToarrive: 14,
    verificationCode: 'Cvds124',
    licenseCode: 'M21B50A',
    price: 10,
    rating: 4.9,
    spots: 50,
    width: 150,
    height: 60,
    image: require('_assets/images/i5.png'),
    coordinate: {
      latitude: 37.78615,
      longitude: -122.4314,
    },
    description: `Description about this parking lot
  Open year 2019
  Secure with CTV`,
  },
];
const location = {
  latitude: 40.73978092263567,
  longitude: -73.87333547273988,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06,
};

export {trips, drivingData, location, parkingsSpots,favouritePlaces};
