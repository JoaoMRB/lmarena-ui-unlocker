# lmarena-ui-unlocker 🔓

A simple JavaScript utility to force-unlock disabled textareas and buttons on **LMArena.ai** when the UI freezes or the AI gets stuck in an infinite loop.

Quick fix for when the interface becomes unresponsive, leaving interaction elements disabled.

---

## How to use

### Option 1: Browser Console
1. Press `F12` (or `Ctrl+Shift+I`) on **lmarena.ai**.
2. Copy the code below.
3. Paste it into the **Console** tab and hit `Enter`.

```javascript
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
``` 
---

### Option 2: Bookmarklet (One Click)
Create a bookmark in your browser and paste this as the URL:

```javascript Bookmarklet
javascript:(function(){const p=()=>{document.querySelectorAll('textarea').forEach(t=>{t.removeAttribute('disabled');t.removeAttribute('readonly');t.placeholder="Force Unlocked...";t.style.border="2px solid #22c55e"});const s=['button[disabled]','button:disabled','.pointer-events-none','.opacity-50','[aria-disabled="true"]'];document.querySelectorAll(s.join(',')).forEach(e=>{e.removeAttribute('disabled');e.setAttribute('aria-disabled','false');e.classList.remove('pointer-events-none','cursor-not-allowed','opacity-50');e.style.pointerEvents="auto";e.style.cursor="pointer";e.style.opacity="1";e.style.border="2px solid #ef4444"});};p();alert("UI Unlocked!");})();
```
---

### Disclaimer
This is a community-made tool and is not affiliated with LMSYS or LMArena.
It may stop working if the site layout changes.
