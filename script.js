document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navItems = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked nav item
            item.classList.add('active');

            // Get target section id
            const targetId = item.getAttribute('data-target');

            // Hide all sections and show target section
            pageSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                    // Small delay to allow display block to apply before animating opacity
                    setTimeout(() => {
                        section.classList.add('active');
                    }, 10);
                } else {
                    section.classList.remove('active');
                    section.classList.add('hidden');
                }
            });
        });
    });

    // Add subtle hover effects to cards
    const cards = document.querySelectorAll('.glass-panel');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            if(!card.classList.contains('stat-card')) {
                card.style.transform = 'translateY(0)';
            }
            card.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        });
    });
});
