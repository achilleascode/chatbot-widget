/**
 * NEO Chat Widget Embed Script
 *
 * Usage: Add this script to your website:
 * <script src="https://YOUR_DOMAIN/embed.js"></script>
 *
 * Or copy the code below directly into your HTML before </body>
 */

(function() {
    // Configuration - Change this to your widget URL
    var WIDGET_URL = window.NEO_CHAT_URL || 'https://chatbot-widget-1.vercel.app/';

    // Create iframe
    var iframe = document.createElement('iframe');
    iframe.id = 'neo-chat-widget';
    iframe.src = WIDGET_URL;
    iframe.style.cssText = [
        'position: fixed',
        'bottom: 0',
        'right: 0',
        'width: 100px',
        'height: 100px',
        'border: none',
        'background: transparent',
        'z-index: 2147483647',
        'transition: width 0.3s ease, height 0.3s ease'
    ].join(';');
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');

    // Listen for resize messages from the widget
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'neo-chat-resize') {
            iframe.style.width = event.data.width + 'px';
            iframe.style.height = event.data.height + 'px';
        }
    });

    // Add iframe to page when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(iframe);
        });
    } else {
        document.body.appendChild(iframe);
    }
})();
