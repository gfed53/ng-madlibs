angular.module('myApp', ['ngMessages'])
.controller('myCtrl', function($scope){
	$scope.being = "";
	$scope.name = "";
	$scope.gender = {
		name: ''
	};
	$scope.adjective = "";
	$scope.verb = "";
	$scope.actionVerb = "";
	$scope.event = "";
	$scope.noun = "";
	$scope.adverb = "";
	$scope.adjective2 = "";
	$scope.pluralSnackFood = "";
	$scope.celebrity = "";
	$scope.number = "";
	$scope.adjective3 = "";
	$scope.mood = "";
	$scope.submitted = false;
	$scope.submit = function(){
		if($scope.myForm.$valid){
			console.log("Should be good");
			$scope.submitted = true;
		} else {
			console.log("There's an error");
		}
	};
	$scope.startOver = function(){
		$scope.being = $scope.name = $scope.gender.name = $scope.adjective = $scope.adjective = $scope.verb = $scope.actionVerb = $scope.event = $scope.noun = $scope.adverb = $scope.adjective2 = $scope.pluralSnackFood = $scope.celebrity = $scope.number = $scope.adjective3 = $scope.mood = "";
		$scope.submitted = false;
		console.log("Starting over");
	};
});