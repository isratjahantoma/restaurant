//Aos
AOS.init();


//nevber
function showSlidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}





// Function to animate the counter
function animateValue(element, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Initialize all counters with class "counter"
var counters = document.querySelectorAll('.counter');
counters.forEach(function(counter) {
    animateValue(counter, 0, parseInt(counter.textContent), 10000);
});






