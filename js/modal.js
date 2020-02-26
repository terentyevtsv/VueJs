'use strict';

(function () {
  var CUSTOMERS = [
    'АО «САМАРАНЕФТЕГАЗ»',
    'АО «ОРЕНБУРГНЕФТЬ»',
    'ООО «ТААС-ЮРЯХ НЕФТЕГАЗОДОБЫЧА»',
    'ОАО «НК «РОСНЕФТЬ»',
    'АО «САМАРАНЕФТЕГАЗ»',
    'АО «ОРЕНБУРГНЕФТЬ»',
    'ООО «ТААС-ЮРЯХ НЕФТЕГАЗОДОБЫЧА»',
    'ОАО «НК «РОСНЕФТЬ»'
  ];
  
  var STAGES = [
    'ПП',
    'Договор',
    'КП',
    'ИСИ',
    'ИЭИ',
    'ИКИ',
    'ЗУР',
    'ОПР',
    'П',
    'ГГЭ',
    'ВЭ',
    'РД',
    'АН'
  ];
  
  // register modal component
  Vue.component('modal', {
    template: '#modal-template'
  });
  
  var getCustomers = function() {
    var customers = [];
    for (var i = 0; i < CUSTOMERS.length; ++i) {
      customers[i] = {
        name: CUSTOMERS[i],
        stages: []
      }
  
      for (var j = 0; j < STAGES.length; ++j) {
        customers[i].stages[j] = {
          failureCount: window.utils.getRandomInteger(0, 5),
          dangerCount: window.utils.getRandomInteger(6, 10),
          stageCount: window.utils.getRandomInteger(30, 200),
        };
      }
    }
  
    return customers;
  };
  
  // start app
  var modal = new Vue({
    el: '#app',
    components: {
      'statistics': window.Statistics    
    },
    data: function () {
      return {
        showModal: false,
        customers: getCustomers(),
        stages: STAGES   
      }
    }  
  });
})();