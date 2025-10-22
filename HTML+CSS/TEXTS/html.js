// ! HTML !
// --------
/**
 * ! 1. HTML Basics
 * -----------------
 * 
 * * HTML
 * - Hyper Text Markup Language [tool which is used to create websites]
 * 
 * - every file has some instructions given to computer.. instructions later on execution from top - bottom and tells browser to construct a webpage
 *    - every HTML file should have ".html" extension
 * 
 * # HTML ELEMENT
 * - ELEMENT: a term that is used to describe anything to display on the webpage 
 * ex:
 *    <button>CLICK</button> "this is an HTML element"
 * 
 * # HTML TAG 
 * - the element we try to create will be placed inside angular brackets: "<>" [<TAG-NAME>]
 *    - every HTML element contains an opening and closing tag
 * 
 * ? BUTTON-TAG
 * ---
 *    <button>CLICK</button> 
 *      |       |         |
 * opening-tag  |       closing-tag
 *              content
 * >>> <tag-name>:  opening-tag only consists of plain angular brackets
 * >>> </tag-name>: but closing contains a slash in-front of tag-name
 *  
 * 1. button:     <button></button>           [used to create buttons inside a web-page]
 * 2. paragraph:  <p>"paragraph-content"</p>  [create paragraph with this!]
 * 3. anchor:     <a>LINK TO TARGET</a>       [used to create links which takes users to target]
 * 
 * $ NOTE
 * - but <a></a> anchor element is in-complete without an HTML attribute which is "href"
 * 
 * # HTML ATTRIBUTE
 * - this modifies how an element behaves 
 *    - we can have multiple attributes on same element but has to be separated with space!
 * 
 * >>> SINGLE ATTRIBUTE
 * <a href="/link/">CLICK HERE</a>
 *      |         \
 * att. name     att. value [what we are modifying it to (value: modifying to a link: "/link")]
 *      |
 * [what we are modifying (href: modifying the destination)] 
 * 
 * >>> MULTIPLE ATTRIBUTES
 * <a href="/link/" target:"_blank">link-in-new-page</a>
 *        |               |
 *    attribute-1       attribute-2
 * 
 * ? ANCHOR ELEMENT
 * ---
 * >>> href:    changes the behavior of anchor tags >> instructs anchor tag where respective link goes!
 * >>> target:  modifies where does link opens >> NEW TAB or CURRENT TAB
 * 
 * $ NOTE
 * - 1. 'href' and 'target' works inside only anchor element 
 *    - there are respective attributes that are used to modify every tag
 * 
 * - 2. extra spaces are ignored inside HTML 
 *    - if any ? will be replaced with single space!
 * [whether those spaces between elements OR content]
 * 
 * - 3. new lines inside an element also counted as extra spaces 
 *    - hence ignored inside HTML!
 * 
 * ! 2. CSS Basics
 * ----------------
 * 
 * ! 3. Hovers, Transitions and Shadows
 * -------------------------------------
 * 
 * ! 4. Chrome DEV tools and CSS box model
 * ----------------------------------------
 * 
 * ! 5. Text styles
 * -----------------
 * >>> [font-family]
 *    - webpages by def., follow times new roman 
 *    - change that to different font-family styles [values: arial, sans-serif etc.,]
 * 
 * >>> [font-size]
 *    - values: pixels, rem, vw, %, cm, etc., 
 *  
 * >>> [font-weight]
 *    - values: bold, bolder, lighter, normal etc.,
 *    
 * to center the text
 * >>> [text-align]
 *    - values: center
 *    - there are other different ways to align the text
 * [end, justify, left, right etc.,]
 * 
 * to make the text force to next lines
 * >>> [width]
 *    - takes values in pixels etx.,
 *
 * [adjust the spacing between lines] 
 * >>> [line-height]
 *    - inserts space between new lines 
 *    - values: pixels
 *    
 * [to create dots inside an HTML use..]
 * >>> [HTML entity]
 *    - this lets us to insert special characters [. ✓ etc.,]
 *    - which is basically a code: 
 *        ex: &#183;    >>> this inserts a dot between text
 *            &#10003;  >>> inserts a check mark
 * 
 * [to add color to the text use..] 
 * >>> [color]
 *    - takes in normal colors, rgb, hex values
 * 
 * to add paragraph texts on a webpage use..
 * >>> [p-tag]
 *    - paragraphs comes with default margin at top and bottom
 * 
 * # text-elements
 *    - these properties modify a part of text instead of entire text
 *    - with this we can style / modify specific parts of entire text / line / paragraph
 * 
 * those are: 
 *    - 1. <span></span>        
 *    - 2. <strong></strong>    | this makes text bolder
 *    - 3. <u></u>              | this underlines a part of a text
 * 
 * >>> [<span></span>]
 *    - this creates a span of some text inside a paragraph
 *    - this does not add any styles 
 *        - but we can add classes on to it and style those classes'
 * 
 * $ NOTE
 * - we can also add classes onto <strong></strong> and <u></u> 
 *    - but they come with default styles so it is not a good idea!
 * 
 * ex:
<style>
  .shop-link {
    cursor: pointer;
  }

  .shop-link:hover {
    text-decoration: underline;
  }
</style>

<p class="some-text">
  Shop early for the best selection of holiday favorites. <span class="shop-link">Shop now &#62;</span>
</p>
 * 
 * 
 * ! 6. The HTML Structure
 * ------------------------
 * [we gonna learn proper structure of HTML >> gives access to every feature of HTML]
 * 
 * >>> [<!DOCTYPE html>]
 * - this tells browser to use a modern version of HTML 
 * (without this line website uses previous versions of HTML >> which has less features)
 * 
 * >>> [<html></html>]
 * - which has overall html element inside this opening and closing tag of "html"
 * - this represents overall webpage
 *    
 * # [inside <html> tag]
 * >>> [<head></head>]
 * - this contains every element which is not visible on a webpage
 * 
 * >>> [<body></body>]
 * - this contains every element that is visible on a webpage 
 * 
 * ? therefore the proper structure is:
 * ---
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
 * 
 * 
 * $ NOTE
 * - "head" and "body" are kept inside "html" which is "NESTING"
 *    - which is elements inside elements
 * 
 * # [inside <head> tag]
 * >>> [title]
 * - this changes the title of the webpage
 * 
 * >>> [style]
 * - this does not represent any element inside webpage
 * - so we insert <style></style> styles of doc / webpage inside <head> tag
 * 
 * # VOID ELEMENTS
 * - these elements does not need a closing TAG
 * ex: link, img, br, etc., 
 * 
 * >>> [link]
 * - does not need closing tag
 * - this takes in two attributes: REL (relation) and HREF (file which we link)
 * 
 * - this helps to link other files.. instead of writing different languages inside one file
 * [separates HTML and CSS into two diff files]
 * 
 * ex: 
 * <link rel="stylesheet" href="buttons.css">
 *            |                             \
 *      type of file we are linking in      file path OR actual file link 
 * 
 * ? href="link.css"
 * ---
 * - this loads link.css 
 *    - if HTML and link.css are in same folder OR on same level
 * 
 * - if two files: HTML and CSS are in separate levels OR folders
 *    - then we have to insert CSS file using PATH
 * ex:
 * href="./level-1/styles.css"
 *          |
 *          when styles.css is inside "level-1" folder [here HTML file and styles.css are not in same folder / not beside each other]
 * 
 * ! 7. Images and Text Boxes
 * ---------------------------
 * 
 * [input and img >> both are void tags]
 * 
 * >>> [image tag: <img>]
 * - to load images on to a webpage.. use <img>
 * 
 * - this takes attributes 
 *    - 1. "src" (source:         to provide links / paths to images)
 *    - 2. "alt" (alternate text: this helps for screen readers >> if no image is loaded.. screen readers read out the text in it!)
 * 
 * >>> [text-inputs: <input>]
 * - create an input text box.. use <input>
 *    
 * - this takes
 *    - 1. type:        values are [text / checkbox]
 *    - 2. placeholder: tells users what to enter inside that textbox!
 * 
 * ! 8. CSS display property
 * --------------------------
 * 
 * ex:
<body>
  <img class="thumbnail" src="./thumbnails/thumbnail-01.webp">
  <input class="search-bar" type="text" placeholder="Search">

  <p>Talking Tech and AI with Google CEO Sundar Pichai!</p>
  <p>Marques Brownlee</p>
  <p>3.4M views &#183; 6 months ago</p>
</body>
 * 
 * $ OBSERVATION
 * - image and input are placed BESIDE each other >> which is a default behavior 
 * - but paragraphs are ON each other
 * 
 * $ REASON:
 * - DUE to display property in CSS
 * 
 * >>> HTML: types of elements
 * 
 * # 1. Block element ***
 *    - takes an entire line in HTML
 *    - with this.. elements appear in a row OR "horizontally parallel" [=]
 *    ex: paragraphs etc., 
 * 
 * # 2. Inline-Block element ***
 *    - takes as much space as it needs [does not take an entire line]
 *    - these make elements appear in columns OR "vertically parallel" [| |]
 *    ex: image and input etc.,
 * 
 * [cause] >>> these appear in same line
 * 
 * # 3. Inline element
 *    - appear within a line of text 
 *    - these are text elements 
 *    ex: <strong></strong> as this appears inside a line of text!
 * 
 * $ NOTE
 * - most importantly: block and inline-block elements 
 *    - these determine >> how these elements are displayed on a webpage (BESIDE EACH OTHER) or (ABOVE AND BELOW) 
 * 
 * ! 9. The Div element
 * ---------------------
 * 
 * >>> div = division [simply a BOX]
 * [a block element >> as this takes up the entire line]
 * 
 * ? WHY div is so useful
 * ---
 * - <div> can contain other elements inside it!
 * - acts as a container 
 *    - CONTAINER that groups every element and lay them on a webpage!
 * 
 * $ SOLUTION
 * - div is perfect solution for complex websites!
 * 
 * ex:
 * ---
  <div>
    <input class="search-bar" type="text" placeholder="Search">
    <img class="thumbnail" src="./thumbnails/thumbnail-01.webp" alt="thumbnail-01">

    <p>Talking Tech and AI with Google CEO Sundar Pichai!</p>
    <p class="video-autor">Marques Brownlee</p>
    <p class="video-stats">3.4M views &#183; 6 months ago</p>
  </div>
 * 
 * 
 * - everything inside <div> now restricted to the styles we apply for that "div" 
 * 
 * ! 10. Nested layouts technique
 * -------------------------------
 * * * *
 * 
 * [there are two types of layouts]
 * # 1. Vertical layout
 * # 2. Horizontal layout
 * 
 * - every webpage can be broken down into series of layouts [under nested layouts]
 *    - and every webpage is a combination of horizontal and vertical layouts!
 * 
 * $ NOTE
 * - images overflow in HTML! 
 * - if loaded fonts from google inside head-tag does not work.. then backup fonts work
 * ex: 
body {
  font-family: "Roboto", Arial;
}                /         \
 *        loaded font      back-up fonts
 * 
 * * CSS styling
 * - we use CSS property: [display: "inline-block"] with some margins to design layouts on a webpage
 * 
 * $ PROBLEMS 
 * - using this may create problems 
 * [problem follows..]
 * 
 * ex:
<style>
  .inline-problem {
    border: 1px solid black;
    width: 450px;               // # 1. this div's total width is 450px
    height: 250px;
  }

  .inline-img {
    width: 50%;                   // # 1. here img has to acquire 50% [and planned to give another 50% for text]
    vertical-align: top;
    display: inline-block;
    border: 1px solid black;
    height: 25%;      // # 2. when this was given only 25% ...  
  }

  .inline-text {
    display: inline-block;
    width: 45%;               // # 1. if we provide 50% here! then there are problems
    height: 100%;
  }
</style>

<div class="inline-problem">
  <div class="inline-img">
    <img class="in-im" src="" alt="dog-image">
  </div>

  <div class="inline-text">
    <p class="in-text">Hi, this is inline-block problem</p>
    <p class="in-text">You may have noticed this!</p>
  </div>
</div>
 * 
 * 
 * ! 11. CSS Grid
 * ---------------
 * 
 * ? INLINE - problem
 * ---
 * # 1. alignment problems ↴ 
 * $ NOTE:
 * - our plan was classes [inline-img and inline-text] has to acquire 50% each in a total "inline-problem" div's width: 450px
 *    - but it has failed 
 * 
 * - if we given 50% to div: inline-img and remaining 50% to div: inline-text.. this cause inline-text div to go below the image forcefully
 *    - observed that text is not aligning and adjusting correctly into 50% space that was provided
 * 
 * $ SOLUTION
 * - so in above example we have given only 45% [but we wanted to provide 50% of total width to each of the divs]
 * 
 * # 2. vertical alignment problem ↴
 * $ NOTE:
 * - when img-div's height has given only 25% and wanted to align the text that was on the left to align according to the img..
 *    - we did not get correct alignment correctly with this!
 * 
 * 
 * 
 * >>> A GRAND SOLUTION
 * * * * CSS GRID * * *
 * [CSS-technique which helps us to create perfectly aligned horizontal layouts]
 * 
 * - so created an HTML file to learn GRID!
 * 
 * [before that..]
 * $ NOTE:
 * - we learned two ways of writing CSS 
 *    # 1. using style element [<style></style>]        >>> internal styling
 *    # 2. using external CSS style file [css.styles]   >>> external styling
 * 
 * [new of way of writing CSS]
 * >>> 3. INLINE styles
 * - writing CSS inside HTML opening-tags with help of "style" attribute!
 * - this makes HTML hard to read.. so we put into another file in REAL WORLD!
 * ex: 
 * <div style="background-color: aqua;">div-1</div>
 * 
 * * WHAT is a GRID?
 * - a layout which has ROWS and COLUMNS
 *    - it is always ROWS X COLUMNS
 * 
 * the HTML file we created.. 
 *    - has two divs inside a div
 * ex:
<div>
  <div style="background-color: aqua;">div-1</div>
  <div></div>
</div>
 * 
 * 
 * [follow above example..]
 * * GRID preparation
 * - to make a GRID.. we have to style outer DIV
 * 
 * ? to prepare a GRID.. follow two steps
 * ---
 * # 1. make display set to grid
 * # 2. set >> grid-template-columns to some length
 * 
 * [code]
 * ------
<div style="display: grid; grid-template-columns: 100px 100px;">
  <div style="background-color: aqua;">DIV 1</div>
  <div style="background-color: bisque;">DIV 2</div>
</div>
 * 
 * 
 * $ OBSERVATIONS
 * >>> A. characteristics and benefits of grid
 * - 1. divs are supposed to take up the entire line [cause divs are block elements]
 *    - but with GRID >>> divs inside grid are placed into the grid and takes up only into given dimensions instead [ex: 100px] 
 * 
 * - 2. there is no space between above two divs
 *    - unlike with display: inline-block!
 * 
 * - 3. vertical aligns
 *    - when we add text / image / other element inside one of the above divs
 *        - that makes another div to perfectly align with other!
 * 
 * >>> B. more about "grid-template-columns" property
 * - this takes as many number of values.. as we wanted!
 * ex:
 * grid-template-columns: 100px 100px 200px  
 *                        /       |       \
 *                    col-1     col-2     col-3
 * [so]
 *    - number of values determine.. number of columns
 *    - value itself determines the width of each column
 * 
 * >>> C. AUTOMATIC creation of rows
 * ex: 
 * main-div ↴
 * grid-template-columns: 100px 200px
 * 
<div style="display: grid; grid-template-columns: 100px 200px ">    // - [1 row and 2 columns]
  <div style="background-color: aqua;">100px</div>
  <div style="background-color: bisque;">200px</div>

  [// - but we have more divs here!]
  <div style="background-color: bisque;">DIV 1</div>  
  <div style="background-color: aqua;">DIV 2</div>    
</div>
 * 
 * - with this above example.. and two divs.. which creates a 1ROW X 2COLUMNS grid
 *    - but what if we added another div to main [then we have more elements than the columns in >> (grid-template-columns: 100px 200px)]
 *        - this creates an automatic row!
 * 
 * - Therefore.. if we have more elements than specified dimensions inside (grid-template-columns: 100px 200px)
 *    - then it creates a next row 
 * 
 * >>> D. more on "grid-template-columns" and it's values
 * - values: 1fr
 *    - fr: free-space
 *  
 * - a special value for grid.. IT TAKES REMAINING AMOUNT OF SPACE ON GRID 
 * - CHARACTERISTICS: when we resize the webpage it will takes the space available.. 
 * 
 * ex:
<div style="display: grid; grid-template-columns: 100px 1fr 2fr; margin-bottom: 30px;">
  <div style="background-color: aqua;">100px</div>
  <div style="background-color: bisque;">1fr</div>
  <div style="background-color: aqua;">2fr</div>
</div>
 * 
 * - 1fr 2fr takes takes width of webpage in ratio >> 1:2
 *    - div with 1fr takes upto 1/3 rd of remaining space   |
 *    - div with 2fr takes upto 2/3 rd of remaining space   | .. ratio >> 1:2 >> 1+2 = 3
 * [suppose 1fr-div takes 100px then 2fr-div takes 200px of webpage >> totally 300px]
 * 
 * * GRID gaps
 * - gaps between columns use.. [column-gap: 20px]
 * - gaps between rows use..    [rows-gap: 40px]
 * 
 * 
 * ! 12. FlexBox
 * --------------
 * [another way to design layouts]
 * * * * FLEX-BOX * * *
 * 
 * - similar to CSS grid
 * (but it is more flexible)
 * 
 * ? in this lecture.. GRID and FLEX-BOX differences and similarities 
 * ---
 * 
 * - similar to grid.. flexbox also requires outer-div-container
 *    - that outer-div-container will be the flexbox for internal divs
 * 
 * ? HOW to turn outer-div-container into a flexbox
 * ---
 * - 1. set the display property!     >> with value: "flex"
 * - 2. set flex-direction property   >> with value: "row" / "column"
 * 
 * - this aligns elements horizontally >> these elements behave like "INLINE-BLOCK" elements 
 * 
 * ? differences between FLEX and GRID
 * ---
 * - 1. when we add text to any element.. 
 *    - if it "GRID" the text will be added on to the next line
 *    - if it "FLEX" the text adds to the same line!
 * 
 * - 2. making a div element inside a flex-box will.. 
 *    - align the other div element also vertically align 
 * 
 * - 3. flex defined elements take their length / width along with them
 *    - but not grid defined elements 
 * 
 * - GRID = rigid layout
 * - FLEX = flexible layout
 * 
 * $ NOTE
 * - to make a div u to occupy remaining complete space on a webpage (under a flex-box )
 * [we used 1fr with grid]
 *    - but we use flex: 1 to occupy remaining space on a webpage!
 * 
 * ? SIMILARITIES
 * ---
 * - 1. similar to "grid-fr" || "flex: 1" also takes up remaining space of the complete webpage!
 * 
 * ? different properties and values used for flex-box 
 * ---
 * - "justify-content": helps in alignment of divs HORIZONTALLY
 * - values: 
 *    - 1. end / right (align items to right-hand side in main flexbox) 
 *    - 2. start / left (align items to left-hand side in main flexbox)
 *    - 3. center (aligned in center)
 *    - 4. space-between (provides an equal amount of space between each element)
 * 
 * - "align-items": helps in alignment of divs VERTICALLY
 * - values: 
 *    - 1. stretch: elements stretch up to occupy vertical space
 *    - 2. start: elements placed starting from top occupying space that was given vertically
 *    - 3. end: vice-versa to "start"
 *    - 4. center: elements are placed at center vertically!
 * 
 * ? which one to use (GRID / FLEX)?
 * ---
 * - when we are focussed on content size first and layout does not matter then it will be FLEXBOX
 *    - with which content will be spread out evenly in horizontal space!
 * 
 * - when we need a GRID.. we use CSS-GRID 
 * 
 * ! 13. Nested Flexbox
 * ---------------------
 * $ IMPORTANT
 * - flexbox acts for only components at first level
 * that is.. 
<div>
  <div class="1st-lvl"> // - flexbox applies here!
    First Level
  </div>

  <div class="2nd-lvl"> // - flexbox applies here too!
    <div>Inner levels</div>
  </div>            \
</div>              // - flexbox does not apply on this level!
 * 
 * 
 * ? PROBLEM
 * - here flexbox from higher levels does not apply on inner levels 
 *    - so we have to make the div near to inner div a flex-box
 * 
 * ex:
<div>
  <div style="display: flex">
    <div>INNER DIV</div>      // -  to make this div responsive to flexbox.. we have to make parent-div a flexbox!
  </div>
</div>
 * 
 * 
 * ? to target a pseudo-class on an input-element in CSS
 * ---
 * ex:
<input class="search-ele" type="text" placeholder="Search">
 * 
 * - to target "placeholder" in CSS while styling
 * ex:
.search-ele:: placeholder {
  ...styles...
}
 * 
 * 
 * $ NOTE
 * # 1. not to shrink 
 * - whenever screen size gets smaller.. elements inside flexbox starts to shrink!
 *    - which can be prevented.. and also keeps the same sizes even when screen size has been shrinking! 
 * 
 * # 2. to shrink
 * - to shrink we have to use.. width: 0
 *    - which shrinks an element!
 * 
 * >>> [flex-shrink: 0] >> keeps the elements as it is!
 * ex:
{
  display: flex;
  flex-shrink: 0;
}
 * 
 * 
 * ! 14. CSS Position
 * -------------------
 * 
 * - 1. this helps us to keep header on top of the page.. when we scroll
 *    - keeps the side bar at it it's position while scrolling!
 * 
 * - 2. element on top of other element
 *    - notification numbers on the notification-icon
 *    - video length on top of it's thumbnail
 * 
 * - 3. CSS position also adds another dimension on to a webpage!
 * 
 * * CSS position
 * -  CSS position is a position property
 *    - property used: position
 *    - values used:   static (default), absolute, fixed, relative.
 * 
 * >>> static:
 * - this is a default value for CSS-position
 * 
 * >>> fixed:
 * - this helps in fixing a div at certain position
 * - after adding this property.. element will float on above a web-page
 * ex: fixing navbar inside a web-application
 * 
 * $ other additional properties
 * - 1. "top" [val: measurements in pixels etc.,]
 *    - specifies how far an element is from top of a web-page window
 * 
 * - 2. "left" [val: measurements in pixels etc.,]
 *    - an element that is left from the browser window.. 
 * 
 * - similarly "right" and "bottom"
 * 
 * $ NOTE:
 * - spacing an element from all directions from a browser window!
 * - when we use two different and opposite properties [left and right] then it stretches that element
 * 
 * ex:
 * ? case-1
 * ---
 * - when there is a header of 50px height and want 
 * ex:
<div style="
  background-color: black; 
  color: rgb(255, 255, 255);
  position: fixed;
  top: 0px; 
  left: 0px;
  right: 0px;
  height: 50px;   // - "height" is a replacement of "bottom"
">
  HEADER
</div>
<div style="width: 200px; height: 200px; background-color: aqua;">div-1</div>
<div style="width: 200px; height: 200px; background-color: bisque;">div-2</div>
 * 
 * 
 * - when we apply position like properties on an element it makes that element to float on the web-browser
 *    - so it makes that respective element "transparent"
 *        - so we have to add background-color: "white"
 * 
 * - if we do not know exact dimensions for property "bottom"
 *    - then we could replace it with "height"
 * ex:
 * bottom: 0px
 * - this will make that element fix to the bottom of that web-page / browser!
 * 
 * >>> making a sidebar for a web-page
 * - left: 
 *    - 0px >> to start from exact left
 * - top: 
 *    - if there is a header.. it starts from height of the header
 * - right: 
 *    - here right must be replaced with width
 * - bottom:
 *    - 0px >> to fix with exact bottom of the web-page
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
