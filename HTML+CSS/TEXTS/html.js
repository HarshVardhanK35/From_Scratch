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
 *    ex: paragraphs etc., 
 * 
 * # 2. Inline-Block element ***
 *    - takes as much space as it needs [does not take an entire line]
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