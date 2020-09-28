const options = document.querySelectorAll('.wrapper__app--options div');

// document.addEventListener('click', (e) => {
//     options.forEach(option => {
//         option.classList.remove('options__div');
//     });
// });

const handleClick = (e) => {
    e.preventDefault();
    options.forEach(option => {
        option.classList.remove('options__div');
    });
    e.currentTarget.classList.add('options__div');
}
options.forEach(option => {
    option.addEventListener('click', handleClick);
});