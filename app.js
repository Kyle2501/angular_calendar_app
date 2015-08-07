var app = angular.module('myApp',[]);

app.controller('cal_ctrl', function($scope){
	var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();

    $scope.date = {
      year : year,
      month : month
    };

    $scope.months = ('January,February,March,April,May,June,July,August,September,October,November,December').split(',');


    $scope.years = [];
    var start_year = year - 20;
    var end_year = year + 20;
    for(var i=start_year;i<end_year;i++) {
      $scope.years.push(i);
    }

    //check if the date is in the current month
    $scope.isCurrentMonth = function(cal_month){
    	return $scope.date.month == cal_month;
    };

    //get date range for currenty date
    $scope.date_range = CalendarRange.getMonthlyRange(today);
    //console.log($scope.date_range);

    $scope.$watchCollection('date', function(date) {
      $scope.currentDate = new Date(date.year, date.month, 1);
      //get date range for a new input date
      $scope.date_range = CalendarRange.getMonthlyRange($scope.currentDate);
      //console.log($scope.date_range);
    });
});

app.directive('myCalendar', function(){
	return{
        restrict: 'E',
        templateUrl: 'calendar.html'
	}
});

