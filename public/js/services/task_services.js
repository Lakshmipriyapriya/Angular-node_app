angular.module('tasksService', [])
	.factory('tasks', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/tasks');
			},
			create : function(todoData) {
				return $http.post('/api/tasks', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/tasks/' + id);
			}
		}
	}]);