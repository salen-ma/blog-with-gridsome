import dayjs from 'dayjs'

const Filters = {}

Filters.install = Vue => {
  Vue.filter('date', (value, fromat = 'YYYY-MM-DD HH:mm') => {
    return dayjs(value).format(fromat)
  })
}

export default Filters