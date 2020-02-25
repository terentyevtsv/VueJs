'use strict';

(function () {
  var CUSTOMERS_COLUMNS_COUNT = 3;
  var HEAD_HEIGHT_OFFSET = 3;
  var COLUMNS_OFFSET = 2;

  window.Statistics = {
    props: ['stages', 'customers'],
    template: '#grid-template',
    computed: {
      statisticsGridStyleObject: function () {
        return {
          'grid-template-columns': '1fr repeat(' + this.customers.length + ', 100px 120px 120px)',
          'grid-template-rows': 'repeat(' + (this.stages.length + 2) + ', 1fr)'
        };
      }
    },
    methods: {    
      customerStyleObject: function (index) {
        var start = index * CUSTOMERS_COLUMNS_COUNT + COLUMNS_OFFSET;
        var styleObject = {
          'grid-column-start': start,
          'grid-column-end': start + CUSTOMERS_COLUMNS_COUNT
        };

        start += CUSTOMERS_COLUMNS_COUNT;
        
        return styleObject;
      },      
      stageValueStyleObject: function (stageIndex, customerIndex, indexOffset) {
        var styleObject = {
          'grid-row-start': stageIndex + HEAD_HEIGHT_OFFSET,
          'grid-column-start': customerIndex * CUSTOMERS_COLUMNS_COUNT + COLUMNS_OFFSET + indexOffset
        };

        return styleObject;
      }      
    }
  };
})();