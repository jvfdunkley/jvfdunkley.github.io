//index.html boxes on click event
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', playSound);
});

//assign each beatbox an audio clip at runtime
const boxes = document.querySelectorAll('.beatbox');
boxes.forEach(box => {
    box.addEventListener('click', playSound);
    box.addEventListener('click', selectBeatBox);
    switch(box.id){
        case 'KickDrum':
            box.innerHTML += '<audio id="KickDrumAudio" src="sounds/KickDrum.wav"></audio>';
        break;
        case 'LowTom':
            box.innerHTML += '<audio id="LowTomAudio" src="sounds/LowTom.wav"></audio>';
        break;
        case 'MidTom':
            box.innerHTML += '<audio id="MidTomAudio" src="sounds/MidTom.wav"></audio>';
        break;
        case 'HighTom':
            box.innerHTML += '<audio id="HighTomAudio" src="sounds/HighTom.wav"></audio>';
        break;
        case 'SnareDrum':
            box.innerHTML += '<audio id="SnareDrumAudio" src="sounds/SnareDrum.wav"></audio>';
        break;
        case 'RideCymbal':
            box.innerHTML += '<audio id="RideCymbalAudio" src="sounds/RideCymbal.wav"></audio>';
        break;
        case 'CrashCymbal':
            box.innerHTML += '<audio id="CrashCymbalAudio" src="sounds/CrashCymbal.wav"></audio>';
        break;
        case 'HiHatCymbal':
            box.innerHTML += '<audio id="HiHatCymbalAudio" src="sounds/HiHatCymbal.wav"></audio>';
    }
});


/*
get each column that represents 1 beat number
identify all the boxes that have the class "boxSelected", meaning that it was clicked on and the user wants to play it
get all those boxes ids and play the audio clip
*/
function playBeat() {
    //deselect the beat number when you play again
    Array.from(document.getElementsByClassName('beatNumber')).forEach(border => {
        border.classList.remove('focus');
    });
    //disable the button
    document.getElementById('playBeatButton').disabled = true;
    //calculate tempo
    const tempo = 60000 / document.getElementById('bpm').value;


    const allCols = document.querySelectorAll('.col');
    let index = 1;
    //https://stackoverflow.com/questions/1776687/settimeout-inside-for-loop
    const interval = setInterval( () => {
        //show the numerical progression of the beats being played
        //remove previous number's border
        let beatNumberClassList = allCols[index-1].getElementsByTagName('h2')[0];
        if(index > 1 && beatNumberClassList.classList.contains('focus'))
        {
            beatNumberClassList.classList.remove('focus');
        }
        allCols[index].getElementsByTagName('h2')[0].classList.add('focus');
        //why can't I do forEach for getElementsByClassName ? Answer:
        //https://stackoverflow.com/questions/3871547/js-iterating-over-result-of-getelementsbyclassname-using-array-foreach
        Array.from(allCols[index].getElementsByClassName('boxSelected')).forEach((onBox) => {
            //play the audio simultaneously for a column that has selected boxes
            onBox.getElementsByTagName('audio')[0].play();
        });
         index++;

         if(index >= 17)
         {
            document.getElementById('playBeatButton').disabled = false;
            clearInterval(interval);
         }
    }, tempo);
}

  function playSound()
  {
      const name = this.id + 'Audio';
      //retrieving audio file
      document.getElementById(name).play();
  }

function selectBeatBox(){
    this.classList.contains('boxSelected') ? this.classList.remove('boxSelected') : this.classList.add('boxSelected');
}
