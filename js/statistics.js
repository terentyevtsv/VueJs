var CUSTOMERS_COLUMNS_COUNT = 3;
var COLUMNS_OFFSET = 2;

var start = COLUMNS_OFFSET;


var Statistics = {
  props: ['stages', 'customers'],
  template: '#grid-template',
  methods: {
    customerStyleObject: function () {
      var styleObject = {
        'grid-column-start': start,
        'grid-column-end': start + CUSTOMERS_COLUMNS_COUNT
      };

      start += CUSTOMERS_COLUMNS_COUNT;
      
      return styleObject;
    }    
  }
};