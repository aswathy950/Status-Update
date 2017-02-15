  angular.module('dialyStatus', [])
  
  .controller('StatusController', ['$scope', function($scope) {
    $scope.greetings='hola';
  $scope.statusReport= [{
         date1 : '2015/09/17',
         project : 'smashing magazine',
         activity : 'Training',
         timeh : '8h',
         timem : '30min',
         details:'completed the assignment smashing magazine'

     }];
  $scope.projects = [
         'N/A',
         'project1',
         'project2',
         'project3',
         'project4',
         'project5'
     ];
  $scope.activities =[
         'coding',
         'Training',
         'Activity2',
         'Activity3',
         'Activity4',
         'Activity5'
  ]
  $scope.submit = function submit() {
    if (!$scope.textarea|| !$scope.project || !$scope.activity || !$('#date').val()) {
      window.alert("all fields must be filled")
      return;
    }


    $scope.statusReport.push({date1:$('#date').val(),
                                 project : $scope.project,
                                 activity : $scope.activity,
                                 timeh : $scope.timeh+'h',
                                 timem : $scope.timem+'min.',
                                 details: $scope.textarea,

                             });

                    $scope.project='project5';
                    $scope.activity='coding';
                    $scope.timeh='1';
                    $scope.timem='0';
                    $scope.textarea='' ;
    };

}]);
