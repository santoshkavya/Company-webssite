
        // Page Navigation
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navbar active state
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.style.color = '#333');
            event.target.style.color = '#667eea';
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Contact Form Handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you within 24 hours.');
            
            // Reset form
            this.reset();
        });
