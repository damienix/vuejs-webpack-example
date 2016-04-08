var Vue = require('vue')

new Vue({
  el: 'body',
  components: {
    'app': require("./components/TwoComponents.vue")
  },
})

require("./style.css")
