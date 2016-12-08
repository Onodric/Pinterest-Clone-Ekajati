"use strict";

app.controller("BoardPinsCtrl", function($scope, $routeParams, pinStorage, SearchTermData, authFactory, boardFactory){
  //add in filter and auth factories
  let user = authFactory.getUser();

  $scope.searchText = SearchTermData;
  $scope.selectedBoard = "Untitled Board";

  boardFactory.getBoard($routeParams.boardId)
  .then((boardObj)=>{
    $scope.selectedBoard = boardObj.title;
  });

  pinStorage.getBoardPins($routeParams.boardId)
  .then((pinArray)=>{
    $scope.pins = pinArray;
//no $scope.$apply needed because $q function retrieved data
  });
});