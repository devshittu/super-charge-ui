// import moment from 'moment'
// import moment from 'moment-timezone';

// const Moment = require('moment');
const MomentTz = require('moment-timezone');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(MomentTz);
// const moment = MomentTz.extendMoment(Moment);
//relative, absolute
export const absoluteTimeTeller = function (value) {
    value = moment.utc(value);
    value = value.valueOf();
    let timeAgoInstance = new TimeAgo(value);
    return timeAgoInstance.absoluteTime()
}

export const relativeTimeTeller = function (value) {
    value = moment.utc(value);
    value = value.valueOf();
    let timeAgoInstance = new TimeAgo(value)
    return timeAgoInstance.relativeTime()
}

/* Class */
function TimeAgo(timestamp, ago = true) {
    // Africa/Lagos
    // var date = moment('2016-10-11 18:06:03').tz('Africa/Lagos').format();
    const timezone = 'Africa/Lagos';
    var nowDate = moment().tz(timezone).format();
    var date = moment(timestamp).tz(timezone).format();
    // var date = timestamp
    let nowMomentObject = moment(nowDate)
    let momentObject = moment(date)

    /*console.log('date-moment:? ', momentObject);
    console.log('dbtimed ' + momentObject.subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD'));

    console.log('dbtimed ' + momentObject.subtract(1, 'weeks').endOf('week').format('YYYY-MM-DD'));
    console.log('nowtimed ' + moment().subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD'));
    console.log('nowtimed ' + moment().subtract(1, 'weeks').endOf('week').format('YYYY-MM-DD'));
    console.log('date:? ', momentObject.toObject());

    console.log('date:? ', moment(date).format("X"));
    console.log('date:? ', moment(date).format("x")); // for milliseconds*/

    this.timestamp = timestamp
    this.timestampedMoment = momentObject
    this.nowMoment = nowMomentObject
    this.ago = ago
}

TimeAgo.prototype.relativeTime = function () {
    var outputTime;
    outputTime = moment(this.timestampedMoment.toDate()).fromNow();
    return outputTime;
}
TimeAgo.prototype.absoluteTime = function () {

    // let datetime = dateTime.date + ' at ' + dateTime.time
    let outputTime = this.timestampedMoment.format('LLLL')
    /*
    console.log('isToday() ', this.isToday())
    console.log('isYesterday() ', this.isYesterday())
    console.log('isThisWeek() ', this.isThisWeek())
    console.log('isLastWeek() ', this.isLastWeek())
    console.log('isThisMonth() ', this.isThisMonth())
    console.log('isLastMonth() ', this.isLastMonth())
    console.log('isThisYear() ', this.isThisYear())
    console.log('isLastYear() ', this.isLastYear())
    */

    let dateTime = {
        seconds: moment().diff(this.timestampedMoment, 'seconds'),
        minutes: moment().diff(this.timestampedMoment, 'minutes'),
        hours: moment().diff(this.timestampedMoment, 'hours'),
        days: moment().diff(this.timestampedMoment, 'days'),
        weeks: moment().diff(this.timestampedMoment, 'weeks'),
        months: moment().diff(this.timestampedMoment, 'months'),
        years: moment().diff(this.timestampedMoment, 'years'),
    };


    /*

    ddd -	Sun Mon ... Fri Sat
    D   -	1 2 ... 30 31
    MMM - 	Jan Feb ... Nov Dec
    */
    if (this.isToday()) {
        /*
        * Just now
        * 2 mins ago
        * 1 hour ago
        * Today at LT
        * */
        if (dateTime.seconds > 0 && dateTime.seconds <= 45) {
            outputTime = 'Just now'
        }
        else if (dateTime.minutes > 0 && dateTime.hours < 2) {
            outputTime = moment(this.timestampedMoment.toDate()).fromNow()
        }
        else {
            outputTime = 'Today at ' + this.timestampedMoment.format('LT');
        }
        // eslint-disable-next-line no-console
        // console.log(`isToday:passed: `, outputTime);
        return outputTime
    }
    if (this.isYesterday()) {
        /*
        * Exday at LT
        * */
        outputTime = 'Exday at ' + this.timestampedMoment.format('LT');
        // eslint-disable-next-line no-console
        // console.log(`isYesterday:passed: `, outputTime);
        return outputTime
    }
    if (this.isThisWeek()) {
        /*
        * Thurs at LT
        * */
        outputTime = this.timestampedMoment.format('ddd') + ' at ' + this.timestampedMoment.format('LT');
        // eslint-disable-next-line no-console
        // console.log(`isThisWeek:passed: `, outputTime);
        return outputTime
    }
    if (this.isLastWeek()) {
        /*
        * Lw Thurs at LT
        * */
        outputTime = 'Lw ' + this.timestampedMoment.format('ddd') + ' at ' + this.timestampedMoment.format('LT');
        // eslint-disable-next-line no-console
        // console.log(`isLastWeek:passed: `, outputTime);
        return outputTime
    }
    if (this.isThisMonth()) {
        /*
        * Thu 28, at LT
        * */
        outputTime = this.timestampedMoment.format('ddd') +
            ' ' +
            this.timestampedMoment.format('D') +
            ', at ' + this.timestampedMoment.format('LT');
        // eslint-disable-next-line no-console
        // console.log(`isThisMonth:passed: `, outputTime);
        return outputTime
    }
    if (this.isLastMonth() || this.isThisYear()) {
        /*
        *  Nov 28, at LT
        * */
        outputTime = this.timestampedMoment.format('MMM') +
            ' ' +
            this.timestampedMoment.format('D') +
            ', at ' + this.timestampedMoment.format('LT');
        // eslint-disable-next-line no-console
        // console.log(`isLastMonth/isThisYear:passed: `, outputTime);
        return outputTime
    }
    if (this.isLastYear()) {
        /*
        * Ly Nov 28, at LT
        * */
        outputTime = 'Ly ' + this.timestampedMoment.format('MMM') +
            ' ' +
            this.timestampedMoment.format('D') +
            ', at ' + this.timestampedMoment.format('LT');
        // eslint-disable-next-line no-console
        // console.log(`isLastYear:passed: `, outputTime);
        return outputTime
    }
    else {
        outputTime = this.timestampedMoment.format('ll') +
            ', at ' + this.timestampedMoment.format('LT');
        // eslint-disable-next-line no-console
        // console.log(`isToday:else: `, outputTime);
        return outputTime
    }
    // return moment(this.timestampedMoment.toDate()).fromNow()
}

TimeAgo.prototype.isThisMoment = function (period) {

    // let upperPeriod = period.charAt(0).toUpperCase() + period.substring(1); //Console.log
    const startOfThisPeriod = moment().startOf(period)
        // .format('YYYY-MM-DD')
    ;
// eslint-disable-next-line no-console
//     console.log(`startOfThis${upperPeriod}: `, startOfThisPeriod);

    const endOfThisPeriod = moment().endOf(period)
        // .format('YYYY-MM-DD')
    ;
// eslint-disable-next-line no-console
//     console.log(`endOfThis${upperPeriod}: `, endOfThisPeriod);
    //code
    var startDate = startOfThisPeriod.toDate()
        , endDate = endOfThisPeriod.toDate()
        , date = this.timestampedMoment.toDate()
        // , date  = new Date(2019, 10, 11)
        , range = moment().range(startDate, endDate);

    return range.contains(date);
}

TimeAgo.prototype.isLastMoment = function (periods, period) {

    // let upperPeriod = period.charAt(0).toUpperCase() + period.substring(1); //Console.log

    const startOfLastPeriod = moment().subtract(1, periods).startOf(period)
        // .format('YYYY-MM-DD')
    ;
    // eslint-disable-next-line no-console
    // console.log(`startOfLast${upperPeriod}: `, startOfLastPeriod);
    const endOfLastPeriod = moment().subtract(1, periods).endOf(period)
        // .format('YYYY-MM-DD')
    ;
    // eslint-disable-next-line no-console
    // console.log(`endOfLast${upperPeriod}: `, endOfLastPeriod);

    //code
    var startDate = startOfLastPeriod.toDate()
        , endDate = endOfLastPeriod.toDate()
        , date = this.timestampedMoment.toDate()
        // , date  = new Date(2019, 10, 11)
        , range = moment().range(startDate, endDate);

    return range.contains(date);
}

TimeAgo.prototype.isToday = function () {
    var yesterday = moment().clone().startOf('day')
    return this.timestampedMoment.isSame(yesterday, 'd')
}

TimeAgo.prototype.isYesterday = function () {
    var yesterday = moment().clone().subtract(1, 'day').startOf('day')
    return this.timestampedMoment.isSame(yesterday, 'd')
}

TimeAgo.prototype.isThisWeek = function () {

    const periodLabel = 'isoWeek';
    return this.isThisMoment(periodLabel)
}

TimeAgo.prototype.isLastWeek = function () {
    const periodLabel = 'isoWeek';
    const periods = 'weeks';
    return this.isLastMoment(periods, periodLabel)
}

TimeAgo.prototype.isThisMonth = function () {

    const periodLabel = 'month';
    return this.isThisMoment(periodLabel)
}

TimeAgo.prototype.isLastMonth = function () {

    const periodLabel = 'month';
    const periods = 'months';
    return this.isLastMoment(periods, periodLabel)
}

TimeAgo.prototype.isThisYear = function () {
    const periodLabel = 'year';
    return this.isThisMoment(periodLabel)
}

TimeAgo.prototype.isLastYear = function () {


    const periodLabel = 'year';
    const periods = 'years';
    return this.isLastMoment(periods, periodLabel)
}

