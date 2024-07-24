document.addEventListener('DOMContentLoaded', function() {
    const languageToggleButton = document.getElementById('language-toggle');

    // دالة لتبديل النصوص بين العربية والإنجليزية
    function toggleLanguage() {
        const isArabic = document.documentElement.lang === 'ar';

        if (isArabic) {
            document.documentElement.lang = 'en';
            languageToggleButton.textContent = 'AR';

            // تغيير النصوص إلى الإنجليزية
            document.querySelector('.hero-title').textContent = 'Welcome to the Cooperative Training Program';
            document.querySelector('.hero-description').textContent = 'Learn programming and design professionally and enjoyably!';
            document.querySelector('.about-title').textContent = 'About Us';
            document.querySelector('.about-description').textContent = 'At Panorama Al Qassim, we offer a comprehensive cooperative training program for university students in programming and design.';
            document.querySelector('.lessons-title').textContent = 'Training Stages';
            document.querySelectorAll('.lesson-title').forEach(el => {
                el.textContent = el.textContent.replace(/المرحلة الأولى: التحليل/, 'Stage 1: Analysis')
                                            .replace(/المرحلة الثانية: التصميم/, 'Stage 2: Design')
                                            .replace(/المرحلة الثالثة: الفرونت اند/, 'Stage 3: Front-End')
                                            .replace(/المرحلة الرابعة: الباك اند/, 'Stage 4: Back-End')
                                            .replace(/المرحلة الخامسة: الاختبار/, 'Stage 5: Testing');
            });
            document.querySelectorAll('.lesson-description').forEach(el => {
                el.textContent = el.textContent.replace(/تتضمن مرحلة التحليل/, 'This stage involves')
                                                .replace(/في هذه المرحلة، يتعلم الطلاب/, 'In this stage, students learn')
                                                .replace(/في هذه المرحلة، يتعلم الطلاب/, 'In this stage, students learn')
                                                .replace(/في هذه المرحلة، يتعلم الطلاب/, 'In this stage, students learn')
                                                .replace(/يتعلم الطلاب في هذه المرحلة/, 'Students learn in this stage');
            });
            document.querySelector('.tools-title').textContent = 'Tools';
            document.querySelector('.tools-code-editor').textContent = 'Code Editor';
            document.querySelector('.tools-local-server').textContent = 'Local Server';
            document.querySelector('.tools-github').textContent = 'GitHub';
            document.querySelector('.course-roadmap-title').textContent = 'Training Plan';
            document.querySelector('.course-roadmap-subtitle').textContent = 'Course Roadmap';
            document.querySelectorAll('.course-roadmap-list li').forEach((el, index) => {
                el.innerHTML = el.innerHTML.replace(/1st Week/, '1st Week')
                                          .replace(/2nd Week/, '2nd Week')
                                          .replace(/3rd Week/, '3rd Week')
                                          .replace(/4th Week/, '4th Week')
                                          .replace(/5th to 8th Week/, '5th to 8th Week');
            });
        } else {
            document.documentElement.lang = 'ar';
            languageToggleButton.textContent = 'EN';

            // تغيير النصوص إلى العربية
            document.querySelector('.hero-title').textContent = 'مرحبا بكم في برنامج التدريب التعاوني';
            document.querySelector('.hero-description').textContent = 'تعلم البرمجة والتصاميم بطريقة احترافية وممتعة!';
            document.querySelector('.about-title').textContent = 'من نحن';
            document.querySelector('.about-description').textContent = 'نحن في بانوراما القصيم نقدم برنامج تدريب تعاوني شامل لطلاب الجامعات في مجالات البرمجة والتصميم.';
            document.querySelector('.lessons-title').textContent = 'مراحل التدريب';
            document.querySelectorAll('.lesson-title').forEach(el => {
                el.textContent = el.textContent.replace(/Stage 1: Analysis/, 'المرحلة الأولى: التحليل')
                                            .replace(/Stage 2: Design/, 'المرحلة الثانية: التصميم')
                                            .replace(/Stage 3: Front-End/, 'المرحلة الثالثة: الفرونت اند')
                                            .replace(/Stage 4: Back-End/, 'المرحلة الرابعة: الباك اند')
                                            .replace(/Stage 5: Testing/, 'المرحلة الخامسة: الاختبار');
            });
            document.querySelectorAll('.lesson-description').forEach(el => {
                el.textContent = el.textContent.replace(/This stage involves/, 'تتضمن مرحلة التحليل')
                                                .replace(/In this stage, students learn/, 'في هذه المرحلة، يتعلم الطلاب')
                                                .replace(/In this stage, students learn/, 'في هذه المرحلة، يتعلم الطلاب')
                                                .replace(/In this stage, students learn/, 'في هذه المرحلة، يتعلم الطلاب')
                                                .replace(/Students learn in this stage/, 'يتعلم الطلاب في هذه المرحلة');
            });
            document.querySelector('.tools-title').textContent = 'الأدوات';
            document.querySelector('.tools-code-editor').textContent = 'Code Editor';
            document.querySelector('.tools-local-server').textContent = 'Local Server';
            document.querySelector('.tools-github').textContent = 'GitHub';
            document.querySelector('.course-roadmap-title').textContent = 'خطة التدريب';
            document.querySelector('.course-roadmap-subtitle').textContent = 'Course Roadmap';
            document.querySelectorAll('.course-roadmap-list li').forEach((el, index) => {
                el.innerHTML = el.innerHTML.replace(/1st Week/, 'الأسبوع الأول')
                                          .replace(/2nd Week/, 'الأسبوع الثاني')
                                          .replace(/3rd Week/, 'الأسبوع الثالث')
                                          .replace(/4th Week/, 'الأسبوع الرابع')
                                          .replace(/5th to 8th Week/, 'الأسبوع الخامس إلى الثامن');
            });
        }
    }

    languageToggleButton.addEventListener('click', toggleLanguage);
});
