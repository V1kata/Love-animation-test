document.querySelector('button').addEventListener('click', changeUrl);

function changeUrl(e) {
    let confirmed = confirm('Want to listen the music i recommend? Either way this is for you my love!!!!');

    if (!confirmed) {
        return
    }

    let secondConfirmation = confirm('Pick one or two? If one click "Yes" if two click "No"!');

    if (!secondConfirmation) {
        alert('I love you if i haven"t said that today!!!!!');
        window.location.href = 'https://www.youtube.com/watch?v=oQ-0Chl3VaQ';
        return
    }

    alert('I love you if i haven"t said that today!!!!!');

    window.location.href = 'https://youtu.be/w6r4tvFML1I?si=BVeubcBSgsjc1RCH';
}