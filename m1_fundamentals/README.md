24/04/2023
- Git and Github(Repo, commit,push, pull, branch)
	1. https://www.freecodecamp.org/news/create-and-sync-git-and-github-repositories/
	2. https://www.freecodecamp.org/news/git-and-github-for-beginners/
	3. https://gist.github.com/donburks/a5c1aae6de7d1504e631
- Web Development fundamentals
	1. https://codeyouth.atlassian.net/wiki/spaces/CODEYOUTH/pages/218791966/intro.dev	
	2. https://www.edureka.co/blog/web-development-tutorial/
- HTML/CSS/JS
- Front-end, Back-end

25/04/2023
- HTML sections: Head and Body
- Headings and paragraph tags
- Lorem Ipsum fake text lipsum.com
- Lists : 
	Ordered:  1. Maths
						2. Science
						3. English
						4. Health

						<ol type="A">
						<li>One</li>
						.....
						</ol>
	Unordered List :  . Maths
										. Science			

	Ex1: https://ilyabirman.net/meanwhile/pictures/three-level-headings@2x.png (https://ilyabirman.net/wireless-dj/help/)
	Ex2: https://miro.medium.com/v2/resize:fit:1400/1*CQtt0HJ7858Y44OUDoxD5A.jpeg
	Ex3: https://media.geeksforgeeks.org/wp-content/uploads/20220127195958/nestedlist1.png

	26/04/2023
	- tags and attributes
	<h1></h1>
	<p></p>
	<br>
	<ol type="a">

	- img tag with src, height and width attributes
	- Hyperlinking - linking to an external or internal webpage/file
				<a href="url">
  - linking within a file using id
	- using image as a hyperlink
	- inline and block elements
				inline elements- appear in a row by default   img, a
				block level elements- appear on a new line  h1, p,li,div
				

	Ex1: Introduction/Contribution
	Ex2: Different image items in a row
	Ex3: linking to different files in m1_fundamentals
	Ex4: Hypelinking one news
	Ex5: clicking on one small product image,opens a new file with bigger image and some description of the product

	27/04/2023
	- setting inline style: colors, background-color
	- Form fields
	Ex1: https://www.w3.org/wiki/images/0/01/Figure30.png
	Ex2: https://colorlib.com/wp/wp-content/uploads/sites/2/free-html5-and-css3-login-forms.jpg
	font awesome icons: https://www.w3schools.com/icons/fontawesome_icons_intro.asp
											fontawesome.com


	28/04/2023
	- Head section: meta, link, script, base tags
	- Tables - tr, td, cellspacing, cellpadding, rowspan, colspan
	- iframes- inline frames to embed any web document, video, google maps in your webpage
	- media files in webpage

	Ex1: https://www.programiz.com/sites/tutorial2program/files/html-table-colspan.png
	Ex2: https://www.programmingempire.com/wp-content/uploads/2022/12/image-2-1024x522.png
	Ex3: https://samplelib.com/sample-mp3.html


	01/05/2023
	- 3 ways to include styles
	1. Inline stle
	2. Internal stylesheet
	3. External stylesheet

	Ex1: include a single quotation on web page with background-color of page should be lightbrown. Quotation: font size-20px, font family:impact, color: yourchoice, center aligned
	you can include some heading or author name also
	you have to use external stylesheet and internal stylesheet for this ex.
	<!-- <q></q>
<!-- <blockquote></blockquote> or <p>-->

- selectors
1. using tag name- p{}   p{color:ddfsfsdfd;back}
2. using id - #idname{}   its unique and applies to one element
3. using class-  .classname{}  , used for applying same style to multiple elements
4. grouping tags - e.g. h1,h2,p{}
5. selecting tag with a class - e.g. p.classname{}

Ex2: Make a List of fruits with color of each list item will be that of fruit. use class, id and tag as a selector
1. Apples
2. Kiwi
3. Orange
4. Grapes
5. Strawberry
6. Banana

Do following exercises, setting properties: colors, background colors, font size,family,style using classes, ids,tags selectors 
Ex3: https://img.teleflora.com/images/o_0/l_backgrounds:202002-DOTD_640Mobile-a,pg_1/w_640,cs_no_cmyk,c_pad,g_south/f_auto,q_auto:eco,e_sharpen:200/backgrounds/202002-DOTD_640Mobile-a/flowers

Ex4: https://templatemo.com/tm-076-flower-shop
Ex5: https://www.amazon.ca/GRACE-KARIN-Pullover-Sweaters-Sweater/dp/B09H2T21GH/ref=sr_1_3?crid=23FW4K4G47OZJ&keywords=tops%2Bwomen&qid=1682519802&sprefix=top%2Caps%2C282&sr=8-3&th=1


2/05/2023
- universal selector - property applies to all elements on a webpage
*{
	color:white;
	background-color:pink;
	
}

- descendant/children/grandchildren

- div h1{prop1:value;}
   -- h1 which is child/grandchild(descendant) of div
- div>h1{prop1:value;}
	-- h1 is direct child of div	
- Descendant Selector	- div p{}	- Used to call all p elements of div, i.e, children, grand children and so on.
- Child Selector-	div > p{}	- Used to call only child p elements of div, not grand and great grand.

- setting background image
		body{
		background: url('') 
		background-repeat: no-repeat/repeat-x/repeat-y
		background-size: cover
		}

- box model - padding, margin, border, border-radius    
- total width of element= width+left margin+right margin+left padding+right padding+left border width+right border width		
- border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. 
*{
	box-sizing:border-box;
}
- float : places an element on the left or right side of its container
 div{
	float:left;
}
Ex1: https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7dsQrPrexJrVy6boXUwq8Q.png
Ex2: https://doc.qt.io/qt-6/images/simplebrowser.png		

03/05/2023


 # div and span
 - div is a block level element and used to style/group elements
 - span is inline elements and used to style part of a sentence
 # pseudo selectors
		a:link,a:visited, a:hover,a:active, div:hover

 # display
 - inline, block, inline-block

 Ex1: Navigation bar for w3schools.com
 Ex2: https://www.crio.do/blog/content/images/2022/02/HTML-Project---Online-Code-Editor--JQuery.png
 

4/05/2023
# position
- static, absolute, relative, fixed

# lists and table styling

# z-index - decides order in which elements will be stacked-what in front and what behind

Ex1: create 2-3 news from cp24.com
Ex2: create google.com homepage
Ex3: http://web.mit.edu/6.813/www/sp16/labs/lab1-html-css/ex1-example.png

05/05/2023
- flexbox model
Resources:
1. https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/
2. flex game:  https://flexboxfroggy.com/
3. http://snapeuh.github.io/flexbox-presentation/
4. One page webiste using flexbox: https://medium.com/swlh/how-i-use-flexbox-to-create-a-one-page-website-81db78e61738
5. One page webiste using flexbox and grid: https://medium.com/swlh/how-i-use-css-grid-and-flexbox-to-create-a-one-page-website-262aeea3592a


css review: https://web.stanford.edu/group/ttsclasses/css/css-presentation.ppt