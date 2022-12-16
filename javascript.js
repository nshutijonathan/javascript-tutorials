function getRandom(min, max) {
  const floatRandom = Math.random();

  const difference = max - min;

  // random between 0 and the difference
  const random = Math.round(difference * floatRandom);

  const randomWithinRange = random + min;

  console.log("randomWithinRange", randomWithinRange);
}
getRandom(1, 4);
