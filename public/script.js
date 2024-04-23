const circleContainer = document.querySelector('.circle-container');
const imgContainer = document.querySelector('.img-container');
const money = document.querySelector('.container .left i');
const users = document.querySelector('.container .right i');



circleContainer.addEventListener('click', () =>{
    let timerInterval;
    Swal.fire({
    title: "Time for money!",
    html: "You'll receive bonus in <b></b> seconds.",
    timer: 6000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
        timer.textContent = `${Math.floor(Swal.getTimerLeft() / 1000)}`;
        }, 100);
    },
    willClose: () => {
        clearInterval(timerInterval);
    }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("Time for money");
        }
    }).then(() => {
        money.classList.add('animate');
        users.classList.add('reverse');
        imgContainer.classList.add('money');
    });
});
