let creditCalculation = function(summ,duration,rate){
	let overPayment = 0;
  for (let i = duration; i>0; i--) {
  let yearOverPayment = summ * (rate/100);
  summ = summ - (summ/duration);
  overPayment += yearOverPayment;
  }
  return overPayment;
};
