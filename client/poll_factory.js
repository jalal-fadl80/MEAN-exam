myApp.factory('pollFactory', function($http) {
	var factory = {};
	var polls = [];
	factory.getPolls = function (callback){
		$http.get('/poll').success(function(output) {
			polls = output;
			callback(polls);
		})
	}
	factory.getOnePoll = function (id, callback){
		$http.get('/poll/' + id).success(function(output){
			callback(output);
		})
	}
	factory.addPoll = function(info, id, callback) {

		$http.post('/poll/' + id , info).success(function(data){
			callback(data);
		})
	};
	factory.addVote = function(option, id, callback) {
	
		var option = {"option": option};
		$http.put('/poll/update/' + id ,option).success(function(data){
			callback(data);
		})
	};
	factory.removePoll = function(info, callback) {
		$http.delete('/poll/' +info).success(function(output){
			callback(output);
		})
	}
	return factory;
})