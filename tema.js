const body = document.body;

if (localStorage.getItem('tema') === 'dark') {
    body.classList.add('dark-mode');
}

const btnTema = document.getElementById('theme-toggle');
if (btnTema) {
    
    btnTema.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';

    btnTema.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('tema', isDark ? 'dark' : 'light');
        btnTema.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
}