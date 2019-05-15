let creditCalculation = function(summ,duration,rate){
    let overPayment = 0;
    let durationMonth = duration * 12;
    let monthPay = summ/durationMonth;
    let currentSumm = summ;
  for (let i = durationMonth; i>0; i--) {
    let mounthOverPayment = currentSumm * (rate/(12*100));
    currentSumm -= monthPay
    overPayment += mounthOverPayment;
  }
  return overPayment;
};
