/*
    radialIndicator.js v 1.0.0
    Author: Sudhanshu Yadav
    Copyright (c) 2015 Sudhanshu Yadav - ignitersworld.com , released under the MIT license.
    Demo on: ignitersworld.com/lab/radialIndicator.html
*/

/* Angular hook for radialIndicator */
;(function (angular) {
    angular.module('radialIndicator',[]).directive('radialIndicator', ['radialIndicatorConfig',

    function (radialIndicatorConfig) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var element = element,
                        id = attrs.radialIndicatorId,
                        options = scope.$eval(attrs.radialIndicator);

                    var indInstance = radialIndicator(element, options);

                    //store indicator instance on radialIndicatorConfig so can get through dependency injection
                    if (id) radialIndicatorConfig.indicators[id] = indInstance;

                    //delete the idnicator instance when scope dies
                    scope.$on('$destroy', function () {
                        if (id) delete radialIndicatorConfig.indicators[id];
                    });

                }
            }
    }])
    //a factory to store radial indicators and defaults which can be injected to controllers or directive to get the instance or default values
    .factory('radialIndicatorConfig', function () {
        if (!window.radialIndicator) throw "Please include radialIndicator.js";
        
        var indConfig = {};
        indConfig.defaults = radialIndicator.defaults;
        indConfig.indicators = {};
        
        return indConfig;
        
    });
}(window.angular));