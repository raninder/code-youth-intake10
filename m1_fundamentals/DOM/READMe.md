# DOM- Document Object Model
# 5 ways to access HTML elements:
- 1. by using getElementById()
- 2. by using getElementsByClassName()
- 3. by using getElementsByTagName()
- 4. by using querySelector()
- 5. by using querySelectorAll()


## querySelector()
- select only one element
- always select first element of given type
- select tag("h1"), id("#h1"), class(".h1")

## querySelectorAll()
- select multiple elements
- select tag("h1"), id("#h1"), class(".h1")
- return kind of array

## Add and remove HTML elements
### Add- createElement()

Ex1: highlighting keywords
Ex2: create 3 hyperlinks, append to list
Ex3: create a table with name and address,2-3 rows data


31/05/2023
# Events
## 3 ways to handle events:
- Using HTML attribute
- Using DOM Property
- Using addEventListener Method

Events resources:
1. https://www.tutorialstonight.com/js/js-dom-events
2. https://www.coderepublics.com/JavaScript/JavaScript-form-events.php
3. https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events
Ex1: create a simple event handler that causes the text inside the button (btn) to change when it is clicked on, and change back when it is clicked again.
Ex2: headinw with four buttons of difefernt colors(red,green,blue,yellow). when clicked, heading color will change to that color

Ex3: create an input text field and an empty p element. whatever you write in text field, it will be dsipalyed in p.
Ex4: Given following code-
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"></div>
</body>

Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.