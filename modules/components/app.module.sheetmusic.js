angular.module('sheetmusictable',[])
  .component('sheetTable',{
    controller: function(){
      const vm = this
      vm.cMajorIIVV = {
        first: {
          base: 'C',
          mid: 'E',
          top: 'G'
        },
        second: {
          base: 'F',
          mid: 'A',
          top: 'C'
        },
        third: {
          base: 'G',
          mid: 'B',
          top: 'D'
        }
      }
      vm.gMajorIIVV = {
        first: {
          base: 'G',
          mid: 'B',
          top: 'D'
        },
        second: {
          base: 'C',
          mid: 'E',
          top: 'G'
        },
        third: {
          base: 'D',
          mid: 'F#',
          top: 'A'
        }
      }
      vm.eMajorIIVV = {
        first: {
          base: 'E',
          mid: 'Ab',
          top: 'B'
        },
        second: {
          base: 'A',
          mid: 'C#',
          top: 'E'
        },
        third: {
          base: 'B',
          mid: 'D#',
          top: 'F#'
        }
      }
      vm.rando = Math.floor(Math.random()*3)
      vm.progList = [vm.cMajorIIVV,vm.gMajorIIVV,vm.eMajorIIVV]
      vm.chosenProg = vm.progList[vm.rando]
      vm.cMajor = {
        triBase: 'C',
        triMid: 'E',
        triTop: 'G'
      }
      vm.dMajor = ['D','F#','A']
      vm.gMajor = ['G','B','D']
    },
    templateUrl: '/templates/sheetmusic.hbs'
  })




















// function playChord(){
//     const rando = Math.floor(Math.random()*3)
//     const allprogs = [prog145gMajor , prog145cMajor , prog145eMajor]
//     console.log(allprogs[0].one[0]);
//     return allprogs[rando]
// }
// class Key {
//   constructor(name,triBase,triMid,triTop,eighth) {
//     this.name = name
//     this.triBase = triBase
//     this.triMid = triMid
//     this.triTop = triTop
//     this.eighth = eighth
//   }
// }
//
// var cMajor = new Key('cMajor',[60],[64],[67],[72])
// var dMajor = new Key('dMajor',[62],[66],[69],[74])
// var eMajor = new Key('eMajor',[64],[68],[71],[76])
// var fMajor = new Key('fMajor',[65],[69],[72],[77])
// var gMajor = new Key('gMajor',[67],[71],[74],[79])
// var aMajor = new Key('aMajor',[68],[73],[76],[80])
// var bMajor = new Key('bMajor',[71],[75],[78],[83])
//
// class Progression {
//   constructor(name,chordOne,chordTwo,chordThree,perFour) {
//     this.name = name
//     this.chordOne = chordOne
//     this.chordTwo = chordTwo
//     this.chordThree = chordThree
//     this.perFour = perFour
//     this.one = [[this.chordOne.triBase[0]],[this.chordOne.triMid[0]],[this.chordOne.triTop[0]]]
//     this.four = [[this.chordTwo.triBase[0]],[this.chordTwo.triMid[0]],[this.chordTwo.triTop[0]]]
//     this.five = [[this.chordThree.triBase[0]],[this.chordThree.triMid[0]],[this.chordThree.triTop[0]]]
//     for(var i = 0; i < perFour; i++){
//       var temp = this.chordOne.triBase[0]
//       var temp2 = this.chordOne.triMid[0]
//       var temp3 = this.chordOne.triTop[0]
//       this.one[0].push(temp)
//       this.one[1].push(temp2)
//       this.one[2].push(temp3)
//       var temp4 = this.chordTwo.triBase[0]
//       var temp5 = this.chordTwo.triMid[0]
//       var temp6 = this.chordTwo.triTop[0]
//       this.four[0].push(temp4)
//       this.four[1].push(temp5)
//       this.four[2].push(temp6)
//       var temp7 = this.chordThree.triBase[0]
//       var temp8 = this.chordThree.triMid[0]
//       var temp9 = this.chordThree.triTop[0]
//       this.five[0].push(temp7)
//       this.five[1].push(temp8)
//       this.five[2].push(temp9)
//     }
//   }
// }
//
//
//
// var prog145gMajor = new Progression('gMajorI-IV-V',gMajor,cMajor,dMajor,11)
// var prog145cMajor = new Progression('cMajorI-IV-V',cMajor,fMajor,gMajor,11)
// var prog145eMajor = new Progression('eMajorI-IV-V',eMajor,aMajor,bMajor,11)
