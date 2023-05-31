$(document).ready(function() {
    adjustDivHeight();
});
    
$(window).resize(function() {
    adjustDivHeight();
});

// function adjustDivHeight() {
//     const nickramenLargeDiv = $('.nickramenLargeDiv').outerHeight();
//     $('.nickramenSmallDiv').css('box-sizing', 'border-box').height(nickramenLargeDiv);

//     const vitadevsLargeDiv = $('.vitadevsLargeDiv').outerHeight();
//     $('.vitadevsSmallDiv').css('box-sizing', 'border-box').height(vitadevsLargeDiv);

//     const estudimateLargeDiv = $('.estudimateLargeDiv').outerHeight();
//     $('.estudimateSmallDiv').css('box-sizing', 'border-box').height(estudimateLargeDiv);

//     const manlebLargeDiv = $('.manlebLargeDiv').outerHeight();
//     $('.manlebSmallDiv').css('box-sizing', 'border-box').height(manlebLargeDiv);

//     const ramendigitalLargeDiv = $('.ramendigitalLargeDiv').outerHeight();
//     $('.ramendigitalSmallDiv').css('box-sizing', 'border-box').height(ramendigitalLargeDiv);
// }


function showTab(tabId) {
    // Hide all tabs
    var tabs = document.getElementsByClassName("tab");
    var thumbs = document.getElementsByClassName("thumbnail")

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        tabs[i].classList.remove("size");
    }
    
    // Show the selected tab
    var selectedTab = document.getElementById(tabId);
    selectedTab.style.display = "block";
    selectedTab.classList.add("size")

    // Find the matching thumbnail
    for (var j = 0; j < thumbs.length; j++) {
        if (thumbs[j].getAttribute("name") === tabId) {
            // Do something with the matching thumbnail, e.g., add a class or modify its style
            thumbs[j].classList.add("size");
        } else {
            // Handle other thumbnails if needed
            tabs[i].classList.remove("size");
        }
    }
}

function sizeThumb(thumbId) {
    // Normal size for all thumbs by removing the "size" class
    var thumbs = document.getElementsByClassName("thumbnail")
    
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("size");
    }
    
    // Show the selected tab
    var selectedThumb = document.getElementById(thumbId);
    selectedThumb.classList.add("size")
}