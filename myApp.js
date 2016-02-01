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
	$scope.validUponSub = false;
	$scope.submit = function(){
		if($scope.myForm.$valid){
			console.log("Should be good");
			$scope.validUponSub = true;
		} else {
			console.log("There's an error");
		}
	};
	$scope.startOver = function(){
		//Is this a bad idea, and why?
		// $scope.being = $scope.name = $scope.gender.name = $scope.adjective = $scope.adjective = $scope.verb = $scope.actionVerb = $scope.event = $scope.noun = $scope.adverb = $scope.adjective2 = $scope.pluralSnackFood = $scope.celebrity = $scope.number = $scope.adjective3 = $scope.mood = "";
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
		$scope.validUponSub = false;
		console.log($scope.myForm.$submitted);
	};
});