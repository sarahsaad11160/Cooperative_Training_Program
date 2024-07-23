document.getElementById('language-toggle').addEventListener('click', function() {
    const lang = document.documentElement.lang;
    if (lang === 'ar') {
        document.documentElement.lang = 'en';
        this.textContent = 'AR';
        // تغيير النصوص إلى الإنجليزية
        document.querySelector('.hero h1').textContent = 'Welcome to
