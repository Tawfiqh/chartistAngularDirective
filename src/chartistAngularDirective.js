(function () {
    "use strict";

    angular.module('App')
        .directive('exgChartist', ['$compile',
        function ($compile) {
            return {
                scope: {
                    data: '=',
                    options: '=',
                    responsiveOptions: '@',
                    type: '@',
                    id: '@'
                },
                restrict: 'E',
                link: function (scope, element, attrs) {

                    var graph = Chartist[scope.type]('#' + scope.id, scope.data, scope.options, scope.responsiveOptions);

                    // set watcher for future data updates
                    scope.$watch('data', function (newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        graph.update(scope.data, true);
                    }, true);

                    // set watcher for future options update
                    scope.$watch('options', function (newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        graph.update(scope.options, true);
                    }, true);
                }}}]
    )
})();
