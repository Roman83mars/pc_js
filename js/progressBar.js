const progressBar = () => {
    const progressNumber = document.querySelector('.course__progress-label .course__number')
    const progress = document.querySelector('.course__progress-element progress')
    let progressRandomizer = 0

    progressNumber.textContent = '0₽'
    progress.value = 0

    const progressAnimate = (start, end, duration) => {
        const range = end - start;
        let startTime = null;
        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progressTime = currentTime - startTime;
            const progressValue = Math.min(Math.floor((progressTime / duration) * range) + start, end);
            progressNumber.textContent = `${progressValue} 000₽`;
            progress.value = progressValue * 1000;
            if (progressTime < duration) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }

    const handleScroll = () => {
        const scrollY = window.scrollY

        if (scrollY >= 320) {
            const animationDuration = 1500
            window.removeEventListener('scroll', handleScroll)
            progressRandomizer = 350 + Math.round(Math.random() * 250)
            progressAnimate(1, progressRandomizer, animationDuration);
        }
    }
    window.addEventListener('scroll', handleScroll)
}

progressBar()