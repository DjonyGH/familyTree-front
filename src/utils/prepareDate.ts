import moment from 'moment'

const prepareDate = (date: string) => moment(date).format('DD.MM.YYYY')

export default prepareDate
