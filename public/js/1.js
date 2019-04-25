var app = angular.module("myShopping",['ui.router']);
        app.controller("myCtrl",function($scope){
            $scope.products = ["milk","bread","tea"];
            $scope.addItem = function(){
                $scope.errortext="";
                if(!$scope.addMe){return;}
                if($scope.products.indexOf($scope.addMe) == -1){
                    $scope.products.push($scope.addMe);
                } else{
                    $scope.errortext = "This item is already in shopping cart"
                }
            }
            $scope.removeItem = function(x){
                $scope.errortext="";
                $scope.products.splice(x,1);
            }
        });

     
        app.controller("myCtrl1",function($scope,$http){

            $scope.click=function(){
                $http({
                method : "POST",
                url : "/add",
                data:{name:$scope.name}
            }).then(function mySuccess(response){
                $scope.name = response.result.name
            },function myError(response){
                $scope.name = response.result.statusText
            })
                
            }
        });

        app.config(function($stateProvider) {
            var softwareState = {
              name: 'Software',
              url: '/Software',
              templateUrl: 'static/html/software.html'
            }
            
            var hardwareState = {
              name: 'Hardware',
              url: '/Hardware',
              templateUrl: 'static/html/hardware.html'
            }
            
            $stateProvider.state(softwareState);
            $stateProvider.state(hardwareState);
          });

        