import loginTH from './login/th.json'
import registerTH from './register/th.json'

import loginEN from './login/en.json'
import registerEN from './register/en.json'

const th = {
    ...loginTH,
    ...registerTH
}

const en = {
    ...loginEN,
    ...registerEN
}

export default {
    en,
    th
}