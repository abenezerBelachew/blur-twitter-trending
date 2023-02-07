const observer = new MutationObserver(() => {
    // Select the trending section on the page
    const trendingSection = document.querySelectorAll(".css-1dbjc4n.r-x572qd.r-1d6w8o1.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x")[1];
  
    // If the trending section exists, apply a blur filter to the 
    // trending section
    if (trendingSection) {
      trendingSection.style.filter = "blur(30px)";
  
      // When the mouse is over the trending section, remove the blur filter
      trendingSection.addEventListener("mouseover", () => {
        trendingSection.style.filter = "none";
      });

     //   If you want to add a timer before it unblurs, uncomment this.
     //   let timer;
     //   trendingSection.addEventListener("mouseover", () => {
     //     timer = setTimeout(() => {
     //         trendingSection.style.filter = "none"
     //     }, 5000);
     //   });
  
      // When the mouse leaves the trending section, re-apply the blur filter
      trendingSection.addEventListener("mouseout", () => {
        trendingSection.style.filter = "blur(30px)";
      });
  
      // Disconnect the observer so it doesn't run again
      observer.disconnect();
    }
  });
  
  // Observe changes to the body element and its children
  observer.observe(document.body, { childList: true, subtree: true });