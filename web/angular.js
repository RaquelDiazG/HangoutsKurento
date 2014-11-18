/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app=angular.module("app",[]);

app.controller("controllerHangouts",function($scope){
    var ID = 0;
    $scope.idParticipant="";
    $scope.name="";
    $scope.room="";
    $scope.participants=[];
    
//    $scope.participantes=[
//    {
//      idParticipante:0,
//      nombre:"Participante 0",
//      imagen: "http://placehold.it/350x150"
//    },
//    {
//      idParticipante:1,
//      nombre:"Participante 1",
//      imagen: "http://placehold.it/250x180"
//    }
//    {
//      idParticipante:2,
//      nombre:"Participante 2",
//      imagen: "http://placehold.it/350x150"
//    },
//    {
//      idParticipante:3,
//      nombre:"Participante 3",
//      imagen: "http://placehold.it/250x180"
//    },
//  ];
  
  $scope.optionsBar=false;
  $scope.ShowHide=function(){
      if($scope.optionsBar===false){
       $scope.optionsBar=true;   
      }
      else{
           $scope.optionsBar=false;   
      }
      console.log("ShowHide = "+$scope.optionsBar);
  };

  
  $scope.InsertParticipant=function(){
      var name= document.getElementById('name').value;
      var room = document.getElementById('room').value;
      $scope.participants.push(this.idParticipant=ID,this.name=name,this.room=room);
      console.log("Participante insertado: " + this.idParticipant + this.name + this.room);
      ID=ID+1;
      
  }
});