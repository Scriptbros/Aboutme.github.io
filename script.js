document.addEventListener('DOMContentLoaded', function() {
    var parallaxElement = document.querySelector('.parallax');
    var parallaxInstance = new Parallax(parallaxElement);
});


document.addEventListener('DOMContentLoaded', function() {
    var facts = document.querySelectorAll('.fact');
    var currentFactIndex = 0;

    function showNextFact() {
        facts[currentFactIndex].classList.remove('active');
        currentFactIndex = (currentFactIndex + 1) % facts.length;
        facts[currentFactIndex].classList.add('active');
    }

    setInterval(showNextFact, 5000); // Show a new fact every 5 seconds
});
