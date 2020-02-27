'use strict';

(function () {
  var CUSTOMERS_COLUMNS_COUNT = 3;
  var HEAD_HEIGHT_OFFSET = 3;
  var COLUMNS_OFFSET = 2;
  
  window.Statistics = {
    props: ['stages', 'customers'],
    template: '#grid-template',    
    self: undefined,
    mounted: function () {
      self = this;
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

      $("#plan-years-id").kendoDropDownList({
        dataSource: [
          { value: 2019, text: '2019' },
          { value: 2020, text: '2020' },
          { value: 2021, text: '2021' }
        ],
        dataTextField: "text",
        dataValueField: "value"        
      });

      $("#developers-id").kendoDropDownList({
        dataSource: [
          { id: 1, name: "СамараНИПИнефть" },
          { id: 2, name: "УфаНИПИнефть" },
          { id: 3, name: "ТомскНИПИнефть" }
        ],        
        cascade: function () {
          self.$emit('set-developer', this.text());
        },
        dataTextField: "name",
        dataValueField: "id"        
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