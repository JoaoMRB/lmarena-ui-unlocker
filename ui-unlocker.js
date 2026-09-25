(function() {
    'use strict';
    const patchUI = () => {
        console.log("🔓 Attempting to unlock LMArena UI...");
        // 1. Unlock all textareas
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.removeAttribute('disabled');
            textarea.removeAttribute('readonly');
            textarea.placeholder = "Force Unlocked - Type your message...";
            textarea.style.border = "2px solid #22c55e"; // Subtle green
            textarea.style.backgroundColor = "rgba(34, 197, 94, 0.05)";
        });
        // 2. Unlock all buttons and interaction elements
        // Target: disabled attributes and common "lock" classes
        const selectors = [
            'button[disabled]', 
            'button:disabled', 
            '.pointer-events-none', 
            '.opacity-50',
            '[aria-disabled="true"]'
        ];
        const blockedElements = document.querySelectorAll(selectors.join(', '));
        blockedElements.forEach(el => {
            // Remove disabling attributes
            el.removeAttribute('disabled');
            el.setAttribute('aria-disabled', 'false');
            // Remove CSS classes that block clicks
            el.classList.remove('pointer-events-none', 'cursor-not-allowed', 'opacity-50');
            // Force visual activation
            el.style.pointerEvents = "auto";
            el.style.cursor = "pointer";
            el.style.opacity = "1";
            el.style.border = "2px solid #ef4444"; // Subtle red to identify
        });
        console.log(`✅ Fixed ${blockedElements.length} elements.`);
    };
    // Run immediately
    patchUI();
    alert("UI Unlocked! Textarea = Green border, Buttons = Red border.");
})();
