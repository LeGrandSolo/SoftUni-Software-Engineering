class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    }
    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }
  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }
    if (this.resources - time * 10 < 0) {
      return "You don't have enough resources to complete the hike";
    }
    this.resources -= time * 10;
    this.listOfHikes.push({ peak, time, difficultyLevel });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }
  rest(time) {
    this.resources += time * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }
    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }
  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }
    if (criteria === "all") {
      let result = `All hiking records:`;
      for (const hike of this.listOfHikes) {
        result += `\n${this.username} hiked ${hike.peak} for ${hike.time} hours`;
      }
      return result;
    }
    let bestHike = '';
    let bestTime = Infinity;
    for (const hike of this.listOfHikes) {
      if (hike.difficultyLevel === criteria) {
        if (hike.time < bestTime) {
          bestTime = hike.time;
          bestHike = hike.peak;
        }
      }
    }
    if ((bestHike === '')) {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }
    return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestTime} hours`;
  }
}
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.addGoal('Musala', 2925));
