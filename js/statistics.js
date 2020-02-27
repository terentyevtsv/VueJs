'use strict';

(function () {
  var CUSTOMERS_COLUMNS_COUNT = 3;
  var HEAD_HEIGHT_OFFSET = 3;
  var COLUMNS_OFFSET = 2;

  window.Statistics = {
    props: ['stages', 'customers'],
    template: '#grid-template',
    mounted: function () {
      $("#customers-id").kendoMultiSelect({
        dataSource: [
          { id: 1, name: "Заказчик 1" },
          { id: 2, name: "Заказчик 2" },
          { id: 3, name: "Заказчик 3" }
        ],
        dataTextField: "name",
        dataValueField: "id",
        tagTemplate: kendo.template($("#tagTemplate").html()),
        tagMode: "single"
      });
    },    
    computed: {
      statisticsGridStyleObject: function () {
        return {
          'grid-template-columns': 
            'auto repeat(' +
            this.customers.length +
            ', minmax(100px, 1fr) minmax(120px, 1fr) minmax(120px, 1fr))',
          'grid-template-rows': 'repeat(' + (this.stages.length + 2) + ', auto)'
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