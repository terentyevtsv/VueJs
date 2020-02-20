var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Привет, Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue.js!'
  },
  computed: {
    // геттер вычисляемого значения
    reversedMessage: function () {
      // `this` указывает на экземпляр vm
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    // геттер вычисляемого значения
    reversedMessage1: function () {
      // `this` указывает на экземпляр vm
      return this.message.split('').reverse().join('')
    }
  },
  updated: function () {
    // `this` указывает на экземпляр vm
    console.log('Значение message: ' + this.message)
  }  
});

app6.$watch('message', function (newValue, oldValue) {

});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
});

var obj = {
  foo: 'bar'
};

Object.freeze(obj)

var app = new Vue({
  el: '#app',
  data: obj
});