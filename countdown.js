// class Countdown
export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _actualDate() { //get atual data e retorna a mesma
    return new Date();
  }
  get _futureDate() { //get futura data passa por parametro que foi criada como New Object
    return new Date(this.futureDate);
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime(); //calculo do tempo restante
  }
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000)); //transforma o tempo restante em dias e arredonda com Math.floor
  }
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000)); //transforma o tempo restante em horas
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000)); //transforma o tempo restante em minutos
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }
  get total() {
    const days = this.days; //usado modulo para arredondar o restante
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

}