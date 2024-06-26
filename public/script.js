const circleContainer = document.querySelector('.circle-container');
const imgContainer = document.querySelector('.img-container');
const money = document.querySelector('.container .left i');
const users = document.querySelector('.container .right i');
const timerContainer = document.querySelector('.timer-container');
let timer = document.querySelector('.timer');
let sound = new Audio('action.mp3');
let countdownTimer = new Audio('countdown.m4a');



circleContainer.addEventListener('click', () =>{
    let duration = 10;
    countdownTimer.currentTime = 3;
    countdownTimer.play();
    const interval = setInterval(() => {
        countdown.innerHTML = `<span>${duration}</span>`;
        duration--;
        if (duration < 0) {
            clearInterval(interval);
            countdown.innerHTML = `<span></span>`;
        }
    }, 1000);
    setTimeout(() => {
        money.classList.add('animate');
        users.classList.add('reverse');
        imgContainer.classList.add('money');
        countdownTimer.pause();
    }, 12700);
    // let timerInterval;
    // Swal.fire({
    // title: "Time for money!",
    // html: "You'll receive bonus in <b></b> seconds.",
    // timer: 6000,
    // timerProgressBar: true,
    // didOpen: () => {
    //     Swal.showLoading();
    //     const timer = Swal.getPopup().querySelector("b");
    //     timerInterval = setInterval(() => {
    //     timer.textContent = `${Math.floor(Swal.getTimerLeft() / 1000)}`;
    //     }, 100);
    // },
    // willClose: () => {
    //     clearInterval(timerInterval);
    // }
    // }).then((result) => {
    //     if (result.dismiss === Swal.DismissReason.timer) {
    //         console.log("Time for money");
    //     }
    // }).then(() => {
    //     money.classList.add('animate');
    //     users.classList.add('reverse');
    //     imgContainer.classList.add('money');
    // });
});
