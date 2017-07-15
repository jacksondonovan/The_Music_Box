angular.module('app',[])
  .component('song',{
    controller: function(){
      const vm = this
      vm.title = 'TITLE ANGULARJS'
      vm.prog = playChord()
      vm.g = g
      vm.c = c
      vm.d = d
      vm.melody = [60,60,60,60,60,60,60,60,0,0,0,0]
      vm.melody2 = [72,72,72,72,0,0,0,0,72,72,72,72]
      vm.mel = [55,55,55,55,55,55,55,55,0,0,60,60,0,0,0,0,0,0,0,0,0,0]
      vm.mel2 = [67,67,67,67,0,0,0,0,67,67,67,67,0,0,0,0,72,72,72,72,0,0,0,0,72,72,72,72,0,0]
      vm.noteLength = 1/4
      vm.attack = 1/64
      vm.oscillator
      vm.gain
      vm.context = new AudioContext()
      window.context = vm.context
      vm.mtof = function(note){
        return ( Math.pow(2, ( note-69 ) / 12) ) * 440.0;
      }
      vm.scheduleNote = function (note, time) {
        vm.oscillator = vm.context.createOscillator();
        // create an envelope using gain
        vm.gain       = vm.context.createGain();
        vm.oscillator.frequency.value = vm.mtof(note);
        // connect the oscillator to the gain and the gain to the output
        vm.oscillator.connect(vm.gain);
        vm.gain.connect(vm.context.destination);
        // let's make an envelope with almost no attack and a sharp decay...
        // starting value of 0:
        vm.gain.gain.setValueAtTime(0, time);
        // very quick attack to a value of 1:
        vm.gain.gain.linearRampToValueAtTime(1, time + vm.attack);
        // immediate decay to a value of 0:
        vm.gain.gain.linearRampToValueAtTime(0, time + vm.noteLength);
        // schedule the oscillator to start at `time` and end
        // at `time + noteLength`
        vm.oscillator.start(time);
        vm.oscillator.stop(time + vm.noteLength);
      }
      vm.playTri = function(){
        for(var i = 0; i < 36; i++){

          vm.scheduleNote(vm.prog.one[0][i], vm.context.currentTime + (1/2 * i) );
          vm.scheduleNote(vm.prog.one[1][i], vm.context.currentTime + (1/2 * i) );
          vm.scheduleNote(vm.prog.one[2][i], vm.context.currentTime + (1/2 * i) );

          // vm.scheduleNote(g[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(g2[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(g3[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(c[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(c2[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(c3[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(d[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(d2[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(d3[i], vm.context.currentTime + (1/2 * i));




          // vm.scheduleNote(vm.mel[i], vm.context.currentTime + (1/2 * i));
          // vm.scheduleNote(vm.mel2[i], vm.context.currentTime + (1/4 * i));
        }
      }
    },
    templateUrl: '/templates/test.hbs'
  })

function playChord(){
  const rando = Math.floor(Math.random()*3)
  const allprogs = [prog145gMajor , prog145cMajor , prog145eMajor]
  console.log(allprogs[0].one[0]);
  return allprogs[rando]
}
class Key {
  constructor(name,triBase,triMid,triTop,eighth) {
    this.name = name
    this.triBase = triBase
    this.triMid = triMid
    this.triTop = triTop
    this.eighth = eighth
  }
}

var g = [55,55,55,55,20,20,20,20,55,55,55,55,20,20,20,20,20,20,20,20,55,55,55,55,67]
var g2 = [59,59,59,59,20,20,20,20,59,59,59,59,20,20,20,20,20,20,20,20,59,59,59,59,67]
var g3 = [62,62,62,62,20,20,20,20,62,62,62,62,20,20,20,20,20,20,20,20,62,62,62,62,67]

var c = [20,20,20,20,60,60,60,60,20,20,20,20,60,60,60,60,20,20,60,60,20,20,20,20,20]
var c2 = [20,20,20,20,64,64,64,64,20,20,20,20,64,64,64,64,20,20,64,64,20,20,20,20,20]
var c3 = [20,20,20,20,67,67,67,67,20,20,20,20,67,67,67,67,20,20,67,67,20,20,20,20,20]

var d = [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,62,62,20,20,20,20,20,20,20]
var d2 = [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,66,66,20,20,20,20,20,20,20]
var d3 = [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,69,69,20,20,20,20,20,20,20]

var cMajor = new Key('cMajor',[60],[64],[67],[72])
var dMajor = new Key('dMajor',[62],[66],[69],[74])
var eMajor = new Key('eMajor',[64],[68],[71],[76])
var fMajor = new Key('fMajor',[65],[69],[72],[77])
var gMajor = new Key('gMajor',[67],[71],[74],[79])
var aMajor = new Key('aMajor',[68],[73],[76],[80])
var bMajor = new Key('bMajor',[71],[75],[78],[83])

class Progression {
  constructor(name,chordOne,chordTwo,chordThree,perFour) {
    this.name = name
    this.chordOne = chordOne
    this.chordTwo = chordTwo
    this.chordThree = chordThree
    this.perFour = perFour
    this.one = [[this.chordOne.triBase[0]],[this.chordOne.triMid[0]],[this.chordOne.triTop[0]]]
    this.four = [[this.chordTwo.triBase[0]],[this.chordTwo.triMid[0]],[this.chordTwo.triTop[0]]]
    this.five = [[this.chordThree.triBase[0]],[this.chordThree.triMid[0]],[this.chordThree.triTop[0]]]
    for(var i = 0; i < perFour; i++){
      var temp = this.chordOne.triBase[0]
      var temp2 = this.chordOne.triMid[0]
      var temp3 = this.chordOne.triTop[0]
      this.one[0].push(temp)
      this.one[1].push(temp2)
      this.one[2].push(temp3)
      var temp4 = this.chordTwo.triBase[0]
      var temp5 = this.chordTwo.triMid[0]
      var temp6 = this.chordTwo.triTop[0]
      this.four[0].push(temp4)
      this.four[1].push(temp5)
      this.four[2].push(temp6)
      var temp7 = this.chordThree.triBase[0]
      var temp8 = this.chordThree.triMid[0]
      var temp9 = this.chordThree.triTop[0]
      this.five[0].push(temp7)
      this.five[1].push(temp8)
      this.five[2].push(temp9)
    }
  }
}



var prog145gMajor = new Progression('gMajorI-IV-V',gMajor,cMajor,dMajor,11)
var prog145cMajor = new Progression('cMajorI-IV-V',cMajor,fMajor,gMajor,11)
var prog145eMajor = new Progression('eMajorI-IV-V',eMajor,aMajor,bMajor,11)
console.log(prog145gMajor.one[0]);

var adele = [57,61,64,61,57,61,64,61,57,61,64,61,57,61,64,61,56,61,64,61,56,61,64,61,56,61,64,61,56,61,64,61,54,61,66,61,54,61,66,61,54,61,66,61,54,61,66]
console.log(adele.length)

var baseadele = [57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,57,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54]
