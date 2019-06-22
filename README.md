TO-DO :
=====

1. skills.html

2. Responsive for interests.html, contacts.html

3. <h1> on the page for better SEO

CSS File : Contain the compiled files of scss into css
=====
interests.css = compiled file of _interests.scss

education.css = compiled file of _education.scss

skills.css = compiled file of _skills.scss 

contacts.css = compiled file of _contacts.scss


HTML File : Contain the different html pages
=====
index.html is not included (it's on the root)

interests.html, education.html, skills.html, contacts.html


JS File : Contain the different JS scripts
=====
interests.js, education.js, skills.js, jquery.js, menu_component.js

menu_component.js = script for the menu component

Some pages don't need JS : index.html, contacts.html


Sass File : Contain the different sass files
=====
Convention : every scss files ( but for main.scss) begin with _

For the project's structure, I began to rely on the " 7 - 1 Pattern ". However, I had to modify the structure because of my project. 

This the current structure : 


abstracts/
-------
_variables.scss    # Sass Variables

_functions.scss    # Sass Functions

_mixins.scss       # Sass Mixins

_placeholders.scss # Sass Placeholders


base/
-------

_reset.scss        # Reset/normalize

_typography.scss   # Typography rules
  
 
components/
-------

_menu_component.scss # Menu


layout/
-------

_navigation.scss   # Navigation

_grid.scss         # Grid system

_header.scss       # Header

_footer.scss       # Footer

_sidebar.scss      # Sidebar

_forms.scss        # Forms


pages/
-------
_home.scss         # Home specific styles

_contact.scss      # Contact specific styles

_skills.scss       # Skills specific styles

_interests.scss    # interests specific styles

_education.scss    # Education specific styles


root
-------
– index.scss             # Sass file for index.html

 – interests.scss        # Sass file for interests.html
 
 – skills.scss            # Sass file for skills.html
 
 – contacts.scss          # Sass file for contacts.html

-------
Why this structure ?

1. Due to overrinding variables problems, I've choosen to create a "main.scss" file for each html page.

2. Furthermore, each html page has a different structure. That's the reason why I don't the layout file.
-------

db.json = https://github.com/typicode/json-server
=====

JSON file uses for education.html : the goal of this page is to use an ajax request to get the datas from db.json in order to fill the table.

1. npm install -g json-server
2. Create a db.json file with some data
3. json-server --watch db.json
