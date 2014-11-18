/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app=angular.module("app",[]);

app.service('sharedProperties', function () {
        var participants=[];
        console.log("SERVICIO INICIADO");
        return {
            getParticipants: function () {
                return participants;
            },
            setParticipants: function(value) {
                participants = value;
            }
        };
    });

    
app.controller("controller1",function($scope,$window, sharedProperties){
    console.log("CONTROLADOR 1 INICIADO");
    var ID = 0;
    $scope.idParticipant="";
    $scope.name="";
    $scope.room="";
//    $scope.participants=[];
    
//    $scope.participantes=[
//    {
//      idParticipante:0,
//      nombre:"Participante 0",
//      imagen: "http://placehold.it/350x150"
//    }
//  ];
  
//  $scope.optionsBar=false;
//  $scope.ShowHide=function(){
//      if($scope.optionsBar===false){
//       $scope.optionsBar=true;   
//      }
//      else{
//           $scope.optionsBar=false;   
//      }
//      console.log("ShowHide = "+$scope.optionsBar);
//  };

  
  $scope.InsertParticipant=function(){
      var name= document.getElementById('name').value;
      var room = document.getElementById('room').value;
//      $scope.participants.push(this.idParticipant=ID,this.name=name,this.room=room);

console.log("PARTICIPANTES antes :" + sharedProperties.getParticipants().toString());
      var p= sharedProperties.getParticipants();
      p.push(this.idParticipant=ID,this.name=name,this.room=room);
//      console.log("P "+p);  
console.log("PARTICIPANTES despues de insertar:" + sharedProperties.getParticipants().toString());
//sharedProperties.setParticipants(p);
//console.log("PARTICIPANTES despues de setear:" + sharedProperties.getParticipants().toString());
      console.log("Participante insertado: " + this.idParticipant + this.name + this.room);
      ID=ID+1;
      $window.location.href = 'call.html';
  };
  });
  
app.controller("controller2",function($scope,$window,sharedProperties){
    console.log("CONTROLADOR 2 INICIADO");
  $scope.DeleteParticipant=function(){
      
        console.log("PARTICIPANTES antes:" + sharedProperties.getParticipants().toString());
        
        
      var index= 0;
//      $scope.participants.pop(index);
      sharedProperties.getParticipants().pop(index);
      console.log("PARTICIPANTES despues de eliminar:" + sharedProperties.getParticipants().toString());
      ID=ID+1;
//      $window.location.href = 'login.html';
  };
  
  
});

