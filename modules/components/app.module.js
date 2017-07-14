angular.moodule('app',[])
  .component('prof',{
    controller: function(){
      const vm = this
      vm.title = 'TITLE ANGULARJS'
    },
    templateUrl: '../templates/test'
  })
