export default function anchor() {
    const anchorTarget = document.getElementById('up');
    
    return {
        scrollSmooth() {
            const scrollInterval = setInterval(goUp, 10);
            function goUp() {
                if (anchorTarget.getAttribute('id') === 'up') {
                    if ((anchorTarget.getBoundingClientRect().top) >= 0 ) {
                        setTimeout(goUp, 20);
                        window.scrollBy(0, 30);
                        clearInterval(scrollInterval);
                    } else if ((anchorTarget.getBoundingClientRect().top) < -30) {
                        setTimeout(goUp, 20);
                        window.scrollBy(0, -30);
                        clearInterval(scrollInterval);
                    }
                }
            }
        }
    }
}
