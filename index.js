const distanceTraveledMiles = [267, 345, 234, 190, 299];

const distanceTraveledKm = distanceTraveledMiles.map(d => Math.round(d * 1.60934));

console.log(distanceTraveledKm);