function scuberGreetingForFeet(riderDistance){
  if (riderDistance <= 400) {
    return 'This one is on me!';
  }
  else if (riderDistance > 400 && riderDistance <= 2000) {
    return 'That will be twenty bucks.';
  } 
  else if (riderDistance > 2000 && riderDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } 
  else {
    return 'No can do.';
  } // <-- This closing brace was missing
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
