'use strict';

/* OBJET FOR MENU */
const menu_obj = {

    menu:                document.getElementById("menu"),
    btn_close_menu:      document.getElementById("div-close-menu"),
    bg_color_menu:       ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.7)"],
    links_menu:          document.getElementById("links-menu"),
    menu_title:          document.getElementById("menu-title"),

    show_or_hide_menu() {
        this.menu.addEventListener('mouseover', (e) => {
            this.menu.style.background =             'white';
            this.menu.style.height =                 window.innerHeight+'px';
            this.menu.style.width =                  '100%';
            this.menu.style.top =                    0 + 'px';
            this.menu_title.style.display =          'none';
            this.btn_close_menu.style.display =      'block';
            this.links_menu.style.display =          'block';
        });
        this.btn_close_menu.addEventListener('click', (e) => {
            this.menu.style.background =             this.bg_color_menu[0];
            this.menu.style.height =                 100 + 'px';
            this.menu.style.width =                  50  + 'px';
            this.menu.style.top =                    250 + 'px';
            this.links_menu.style.display =          'none';
            this.btn_close_menu.style.display =      'none';
            this.menu_title.style.display =          'block';
        });
    }    
};

menu_obj.show_or_hide_menu();