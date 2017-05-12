jobPortalApp.controller('controllerViewJobs', function($scope, $state, $stateParams, $http, $log) {


    $scope.nojobsfound = false;



    //get all jobs
    $http({
        method: 'GET',
        url: '/jobposting/open'
    }).success(function(data){

        console.log("in get open job posting");
        console.log(data);

        if(data != null && data.length > 0) {
            $scope.jobs = data;
        }

    }).error(function(error){
        console.log("Error in getting all jobs");
        console.log(error);
    });





    $scope.searchJobs = function(){

    }


    $scope.toViewJob = function(requisitionId){
        $state.go("home.viewJob", {jobAndProfile: {profileDet: $state.params.profileDet, requisitionId: requisitionId}} );
    }


})