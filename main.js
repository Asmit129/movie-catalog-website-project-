let cameFromFlightInfoOverlay = false; // Track if we entered from the Flight Info tile

  cameFromFlightInfoOverlay = true;

if (overlayOpen || cameFromOverlaySearch || cameFromFlightInfoOverlay) {

    
      // If overlay was open, we need to preserve whichever flag was active
      // or infer it based on what type of search it was.
      if (overlayOpen) {
        if (searchOverlay && searchOverlay.dataset.searchType === "flights") {
          cameFromFlightInfoOverlay = true;
        } else {
          cameFromOverlaySearch = true;
        }
      }

      if (isMobile && (cameFromOverlaySearch || cameFromFlightInfoOverlay)) {
        const returnToFlightInfo = cameFromFlightInfoOverlay;
        cameFromOverlaySearch = false; // Reset flag
        cameFromFlightInfoOverlay = false; // Reset flag


          if (returnToFlightInfo) {
          // Explicitly set up overlay with flight content
          const overlay = document.getElementById("searchOverlay");
          if (overlay) {
            renderSearchInOverlay = true;
            overlay.classList.add("show");
            document.body.classList.add("overlay-active");
            overlay.dataset.searchType = "flights";
            
            // Note: overlayCurrentSearchTerm is intentionally preserved
            const searchInput = document.getElementById("searchOverlayInput");
            if (searchInput) {
              searchInput.value = overlayCurrentSearchTerm;
              let searchPlaceholderText = getTranslatedText("search.placeholder", "Search");
              const mainSearchInput = document.querySelector(".search-main-input");
              if (mainSearchInput && mainSearchInput.placeholder) {
                searchPlaceholderText = mainSearchInput.placeholder;
              }
              searchInput.placeholder = searchPlaceholderText;
            }

            const flightGrid = document.querySelector(".flight-grid");
            const overlayContent = document.getElementById("searchModalContent");
            if (flightGrid && overlayContent) {
              overlayContent.innerHTML = "";
              overlayContent.appendChild(flightGrid);
            }

            if (typeof filterFlightCards === "function") {
              filterFlightCards(overlayCurrentSearchTerm);
            }
            updateOverlayBackgroundMode(true);
            
            // Re-set flag so subsequent navigation still works
            cameFromFlightInfoOverlay = true;
          }
        } else {
          // Re-open generic search overlay
          showSearchOverlay(overlayCurrentSearchTerm || "");
        }
