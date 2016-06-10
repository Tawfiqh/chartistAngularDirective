# chartistAngularDirective


A directive to easily integrate chartist graphs into Angular 1.x applications.
Chartist is a open source graph framework and has to be added to your app as well.[The API and examples can be found here](http://gionkunz.github.io/chartist-js/)

## Install

Requires [Chartist.js](https://gionkunz.github.io/chartist-js/).

Add the file src/chartistAngularDirective.js where you store your project directives.

## HowTo
Insert the directive in your HTML file:

```html
<exg-chartist id='graph_id' class="ct-chart" data='data' options='{{options}}' type='{{chartType}}' tooltips='true'></exg-chartist>
```
- id: set manually
- class: set ct-chart to get the chartist CSS
- data: set inside controller via $scope.data
- options: set via $scope.options inside the controller
- type: set via $scope.chartType inside controller
- tooltips: Set a parameter, which one doesn't matter.

```js
 scope.data = {
     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     series: [
       [5, 2, 4, 2, 0]
     ]
 };
 scope.options ={
     high: 10,
     low: -10,
     axisX: {
         labelInterpolationFnc: function(value, index) {
             return index % 2 === 0 ? value : null;
         }
     }
 };

 scope.chartType = "Bar";
```
