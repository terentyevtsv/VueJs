// register modal component
Vue.component('modal', {
  template: '#modal-template'
});

// start app
var modal = new Vue({
  el: '#app',
  data: {
    showModal: false
  }
});