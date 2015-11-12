'use strict';

describe('Controller: AnunciateCtrl', function () {

  // load the controller's module
  beforeEach(module('343LandingPageApp'));

  var AnunciateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnunciateCtrl = $controller('AnunciateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
