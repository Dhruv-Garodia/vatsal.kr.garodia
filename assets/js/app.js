$(document).ready(function() {
    // Load header and footer partials
    $('#header-placeholder').load('components/header.html', function() {
        // After header is loaded, attach event listeners for navigation
        setupNavigation();
    });
    $('#footer-placeholder').load('components/footer.html');

    // Function to set up navigation interactivity
    function setupNavigation() {
        // Mobile menu toggle
        $('#mobile-menu-button').on('click', function() {
            $('#mobile-menu').toggleClass('hidden');
            $('body').toggleClass('overflow-hidden'); // Prevent scrolling when menu is open
        });

        // Close mobile menu when a link is clicked
        $('#mobile-menu a').on('click', function() {
            $('#mobile-menu').addClass('hidden');
            $('body').removeClass('overflow-hidden');
        });

        // Smooth scrolling for navigation links
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.hash);
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - ($('#main-header').outerHeight() || 0) // Adjust for fixed header height
                }, 800);
            }
        });

        // Optional: Highlight active nav link on scroll
        $(window).on('scroll', function() {
            var scrollPos = $(document).scrollTop();
            $('section').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr('id'));
                var headerHeight = $('#main-header').outerHeight() || 0;

                if (refElement.length && refElement.position().top - headerHeight <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
                    $('.nav-link').removeClass('text-primary font-bold');
                    $('a[href="#' + currLink.attr('id') + '"]').addClass('text-primary font-bold');
                } else {
                    $('a[href="#' + currLink.attr('id') + '"]').removeClass('text-primary font-bold');
                }
            });
        });

        // Dark mode toggle
        $('#theme-toggle').on('click', function() {
            $('html').toggleClass('dark');
            // Store user preference
            if ($('html').hasClass('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Apply saved theme on load
        if (localStorage.getItem('theme') === 'dark') {
            $('html').addClass('dark');
        } else {
            $('html').removeClass('dark');
        }
    }

    // Function to check and apply scroll animations
    function setupScrollAnimations() {
        $('.animate-on-scroll').each(function() {
            var element = $(this);
            var windowHeight = $(window).height();
            var scrollPos = $(window).scrollTop();
            var elementOffset = element.offset().top;

            // Trigger animation when element is 80% visible in the viewport
            if (scrollPos + windowHeight * 0.8 > elementOffset) {
                element.addClass('is-visible');
            }
        });
    }

    // Run scroll animations on document ready and on scroll
    $(window).on('scroll', setupScrollAnimations);
    setupScrollAnimations(); // Run once on load to animate elements already in view
});
