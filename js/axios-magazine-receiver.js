/**
 * Axios Media // Magazine Publishing Studio - Add-On Object & Spot Art Receiver
 * Enables real-time cutout injection, Ctrl+V pasting, drag-and-drop, interactive corner resizing,
 * and zoom-invariant persistent editorial layer placement on magazine pages.
 */
(function() {
  'use strict';

  console.log('✨ Axios Media Magazine Receiver initialized (v2.0 - Zoom-Invariant & Interactive Transform)');

  const STORAGE_KEY = 'axios_placed_magazine_addons';
  const BIN_KEY = 'axios_editorial_objects_bin';
  const CHANNEL_NAME = 'axios_magazine_bridge';

  // In-memory placed objects map: pageNumber -> array of object data
  let placedAddons = loadPlacedAddons();
  let selectedAddonId = null;

  function loadPlacedAddons() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function savePlacedAddons() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(placedAddons));
    } catch (e) {
      console.warn('Storage quota exceeded:', e);
    }
  }

  // 1. BroadcastChannel Listener
  let channel = null;
  try {
    if (typeof BroadcastChannel !== 'undefined') {
      channel = new BroadcastChannel(CHANNEL_NAME);
      channel.onmessage = (e) => {
        if (e.data && e.data.type === 'AXIOS_MAGAZINE_INSERT_ADDON_OBJECT') {
          handleIncomingAddon(e.data);
        }
      };
    }
  } catch (err) {
    console.warn('BroadcastChannel error:', err);
  }

  // 2. Window postMessage Listener
  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'AXIOS_MAGAZINE_INSERT_ADDON_OBJECT') {
      handleIncomingAddon(e.data);
    }
  });

  // 3. Storage Event Listener (cross-tab sync)
  window.addEventListener('storage', (e) => {
    if (e.key === 'axios_latest_magazine_addon' && e.newValue) {
      try {
        const marker = JSON.parse(e.newValue);
        const bin = JSON.parse(localStorage.getItem(BIN_KEY) || '[]');
        const fullItem = bin.find(item => item.id === marker.assetId);
        if (fullItem) {
          handleIncomingAddon({
            type: 'AXIOS_MAGAZINE_INSERT_ADDON_OBJECT',
            assetId: fullItem.id,
            objectName: fullItem.name,
            objectCategory: fullItem.category,
            targetPage: fullItem.page,
            placementAnchor: fullItem.anchor,
            shadowEffect: fullItem.shadow,
            scaleFactor: fullItem.scale,
            dataUrl: fullItem.dataUrl,
            timestamp: fullItem.timestamp
          });
        }
      } catch (err) {
        console.error('Storage sync error:', err);
      }
    }
  });

  // 4. Global Clipboard Paste Listener (Ctrl+V / Cmd+V)
  window.addEventListener('paste', async (e) => {
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable)) {
      return;
    }

    if (!e.clipboardData || !e.clipboardData.items) return;

    for (const item of e.clipboardData.items) {
      if (item.type.indexOf('image') !== -1) {
        e.preventDefault();
        const blob = item.getAsFile();
        if (!blob) continue;

        const reader = new FileReader();
        reader.onload = (evt) => {
          const dataUrl = evt.target.result;
          const targetPage = getActivePageInView();
          
          const addonData = {
            assetId: 'addon_paste_' + Date.now(),
            objectName: 'Clipboard Cutout',
            objectCategory: 'spot_art',
            targetPage: targetPage,
            placementAnchor: 'free_center',
            shadowEffect: 'editorial_soft',
            scaleFactor: 60,
            dataUrl: dataUrl,
            timestamp: Date.now()
          };

          handleIncomingAddon(addonData);
          showMagazineToast(`📋 Cutout pasted onto Page ${targetPage}! Drag to reposition.`, 'success');
        };
        reader.readAsDataURL(blob);
        break;
      }
    }
  });

  // 5. Global Click Listener to Deselect on canvas click
  window.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('.axios-magazine-addon-wrapper')) {
      deselectAllAddons();
    }
  });

  // 6. Global Keyboard Shortcut Handler (Delete, Nudge)
  window.addEventListener('keydown', (e) => {
    if (!selectedAddonId) return;
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) return;

    if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      deleteSelectedAddon();
    } else if (e.key === 'Escape') {
      deselectAllAddons();
    } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      nudgeSelectedAddon(e.key, e.shiftKey ? 10 : 1);
    }
  });

  function deselectAllAddons() {
    selectedAddonId = null;
    document.querySelectorAll('.axios-magazine-addon-wrapper.is-selected').forEach(el => {
      el.classList.remove('is-selected');
    });
  }

  function deleteSelectedAddon() {
    if (!selectedAddonId) return;
    const el = document.getElementById(selectedAddonId);
    if (el) el.remove();

    Object.keys(placedAddons).forEach(pageNum => {
      placedAddons[pageNum] = placedAddons[pageNum].filter(a => a.assetId !== selectedAddonId);
    });
    savePlacedAddons();
    selectedAddonId = null;
    showMagazineToast('🗑️ Cutout removed from page', 'info');
  }

  function nudgeSelectedAddon(key, amount) {
    if (!selectedAddonId) return;
    const el = document.getElementById(selectedAddonId);
    if (!el || !el.parentElement) return;

    const parent = el.parentElement;
    const pWidth = parent.offsetWidth || 680;
    const pHeight = parent.offsetHeight || 906;

    let curLeft = parseFloat(el.style.left) || 0;
    let curTop = parseFloat(el.style.top) || 0;

    // Convert percentage to px if needed
    if (el.style.left.includes('%')) curLeft = (curLeft / 100) * pWidth;
    if (el.style.top.includes('%')) curTop = (curTop / 100) * pHeight;

    if (key === 'ArrowLeft') curLeft -= amount;
    if (key === 'ArrowRight') curLeft += amount;
    if (key === 'ArrowUp') curTop -= amount;
    if (key === 'ArrowDown') curTop += amount;

    const xPct = Math.round((curLeft / pWidth) * 1000) / 10;
    const yPct = Math.round((curTop / pHeight) * 1000) / 10;

    el.style.left = `${xPct}%`;
    el.style.top = `${yPct}%`;

    // Update data store
    Object.keys(placedAddons).forEach(pageNum => {
      const item = placedAddons[pageNum].find(a => a.assetId === selectedAddonId);
      if (item) {
        item.xPct = xPct;
        item.yPct = yPct;
        item.placementAnchor = 'custom_coord';
      }
    });
    savePlacedAddons();
  }

  /**
   * Determine currently active or visible page number
   */
  function getActivePageInView() {
    const hashMatch = window.location.hash.match(/page[_-]?(\d+)/i);
    if (hashMatch) {
      return parseInt(hashMatch[1], 10);
    }

    const activePageBtn = document.querySelector('.page-num-btn.active, .mag-thumb-btn.active, .nav-tab-btn.active');
    if (activePageBtn && activePageBtn.dataset.page) {
      const num = parseInt(activePageBtn.dataset.page, 10);
      if (!isNaN(num) && num > 0) return num;
    }

    const visibleCover = document.querySelector('.magazine-cover');
    if (visibleCover) return 1;

    return 1;
  }

  /**
   * Main Handler: Add and mount addon object
   */
  function handleIncomingAddon(data) {
    if (!data || !data.dataUrl) return;

    const pageNum = parseInt(data.targetPage || 1, 10);
    if (!placedAddons[pageNum]) {
      placedAddons[pageNum] = [];
    }

    const existingIndex = placedAddons[pageNum].findIndex(a => a.assetId === data.assetId);
    if (existingIndex >= 0) {
      placedAddons[pageNum][existingIndex] = Object.assign({}, placedAddons[pageNum][existingIndex], data);
    } else {
      placedAddons[pageNum].push(data);
    }

    savePlacedAddons();
    mountAddonToPageDOM(data, pageNum);
    navigateToPage(pageNum);
    showMagazineToast(`🎯 Added "${data.objectName || 'Cutout'}" to Page ${pageNum}!`, 'success');
  }

  /**
   * Find the exact magazine page canvas DOM element for a given page number.
   * Ensures the overlay is placed INSIDE the page plate, moving and scaling with it.
   */
  function findPageDOMElement(pageNum) {
    const num = parseInt(pageNum || 1, 10);

    // 1. Check for single Cover Plate (Page 1)
    if (num === 1) {
      const singleCover = document.querySelector('#proof-stage > .magazine-cover, .magazine-cover');
      if (singleCover) return singleCover;
    }

    // 2. Check for full 16-page sheets (.full-print-sheet / .mag-page)
    const sheets = document.querySelectorAll('.full-print-sheet');
    if (sheets.length >= num) {
      const targetSheet = sheets[num - 1];
      const innerPage = targetSheet.querySelector('.magazine-cover, .mag-page') || targetSheet;
      return innerPage;
    }

    // 3. Check for specific page attribute or class (.mag-page[data-page="..."])
    const matchedPage = document.querySelector(`.mag-page[data-page="${num}"], .mag-page[data-page-number="${num}"], .page-${num}`);
    if (matchedPage) return matchedPage;

    // 4. Check for 2-page spread view
    const spread = document.querySelector('.editorial-spread');
    if (spread) {
      const leftPage = spread.querySelector('.spread-left-page, .mag-page:first-child');
      const rightPage = spread.querySelector('.spread-right-page, .mag-page:last-child');
      if (num % 2 === 0 && leftPage) return leftPage;
      if (num % 2 !== 0 && rightPage) return rightPage;
      return spread;
    }

    // 5. Fallbacks to primary visible canvas
    return document.querySelector('.magazine-cover') ||
           document.querySelector('.mag-page') ||
           document.querySelector('.editorial-spread') ||
           document.getElementById('proof-stage') ||
           document.body;
  }

  function navigateToPage(pageNum) {
    try {
      const targetBtn = document.querySelector(`.mag-thumb-btn[data-page="${pageNum}"], .page-num-btn:nth-child(${pageNum})`);
      if (targetBtn && !targetBtn.classList.contains('active')) {
        targetBtn.click();
      }
    } catch (e) {}
  }

  /**
   * Mount single addon object to the exact page DOM with percentage-based pinning & interactive handles
   */
  function mountAddonToPageDOM(data, pageNum) {
    const pageEl = findPageDOMElement(pageNum);
    if (!pageEl) return;

    // Guarantee the page element is a relative positioning anchor
    const computedPos = window.getComputedStyle(pageEl).position;
    if (computedPos === 'static') {
      pageEl.style.position = 'relative';
    }

    const existing = document.getElementById(data.assetId);
    if (existing) existing.remove();

    const wrapper = document.createElement('div');
    wrapper.id = data.assetId;
    wrapper.className = 'axios-magazine-addon-wrapper';

    // Shadow styling
    function getShadowCss(effect) {
      if (effect === 'dramatic_drop' || effect === 'cyan_glow') {
        return 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.75)) drop-shadow(0 12px 24px rgba(0,0,0,0.65))';
      } else if (effect === 'sticker_outline') {
        return 'drop-shadow(0 0 2px #fff) drop-shadow(0 0 5px rgba(255,255,255,0.85)) drop-shadow(0 8px 16px rgba(0,0,0,0.45))';
      } else if (effect === 'none') {
        return 'none';
      }
      return 'drop-shadow(0 14px 28px rgba(0,0,0,0.6))';
    }

    const currentShadow = data.shadowEffect || 'editorial_soft';

    // Percentage width based on standard page width (680px)
    const scalePct = data.scaleFactor || 60;
    const widthPct = Math.round((scalePct / 100) * 55 * 10) / 10; // ~33% width default
    wrapper.style.width = `${widthPct}%`;
    wrapper.style.zIndex = data.zIndex || '120';

    // Position Coordinates (Percentage-based so it never drifts on zoom)
    if (data.xPct != null && data.yPct != null) {
      wrapper.style.left = `${data.xPct}%`;
      wrapper.style.top = `${data.yPct}%`;
    } else if (data.x != null && data.y != null) {
      const pWidth = pageEl.offsetWidth || 680;
      const pHeight = pageEl.offsetHeight || 906;
      const xP = Math.round((data.x / pWidth) * 1000) / 10;
      const yP = Math.round((data.y / pHeight) * 1000) / 10;
      wrapper.style.left = `${xP}%`;
      wrapper.style.top = `${yP}%`;
    } else {
      // Preset anchor positions
      if (data.placementAnchor === 'float_right') {
        wrapper.style.top = '15%';
        wrapper.style.left = '58%';
      } else if (data.placementAnchor === 'float_left') {
        wrapper.style.top = '15%';
        wrapper.style.left = '8%';
      } else if (data.placementAnchor === 'top_right') {
        wrapper.style.top = '4%';
        wrapper.style.left = '62%';
      } else if (data.placementAnchor === 'bottom_right') {
        wrapper.style.top = '65%';
        wrapper.style.left = '58%';
      } else if (data.placementAnchor === 'cover_hero') {
        wrapper.style.top = '42%';
        wrapper.style.left = '25%';
      } else {
        wrapper.style.top = '30%';
        wrapper.style.left = '32%';
      }
    }

    // Check if near top to flip toolbar down
    const curTopPct = parseFloat(wrapper.style.top) || 30;
    if (curTopPct < 10) {
      wrapper.classList.add('toolbar-flip-bottom');
    }

    // Render HTML with 8 Resize Handles + Persistent Toolbar Bridge
    wrapper.innerHTML = `
      <!-- Floating Action Toolbar with Continuous Hit-Bridge -->
      <div class="axios-addon-toolbar-wrap">
        <div class="axios-addon-toolbar">
          <span style="color:#38bdf8; font-size:11px; font-weight:800; font-family:'DM Sans',sans-serif; display:flex; align-items:center; gap:3px;">
            <span>🎯</span> <span>${data.objectName || 'Spot Art'}</span>
          </span>
          <span class="axios-addon-size-pill">${scalePct}%</span>
          <button type="button" class="axios-addon-toolbar-btn btn-addon-scale-down" title="Scale Down (➖)">➖</button>
          <button type="button" class="axios-addon-toolbar-btn btn-addon-scale-up" title="Scale Up (➕)">➕</button>
          <button type="button" class="axios-addon-toolbar-btn btn-addon-shadow" title="Cycle Shadow Finish (🌓)">🌓</button>
          <button type="button" class="axios-addon-toolbar-btn btn-addon-layer-up" title="Bring Forward (▲)">▲</button>
          <button type="button" class="axios-addon-toolbar-btn btn-addon-layer-down" title="Send Backward (▼)">▼</button>
          <button type="button" class="axios-addon-toolbar-btn btn-danger btn-addon-delete" title="Remove Cutout (Delete)">🗑️</button>
        </div>
      </div>

      <!-- 8 Interactive Corner & Edge Resize Handles -->
      <div class="axios-addon-handle handle-nw" data-handle="nw"></div>
      <div class="axios-addon-handle handle-ne" data-handle="ne"></div>
      <div class="axios-addon-handle handle-sw" data-handle="sw"></div>
      <div class="axios-addon-handle handle-se" data-handle="se"></div>
      <div class="axios-addon-handle handle-n"  data-handle="n"></div>
      <div class="axios-addon-handle handle-s"  data-handle="s"></div>
      <div class="axios-addon-handle handle-w"  data-handle="w"></div>
      <div class="axios-addon-handle handle-e"  data-handle="e"></div>

      <!-- Main Cutout Artwork Image -->
      <img src="${data.dataUrl}" alt="${data.objectName}" class="addon-artwork-img" style="filter: ${getShadowCss(currentShadow)};">
    `;

    // 1. Selection Handler
    wrapper.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.axios-addon-toolbar-btn') || e.target.classList.contains('axios-addon-handle')) return;
      deselectAllAddons();
      wrapper.classList.add('is-selected');
      selectedAddonId = data.assetId;
    });

    // 2. Toolbar Action: Delete
    const btnDel = wrapper.querySelector('.btn-addon-delete');
    if (btnDel) {
      btnDel.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        wrapper.remove();
        if (placedAddons[pageNum]) {
          placedAddons[pageNum] = placedAddons[pageNum].filter(a => a.assetId !== data.assetId);
          savePlacedAddons();
        }
        selectedAddonId = null;
        showMagazineToast('🗑️ Cutout removed from page', 'info');
      });
    }

    // 3. Toolbar Action: Scale Up / Down
    const btnDown = wrapper.querySelector('.btn-addon-scale-down');
    const btnUp = wrapper.querySelector('.btn-addon-scale-up');
    const sizePill = wrapper.querySelector('.axios-addon-size-pill');

    function updateScale(newScale) {
      newScale = Math.max(15, Math.min(250, newScale));
      data.scaleFactor = newScale;
      const newWidthPct = Math.round((newScale / 100) * 55 * 10) / 10;
      wrapper.style.width = `${newWidthPct}%`;
      if (sizePill) sizePill.textContent = `${newScale}%`;
      savePlacedAddons();
    }

    if (btnDown) {
      btnDown.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        updateScale((data.scaleFactor || 60) - 10);
      });
    }

    if (btnUp) {
      btnUp.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        updateScale((data.scaleFactor || 60) + 10);
      });
    }

    // 4. Toolbar Action: Shadow Cycle
    const btnShadow = wrapper.querySelector('.btn-addon-shadow');
    if (btnShadow) {
      const shadowOptions = ['editorial_soft', 'dramatic_drop', 'sticker_outline', 'none'];
      btnShadow.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const curIdx = shadowOptions.indexOf(data.shadowEffect || 'editorial_soft');
        const nextEffect = shadowOptions[(curIdx + 1) % shadowOptions.length];
        data.shadowEffect = nextEffect;
        const img = wrapper.querySelector('.addon-artwork-img');
        if (img) img.style.filter = getShadowCss(nextEffect);
        savePlacedAddons();
        showMagazineToast(`🌓 Shadow: ${nextEffect.replace('_', ' ').toUpperCase()}`, 'info');
      });
    }

    // 5. Toolbar Action: Layer Up / Down
    const btnLayerUp = wrapper.querySelector('.btn-addon-layer-up');
    const btnLayerDown = wrapper.querySelector('.btn-addon-layer-down');

    if (btnLayerUp) {
      btnLayerUp.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        let curZ = parseInt(wrapper.style.zIndex, 10) || 120;
        curZ = Math.min(9999, curZ + 10);
        wrapper.style.zIndex = curZ;
        data.zIndex = curZ;
        savePlacedAddons();
      });
    }

    if (btnLayerDown) {
      btnLayerDown.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        let curZ = parseInt(wrapper.style.zIndex, 10) || 120;
        curZ = Math.max(10, curZ - 10);
        wrapper.style.zIndex = curZ;
        data.zIndex = curZ;
        savePlacedAddons();
      });
    }

    // 6. Interactive Drag Movement (Zoom & Scale Invariant)
    setupDragMovement(wrapper, pageEl, (newXPct, newYPct) => {
      data.xPct = newXPct;
      data.yPct = newYPct;
      data.placementAnchor = 'custom_coord';
      savePlacedAddons();
    });

    // 7. Interactive Corner & Edge Resizing
    setupCornerResizing(wrapper, pageEl, (newScalePct, newWidthPct) => {
      data.scaleFactor = newScalePct;
      if (sizePill) sizePill.textContent = `${newScalePct}%`;
      savePlacedAddons();
    });

    // 8. Mouse Wheel Zoom / Scale on Selected Object
    wrapper.addEventListener('wheel', (e) => {
      if (wrapper.classList.contains('is-selected')) {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 5 : -5;
        updateScale((data.scaleFactor || 60) + delta);
      }
    }, { passive: false });

    pageEl.appendChild(wrapper);
  }

  /**
   * Smooth, Zoom-Invariant Dragging Mechanism
   */
  function setupDragMovement(el, parent, onPositionChange) {
    let isDragging = false;
    let startX, startY;
    let initialLeftPct, initialTopPct;

    el.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.axios-addon-toolbar-btn') || e.target.classList.contains('axios-addon-handle')) return;
      isDragging = true;
      el.classList.add('is-dragging');
      el.setPointerCapture(e.pointerId);

      startX = e.clientX;
      startY = e.clientY;

      const pRect = parent.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // Store initial percentage offsets
      initialLeftPct = ((elRect.left - pRect.left) / pRect.width) * 100;
      initialTopPct = ((elRect.top - pRect.top) / pRect.height) * 100;

      e.preventDefault();
      e.stopPropagation();
    });

    el.addEventListener('pointermove', (e) => {
      if (!isDragging) return;

      const pRect = parent.getBoundingClientRect();
      if (pRect.width === 0 || pRect.height === 0) return;

      // Delta as percentage of current visible page width/height (automatically accounts for zoom/scale)
      const dxPct = ((e.clientX - startX) / pRect.width) * 100;
      const dyPct = ((e.clientY - startY) / pRect.height) * 100;

      let newLeftPct = Math.round((initialLeftPct + dxPct) * 10) / 10;
      let newTopPct = Math.round((initialTopPct + dyPct) * 10) / 10;

      // Constrain within visible margin (-15% to 95%)
      newLeftPct = Math.max(-15, Math.min(95, newLeftPct));
      newTopPct = Math.max(-15, Math.min(95, newTopPct));

      el.style.left = `${newLeftPct}%`;
      el.style.top = `${newTopPct}%`;

      // Flip toolbar if near top
      if (newTopPct < 10) {
        el.classList.add('toolbar-flip-bottom');
      } else {
        el.classList.remove('toolbar-flip-bottom');
      }
    });

    const finishDrag = (e) => {
      if (isDragging) {
        isDragging = false;
        el.classList.remove('is-dragging');
        try { el.releasePointerCapture(e.pointerId); } catch (err) {}

        const finalLeftPct = parseFloat(el.style.left) || 0;
        const finalTopPct = parseFloat(el.style.top) || 0;

        if (onPositionChange) onPositionChange(finalLeftPct, finalTopPct);
      }
    };

    el.addEventListener('pointerup', finishDrag);
    el.addEventListener('pointercancel', finishDrag);
  }

  /**
   * 8-Point Corner & Edge Drag Resizing Mechanism
   */
  function setupCornerResizing(wrapper, parent, onResizeComplete) {
    const handles = wrapper.querySelectorAll('.axios-addon-handle');

    handles.forEach(handle => {
      let isResizing = false;
      let startX, startY;
      let startWidthPx;
      let handleType;

      handle.addEventListener('pointerdown', (e) => {
        isResizing = true;
        handleType = handle.dataset.handle;
        startX = e.clientX;
        startY = e.clientY;

        startWidthPx = wrapper.offsetWidth;
        handle.setPointerCapture(e.pointerId);

        e.preventDefault();
        e.stopPropagation();
      });

      handle.addEventListener('pointermove', (e) => {
        if (!isResizing) return;

        const pRect = parent.getBoundingClientRect();
        if (pRect.width === 0) return;

        // Current zoom ratio
        const zoomScale = pRect.width / (parent.offsetWidth || 680);
        const dx = (e.clientX - startX) / (zoomScale || 1);
        const dy = (e.clientY - startY) / (zoomScale || 1);

        let delta = dx;
        if (handleType === 'se' || handleType === 'e') delta = dx;
        else if (handleType === 'sw' || handleType === 'w') delta = -dx;
        else if (handleType === 'ne') delta = dx;
        else if (handleType === 'nw') delta = -dx;
        else if (handleType === 's') delta = dy;
        else if (handleType === 'n') delta = -dy;

        const newWidthPx = Math.max(80, Math.min(800, startWidthPx + delta));
        const pWidth = parent.offsetWidth || 680;
        const newWidthPct = Math.round((newWidthPx / pWidth) * 1000) / 10;
        const scalePct = Math.round((newWidthPx / (pWidth * 0.55)) * 100);

        wrapper.style.width = `${newWidthPct}%`;
        const sizePill = wrapper.querySelector('.axios-addon-size-pill');
        if (sizePill) sizePill.textContent = `${scalePct}%`;
      });

      const finishResize = (e) => {
        if (isResizing) {
          isResizing = false;
          try { handle.releasePointerCapture(e.pointerId); } catch (err) {}

          const pWidth = parent.offsetWidth || 680;
          const finalWidthPx = wrapper.offsetWidth;
          const finalWidthPct = Math.round((finalWidthPx / pWidth) * 1000) / 10;
          const finalScalePct = Math.round((finalWidthPx / (pWidth * 0.55)) * 100);

          if (onResizeComplete) onResizeComplete(finalScalePct, finalWidthPct);
        }
      };

      handle.addEventListener('pointerup', finishResize);
      handle.addEventListener('pointercancel', finishResize);
    });
  }

  /**
   * Re-mount all stored addons across page mutations / tab switches
   */
  function reMountAllAddons() {
    Object.keys(placedAddons).forEach(pStr => {
      const pNum = parseInt(pStr, 10);
      const list = placedAddons[pNum] || [];
      list.forEach(addon => {
        if (!document.getElementById(addon.assetId)) {
          mountAddonToPageDOM(addon, pNum);
        }
      });
    });
  }

  const observer = new MutationObserver(() => {
    reMountAllAddons();
  });

  window.addEventListener('DOMContentLoaded', () => {
    const stage = document.getElementById('proof-stage') || document.body;
    observer.observe(stage, { childList: true, subtree: true });
    
    setTimeout(() => {
      reMountAllAddons();
      checkInitialQueue();
    }, 400);
  });

  function checkInitialQueue() {
    try {
      const bin = JSON.parse(localStorage.getItem(BIN_KEY) || '[]');
      if (bin.length > 0) {
        const latest = bin[0];
        if (Date.now() - latest.timestamp < 120000) {
          const pageNum = latest.page || 1;
          const alreadyPlaced = (placedAddons[pageNum] || []).some(a => a.assetId === latest.id);
          if (!alreadyPlaced) {
            handleIncomingAddon({
              type: 'AXIOS_MAGAZINE_INSERT_ADDON_OBJECT',
              assetId: latest.id,
              objectName: latest.name,
              objectCategory: latest.category,
              targetPage: latest.page,
              placementAnchor: latest.anchor,
              shadowEffect: latest.shadow,
              scaleFactor: latest.scale,
              dataUrl: latest.dataUrl,
              timestamp: latest.timestamp
            });
          }
        }
      }
    } catch (e) {}
  }

  function showMagazineToast(msg, type = 'info') {
    const existing = document.querySelector('.axios-magazine-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'axios-magazine-toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '28px';
    toast.style.right = '28px';
    toast.style.background = type === 'success' ? 'linear-gradient(135deg, #0284c7, #2563eb)' : '#0f172a';
    toast.style.color = '#ffffff';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '12px';
    toast.style.fontWeight = '700';
    toast.style.fontFamily = '"Plus Jakarta Sans", sans-serif';
    toast.style.zIndex = '999999';
    toast.style.boxShadow = '0 12px 32px rgba(0,0,0,0.5)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '8px';
    toast.style.border = '1px solid rgba(255,255,255,0.2)';
    toast.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    toast.innerHTML = `<span>${msg}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      setTimeout(() => toast.remove(), 350);
    }, 4500);
  }

  window.AxiosMagazineReceiver = {
    insertAddon: handleIncomingAddon,
    getPlacedAddons: () => placedAddons,
    clearPlacedAddons: () => {
      placedAddons = {};
      savePlacedAddons();
      document.querySelectorAll('.axios-magazine-addon-wrapper').forEach(el => el.remove());
    },
    deselect: deselectAllAddons
  };
})();
