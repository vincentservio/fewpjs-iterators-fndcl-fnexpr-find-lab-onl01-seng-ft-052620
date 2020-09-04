const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(rec){
  let result = record.find( rec => rec.result === "W" )
  return !!result ? result.year : undefined
}