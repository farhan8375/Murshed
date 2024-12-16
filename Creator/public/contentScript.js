// // contentScript.js

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.callFunction === "toggleSidebar") {
//     // toggleSidebar function ko call karenge
//     toggleSidebar();
//     sendResponse({ status: "success" });
//   }
// });

// // Function to toggle the sidebar
// function toggleSidebar() {

//   const sidebarFrame = document.getElementById("sidebarframe");
//   if (sidebarFrame) {
//     // Agar sidebarFrame exist karta hai toh display toggle karo
//     sidebarFrame.style.display =
//       sidebarFrame.style.display === "none" ? "block" : "none";
//   } else {
//     // Agar sidebarFrame nahi hai toh initializeSidebar function ko call karo
//     initializeSidebar();
//   }
// }

// // Function to initialize the floating icon
// function initializeIcon() {
//   const icon = document.createElement("img"); // img element use karenge to load SVG
//   icon.id = "floatingIcon";

//   // Set the source of the icon to the SVG file
//   icon.src = chrome.runtime.getURL("img/Frame1.svg"); // SVG ka path set karo

//   // Icon styling
//   icon.style.width = "50px";
//   icon.style.height = "50px";
//   icon.style.position = "fixed";
//   icon.style.bottom = "20px";
//   icon.style.right = "20px";
//   icon.style.zIndex = "1000";
//   icon.style.cursor = "pointer";

//   // Add click event to toggle the sidebar
//   icon.addEventListener("click", () => {
//     toggleSidebar();
//   });

//   // Append icon to the page
//   document.body.appendChild(icon);
// }
// // Function to initialize the sidebar
// function initializeSidebar() {
//   debugger

//   const iframe = document.createElement("iframe");
//   iframe.id = "sidebarframe";

//   // Set the source of the iframe
//   iframe.src = chrome.runtime.getURL("index.html"); // Extension ke page ka URL set karo

//   // Add multiple classes correctly
//   iframe.classList.add("sidebar-right-wt", "sidebar-left-wt");

//   // Append iframe to the body
//   document.body.appendChild(iframe); // iframe ko page pe append karenge
// }
// initializeIcon();

// contentScript.js

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.callFunction === "toggleSidebar") {
//     toggleSidebar();
//     sendResponse({ status: "success" });
//   }
// });

// // Function to switch icons with a swipe effect
// function switchIcon() {
//   const icon = document.getElementById("floatingIcon");

//   // Add swipe effect class for animation
//   icon.classList.add("swipe");

//   // Change to the new icon after the swipe animation
//   setTimeout(() => {
//     icon.src = chrome.runtime.getURL("img/Frame157.svg"); // Switch to `Button.svg`
//     icon.src = chrome.runtime.getURL("img/Button.svg"); // Switch to `Button.svg`
//     icon.style.width = "100px";
//     icon.classList.remove("swipe");

//     // Update click event to open the sidebar on the new icon
//     icon.removeEventListener("click", switchIcon);
//     icon.addEventListener("click", toggleSidebar);
//   }, 300); // Adjust this time to match the CSS animation duration
// }

// // Function to toggle the sidebar
// function toggleSidebar() {
//   const sidebarFrame = document.getElementById("sidebarframe");

//   if (sidebarFrame) {
//     // Toggle the sidebar's visibility
//     sidebarFrame.style.display = sidebarFrame.style.display === "none" ? "block" : "none";
//   } else {
//     // Initialize sidebar if it doesn't exist
//     initializeSidebar();
//   }
// }

// // Function to initialize the floating icon
// function initializeIcon() {
//   const icon = document.createElement("img");
//   icon.id = "floatingIcon";

//   // Set initial icon (`Frame1.svg`)
//   icon.src = chrome.runtime.getURL("img/Frame1.svg");

//   // Icon styling
//   icon.style.width = "50px";
//   icon.style.height = "50px";
//   icon.style.position = "fixed";
//   icon.style.bottom = "20px";
//   icon.style.right = "20px";
//   icon.style.zIndex = "1000";
//   icon.style.cursor = "pointer";

//   // Set the initial click event to switch to `Button.svg`
//   icon.addEventListener("click", switchIcon);

//   // Append the icon to the page
//   document.body.appendChild(icon);
// }

// // Function to initialize the sidebar
// function initializeSidebar() {
//   const iframe = document.createElement("iframe");
//   iframe.id = "sidebarframe";
//   iframe.src = chrome.runtime.getURL("index.html"); // URL of the extension page
//   iframe.classList.add("sidebar-right-wt", "sidebar-left-wt");

//   // Append the iframe to the body
//   document.body.appendChild(iframe);
// }

// // Initialize the icon on page load
// initializeIcon();

// function initializeIcons() {
// const iconContainer = document.createElement("div");
// iconContainer.style.position = "fixed";
// iconContainer.style.bottom = "40px";
// iconContainer.style.right = "40px"; // Position at the bottom right
// iconContainer.style.zIndex = "1000";
// iconContainer.style.display = "flex";
// iconContainer.style.gap = "3px"; // Space between icons

//   // First icon (Chevronsright) - yehi initially visible hoga
//   const Frame1= document.createElement("img");
//   Frame1.src = chrome.runtime.getURL("img/Frame1.svg");
//   Frame1.style.width = "40px";
//   Frame1.style.height = "40px";
//   Frame1.style.cursor = "pointer";

//   // Pehle icon par click se yeh icon hide hoga aur baaki icons show honge
//   Frame1.addEventListener("click", () => {
//     Frame1.style.display = "none"; // Hide first icon
//     showAllIcons(); // Show all other icons
//   });

//   // Baaki icons banate hain, jo initially hidden rahenge
//   const frame156Icon = createIcon("img/Frame156.svg", null, toggleSidebar); // Sidebar toggle icon
//   const frame58Icon = createIcon("img/Frame58.svg", "Frame58 icon clicked!");
//   const buttonIcon = createIcon("img/Frame157.svg", "Button icon clicked!");
//   const frame157Icon = createIcon(
//     "img/Button.svg",
//     "Button icon clicked!",
//     null,
//     "100px"
//   );
//   const frame158Icon = createIcon(
//     "img/Chevronsright.svg",
//     "Chevronsright icon clicked!",
//     null,
//     "40px",
//     "5px"
//   );

//   // Baaki icons ko initially hide karenge
//   frame156Icon.style.display = "none";
//   frame58Icon.style.display = "none";
//   buttonIcon.style.display = "none";
//   frame157Icon.style.display = "none";
//   frame158Icon.style.display = "none";

//   // Show all icons function
//   function showAllIcons() {
//     frame156Icon.style.display = "block";
//     frame58Icon.style.display = "block";
//     buttonIcon.style.display = "block";
//     frame157Icon.style.display = "block";
//     frame158Icon.style.display = "block";
//   }

//   // Helper function to create icons with common styles
//   function createIcon(
//     src,
//     alertMessage = null,
//     clickFunction = null,
//     width = "30px",
//     marginBottom = "0px"
//   ) {
//     const icon = document.createElement("img");
//     icon.src = chrome.runtime.getURL(src);
//     icon.style.width = width;
//     icon.style.height = "30px";
//     icon.style.marginBottom = marginBottom;
//     icon.style.cursor = "pointer";

//     if (alertMessage) {
//       icon.addEventListener("click", () => alert(alertMessage));
//     }
//     if (clickFunction) {
//       icon.addEventListener("click", clickFunction);
//     }
//     return icon;
//   }

//   // Append pehla icon aur baaki icons ko icon container mein
//   iconContainer.appendChild(Frame1);
//   iconContainer.appendChild(frame158Icon);
//   iconContainer.appendChild(frame156Icon);
//   iconContainer.appendChild(frame58Icon);
//   iconContainer.appendChild(buttonIcon);
//   iconContainer.appendChild(frame157Icon);

//   // Icon container ko page mein add karte hain
//   document.body.appendChild(iconContainer);
// }

// // Function to toggle the sidebar
// function toggleSidebar() {
//   const sidebarFrame = document.getElementById("sidebarframe");

//   if (sidebarFrame) {
//     // Sidebar ki visibility toggle karenge
//     sidebarFrame.style.display =
//       sidebarFrame.style.display === "none" ? "block" : "none";
//   } else {
//     // Agar sidebar nahi hai, toh initialize karenge
//     initializeSidebar();
//   }
// }

// // Function to initialize sidebar agar pehli dafa open ho raha hai
// function initializeSidebar() {
//   const iframe = document.createElement("iframe");
//   iframe.id = "sidebarframe";
//   iframe.src = chrome.runtime.getURL("index.html"); // Sidebar ka URL
//   iframe.style.position = "fixed";
//   iframe.style.top = "0";
//   iframe.style.right = "0";
//   iframe.style.width = "300px";
//   iframe.style.height = "100%";
//   iframe.style.border = "none";
//   iframe.style.zIndex = "1001"; // Sidebar sabse upar dikhna chahiye
//   iframe.style.backgroundColor = "#fff"; // Solid background to prevent transparency
//   iframe.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)"; // Shadow for better visibility

//   // Page ke body mein iframe (sidebar) ko add karenge
//   document.body.appendChild(iframe);
// }

// // Page load hone par icons initialize karte hain
// initializeIcons();

// contentScript.js

// Function to initialize icons
// Function to initialize icons

// function initializeIcons() {
//   // Container for primary icons
//   const iconContainer = document.createElement("div");
//   iconContainer.style.position = "fixed";
//   iconContainer.style.bottom = "20px";
//   iconContainer.style.right = "47px";
//   iconContainer.style.zIndex = "1000";
//   iconContainer.style.display = "flex";
//   iconContainer.style.gap = "3px";

//   // Primary icon (Frame1.svg)
//   const frame1Icon = document.createElement("img");
//   frame1Icon.id = "frame1Icon";
//   frame1Icon.src = chrome.runtime.getURL("img/Frame1.svg");
//   frame1Icon.style.width = "50px";
//   frame1Icon.style.height = "50px";
//   frame1Icon.style.cursor = "pointer";

//   // Secondary icons (Button.svg and Frame157.svg), initially hidden
//   const buttonIcon = document.createElement("img");
//   buttonIcon.src = chrome.runtime.getURL("img/Button.svg");
//   buttonIcon.style.width = "100px";
//   buttonIcon.style.height = "50px";
//   buttonIcon.style.cursor = "pointer";
//   buttonIcon.style.display = "none";

//   const frame157Icon = document.createElement("img");
//   frame157Icon.src = chrome.runtime.getURL("img/Frame157.svg");
//   frame157Icon.style.width = "35px";
//   frame157Icon.style.height = "35px";
//   frame157Icon.style.cursor = "pointer";
//   frame157Icon.style.marginTop = "7px";
//   frame157Icon.style.display = "none";

//   const frame58Icon = document.createElement("img");
//   frame58Icon.src = chrome.runtime.getURL("img/Frame58.svg");
//   frame58Icon.style.width = "35px";
//   frame58Icon.style.height = "35px";
//   frame58Icon.style.cursor = "pointer";
//   frame58Icon.style.marginTop = "7px";
//   frame58Icon.style.display = "none";

//   const frame156Icon = document.createElement("img");
//   frame156Icon.src = chrome.runtime.getURL("img/Frame156.svg");
//   frame156Icon.style.width = "35px";
//   frame156Icon.style.height = "35px";
//   frame156Icon.style.cursor = "pointer";
//   frame156Icon.style.marginTop = "7px";
//   frame156Icon.style.display = "none";

//   const ChevronsRightIcone = document.createElement("img");
//   ChevronsRightIcone.src = chrome.runtime.getURL("img/ChevronsRight.svg");
//   ChevronsRightIcone.style.width = "25px";
//   ChevronsRightIcone.style.height = "25px";
//   ChevronsRightIcone.style.marginTop = "11px";
//   ChevronsRightIcone.style.cursor = "pointer";
//   ChevronsRightIcone.style.display = "none";

//   // Event to switch icons with a swipe effect on Frame1 icon click
//   frame1Icon.addEventListener("click", () => {
//     frame1Icon.classList.add("swipe-animation");

//     setTimeout(() => {
//       frame1Icon.style.display = "none"; // Hide Frame1 icon after animation
//       buttonIcon.style.display = "block"; // Show Button icon
//       frame157Icon.style.display = "block"; // Show Frame157 icon
//       frame58Icon.style.display = "block"; // Show Frame58 icon
//       frame156Icon.style.display = "block"; // Show Frame156 icon
//       ChevronsRightIcone.style.display = "block"; // Show ChevronsRight icon
//       logoContainer.style.display = "block";
//       frame1Icon.classList.remove("swipe-animation"); // Remove animation class
//     }, 500); // Match this duration with the CSS animation duration
//   });

//   // Event to hide all icons and show only Frame1 icon when ChevronsRightIcone is clicked
//   ChevronsRightIcone.addEventListener("click", () => {
//     ChevronsRightIcone.classList.add("swipe-animation");

//     setTimeout(() => {
//       // Hide all icons
//       buttonIcon.style.display = "none";
//       frame157Icon.style.display = "none";
//       frame58Icon.style.display = "none";
//       frame156Icon.style.display = "none";
//       ChevronsRightIcone.style.display = "none";
//       logoContainer.style.display = "none";

//       // Show only Frame1 icon
//       frame1Icon.style.display = "block";
//       ChevronsRightIcone.classList.remove("swipe-animation"); // Remove animation class
//     }, 500); // Match this duration with the CSS animation duration
//   });

//   // Event to toggle sidebar when Button.svg is clicked
//   buttonIcon.addEventListener("click", toggleContainer);

//   // Event to create a container with text on Frame58.svg icon click

//   function toggleContainer() {
//     const ToggleFrame = document.getElementById("iframe");

//     if (ToggleFrame) {
//       ToggleFrame.style.display =
//         ToggleFrame.style.display === "none" ? "block" : "none";
//     } else {
//       ToggleMudle();
//     }
//   }

//   function ToggleMudle() {
//     // Create a new container for text
//     const textContainer = document.createElement("div");
//     textContainer.id = "iframe";
//     textContainer.style.position = "fixed";
//     textContainer.style.bottom = "80px";
//     textContainer.style.right = "45px";
//     textContainer.style.width = "280px";
//     textContainer.style.height = "174px";
//     textContainer.style.padding = "10px";
//     textContainer.style.backgroundColor = "white";
//     textContainer.style.border = "1px solid #ccc";
//     textContainer.style.borderRadius = "8px";
//     textContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
//     textContainer.style.zIndex = "1001";

//     // Add some text to the container
//     const title = document.createElement("div");
//     title.innerText = "Workflow Assistant";
//     title.style.color = "#007bff"; // Blue color for title
//     title.style.fontSize = "16px";
//     title.style.fontWeight = "bold";
//     title.style.marginBottom = "8px";
//     title.style.cursor = "pointer";
//     const description = document.createElement("div");
//     description.innerText =
//       "Guides a user step-by-step through tasks to help you complete workflows effortlessly.";
//     description.style.color = "#333"; // Darker color for description
//     description.style.fontSize = "12px";
//     description.style.lineHeight = "1.5";
//     description.style.marginBottom = "12px";

//     // Add a separator line
//     const separator = document.createElement("hr");
//     separator.style.border = "0";
//     separator.style.borderTop = "1px solid #ddd";
//     separator.style.margin = "12px 0";

//     // Second title and description for the "Context Assistant"
//     const title2 = document.createElement("div");
//     title2.innerText = "Context Assistant";
//     title2.style.color = "#007bff"; // Same blue color
//     title2.style.fontSize = "16px";
//     title2.style.fontWeight = "bold";
//     title2.style.marginBottom = "8px";
//     title2.style.cursor = "pointer";

//     const description2 = document.createElement("div");
//     description2.innerText =
//       "Provides relevant info right where the users are, so they always have the help they need.";
//     description2.style.color = "#333";
//     description2.style.fontSize = "12px";
//     description2.style.lineHeight = "1.5";

//     // Append the elements to the container
//     textContainer.appendChild(title);
//     textContainer.appendChild(description);
//     textContainer.appendChild(separator);
//     textContainer.appendChild(title2);
//     textContainer.appendChild(description2);

//     // Append the text container to the body
//     document.body.appendChild(textContainer);
//   }

//   // Append icons to the container
//   iconContainer.appendChild(frame1Icon);
//   iconContainer.appendChild(ChevronsRightIcone);
//   iconContainer.appendChild(frame156Icon);
//   iconContainer.appendChild(frame58Icon);
//   iconContainer.appendChild(frame157Icon);
//   iconContainer.appendChild(buttonIcon);

//   // Append the icon container to the body
//   document.body.appendChild(iconContainer);

//   // Second div with Logo.svg
//   const logoContainer = document.createElement("div");
//   logoContainer.style.position = "fixed";
//   logoContainer.style.bottom = "7px"; // Adjust this position if needed
//   logoContainer.style.right = "19px";
//   logoContainer.style.zIndex = "1000";
//   logoContainer.style.display = "none";

//   const logoIcon = document.createElement("img");
//   logoIcon.src = chrome.runtime.getURL("img/Logo.svg");
//   logoIcon.style.width = "80%"; // Adjust size as needed
//   logoIcon.style.height = "80%";
//   buttonIcon.style.display = "none";

//   // Append Logo.svg to logoContainer
//   logoContainer.appendChild(logoIcon);

//   // Append the logo container to the body (below iconContainer)
//   document.body.appendChild(logoContainer);
// }

// // Function to toggle the sidebar
// function toggleSidebar() {
//   const sidebarFrame = document.getElementById("sidebarframe");

//   if (sidebarFrame) {
//     sidebarFrame.style.display =
//       sidebarFrame.style.display === "none" ? "block" : "none";
//   } else {
//     initializeSidebar();
//   }
// }

// // Function to initialize the sidebar
// function initializeSidebar() {
//   const iframe = document.createElement("iframe");
//   iframe.id = "sidebarframe";
//   iframe.src = chrome.runtime.getURL("index.html");
//   iframe.classList.add("sidebar-right-wt", "sidebar-left-wt");
//   iframe.style.position = "fixed";
//   iframe.style.top = "5%";
//   iframe.style.left = "71%";
//   iframe.style.width = "300px";
//   iframe.style.height = "78%";
//   iframe.style.border = "none";
//   iframe.style.zIndex = "1001";
//   iframe.style.backgroundColor = "#fff";
//   iframe.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

//   document.body.appendChild(iframe);
// }

// // Initialize icons on page load
// initializeIcons();


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.callFunction === "toggleSidebar") {
    // toggleSidebar function ko call karenge
    toggleSidebar();
    sendResponse({ status: "success" });
  }
});

function initializeIcons() {
  // Container for primary icons
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("initializeIcons");

  // Primary icon (Frame1.svg)
  const frame1Icon = document.createElement("img");
  frame1Icon.id = "frame1Icon";
  frame1Icon.src = chrome.runtime.getURL("img/Frame1.svg");
  frame1Icon.classList.add("icon2");

  // Secondary icons, initially hidden
  const buttonIcon = document.createElement("img");
  buttonIcon.src = chrome.runtime.getURL("img/Button.svg");
  buttonIcon.classList.add("buttonIcon");

  const frame157Icon = document.createElement("img");
  frame157Icon.src = chrome.runtime.getURL("img/Frame157.svg");
  frame157Icon.classList.add("icons");
  const frame58Icon = document.createElement("img");

  frame58Icon.src = chrome.runtime.getURL("img/Frame58.svg");
  frame58Icon.classList.add("icons");

  const frame156Icon = document.createElement("img");
  frame156Icon.src = chrome.runtime.getURL("img/Frame156.svg");
  frame156Icon.classList.add("icons");

  const ChevronsRightIcone = document.createElement("img");
  ChevronsRightIcone.src = chrome.runtime.getURL("img/ChevronsRight.svg");
  ChevronsRightIcone.classList.add("Righticone");
  // Event to switch icons on Frame1 icon click
  frame1Icon.addEventListener("click", () => {
    frame1Icon.classList.add("swipe-animation");

    setTimeout(() => {
      frame1Icon.style.display = "none";
      buttonIcon.style.display = "block";
      frame157Icon.style.display = "block";
      frame58Icon.style.display = "block";
      frame156Icon.style.display = "block";
      ChevronsRightIcone.style.display = "block";
      logoContainer.style.display = "block";
      frame1Icon.classList.remove("swipe-animation");
    }, 500);
  });

  // Event to hide all icons and show only Frame1 icon
  ChevronsRightIcone.addEventListener("click", () => {
    ChevronsRightIcone.classList.add("swipe-animation");

    setTimeout(() => {
      buttonIcon.style.display = "none";
      frame157Icon.style.display = "none";
      frame58Icon.style.display = "none";
      frame156Icon.style.display = "none";
      ChevronsRightIcone.style.display = "none";
      logoContainer.style.display = "none";
      frame1Icon.style.display = "block";
      ChevronsRightIcone.classList.remove("swipe-animation");
    }, 500);
  });

  // Event to toggle sidebar when Button.svg is clicked
  buttonIcon.addEventListener("click", toggleContainer);

  function toggleContainer() {
    const ToggleFrame = document.getElementById("iframe");

    if (ToggleFrame) {
      ToggleFrame.style.display =
        ToggleFrame.style.display === "none" ? "block" : "none";
    } else {
      ToggleMudle();
    }
  }

  function ToggleMudle() {
    const textContainer = document.createElement("div");
    textContainer.id = "iframe";
    textContainer.classList.add("textContainer");

    const title = document.createElement("div");
    title.innerText = "Workflow Assistant";
    title.classList.add("title");

    const description = document.createElement("div");
    description.innerText =
      "Guides a user step-by-step through tasks to help you complete workflows effortlessly.";
    description.classList.add("p2");

    const separator = document.createElement("hr");
    separator.classList.add("seprator");

    const title2 = document.createElement("div");
    title2.innerText = "Context Assistant";
    title2.classList.add("title2");

    const description2 = document.createElement("div");
    description2.innerText =
      "Provides relevant info right where the users are, so they always have the help they need.";
    description2.classList.add("p1");

    textContainer.appendChild(title);
    textContainer.appendChild(description);
    textContainer.appendChild(separator);
    textContainer.appendChild(title2);
    textContainer.appendChild(description2);

    document.body.appendChild(textContainer);

    title2.addEventListener("click", () => {
      toggleSidebar();
      // Hide all icons

      frame1Icon.style.display = "none";
      buttonIcon.style.display = "none";
      frame157Icon.style.display = "none";
      frame58Icon.style.display = "none";
      frame156Icon.style.display = "none";
      ChevronsRightIcone.style.display = "none";
      logoContainer.style.display = "none";

      // Hide textContainer
      textContainer.style.display = "none";
    });
  }

  iconContainer.appendChild(frame1Icon);
  iconContainer.appendChild(ChevronsRightIcone);
  iconContainer.appendChild(frame156Icon);
  iconContainer.appendChild(frame58Icon);
  iconContainer.appendChild(frame157Icon);
  iconContainer.appendChild(buttonIcon);

  document.body.appendChild(iconContainer);

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("iconsContainer");

  const logoIcon = document.createElement("img");
  logoIcon.src = chrome.runtime.getURL("img/Logo.svg");
  logoIcon.classList.add("logoicone");
  logoContainer.appendChild(logoIcon);
  document.body.appendChild(logoContainer);
}

// Function to toggle the sidebar
function toggleSidebar() {
  const sidebarFrame = document.getElementById("sidebarframe");

  if (sidebarFrame) {
    sidebarFrame.style.display =
      sidebarFrame.style.display === "none" ? "block" : "none";
  } else {
    initializeSidebar();
  }
}

function initializeSidebar() {
  const iframe = document.createElement("iframe");
  iframe.id = "sidebarframe";
  iframe.src = chrome.runtime.getURL("index.html");
  iframe.classList.add("sidebar-right-wt", "sidebar-left-wt");
  document.body.appendChild(iframe);


  let isDragging = false;
  let offsetX, offsetY;

  // Mousedown event to start dragging
  iframe.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - iframe.getBoundingClientRect().left;
    offsetY = e.clientY - iframe.getBoundingClientRect().top;
  });

  // Mousemove event to handle dragging movement
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      iframe.style.left = `${e.clientX - offsetX}px`;
      iframe.style.top = `${e.clientY - offsetY}px`;
    }
  });

  // Mouseup event to stop dragging
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  document.body.appendChild(iframe);


}
initializeIcons();
