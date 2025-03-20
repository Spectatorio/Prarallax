$(document).ready(function() {
    // Initial position for elements
    parallaxScroll();
    
    // Handle scroll events
    $(window).on('scroll', function() {
        requestAnimationFrame(parallaxScroll);
    });
    
    function parallaxScroll() {
        const scrolled = $(window).scrollTop();
        
        // Parallax effect for background layers
        $('.stars').css('transform', `translateZ(-3px) scale(4) translateY(${scrolled * 0.1}px)`);
        $('.nebula').css('transform', `translateZ(-2px) scale(3) translateY(${scrolled * 0.2}px)`);
        $('.planets').css('transform', `translateZ(-1px) scale(2) translateY(${scrolled * 0.3}px)`);
        $('.asteroids').css('transform', `translateZ(-0.5px) scale(1.5) translateY(${scrolled * 0.4}px)`);
        
        // Parallax effect for floating elements
        $('.planet-1').css({
            'transform': `translateY(${-scrolled * 0.2}px) rotate(${scrolled * 0.05}deg)`,
            'opacity': Math.max(0, 1 - scrolled * 0.002)
        });
        
        $('.planet-2').css({
            'transform': `translateY(${-scrolled * 0.15}px) rotate(${-scrolled * 0.03}deg)`,
            'opacity': Math.max(0, 1 - scrolled * 0.002)
        });
        
        $('.asteroid-1').css({
            'transform': `translateY(${-scrolled * 0.3}px) rotate(${scrolled * 0.2}deg)`,
            'opacity': Math.max(0, 1 - scrolled * 0.002)
        });
        
        $('.asteroid-2').css({
            'transform': `translateY(${-scrolled * 0.25}px) rotate(${-scrolled * 0.15}deg)`,
            'opacity': Math.max(0, 1 - scrolled * 0.002)
        });
        
        $('.comet').css({
            'transform': `translate(${scrolled * 0.3}px, ${-scrolled * 0.1}px) rotate(45deg)`,
            'opacity': Math.max(0, 1 - scrolled * 0.002)
        });
    }
    
    // Add hover effects for interactive elements
    $('.element').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.1)',
                'opacity': '1'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'opacity': '0.7'
            });
        }
    );
});


