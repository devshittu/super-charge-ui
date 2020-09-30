
import Vue from 'vue'
import vueDebounce from 'vue-debounce'


const Utils = {
    init() {

        const options = {
            lock: true,
            listenTo: ['input', 'keyup'],
            defaultTime: '700ms',
        } // customize the way you want to call it

        Vue.use(vueDebounce)

    },

    // ma_debounce: callback =>  _.debounce(() => callback(), MA_DEBOUNCE_WAIT_IN_MS)
};

export default Utils
