'use strict';

angular.module('rere', []);
'use strict';

angular.module('rere').component('rerenderOnChange', {
  bindings: {
    value: '<'
  },
  transclude: true,
  controller: ['$transclude', '$element', function ($transclude, $element) {
    var _this = this;

    this.$onDestroy = function () {
      $element.empty();

      if (_this.transclusionScope) {
        _this.transclusionScope.$destroy();
      }
    };

    this.$onChanges = function (changes) {
      if (changes.value && !changes.value.isFirstChange()) {
        $element.empty();
        _this.transclusionScope.$destroy();
      }

      if (changes.value) {
        $transclude(function (clone, scope) {
          $element.append(clone);
          _this.transclusionScope = scope;
        });
      }
    };
  }]
});
//# sourceMappingURL=angular-rere.js.map