var myApp = angular.module('myApp', ['youtube-embed']);

myApp.controller('MyCtrl', function($scope) {
  // Your video ID from https://youtu.be/s8rI4D_Kuqw
  $scope.videoId = 's8rI4D_Kuqw';

  // Optional: Loop the video when it ends
  $scope.$on('youtube.player.ended', function() {
    $scope.player.playVideo();
  });
});   
