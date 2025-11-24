// Dark mode toggle
const toggle = document.getElementById('toggle-dark');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Scroll animations
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.2});

sections.forEach(section => {
    observer.observe(section);
});
