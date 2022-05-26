function solve(obj) {
  /* obj model{
  weight: Number,
  experience: Number,
  levelOfHydrated: Number,
  dizziness: Boolean 
}
*/
  if (obj.dizziness) {
    obj.levelOfHydrated += 0.1 * (obj.weight * obj.experience);
    return obj;
  }
  return obj;
}
console.log(
  solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true })
);
