var translations = {
    IT: {
        subtitle: 'Fotografo',
        'menu-bio': 'Bio',
        'menu-works': 'Lavori',
        'menu-beyond': 'Oltre la Cornice',
        'menu-contacts': 'Contatti',
        footer: '© 2026 Pasquale Carangelo Photography. Tutti i diritti riservati. Nessuna parte di questo sito web, inclusi testi e immagini, può essere riprodotta o utilizzata senza previa autorizzazione scritta.',
        'page-title-bio': 'Bio | Pasquale Carangelo',
        'bio-p1': 'Pasquale Carangelo (Santa Maria Capua Vetere, 1994) è un fotografo documentarista originario di Maddaloni. Attraverso un linguaggio visivo prevalentemente in bianco e nero, ritrae il Sud Italia, esplorandone identità, tradizioni e spiritualità con uno sguardo intimo e contemporaneo.',
        'bio-p2': 'Nel 2022 ha presentato la sua prima mostra personale, Vedo Sud, presso la galleria Arte Visivi di Matera, curata da Stefano Cavalleri. Nel 2023 ha pubblicato il libro fotografico Sacro Sud (Psicografici Editore), un viaggio visivo attraverso i rituali religiosi del Meridione, sviluppato in tre anni tra Campania e Sicilia.',
        'bio-p3': 'Le sue fotografie sono state esposte in diverse mostre personali e collettive, tra cui la Biennale delle Arti AMA con il progetto Maddaloni Velata. Il suo lavoro fonde pratica documentaria e ricerca poetica, trasformando persone, luoghi e tradizioni in immagini che parlano di memoria, appartenenza e identità territoriale.',
        'page-title-works': 'Lavori | Pasquale Carangelo',
        'page-title-contacts': 'Contatti | Pasquale Carangelo',
        'contact-title': 'Contatti',
        'form-name': 'Nome',
        'form-email': 'Email',
        'form-message': 'Messaggio',
        'form-send': 'Invia',
        'form-follow': 'Seguimi',
        'form-feedback-empty': 'Compila tutti i campi.',
        'form-feedback-sending': 'Invio in corso...',
        'form-feedback-success': 'Grazie per il tuo messaggio! Ti risponderò al più presto.',
        'form-feedback-error': "Si è verificato un errore. Riprova più tardi.",
        'form-feedback-connection': 'Errore di connessione. Riprova più tardi.'
    },
    EN: {
        subtitle: 'Photographer',
        'menu-bio': 'Bio',
        'menu-works': 'Works',
        'menu-beyond': 'Beyond Frames',
        'menu-contacts': 'Contacts',
        footer: '© 2026 Pasquale Carangelo Photography. All Rights Reserved. No part of this website, including text and images, may be reproduced or used without prior written permission.',
        'page-title-bio': 'Bio | Pasquale Carangelo',
        'bio-p1': 'Pasquale Carangelo (Santa Maria Capua Vetere, 1994) is a documentary photographer from Maddaloni. Through a predominantly black-and-white visual language, he portrays Southern Italy, exploring its identity, traditions, and spirituality with an intimate and contemporary perspective.',
        'bio-p2': 'In 2022, he presented his first solo exhibition, Vedo Sud, at the Arte Visivi gallery in Matera, curated by Stefano Cavalleri. In 2023, he published the photobook Sacro Sud (Psicografici Editore), a visual journey through the religious rituals of Southern Italy, developed over three years across Campania and Sicily.',
        'bio-p3': 'His photographs have been exhibited in several solo and group exhibitions, including the AMA Biennale of Arts with the project Maddaloni Velata. His work blends documentary practice with poetic research, transforming people, places, and traditions into images that speak of memory, belonging, and regional identity.',
        'page-title-works': 'Works | Pasquale Carangelo',
        'page-title-contacts': 'Contacts | Pasquale Carangelo',
        'contact-title': 'Contacts',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-message': 'Message',
        'form-send': 'Send',
        'form-follow': 'Follow Me',
        'form-feedback-empty': 'Please fill in all fields.',
        'form-feedback-sending': 'Sending...',
        'form-feedback-success': 'Thank you for your message! I will get back to you soon.',
        'form-feedback-error': 'An error occurred. Please try again later.',
        'form-feedback-connection': 'Connection error. Please try again later.'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var currentLang = localStorage.getItem('lang') || 'IT';

    var langBtns = document.querySelectorAll('.lang-btn');
    var hamburger = document.getElementById('hamburger');
    var menuOverlay = document.getElementById('menuOverlay');

    function applyTranslation(lang) {
        var t = translations[lang];
        if (!t) return;

        var els = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < els.length; i++) {
            var key = els[i].getAttribute('data-i18n');
            if (t[key] !== undefined) {
                if (els[i].tagName === 'TITLE') {
                    els[i].textContent = t[key];
                } else {
                    els[i].textContent = t[key];
                }
            }
        }

        document.documentElement.setAttribute('lang', lang.toLowerCase());

        if (langBtns) {
            for (var j = 0; j < langBtns.length; j++) {
                if (langBtns[j].getAttribute('data-lang') === lang) {
                    langBtns[j].classList.add('active');
                } else {
                    langBtns[j].classList.remove('active');
                }
            }
        }

        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    function setLanguage(lang) {
        applyTranslation(lang);

        if (worksGrid && workItems) {
            for (var k = 0; k < workItems.length; k++) {
                var sinEl = workItems[k].querySelector('.work-sinossi');
                if (sinEl) {
                    sinEl.removeAttribute('data-loaded');
                    sinEl.textContent = '';
                }
            }
        }
    }

    if (langBtns) {
        for (var i = 0; i < langBtns.length; i++) {
            langBtns[i].addEventListener('click', function () {
                var lang = this.getAttribute('data-lang');
                setLanguage(lang);
            });
        }
    }

    if (hamburger && menuOverlay) {
        var menuClose = document.getElementById('menuClose');
        var menuLinks = menuOverlay.querySelectorAll('a');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            menuOverlay.classList.remove('active');
        }

        hamburger.addEventListener('click', toggleMenu);
        if (menuClose) menuClose.addEventListener('click', closeMenu);

        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', closeMenu);
        }
    }

    var track = document.getElementById('slideshowTrack');
    if (track) {
        var images = track.querySelectorAll('img');
        var totalImages = images.length;

        var firstClone = images[0].cloneNode(true);
        track.appendChild(firstClone);

        var totalSlides = totalImages + 1;
        var currentIndex = 0;

        function nextSlide() {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
                currentIndex = 1;
                setTimeout(function () {
                    track.style.transition = 'transform 3s ease';
                    track.style.transform = 'translateX(-100%)';
                }, 50);
            } else {
                track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
            }
        }

        setInterval(nextSlide, 5000);
    }

    var worksGrid = document.getElementById('worksGrid');
    var workItems = null;
    if (worksGrid) {
        workItems = worksGrid.querySelectorAll('.work-item');

        for (var i = 0; i < workItems.length; i++) {
            (function (item) {
                var project = item.getAttribute('data-project');
                var sinossiEl = item.querySelector('.work-sinossi');

                function loadSinossi() {
                    if (!sinossiEl.getAttribute('data-loaded')) {
                        var lang = localStorage.getItem('lang') || 'IT';
                        fetch('asset/foto_work/prg' + project + '/sinossi' + project + '_' + lang + '.txt')
                            .then(function (res) { return res.text(); })
                            .then(function (text) {
                                sinossiEl.textContent = text;
                                sinossiEl.setAttribute('data-loaded', 'true');
                            });
                    }
                }

                item.addEventListener('mouseenter', loadSinossi);
                item.addEventListener('touchstart', loadSinossi);
            })(workItems[i]);
        }

        var lightbox = document.getElementById('lightbox');
        var lightboxImage = document.getElementById('lightboxImage');
        var lightboxClose = document.getElementById('lightboxClose');
        var lightboxPrev = document.getElementById('lightboxPrev');
        var lightboxNext = document.getElementById('lightboxNext');
        var currentProject = 0;
        var currentPhoto = 0;
        var totalPhotos = 5;

        function getProjectPhotos(projectId) {
            for (var i = 0; i < workItems.length; i++) {
                if (parseInt(workItems[i].getAttribute('data-project')) === projectId) {
                    var photos = workItems[i].getAttribute('data-photos');
                    return photos ? parseInt(photos) : 5;
                }
            }
            return 5;
        }

        function openLightbox(project, photosCount) {
            currentProject = project;
            currentPhoto = 1;
            totalPhotos = photosCount;
            lightboxImage.src = 'asset/foto_work/prg' + project + '/prg' + project + '_1.jpg';
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        function updatePhoto() {
            lightboxImage.src = 'asset/foto_work/prg' + currentProject + '/prg' + currentProject + '_' + currentPhoto + '.jpg';
        }

        function prevPhoto() {
            currentPhoto--;
            if (currentPhoto < 1) currentPhoto = totalPhotos;
            updatePhoto();
        }

        function nextPhoto() {
            currentPhoto++;
            if (currentPhoto > totalPhotos) currentPhoto = 1;
            updatePhoto();
        }

        for (var j = 0; j < workItems.length; j++) {
            (function (item) {
                item.addEventListener('click', function () {
                    var project = parseInt(item.getAttribute('data-project'));
                    var photos = item.getAttribute('data-photos');
                    var photosCount = photos ? parseInt(photos) : 5;
                    openLightbox(project, photosCount);
                });
            })(workItems[j]);
        }

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxPrev) lightboxPrev.addEventListener('click', prevPhoto);
        if (lightboxNext) lightboxNext.addEventListener('click', nextPhoto);

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevPhoto();
            if (e.key === 'ArrowRight') nextPhoto();
        });
    }

    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        var formFeedback = document.getElementById('formFeedback');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var lang = localStorage.getItem('lang') || 'IT';
            var t = translations[lang];

            var name = document.getElementById('formName').value.trim();
            var email = document.getElementById('formEmail').value.trim();
            var message = document.getElementById('formMessage').value.trim();

            if (!name || !email || !message) {
                formFeedback.textContent = t['form-feedback-empty'];
                formFeedback.className = 'form-feedback error';
                return;
            }

            formFeedback.textContent = t['form-feedback-sending'];
            formFeedback.className = 'form-feedback';

            var formData = new FormData(contactForm);

            fetch('https://formspree.io/f/meewyygb', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(function (response) {
                if (response.ok) {
                    formFeedback.textContent = t['form-feedback-success'];
                    formFeedback.className = 'form-feedback success';
                    contactForm.reset();
                } else {
                    formFeedback.textContent = t['form-feedback-error'];
                    formFeedback.className = 'form-feedback error';
                }
            })
            .catch(function () {
                formFeedback.textContent = t['form-feedback-connection'];
                formFeedback.className = 'form-feedback error';
            });
        });
    }

    applyTranslation(currentLang);
});
