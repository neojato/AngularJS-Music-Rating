angular.module("myApp.controllers", [])
	.controller("songCtrl", function($scope, songService) {
  		$scope.songs = songService.get();
  		$scope.newSong = {};
  		
  		$scope.addSong = function(/** String */ artist, /** String */ title) {
        $scope.songs.push({
          artist: artist,
          title: title,
          score: 0
        });
        $scope.newSong.title = "";
        $scope.newSong.artist = "";
      };
  		
  		$scope.isEmpty = function(/** String */ str) {
        return _.isBlank(str);
      };
  		
  		$scope.$watch('songs', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          songService.put($scope.songs);
        }
      });
  		
  		$scope.deleteSong = function(/** Song */ song) {
        var idx = $scope.songs.indexOf(song);
        if (idx >= 0) {
          $scope.songs.splice(idx, 1);
        }
      };
	});