const C4 = new Audio('C4.mp3');
const Db4 = new Audio('Db4.mp3');
const D4 = new Audio('D4.mp3');
const Eb4 = new Audio('Eb4.mp3');
const E4 = new Audio('E4.mp3');
const F4 = new Audio('F4.mp3');
const Gb4 = new Audio('Gb4.mp3');
const G4 = new Audio('G4.mp3');
const Ab4 = new Audio('Ab4.mp3');
const A4 = new Audio('A4.mp3');
const Bb4 = new Audio('Bb4.mp3');
const B4 = new Audio('B4.mp3');
const C5 = new Audio('C5.mp3');
const Db5 = new Audio('Db5.mp3');
const D5 = new Audio('D5.mp3');
const Eb5 = new Audio('Eb5.mp3');
const E5 = new Audio('E5.mp3');


const playSOund = audio => {
    const clone = audio.cloneNode();
    clone.play();

    setTimeout(() => (clone.volume = 0.8), 100 )
    setTimeout(() => (clone.volume = 0.6), 800 )
    setTimeout(() => (clone.volume = 0.4), 1200 )
    setTimeout(() => (clone.volume = 0), 2000 )
};


//F4
const F4Key = document.querySelector('.F4-key');
const playF4 = () => {
    playSOund(F4);
   F4Key.classList.add('active');
    setTimeout(() => F4Key.classList.remove('active'),100);
};
F4Key.addEventListener('click', playF4);

//C4
const C4Key = document.querySelector('.C4-key');
const playC4 = () => {
    playSOund(C4);
   C4Key.classList.add('active');
    setTimeout(() => C4Key.classList.remove('active'),100);
};
C4Key.addEventListener('click', playC4);


//Db4
const Db4Key = document.querySelector('.Db4-key');
const playDb4 = () =>{
    playSOund(Db4);
    Db4Key.classList.add('active');
    setTimeout(() => Db4Key.classList.remove('active'),100);
};
Db4Key.addEventListener('click', playDb4);

//D4
const D4Key = document.querySelector('.D4-key');
const playD4 = () =>{
    playSOund(D4);
    D4Key.classList.add('active');
    setTimeout(() => D4Key.classList.remove('active'),100);
};
D4Key.addEventListener('click', playD4);

//Eb4
const Eb4Key = document.querySelector('.Eb4-key');
const playEb4 = () => { 
    playSOund(Eb4);
    Eb4Key.classList.add('active');
    setTimeout(() => Eb4Key.classList.remove('active'),100);
};
Eb4Key.addEventListener('click', playEb4);

//E4
const E4Key = document.querySelector('.E4-key');
const playE4 = () =>{
    playSOund(E4);
    E4Key.classList.add('active');
    setTimeout(() => E4Key.classList.remove('active'),100);
};
E4Key.addEventListener('click', playE4);

//Gb4
const Gb4Key = document.querySelector('.Gb4-key');
const playGb4 = () =>{
    playSOund(Gb4);
    Gb4Key.classList.add('active');
    setTimeout(() => Gb4Key.classList.remove('active'),100);
};
Gb4Key.addEventListener('click', playGb4);

//G4
const G4Key = document.querySelector('.G4-key');
const playG4 = () =>{
    playSOund(G4);
    G4Key.classList.add('active');
    setTimeout(() => G4Key.classList.remove('active'),100);
};
G4Key.addEventListener('click', playG4);

//Ab4
const Ab4Key = document.querySelector('.Ab4-key');
const playAb4 = () =>{
    playSOund(Ab4);
    Ab4Key.classList.add('active');
    setTimeout(() => Ab4Key.classList.remove('active'),100);
};
Ab4Key.addEventListener('click', playAb4);

//A4
const A4Key = document.querySelector('.A4-key');
const playA4 = () =>{
    playSOund(A4);
    A4Key.classList.add('active');
    setTimeout(() => A4Key.classList.remove('active'),100);
};
A4Key.addEventListener('click', playA4);

//Bb4
const Bb4Key = document.querySelector('.Bb4-key');
const playBb4 = () =>{
    playSOund(Bb4);
    Bb4Key.classList.add('active');
    setTimeout(() => Bb4Key.classList.remove('active'),100);
};
Bb4Key.addEventListener('click', playBb4);

//B4
const B4Key = document.querySelector('.B4-key');
const playB4 = () =>{
    playSOund(B4);
    B4Key.classList.add('active');
    setTimeout(() => B4Key.classList.remove('active'),100);
};
B4Key.addEventListener('click', playB4);

//C5
const C5Key = document.querySelector('.C5-key');
const playC5 = () => {
    playSOund(C5);
    C5Key.classList.add('active');
    setTimeout(() => C5Key.classList.remove('active'),100);
};
C5Key.addEventListener('click', playC5);

//Db5
const Db5Key = document.querySelector('.Db5-key');
const playDb5 = () =>{
    playSOund(Db5);
    Db5Key.classList.add('active');
    setTimeout(() => Db5Key.classList.remove('active'),100);
};
Db5Key.addEventListener('click', playDb5);

//D5
const D5Key = document.querySelector('.D5-key');
const playD5 = () =>{
    playSOund(D5);
    D5Key.classList.add('active');
    setTimeout(() => D5Key.classList.remove('active'),100);
};
D5Key.addEventListener('click', playD5);

//Eb5
const Eb5Key = document.querySelector('.Eb5-key');
const playEb5 = () =>{
    playSOund(Eb5);
    Eb5Key.classList.add('active');
    setTimeout(() => Eb5Key.classList.remove('active'),100);
};
Eb5Key.addEventListener('click', playEb5);

//E5
const E5Key = document.querySelector('.E5-key');
const playE5 = () =>{
    playSOund(E5);
    E5Key.classList.add('active');
    setTimeout(() => E5Key.classList.remove('active'),100);
};
E5Key.addEventListener('click', playE5);

window.addEventListener('keydown', ({keyCode}) => {
    //press Q
    if(keyCode === 81) return playC4();
    //press 2
    if(keyCode === 50) return playDb4();
    //press w
    if(keyCode === 87) return playD4();
    //press 3
    if(keyCode === 51) return playEb4();
    //press e
    if(keyCode === 69) return playE4();
    //press R
    if(keyCode === 82) return playF4();
    //press 5
    if(keyCode === 53) return playGb4();
    //press T
    if(keyCode === 84) return playG4();
    //press 6
    if(keyCode === 54) return playAb4();
    //press y
    if(keyCode === 89) return playA4();
    //press 7
    if(keyCode === 55) return playBb4();
    //press u
    if(keyCode === 85) return playB4();
    //press i
    if(keyCode === 73) return playC5();
    //press 9
    if(keyCode === 57) return playDb5();
    //press O
    if(keyCode === 79) return playD5();
    //press 0
    if(keyCode === 48) return playEb5();
    //press p
    if(keyCode === 80) return playE5();
});

var sch = '89';

switch(sch){
    case 'switch': alert(true);

    break;

    case '89' : alert(false);
}

