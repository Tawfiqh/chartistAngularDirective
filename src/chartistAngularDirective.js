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
                    id: '@',
                    tooltips: '@'
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

                    // function to bindToolTips to each value
                    var bindToolTip = function (scope) {
                        var $toolTip = element
                          .append($compile('<div class="tooltip"></div>')(scope))
                          .find('.tooltip')
                          .hide();

                        element.on('mouseenter', '.ct-point', function () {
                            var $point = $(this);
                            var value = $point.attr('ct:value');
                            $toolTip.html(value).show();
                        });

                        element.on('mouseleave', '.ct-point', function () {
                            $toolTip.hide();
                        });

                        element.on('mousemove', function (event) {
                            $toolTip.css({
                                left: (event.pageX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
                                top: (event.pageY || event.originalEvent.layerY) - $toolTip.height() - 40
                            });
                        });

                    };

                    // if parameter in html is set, bind tool tips
                    if (scope.tooltips) bindToolTip(scope);
                }}}]
    )
})();
