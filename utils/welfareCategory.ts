
function moreThan80OnTwo(principleScores: Array<number>) {
  const principlesMoreThan80 = principleScores.filter(
    (principle) => principle > 80
  )
  if (principlesMoreThan80.length >= 2) {
    return true
  } else {
    return false
  }
}
function moreThan55OnTwo(principleScores: Array<number>) {
  const principlesMoreThan55 = principleScores.filter(
    (principle) => principle > 55
  )
  if (principlesMoreThan55.length >= 2) {
    return true
  } else {
    return false
  }
}
function moreThan20OnThree(principleScores: Array<number>) {
  const principlesMoreThan20 = principleScores.filter(
    (principle) => principle > 20
  )
  if (principlesMoreThan20.length >= 3) {
    return true
  } else {
    return false
  }
}

// Overall Welfare Score (Category)
export function welfareCategory(
  goodFeeding: number,
  goodHousing: number,
  goodHealth: number,
  appropirateBehavior: number
): string {
  const principleList = [
    goodFeeding,
    goodHousing,
    goodHealth,
    appropirateBehavior,
  ]
  if (
    55 < goodFeeding &&
    55 < goodHousing &&
    55 < goodHealth &&
    55 < appropirateBehavior &&
    moreThan80OnTwo(principleList)
  ) {
    return 'Excellent - the welfare of the animals is of the highest level'
  } else if (
    20 < goodFeeding &&
    20 < goodHousing &&
    20 < goodHealth &&
    20 < appropirateBehavior &&
    moreThan55OnTwo(principleList)
  ) {
    return 'Enhanced - the welfare of animals is good'
  } else if (
    10 < goodFeeding &&
    10 < goodHousing &&
    10 < goodHealth &&
    10 < appropirateBehavior &&
    moreThan20OnThree(principleList)
  ) {
    return 'Acceptable - the welfare of animals is above or meets minimal requirements'
  } else {
    return 'Not classified - the welfare of animals is low and considered unacceptable'
  }
}
