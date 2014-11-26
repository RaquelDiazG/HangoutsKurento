/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app=angular.module("app",[]);


app.service('sharedProperties', function () {
        var participants=[{idParticipant:0, name:"Participante 0", room: "3"},{idParticipant:1, name:"Participante 1", room: "3"},{idParticipant:2, name:"Participante 2", room: "3"}];
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
      console.log("PARTICIPANTES despues de insertar:" + sharedProperties.getParticipants().toString());
      console.log("Participante insertado: " + this.idParticipant + this.name + this.room);
      ID=ID+1;
      $window.location.href = 'call2.html';
  };
  });
  
app.controller("controller2",function($scope,$window,sharedProperties){
    console.log("CONTROLADOR 2 INICIADO");
    console.log("PARTICIPANTES:" + sharedProperties.getParticipants().toString());
    
    $scope.lista=[{idParticipant:0, name:"Participante 0", room: "3", video:"http://www.youtube.com/v/QoQ1Xoo_rwk"},
                  {idParticipant:1, name:"Participante 1", room: "3", video:"https://www.youtube.com/v/2c-n8xw1M_A&list=UUFtGhWYqahVlzMgGNtEmKug"},
                  {idParticipant:2, name:"Participante 2", room: "3", video:"https://www.youtube.com/v/yJAQs23eoXw&list=UUFtGhWYqahVlzMgGNtEmKug"}];
//    console.log("LISTA:" + $scope.lista.getParticipants().toString());
  
    $scope.DeleteParticipant=function(){
      
        console.log("PARTICIPANTES antes:" + sharedProperties.getParticipants().toString());
        
        
      var index= 0;
//      $scope.participants.pop(index);
      sharedProperties.getParticipants().pop(index);
      console.log("PARTICIPANTES despues de eliminar:" + sharedProperties.getParticipants().toString());
      
      $window.location.href = 'index.html';
  };
  
  
});

