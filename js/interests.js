"use strict";

// hobbies.html has its own 'menu page animation'
// it doesn't use the script menu_component.js, specially dedicated for the menu page animation because of the videos of interest



/* OBJET FOR VIDEOS */
const videos_interests_obj = {

    videos: document.getElementsByClassName('video-interest'),

    video_on_or_off() {
        for(let element of this.videos) {
            element.addEventListener('mouseover', (e) => {
                element.play().then(() => {
                    console.log("Video on");
                }).catch((error) => {
                    console.log("Problem with Video", error);
                    // To-do : Display error in toast notification for the user
                });
            });
            element.addEventListener('mouseout', (e) => {
                element.pause();
                element.currentTime = 0;
            });
        }
    },
    
    video_display_none_or_block(e) { // the "event object" is passed through show_or_hide_menu() function when the event is activated
        if(e.type === 'mouseover') {
            for(let element of this.videos)
                element.style.display = 'none';
        }
        if(e.type === 'click') {
            for(let element of this.videos) {
                element.style.display = 'block';
            }
        }    
    },
}



/* OBJET FOR MENU */
const menu_obj = {

    menu:                document.getElementById("menu"),
    btn_close_menu:      document.getElementById("div-close-menu"),
    bg_color_menu:       ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.7)"],
    links_menu:          document.getElementById("links-menu"),
    menu_title:          document.getElementById("menu-title"),

    // AddEventListener has a callback function. Consequently, the scope in the callback is not the same as the scope of the "menu" object
    // The callback has its own scope. It means that I can't access width_menu / bg_color_menu...
    // Because these properties have the objet's scope and not the same scope as the callback function
    // I have to "import" this from the object "menu" into the callback
    // Method 1 = arrow function (no local scope. take the scope of its object)
    // Method 2 = that = this
    // Method 3 = bind(this)
    show_or_hide_menu() {

        this.menu.addEventListener('mouseover', (e) => {
            this.menu.style.background =             'white';
            this.menu.style.height =                 window.innerHeight+'px';
            this.menu.style.width =                  '100%';
            this.menu.style.top =                    0 + 'px';
            this.menu_title.style.display =          'none';
            this.btn_close_menu.style.display =      'block';
            this.links_menu.style.display =          'block';

            // Why a video_display_none_or_block() function which makes display: block or none for the videos ?
            // Because I met the following problem : when the menu page is open, the "hover animation on the videos" which display the text for interests is still there
            // It means that, when the menu page is open, if the mouse goes on a video in the background, we display unintentionally the "text block for interest" 
            // the aim of video_display_none_or_block() is to delete the video temporarily, when the menu page is open 
            if(e) { 
                videos_interests_obj.video_display_none_or_block(e); // When the menu page is open = videos gone
            }
        });

        this.btn_close_menu.addEventListener('click', (e) => {
            this.menu.style.background =             this.bg_color_menu[0];
            this.menu.style.height =                 100 + 'px';
            this.menu.style.width =                  50  + 'px';
            this.menu.style.top =                    250 + 'px';
            this.links_menu.style.display =          'none';
            this.btn_close_menu.style.display =      'none';
            this.menu_title.style.display =          'block';
            
            if(e) {
                videos_interests_obj.video_display_none_or_block(e); // When the menu page is closed = videos back
            }
        });
    }    
};


// To activate videos on Mouseover + Deactivate and resets video on mouseover
videos_interests_obj.video_on_or_off();

// To activate Menu on mouseover + Deactivate Menu on click
menu_obj.show_or_hide_menu();