angular.module('rere')
  .component('rerenderOnChange', {
    bindings: {
      value: '<'
    },
    transclude: true,
    controller: ['$transclude', '$element', function ($transclude, $element) {
      this.$onDestroy = () => {
        $element.empty();

        if (this.transclusionScope) {
          this.transclusionScope.$destroy();
        }
      };

      this.$onChanges = (changes) => {
        if (changes.value && !changes.value.isFirstChange()) {
          $element.empty();
          this.transclusionScope.$destroy();
        }

        if (changes.value) {
          $transclude((clone, scope) => {
            $element.append(clone);
            this.transclusionScope = scope;
          });
        }
      };
    }]
  });
