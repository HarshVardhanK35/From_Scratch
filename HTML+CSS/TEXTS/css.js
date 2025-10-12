// ! CSS - CASCADING STYLE SHEETS !
// --------------------------------
/**
 * ! 1. HTML Basics
 * -----------------
 * 
 * ! 2. CSS Basics
 * ----------------
 * * CSS 
 * - (Cascading Style Sheets)
 * - used to style a webpage >>> changes the appearance of HTML elements
 * 
 * - 1. inserting styles inside a HTML file.. so use <style>...</style> component
 * - 2. inside this <style></style> tags.. we can write CSS which changes the appearance of components
 * 
 * ex:
// >>> style tag
---
<style>   [target element]
        /  
  button {    
    background-color: red;
  }
</style>
<button>SUBSCRIBE</button>
 * 
 * 
 * # CSS selector
 * - 1. tells computer which element has to be targeted! 
 * - 2. inside <style>...</style> we insert selector that is a targeted component on HTML document
 * ex: 
<style>
  button{ ... styles ... } // - here button is a CSS selector
</style>
 * 
 * 
 * # CSS property and value [instructions]
 * [used to apply different styles]
 * - 1. indicated what we are changing!
 * 
 * ex:
<style>                 CSS value
  button {              /
    background-color: red;  
  }             \
</style>         CSS property here
 * 
 * 
 * ex:
<style>     //  - styles tag
  button {              // - CSS selector
    background-color: red;  
    color: white;
  }                 \
</style>      // - multiple CSS styles [property: value]
 * 
 * 
 * # HEIGHT & WIDTH
 * - mostly these are measured with pixels!
 * 
 * # COLORS [rgb values]
 * - we use simple colors: red, blue, white etc.,
 * 
 * >>> rgb(val1, val2, val3)
 *    - but we can also use RGB values to apply colors
 *    - this is a mix of three values applied to red, green, blue.. which provides a precise mix of color for components!
 *    - these three values ranges from 0 to 255
 * ex:
 * - mix of max values: (255, 255, 255) provides a white color
 * - mix of min values: (0, 0, 0) provides a black color
 * 
 * # ROUNDED CORNERS
 * - use border-radius which takes in a pixel measurement as a value!
 *    - higher pixels.. more round the corners will be! 
 * 
 * ex:
<style>
  button {
    background-color: rgb(200, 0, 0);
    color: white;
    border: none;
    height: 32px;
    width: 105px;           
    border-radius: 2px;     
    cursor: pointer;      \
  }                       apply CSS one-by-one! 
</style>
<button>SUBSCRIBE</button>  
 * 
 * $ NOTE
 * - when there are multiple components with "button".. then same CSS styling will be applied to all of those components!
 * [cause.. we are targeting with component name "button"]
 * 
 * ? HOW can we apply CSS only for certain elements in an HTML document ?
 * ---
 * # CLASS attribute
 * [used to label HTML elements]
 * - we use class attr to apply CSS styles uniquely but not for every element inside an HTML document!
 * ex:
<button class="subscribe-btn">SUBSCRIBE</button>
 *        \               \
 *      class attr        attribute-value
 * 
 * - labelling a "subscribe" button uniquely!
 *    - we target using class-attr-value: "subscribe-btn" to apply CSS styles!
 * 
 * # CSS selectors
 *    - selecting classes using class-attribute's value "subscribe-btn"
 *    - we select classes inside styles.. using [.] dot operator
 * ex:
<style>
  .subscribe-btn {... styles ...}     // - unique class-selector [dot .]
</style>      
<button class="subscribe-btn">SUBSCRIBE</button> 
 * 
 * $ NOTE
 * - whenever we use [.] >>> we select only classes over elements inside HTML doc
 * - multiple elements in HTML doc can have same type of classes
 *    - so if there are multiple elements with same class >>> styles will be applied for every component!
 * 
 * ex:
<style>
  .subscribe-btn {
    background-color: rgb(200, 0, 0);
    color: rgb(255, 255, 255);
    border: none;
    height: 37px;
    width: 112px;
    border-radius: 2px;
    cursor: pointer;
  }                                         \
//                    Separate styles for selected classes
  .join-btn {                               /
    background-color: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(80, 80, 255);
    border-radius: 2px;
    height: 32px;
    width: 60px;
    color: rgb(80, 80, 255);
    cursor: pointer;
  }
</style>

<button class="subscribe-btn">SUBSCRIBE</button>    |
<button class="join-btn">JOIN</button>              | --- these are given separate class-names and styles were applied
 * 
 * 
 * # SPACES [MARGIN]
 * - in CSS space between two elements is called "MARGIN"
 * 
 * $ TIP
 * ---
 * ? to make rounded corners through the height / width of a button
 *    - value for border-radius must be half of (lowest of height / width of that button)
 * 
 * ! 3. Hovers, Transitions and Shadows
 * -------------------------------------
 * [whenever users "hover" on buttons on a webpage >> they change their styles smoothly which is called "transition"]
 * 
 * ? <class-name>:hover {...}
 * ---
 * - whenever we add styles to under this selection [:hover].. we add extra styles to the already existing styles
 * 
 * ex:
.subscribe-btn {
  background-color: rgb(200, 0, 0);
  color: white;
  border: none;
  height: 37px;
  width: 112px;
  border-radius: 2px;
  cursor: pointer;
  margin-right: 7px;
  margin-bottom: 7px;
}

.subscribe-btn:hover {        // - extra additional class with styles
  background-color: aqua;
  color: black;
}
 * 
 * 
 * # PSEUDO CLASSES 
 * >>> [:hover]
 * [.class-name:hover{}]
 * - which adds extra classes in certain situation >> in case of pseudo class ":hover" >> adding extra classes while hovering
 * 
 * >>> [:active]
 * - extra styles under this PSEUDO class.. will be applied only when button is in active state [that is when button is clicked]
 * 
 * # OPACITY
 * >>> [opacity: 0 to 1]
 * - fades out the styles of an element 
 * [which is making respective element completely invisible]
 * 
 * - value ranges from (0 - 1) >> also takes in decimal values 0.1, 0.2 etc., upto 1
 *    - opacity: 1 which makes element completely invisible
 * ex: 
.subscribe-btn:hover {
  opacity: 0.8;
}

.subscribe-btn:active {
  opacity: 0.5;
}
 * 
 * 
 * # TRANSITION
 * >>> [property: transition]
 * 
 * - switching to other styles from active styles >> we need transition
 * 
 * - this takes in 2 values 
 *    - 1: which style we want to transition
 *    - 2: how long this transition shall take [time in seconds]
 * 
 * $ NOTE
 * - this property has to be added on parent styles but not on pseudo styles
 * 
 * ex:
.subscribe-btn {                        // - [parent style]
  background-color: rgb(200, 0, 0);
  color: white;
  ...
  transition: opacity 0.15s;
}

.subscribe-btn:hover {      // - [pseudo class styles]
  opacity: 0.6;
}
.subscribe-btn:active {     // - [pseudo class styles]
  opacity: 0.5;
}
 * 
 * ? when we want to transition multiple styles
 * ---
 * - we need to separate styles with comma [,]
 * 
 * ex:
.join-btn {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(80, 80, 255);
  border-radius: 2px;
  color: rgb(80, 80, 255);
  transition: background-color 1s, color 1s;    // - comma separated values
}

.join-btn:hover {
  background-color: rgb(80, 80, 255);     | 
  color: white;                             |.. // - as there are two values 
}

.join-btn:active {
  opacity: 0.5;
}
 * 
 * 
 * # SHADOWS
 * >>> [property: box-shadow]
 * 
 * - this adds a shadow to an element 
 * - takes in 4 values: [horizontal-pos, vertical-pos, blur-value, color-of-shadow] 
 * 
 * ex:
box-shadow: 10px 10px 10px black;
 *            |     |     |     |
 *    horizontal    |   blur    |    
 *              vertical      color of the shadow
 * 
 * ? create more realistic shadow
 * ---
 * - they are usually darker shade 
 * - to create that.. we need new way of measuring colors... so use "rgba()"
 * 
 * ? new way of making colors
 * ---
 * >>> [rgba()]
 * [red-green-blue-opacity]
 * - as shadows are darker that is they are black.. we have to use rgba(0, 0, 0, 0.15) 
 *    - rgba(0, 0, 0, 0.15) is commonly used value to create realistic shadows
 * 
 * ex:
.tweet-btn {
  background-color: rgb(0, 187, 255);
  color: white;
  border: none;
  border-radius: 18px;
  height: 37px;                           |
  width: 70px;                            | - these styles apply normally
  font-weight: bold;                      |
  font-size: 15px;
  cursor: pointer;
  margin-left: 7px;
  transition: box-shadow 0.15s;
}

.tweet-btn:hover {                
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);   | - these styles applied on hover
}                                 \
 *                              new way to calculate a color
 * 
 * ! 4. Chrome DEV tools and CSS box model
 * ----------------------------------------
 * 
 * * CHROME DEV TOOLS
 * - inspect a webpage then we get access to the dev-tools of that page
 * - which helps in knowing more about a webpage and it's content [we can also know final and computed values of content]
 * [to know more follow a YT video]
 * 
 * * CSS BOX-MODEL
 * - margin + border + padding + content makes up a complete BOX-MODEL
 *    - which determines space of an element that takes on a page
 *    - and also tells how far an element is from the other elements
 * 
 * - which helps us to add space between our elements and also inside elements 
 * 
 * # 1-part: MARGIN
 * - which is the spacing outside the element
 * - this allows to add spacing on every side of an element [top, bottom, right and left]
 * ex: 
 * margin-right: 8px >>> which adds 8px of space outside the box on right side
 * 
 * # 2-part: PADDING
 * - this allows us to add spacing inside of an element >> which is around the text
 * - which replaces the height and width styling properties of an element 
 * 
 * $ NOTE
 * - with height and width properties.. if extra text is added.. that text will be over-flown out of the border 
 * [means height and width are not responsive to text]
 *    - so we add padding property on to elements
 * 
 * [to add padding around content >> we use..]
 * ex: 
 *    padding-top || padding-bottom || padding-left || padding-right
 * else
 *    padding: 10px           10px   
 *              |               \
 *  covers: top and bottom!     covers: left and right!
 * 
 * $ TIP
 * - by default >> every thing inside a browser aligns elements based on text
 *    - so to overwrite this >> we have to use // >>> [vertical-align: top] 
 * but this has to be done on every element separately!
 * 
 * $ NOTE
 * - every element has spacing on outside called "MARGIN"
 *    - and space inside around the "CONTENT" is called "PADDING"
 *        - between MARGIN and PADDING is called "BORDER"
 * 
 * CSS BOX MODEL: MARGIN + BORDER + PADDING + CONTENT
 *    - these properties determine how much space an element takes up inside a webpage
 * 
 * ! 5. Text styles
 * -----------------
 * 
 * * CSS Specificity
 * 
 * ex:
p {
  font-family: Arial;
  margin-top: 0;
  margin-bottom: 0;
}

.status {
  font-size: 14px;
  color: rgb(96, 96, 96);
  margin-bottom: 20px;
}
 * 
 * - in above example, margin-bottom is set to zero initially
 *    - after that it has changed to 20px [inside class selector]
 * 
 * - even if margin-bottom is set to 20px before it is set to 0px 
 *    - the resultant margin-bottom's value will be 20px only!
 * 
 * ? why this is happening 
 * ---
 * - cause of CSS specificity.. if we have multiple CSS-style-values for same CSS-property
 *    - then browser follows a PRIORITY 
 * [cause of this margin-bottom: 20px has more priority than margin-bottom: 0px]
 * 
 * ? how can browsers determine PRIORITY
 * ---
 * - selector which is more specific has higher priority
 * 
 * - in above example "p" and ".status" >> ".status" is more specific than "p"
 *    - that's why margin-bottom is set to 20px
 * 
 * >>> therefore CSS-class-selector > element-name-selector [in specificity]
 * 
 * ! 6. The HTML Structure
 * ------------------------
 * 
 * ! 7. Images and Text Boxes
 * ---------------------------
 * 
 * ? how to style images 
 * ---
 * $ OBSERVATIONS
 * - when we add width.. image's height also adjusts automatically according to the original image dimensions
 * 
 * - if we wanted an images to set inside 300 X 300 area
 * 
 * ex:
.img {
 width: 300px;
 height: 300px;
}
 * 
 * 
 * [then image would be stretched out! (if image's real dimensions are not 300 X 300)]
 * ? PROBLEM >> image lose it's dimensions if it does not match 300 X 300 
 * ---
 * $ SOLUTION
 * - images has it's own properties [specific to image-tag]
 *    - "object-fit" and "object-position"
 * 
 * >>> [object-fit]
 * # 1. value-1 >> cover
 *    - "covers" image into 300 X 300 area and image does not lose it's shape 
 *    - sets middle / center of the image inside 300 X 300 area [mid / center area of the image is focussed]
 *        - this focussed area can be changes using: "object-position"
 * 
 * # 2. value-2 >> contain
 *    - image shrinks inside width X height area 
 *    - this correctly fits inside the given (width and height) area
 * 
 * >>> [object-position]
 * - object-fit: cover >> sets image to middle / center position by default 
 * - so with object-position property we can change the position of the image in [width X height] area
 *    - values: top, bottom, left and right
 *    - shows left and right parts of the images 
 * [cause image did not fit into space (300 X 300) correctly]
 * 
 * ! 8. CSS display property
 * --------------------------
 * >>> display: (a CSS property) 
 * VALUES: block and inline-block 
 * 
 * ? how to target multiple classes inside CSS 
 * ---
 * [if we want to apply same properties to different classes]
 *    - then separate two or more classes into different with comma[,] and apply same CSS styles
 * 
 * ex:
 * ---
<body>
  <img class="thumbnail" src="./thumbnails/thumbnail-01.webp">
  <input class="search-bar" type="text" placeholder="Search">

  <p>Talking Tech and AI with Google CEO Sundar Pichai!</p>
  <p class="video-autor">Marques Brownlee</p>
  <p class="video-stats">3.4M views &#183; 6 months ago</p>
</body>
 * 
 * 
 * >>> block => inline-block
 * ---
 * - for above HTML.. paragraphs are block elements
 *    - to change them use "display" CSS property
 * 
<style>
  .video-author,
  .video-stats {
    display: inline-block;
  }
</style>
 * 
 * - then these are displayed beside each other (on same line)!
 * 
 * >>> inline-block => block
 * ---
 * - in the above example, img and input-text are inline-block elements
 * 
.thumbnail {
  display: block;
  width: 300px;
}

.search-bar {
  display: block;
}
 * 
 * - this put img and input on different lines 
 * 
 * 
 * ! 9. The Div element
 * ---------------------
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
