import moment from 'moment'

export function Test(val) {
    if (val) {
        return val + "using filter";
    }
}

export function normalMomentTime(time) {
    if (time) {
        return moment(time).format('YYYY-MM-DD HH:mm:ss');
    }
}
export function normalMomentDate(time) {
    if (time) {
        return moment(time).format('YYYY-MM');
    }
}