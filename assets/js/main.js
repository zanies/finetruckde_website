// FineTruck DE - Main Application Script
// Optimized for performance with lazy loading and caching

(function() {
    'use strict';

    // Translations data
    const translations = {
        'pl': {
            'nav_features': 'Funkcje',
            'nav_about': 'O aplikacji',
            'nav_contact': 'Kontakt',
            'nav_download': 'Pobierz',
            'hero_badge': 'Aktualizacja 2026',
            'hero_title_prefix': 'Kalkulator mandatów',
            'hero_title_suffix': 'Niemcy 2026',
            'hero_desc': 'Oblicz wysokość mandatu szybko i precyzyjnie, zgodnie z najnowszym taryfikatorem niemieckim (Bußgeldkatalog).',
            'feat_kicker': 'Możliwości',
            'feat_title': 'Wszystko, czego potrzebujesz',
            'feat_desc': 'Proste narzędzie do skomplikowanych przepisów. Sprawdź, co oferuje FineTruck DE.',
            'f1_title': 'Kalkulator 2026',
            'f1_desc': 'Baza danych zaktualizowana o najnowsze stawki mandatów obowiązujące w Niemczech w 2026 roku.',
            'f2_title': 'Osobówki i Ciężarowe',
            'f2_desc': 'Dedykowane tryby obliczeń dla samochodów osobowych oraz pojazdów ciężarowych.',
            'f3_title': 'Automatyczna tolerancja',
            'f3_desc': 'Aplikacja automatycznie odejmuje wymaganą prawnie tolerancję (3 km/h lub 3%) od wyniku pomiaru.',
            'gallery_kicker': 'Interfejs',
            'gallery_title': 'Przejrzysty i intuicyjny',
            'gallery_desc': 'Każdy ekran został zaprojektowany z myślą o czytelności w trudnych warunkach.',
            'about_title': 'Dlaczego FineTruck DE?',
            'about_subtitle': 'Twój osobisty asystent prawny na niemieckich drogach.',
            'about_head': 'Bezpieczeństwo i pewność',
            'about_text': 'Podróżowanie po Niemczech, zwłaszcza zawodowo, wiąże się z rygorystycznymi przepisami. Nasza aplikacja pomaga kierowcom w szybkiej weryfikacji potencjalnych kar, co pozwala na lepsze planowanie i unikanie stresu.',
            'about_p1_title': 'Szybkie działanie',
            'about_p1_desc': 'Wynik otrzymasz w ułamku sekundy. Bez reklam, bez zbędnego klikania.',
            'about_p2_title': 'Zawsze aktualne',
            'about_p2_desc': 'Monitorujemy zmiany w prawie (Bußgeldkatalog), abyś Ty nie musiał.',
            'soon_title': 'Już wkrótce',
            'soon_desc': 'Intensywnie pracujemy nad nową funkcjonalnością.',
            'soon_badge': 'W produkcji',
            'soon_feature_title': 'Taryfikator Czasu Pracy Kierowców',
            'soon_feature_desc': 'Kompleksowe narzędzie do obliczania kar związanych z naruszeniem przepisów o czasie jazdy i odpoczynku w Niemczech (Lenk- und Ruhezeiten).',
            'soon_progress': 'ukończone',
            'nav_roadmap': 'Rozwój',
            'qr_text': 'Zeskanuj,<br>aby pobrać',
            'cta_title': 'Gotowy do drogi?',
            'cta_subtitle': 'Pobierz aplikację już dziś.',
            'cta_desc': 'Miej świadomość ile możesz zapłacić za nieprzestrzeganie przepisów :-)',
            'cta_btn': 'Pobierz teraz',
            'footer_copy': '&copy; 2026 FineTruck DE | Mariusz Zaniewski. Wszelkie prawa zastrzeżone.'
        },
        'de': {
            'nav_features': 'Funktionen',
            'nav_about': 'Über die App',
            'nav_contact': 'Kontakt',
            'nav_download': 'Herunterladen',
            'hero_badge': 'Update 2026',
            'hero_title_prefix': 'Bußgeldrechner',
            'hero_title_suffix': 'Deutschland 2026',
            'hero_desc': 'Berechnen Sie Bußgelder schnell und präzise nach dem aktuellen deutschen Bußgeldkatalog.',
            'feat_kicker': 'Funktionen',
            'feat_title': 'Alles, was Sie brauchen',
            'feat_desc': 'Ein einfaches Tool für komplexe Vorschriften. Sehen Sie, was FineTruck DE bietet.',
            'f1_title': 'Rechner 2026',
            'f1_desc': 'Datenbank aktualisiert mit den neuesten Bußgeldsätzen für Deutschland 2026.',
            'f2_title': 'PKW und LKW',
            'f2_desc': 'Spezielle Berechnungsmodi für Personenkraftwagen und Lastkraftwagen.',
            'f3_title': 'Automatische Toleranz',
            'f3_desc': 'Die App zieht automatisch die gesetzlich vorgeschriebene Toleranz (3 km/h oder 3%) vom Messergebnis ab.',
            'gallery_kicker': 'Schnittstelle',
            'gallery_title': 'Klar und intuitiv',
            'gallery_desc': 'Jeder Bildschirm wurde für die Lesbarkeit unter schwierigen Bedingungen entwickelt.',
            'about_title': 'Warum FineTruck DE?',
            'about_subtitle': 'Ihr persönlicher Rechtsassistent auf deutschen Straßen.',
            'about_head': 'Sicherheit und Gewissheit',
            'about_text': 'Reisen in Deutschland, insbesondere beruflich, sind mit strengen Vorschriften verbunden. Unsere App hilft Fahrern und Transportunternehmen bei der schnellen Überprüfung potenzieller Strafen, was eine bessere Planung und weniger Stress ermöglicht.',
            'about_p1_title': 'Schnelle Funktion',
            'about_p1_desc': 'Ergebnis in Sekundenbruchteilen. Keine Werbung, keine unnötigen Klicks.',
            'about_p2_title': 'Immer aktuell',
            'about_p2_desc': 'Wir überwachen Gesetzesänderungen (Bußgeldkatalog), damit Sie es nicht müssen.',
            'soon_title': 'Demnächst',
            'soon_desc': 'Wir arbeiten intensiv an einer neuen Funktion.',
            'soon_badge': 'In Produktion',
            'soon_feature_title': 'Lenk- und Ruhezeiten Rechner',
            'soon_feature_desc': 'Ein umfassendes Tool zur Berechnung von Bußgeldern bei Verstößen gegen die Lenk- und Ruhezeiten in Deutschland.',
            'soon_progress': 'fertiggestellt',
            'nav_roadmap': 'Entwicklung',
            'qr_text': 'Scannen zum<br>Herunterladen',
            'cta_title': 'Bereit für die Fahrt?',
            'cta_subtitle': 'Laden Sie die App noch heute herunter.',
            'cta_desc': 'Seien Sie sich bewusst, was Sie für die Missachtung der Vorschriften zahlen müssen :-)',
            'cta_btn': 'Jetzt herunterladen',
            'footer_copy': '&copy; 2026 FineTruck DE | Mariusz Zaniewski. Alle Rechte vorbehalten.'
        }
    };

    // Cache for DOM elements
    let cachedTranslatableElements = null;
    let currentLang = 'pl';

    // Language Switcher with DOM caching
    function initLanguageSwitcher() {
        const langToggleBtn = document.getElementById('lang-toggle');
        if (!langToggleBtn) return;

        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'pl' ? 'de' : 'pl';
            updateLanguage(currentLang);
        });
    }

    function updateLanguage(lang) {
        // Cache translatable elements on first run
        if (!cachedTranslatableElements) {
            cachedTranslatableElements = document.querySelectorAll('[data-i18n]');
        }

        cachedTranslatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update button style
        const langToggleBtn = document.getElementById('lang-toggle');
        const spans = langToggleBtn.querySelectorAll('span');
        if (lang === 'pl') {
            spans[0].className = 'font-bold text-gray-900 dark:text-white';
            spans[2].className = 'text-gray-400 dark:text-gray-500';
        } else {
            spans[0].className = 'text-gray-400 dark:text-gray-500';
            spans[2].className = 'font-bold text-gray-900 dark:text-white';
        }

        // Update Screenshots
        const screenshot1 = document.getElementById('screenshot-1');
        const screenshot2 = document.getElementById('screenshot-2');
        if (screenshot1 && screenshot2) {
            if (lang === 'de') {
                screenshot1.src = 'assets/flutter_01_de.webp';
                screenshot2.src = 'assets/flutter_02_de.webp';
            } else {
                screenshot1.src = 'assets/flutter_01.webp';
                screenshot2.src = 'assets/flutter_02.webp';
            }
        }
    }

    // Slideshow with Intersection Observer
    let slideshowInterval = null;
    let slideshowObserver = null;
    let slideshowEventsBound = false;

    function initSlideshow() {
        const slides = document.querySelectorAll('.slideshow-img');
        const dots = document.querySelectorAll('.slideshow-dot');
        if (slides.length === 0) return;

        let currentSlide = 0;

        function updateSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('opacity-100', i === index);
                slide.classList.toggle('opacity-0', i !== index);
            });

            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('bg-blue-200', 'dark:bg-gray-700');
                    dot.classList.add('bg-blue-600');
                } else {
                    dot.classList.remove('bg-blue-600');
                    dot.classList.add('bg-blue-200', 'dark:bg-gray-700');
                }
            });

            currentSlide = index;
        }

        function startSlideshow() {
            if (slideshowInterval) return; // Already running
            slideshowInterval = setInterval(() => {
                const nextSlide = (currentSlide + 1) % slides.length;
                updateSlide(nextSlide);
            }, 4000);
        }

        function stopSlideshow() {
            if (slideshowInterval) {
                clearInterval(slideshowInterval);
                slideshowInterval = null;
            }
        }

        // Use Intersection Observer to pause slideshow when not visible
        if ('IntersectionObserver' in window && !slideshowObserver) {
            const slideshowContainer = slides[0].closest('.grid');
            if (slideshowContainer) {
                slideshowObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            startSlideshow();
                        } else {
                            stopSlideshow();
                        }
                    });
                }, { threshold: 0.1 });

                slideshowObserver.observe(slideshowContainer);
            }
        } else if (!('IntersectionObserver' in window)) {
            // Fallback for browsers without Intersection Observer
            startSlideshow();
        }

        // Click handling for dots - bind only once
        if (!slideshowEventsBound) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    updateSlide(index);
                });
            });
            slideshowEventsBound = true;
        }
    }

    // Preloader Logic
    function initPreloader() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;

        const hidePreloader = () => {
            setTimeout(() => {
                preloader.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 800);
        };

        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader, { once: true });
        }
    }

    // Dark Mode Logic
    function initDarkMode() {
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        if (!themeToggleBtn) return;

        // Initial check based on system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            themeToggleLightIcon?.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleDarkIcon?.classList.remove('hidden');
        }

        themeToggleBtn.addEventListener('click', () => {
            themeToggleDarkIcon?.classList.toggle('hidden');
            themeToggleLightIcon?.classList.toggle('hidden');
            document.documentElement.classList.toggle('dark');
        });
    }

    // Cleanup function
    function cleanup() {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
        if (slideshowObserver) {
            slideshowObserver.disconnect();
            slideshowObserver = null;
        }
    }

    // Initialize all components
    function init() {
        initPreloader();
        initDarkMode();
        initLanguageSwitcher();
        initSlideshow();

        // Cleanup on page unload - REMOVED to support bfcache
        // window.addEventListener('beforeunload', cleanup);
        
        // Handle Page Restore (bfcache)
        window.addEventListener('pageshow', (event) => {
            // If the page is restored from bfcache, ensure slideshow is running
            if (event.persisted || !slideshowObserver) {
                 initSlideshow();
            }
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
