angular.module('taskControllers[]',[])
.controller('mainController',['$scope','$http','tasks',function(scope,http,tasks){
	$scope.formData:{}
	$scope.loading:true;

tasks.get()
			.success(function(data) {
				$scope.tasks = data;
				$scope.loading = false;
			});
			$scope.createTasks = function() {
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				Tasks.create($scope.formData)
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; 
						$scope.Jobs = data; 
					});
			}
		};
		$scope.deleteJob = function(id) {
			$scope.loading = true;

			Jobs.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.Jobs = data;
				});
		};
	}]);