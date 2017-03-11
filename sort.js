/// <reference path="angular.min.js" />
var myApp = angular
                   .module("myModule", [])
                   .controller("myController", function ($scope) {

                       var employees = [
                           { FirstName: "Gowri", dateOfBirth: new Date("August 05, 1993"), Gender: "Male", Salary: 35000.998, country: "USA"},
                           { FirstName: "Ranjith", dateOfBirth: new Date("September 13, 1994"), Gender: "Male", Salary: 25000.198, country: "India"  },

                       { FirstName: "lakshmi", dateOfBirth: new Date("January 05, 1992"), Gender: "Female", Salary: 45000.118, country:"china" },
                       { FirstName: "ambika", dateOfBirth: new Date("March 01, 1994"), Gender: "Female", Salary: 65000.008, country:"NewZealand" },
                       { FirstName: "parvathi", dateOfBirth: new Date("May 01, 1990"), Gender: "Female", Salary: 25000.008,country:"USA" },
{ FirstName: "Mahesh", dateOfBirth: new Date("June 10, 1987"), Gender: "Male", Salary: 75000.008, country:"Dubai" },
{ FirstName: "Suresh", dateOfBirth: new Date("July 18, 1985"), Gender: "Male", Salary: 15000.008, country:"Austarlia" }
                       ];

                       $scope.employees = employees;
                       $scope.sortColumn = "FirstName";
                       $scope.rowLimit = 3;
                       $scope.reverseSort = false;

                       $scope.sortData = function (column) {
                           $scope.reverseSort = ($scope.sortColumn = column) ? !$scope.reverseSort : false;
                           $scope.sortColumn = column;
                       }
                       $scope.getSortClass = function (column) {
                           if ($scope.sortColumn = column) {
                               return $scope.reverseSort ? 'arrow-down':'arrow-up'
                           }
                           return '';
                       }

                   });
