1.1.1 What is HTML?
HTML is like the skeleton of a website, giving it structure and form. It sets up everything you see online, from text and images to forms and buttons. Without HTML, websites would just be plain text without any organization.

HTML = HyperText Markup Language
Hypertext refers to text that contains links to other documents or resources. In HTML, hypertext allows users to navigate between different web pages by clicking on links.
Markup refers to the annotations or tags that are used to define the structure and formatting of content in a document. In HTML, markup tags are used to specify elements such as headings, paragraphs, images, and links that make a web page visually appealing and easy to navigate. These tags provide information to web browsers about how the content should be structured, styled, and rendered on the user's screen.
Language refers to the system of rules and syntax used to write and interpret the markup in a consistent and standardized manner. HTML provides a set of predefined tags and attributes that define how content should be displayed and interacted with in a web browser. It's the universal translator, the language that humans, computers and browsers understand.

1.2.1 The Birth of HTML 
HTML 5, the current version, was released in 2014 and introduced many exciting features such as native multimedia support, semantic elements, and improved form controls. 

1.2.2 HTML Evolution
HTML has come a long way since its early days. Let's take a quick look at some important moments in its evolution:


Introduction of HTML1 (1993)
The first version of HTML that laid the foundation for web development. It introduced basic elements like headings, paragraphs, and lists, paving the way for the future of HTML.

Introduction of HTML2 (1995)
With HTML2, tables and the ability to embed images were introduced. This made it easier to create structured layouts and include visuals in web pages.

HTML3 and HTML4 (1997)
HTML3 (1997) brought exciting features like frames, style sheets, and the ability to add interactivity with JavaScript. HTML4 (1997, republished in 1999) continued to build on those advancements and introduced support for multimedia elements.

 responsive web design

 1.3.1 Setting Up An HTML Development Environment:

 1.3.2 Text Editor
A text editor is a software application that allows you to create and edit plain text files, and to write and edit code. For writing HTML code

1.3.3 Web Browser
A web browser is necessary to open, view and test your HTML code. Most modern web browsers include built-in developer tools that can help you debug your code and analyze your web page's performance. They are designed to interpret HTML code and display its content, formatting, and layout in a user-friendly way.

1.3.5 Edube™ Sandbox
It lets you write, test, and preview your HTML code right away. No need to install or configure any software on your computer.

1.4. Character Encoding
1.4.1 What Is Character Encoding?
method used to represent characters as numbers that computers can understand.
Why numbers? Because computers process and store information using electronic signals, and the signals are represented by binary digits, also known as bits1, which can only have two possible states: "on" or "off" (represented by 1 or 0)
when you look at a web page, the text on it needs to be changed into a special code that computers can understand in order for it to be shown correctly. This is called character encoding.

1.4.2 The Binary System
each bit can have only one of two values: 0 or 1.0 for "off" and 1 for "on".

1.4.3 Decimal vs. Binary
1011 = 11

1.4.4 The Hexadecimal System
hexadecimal is often used to represent binary values in a more convenient and compact way. What is more, understanding hexadecimal is important when working with colors and character entities In the hexadecimal system, you use 16 digits and letters (0-9 and A-F) to represent all numbers.

1.4.5 Character Encoding Standards
ASCII, or the American Standard Code for Information Interchange, is the most basic character encoding standard. It uses 7 bits to represent 128 characters, which includes letters, numbers, and symbols commonly used in the English language. However, ASCII encoding is not suitable for representing characters from other languages.
Unicode is a more comprehensive character encoding standard that supports a much larger number of characters from different languages and scripts. It can use up to 32 bits to represent over a million characters, including those from non-Latin scripts like Chinese, Arabic, and Cyrillic. Unicode includes several different encodings, including UTF-8, UTF-16, and UTF-32.
UTF-8 is a widely used character encoding standard that is compatible with ASCII. It uses a variable-length encoding that can represent characters using between 1 and 4 bytes2, depending on the character being encoded. UTF-8 can represent all characters in the Unicode standard, making it an ideal choice for web development.

1.4.6 Specifying Character Encoding Standard
UTF-8 is the most commonly used character encoding standard for web development today. It is the default encoding standard used by HTML5, and is recommended for use in all modern web applications.

To specify the character encoding standard as UTF-8 in an HTML document, you can use the following code in the head section of your document: <meta charset="UTF-8">.

This tells the web browser that the document is encoded using UTF-8, and the browser can use the appropriate decoding algorithm to render3 the characters correctly.

1.5.1 What is HTML syntax?
HTML syntax refers to the rules, guidelines, and conventions that define how HTML code should be structured and written. By following the correct syntax, you can ensure that your HTML code is properly understood by web browsers and displayed as intended.

1.5.2 The DOCTYPE declaration
The DOCTYPE declaration is a special line of code that should appear at the very beginning of an HTML document, before any other content or elements. It consists of a string of characters2 that identifies the version of HTML being used. The DOCTYPE declaration for HTML5 is <!DOCTYPE html>:

1.5.3 Elements and Tags
HTML Tags
Tags are the markers that define the start and end of an element. They are written with angle brackets, like <tag> for the start of an element and </tag> (with a forward slash before the tag name) for the end. Tags label the type of content they enclose This means that the basic structure of an HTML element includes:

the opening tag (<tag>),
the content itself, and
the closing tag (</tag>).
Tags vs. Elements
In summary:

An element refers to the whole structure, including the opening tag, the content, and the closing tag (if present). It's what you see rendered on a webpage.
A tag refers specifically to the opening and closing markers that define the start and end of an element. They are not displayed on the webpage but instruct the browser on how to interpret the content.

1.5.4 Block-Level and Inline Elements
Block-Level Elements
Block-level elements are used to create the main structure of a web page, such as headers, paragraphs, and lists.
Examples of block-level elements include:

<h1> through <h6> for headings,
<p> for paragraphs,
<ul> and <ol> for lists, and
<div> for grouping content.

Inline Elements
Inline elements, on the other hand, are used to style content within block-level elements, such as links and images. They don't start on a new line and only take up as much space as needed to display their content. 
Examples of inline elements include:

<a> for links,
<img> for images, and
<span> for styling content.

1.5.5 HTML Comments
To create a comment, you simply need to enclose the text you want to comment out between <!-- and -->.

1.6 HTML Syntax: Attributes and Values
1.6.1 Attributes and Values

provide additional information about an element, such as its style, source, or behavior. They are included within the opening tag and consist of a name-value pair.
global attributes, which can be applied to any HTML element. They are useful for a wide range of purposes, such as assigning unique identifiers, adding classes for styling, or providing additional information about an element. Examples include id, class, style, and title.
element-specific attributes, which are specific to particular HTML elements and cannot be used with all elements. They provide functionality or modify the behavior of specific elements, making them essential for proper usage of those elements. Examples include href (specific to <a> elements), src (specific to <img> and media elements), and type (specific to <input> elements).

1.7 HTML Syntax: HTML, Head, and Body Tags
1.7.1 HTML, Head, and Body
These elements set the stage for the content and functionality of your web page

1.7.2 The HTML Tag
The HTML tag (<html>) is one of the most important tags in an HTML document, as it defines the entire web page and serves as the starting point for every HTML document.
The HTML tag is an opening tag that comes at the beginning of the document and a closing tag that comes at the end. Everything in the document appears between these two tags, and it does not have any attributes associated with it.
<!DOCTYPE html>
<html>
   <!-- The hidden content of an HTML document: the head section will go here. -->
   <!-- The visible content of an HTML document: the body section will go here. -->
</html>

1.7.3 The Head Section
The head section is an important component of an HTML document that contains information used by the browser to display and interact with the web page. It can optimize the web page for search engines and furnish additional context to users. The head section is hidden from the user's view and does not appear on the web page

Some of the key pieces of information that can be included in the head section are:

Page title, i.e. the title of the web page that appears in the title bar of the browser and is used by search engines to display the page title in search results.

Example: <title>My Web Page</title>

Metadata, which includes the description and keywords that are used by search engines to index and rank the web page, instructions for web crawlers how to index and display the web page, or information about the author and creation date of the page.

Example: <meta name="author" content="Peter Jackson">

Links to external files, which includes CSS stylesheets and JavaScript files that add styling and functionality to the web page.

Example: <link rel="stylesheet" href="styles.css"> <script src="script.js"></script>

Character encoding, which tells the browser what character set to use when displaying the web page. (You already know that, don’t you?)

Example: <meta charset="UTF-8">

<!DOCTYPE html>
<html>
   <head>
      <title>My Web Page</title>
      <meta name="description" content="This is a website about soccer!">
      <link rel="stylesheet" href="styles.css">
      <script src="script.js"></script>
   </head>
   <!-- The visible content of an HTML document: the body section will go here. -->
</html>


1.7.4 The Body Section
The body section is the part of an HTML document that contains the visible content of the web page (i.e. text, images, videos, forms, links, etc.)
head section provides instructions to the browser on how to display the content in the body section. Without the instructions provided by the head section, the browser may not be able to properly render the content in the body section.

<!DOCTYPE html>
<html>
   <head>
      <title>John Smith Photography</title>
      <meta name="description" content="John Smith Photography specializes in capturing authentic and compelling images that tell the story of your business, project, or cause.">
      <link rel="stylesheet" href="styles.css">
      <script src="script.js"></script>
   </head>
   <body>
      <h1>Bringing Your Brand to Life with Striking Visuals</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="/resources/media/html-ess-1-7-1-apple-photo.jpg" alt="Apple photo">
   </body>
</html>

1.8 The Relationship Between HTML, CSS, and JS
1.8.1 Understanding the Interaction Between HTML, CSS, and JavaScript

HTML: Structure, content, markup
CSS: Presentation, style, formatting
JavaScript: Interactivity, functionality, behavior

Document Object Model (DOM).

The DOM is a programming interface that enables developers to dynamically manipulate the structure and content of web pages using JavaScript.

1.8.2 The Document Object Model (DOM)
The Document Object Model (DOM) is a powerful tool that allows web developers to change the content and structure of an HTML document using JavaScript code.

The DOM represents the HTML document as a tree-like structure, which consists of various types of nodes, including document nodes, element nodes, attribute nodes, text nodes, and comment nodes. The document node represents the entire HTML document, while element nodes correspond to HTML elements, attribute nodes represent HTML attributes, text nodes contain the actual text within HTML elements, and comment nodes represent comments in the HTML code.

<!DOCTYPE html>
<html>
  <head>
    <title>This is the title of my page</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>Lorem ipsum dolor sit amet…</p>
  </body>
</html>

DOM:

- document
  - html
    - head
      - title (This is the title of my page)
    - body
      - h1 (This is a heading)
      - p (Lorem ipsum dolor sit amet…)

Level one: document,
Level two: html,
Level three: head/body.

1.9 Module 1 Wrap Up

2.0.1 Welcome to Module 2: Formatting Text and Organizing Data

2.1 Headings

HTML headings are special elements in an HTML document that are used to define the heading or title of a section or page. Headings provide structure and hierarchy to a web page by indicating which sections are more important or subordinate to others.here are six levels of HTML headings, ranging from <h1> to <h6>, with <h1> being the most important heading and <h6> being the least important. The heading level is determined by the number in the heading tag. For example, <h1> indicates the most important heading, while <h2> indicates a subheading under <h1>, and so on.

2.1.2 The Purpose of Headings

to provide accessibility and improve the user experience by helping visitors understand the content and structure of a web page.Headings are also important for search engines as they use them to understand the topic of a web page and index1 (categorize) it accordingly. Therefore, proper use of HTML headings can improve the search engine optimization2 (SEO) of a web page by making it easier for search engines to identify and rank relevant content.

<h1>Heading 1</h1>
<h2>Heading 2</h2>

2.1.3 Heading Sizes
In HTML, the size of headings is defined by the HTML tags <h1> to <h6>, but the actual display size can vary depending on the browser and the device used to view the page. By default, the font size of headings is determined by the browser's default stylesheet or user-defined stylesheets.

Typically, the default font size for the different heading levels in most web browsers is as follows:

<h1>: 32px
<h2>: 24px
<h3>: 18px
<h4>: 16px
<h5>: 14px
<h6>: 12px

an <h1> heading might be used for the title of the page, while <h2> headings might be used for major sections of the page, with relevant text or other HTML elements included between each of the headings to provide more specific information.

Here is a breakdown of different levels of HTML5 headings:

<h1>: The largest and most important heading on the page. This is typically used for the title of the page or the main heading.
<h2>: A subheading of <h1>. This is often used for the main section headings on a page.
<h3>: A subheading of <h2>. This is often used for subsection headings or less important main headings.
<h4>: A subheading of <h3>. This is often used for subsection headings or less important main headings.
<h5>: A subheading of <h4>. This is often used for subsection headings or less important main headings.
<h6>: The smallest and least important heading on the page. This is often used for minor headings or subheadings.

2.2.1 The <p> Tag and Inline Formatting
In HTML, paragraphs are defined using the <p> tag.

The <p> tag indicates that the enclosed text should be treated as a separate paragraph, with a blank line inserted above and below the text. The <p> tag is a block-level element, which means that it takes up the entire width of the container1 in which it is placed.

To create a paragraph, you can use the opening <p> tag before the text and the closing </p> tag after the text that you want to display as a paragraph.

<p>Hello, World</p>

2.2.2 Formatting Text with Inline Tags

The <strong> Tag
The <strong> tag is used to make the enclosed text bold. For example, to make the word "important" bold in a paragraph, you would write:

<p>This is some <strong>important</strong> text.</p>

The <em> Tag
The <em> tag is used to make the enclosed text italic. For example, to make the word "emphasis" italic in a paragraph, you would write:

<p>This is some text that requires <em>emphasis</em>.</p>

The <u> Tag
The <u> tag is used to underline the enclosed text. For example, to underline the word "underlined" in a paragraph, you would write:

<p>This is some text that needs to be <u>underlined</u>.</p>

The <sup> Tag
The <sup> tag is used to make the enclosed text superscript (slightly above the regular text). For example, to write ordinal numbers, such as first, second, and third in the following form: "1st, 2nd, and 3rd", you would write:

<p>1<sup>st</sup>, 2<sup>nd</sup>, and 3<sup>rd</sup></p>


2.3.1 Quotations: the <q> and <blockquote> Tags
When you want to add a quote to your HTML document, you can use two tags:

the <q> tag, and
the <blockquote> tag.
The <q> Tag
The <q> tag is used for short, inline quotes (typically just a few words or a short phrase). It is often rendered with quotation marks around the text. For example:

2.4.1 Line Breaks and Horizontal Rules
Line breaks and horizontal rules are simple HTML elements that can be used to create visual elements within a web page. The <br> tag creates a new line of text, while the <hr> tag creates a horizontal line.

Line Breaks
In HTML, a line break is a simple element that creates a new line of text within a block-level element. This is typically represented by the <br> tag and is used to separate lines of text, such as in poetry or song lyrics.

Horizontal Rules
A horizontal rule is a visual element that creates a horizontal line across the width of a block-level element. It is typically used to separate sections of content within a page.

To add a horizontal rule, insert the <hr> tag wherever you want to add a line. The <hr> element is self-closing and does not require a closing tag.

2.5.1 Computer Code and Preformatted Text
In HTML, the <code> and <pre> tags are used to display computer code and preformatted text, respectively.

These tags are useful when displaying code examples or preserving the formatting of text that has been entered with spaces or line breaks.

2.5.2 Displaying Computer Code with the <code> Tag
The <code> tag is used to display inline code snippets.

When used, the text inside the <code> tag is displayed in a monospaced font, which makes it stand out from the surrounding text. This is useful when you want to display code in the middle of a paragraph, like this:

Hello, World!

If you want to display a code snippet in a block, you’ll need to use the <pre> tag instead

2.5.3 Displaying preformatted text with the <pre> tag

To display preformatted text like computer code, poetry, or song lyrics in HTML, you can use the <pre> tag. For example, the following formatted text:

<pre>Hello, World!
What a sight to see,
A vast and endless web,
Connecting you and me.</pre>

To create a nested list, simply place a new <ul> or <ol> element within an existing <li> element.

2.7.4 Merging Cells
In HTML tables, it is possible to merge two or more cells in a row or a column to create a larger cell that spans multiple rows or columns. This can be useful for creating headings, subheadings, or data cells that have to span across several columns or rows.

You can merge cells in a table using the colspan and rowspan attributes. The colspan attribute specifies how many columns a cell should span (merges cells horizontally), while the rowspan attribute specifies how many rows a cell should span (merges cells vertically).

Here's an example of a table with merged cells:

<table>
  <tr>
    <th rowspan="2">Product</th>
    <th colspan="2">Price</th>
  </tr>
  <tr>
    <th>Old</th>
    <th>New</th>
  </tr>
  <tr>
    <td>Product 1</td>
    <td>$10.00</td>
    <td>$12.00</td>
  </tr>
  <tr>
    <td>Product 2</td>
    <td>$15.00</td>
    <td>$18.00</td>
  </tr>
</table>

Here’s what happens in our HTML code. The first cell in the first row has a rowspan of 2, which means it spans across two rows. This results in the first cell of the second row being merged with the first cell of the first row.

The second row has two cells with a colspan of 2, which means each of these cells spans across two columns. This results in these cells spanning across the "Old" and "New" columns in the table.

2.7.5 The <caption> Element
The <caption> element is used to add a title or caption to an HTML table. It is a container tag that should be placed immediately after the opening <table> tag and before any other table elements.

<table>
  <caption>Product Prices</caption>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Product 1</td>
    <td>$10.00</td>
  </tr>
  <tr>
    <td>Product 2</td>
    <td>$15.00</td>
  </tr>
</table>

2.7.6 The <table> Tag and Its Attributes
As you've learned, the HTML <table> tag helps you make tables on a webpage. But what if you want to change how the table looks? Well, you've got a couple of options: you can tweak the attributes of the <table> tag itself, or you can use CSS styles to jazz up the table.

The <table> tag in HTML has some attributes you can use to change how tables appear. You can add these attributes to the opening <table> tag, and they let you control things like the size and layout of the table, as well as the color and border style of the cells.

Some of the most commonly used attributes include:

border, which sets the border size of the table (deprecated in HTML 5, CSS should be used instead).
cellspacing, which sets the space between cells in the table (deprecated in HTML 5, CSS should be used instead).
cellpadding, which sets the space between the cell content and the cell border (deprecated in HTML 5, CSS should be used instead).
width, which sets the width of the table (deprecated in HTML 5, CSS should be used instead).
height, which sets the height of the table.
align, which sets the horizontal alignment of the table (deprecated in HTML 5, CSS should be used instead).
bgcolor, which sets the background color of the table (deprecated in HTML 5, CSS should be used instead).
Here's an example of a table that uses all of the listed attributes:


<table border="1" cellspacing="10" cellpadding="5" width="80%" height="200" align="center" bgcolor="#f2f2f2">
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Product 1</td>
    <td>$10.00</td>
  </tr>
  <tr>
    <td>Product 2</td>
    <td>$15.00</td>
  </tr>
</table>

2.7.7 Other Table-Specific Attributes
Along with commonly used, though deprecated, attributes such as border, cellpadding, and cellspacing, there is another attribute that plays an essential role in improving the user experience. This is the summary attribute, which gives a summary of the table for users who use assistive technologies like screen readers.

<table>
  <caption>Monthly Sales</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$12,000</td>
    </tr>
    <tr>
      <td>March</td>
      <td>$15,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$37,000</td>
    </tr>
  </tfoot>
  <summary>This table shows the monthly sales figures for the first quarter of the year.</summary>
</table>

3.1.1 The <img> Tag and Its Attributes
Images are an essential element of any website. They not only add visual interest but can also help to communicate information to users. In HTML, you can easily add images to your web page using the <img> tag.

The <img> tag is an empty element, which means that it does not have a closing tag. Instead, all the attributes are included in the opening tag.

The most important attributes of the <img> tag are <src>, <alt>, <width>, and <height>.

The src Attribute
The src attribute specifies the source URL of the image that should be displayed.

For example: src="https://edube.org/uploads/media/default/0001/03/mountain_landscape.jpg".

The alt Attribute
The alt attribute provides alternative text that will be displayed if the image cannot be loaded. It is also used by screen readers for visually impaired users.

For example: alt="Mountain landscape".

The width Attribute
The width attribute specifies the width of the image. It can be defined in pixels (e.g., width="340") or as a percentage of the containing element's width (e.g., width="50%").

The height Attribute
Similarly to width, the height specifies the height of the image in pixels or as a percentage of its parent container.

For example: height="250" or height="50%".


<img src="https://edube.org/uploads/media/default/0001/03/mountain_landscape.jpg" alt="Mountain landscape" width="340" height="250">

3.1.2 Image Formats
Before inserting an image into your web page, it's essential to choose the right image format. The most common image formats used on the web are:

JPEG,
PNG, and
GIF.
JPEG is used for photographs, while PNG is best suited for graphics and images with transparent backgrounds. GIF is commonly used for simple animations and graphics.

3.2.2 The <a> Tag and the href Attribute
In HTML, you can easily create links using the <a> tag, which stands for "anchor".

The <a> tag primarily relies on the href attribute, which specifies the destination of the link. This destination can be an absolute URL (such as https://www.example.com/) or a relative URL (like about.html if the target page resides in the same directory as the current page).

To add a visible, clickable link text in HTML, you need to place it between the opening <a> tag and the closing </a> tag. This text is what is displayed on the web page.
<a href="https://www.example.com/">Visit our website</a>

Hyperlinks are typically underlined and displayed in a different color than the surrounding text, to indicate to the user that they can be clicked.

3.2.3 Internal Links
There are two types of hyperlinks: internal and external. Internal links are used to navigate within the same website or web page, while external links are used to navigate to other websites or web pages.

To create an internal link, you can use either an absolute or a relative URL to specify the URL of the page or section of the same website that you want to link to. For example:

<a href="https://example.com/page.html">Link to Page</a> – the full address of the page (absolute URL).
<a href="/page.html">Link to Page</a> – the relative URL which only includes the path to the page, and creates a link to the page.html file in the same directory as the current page.

3.2.4 Anchor Links
You can also create links that point to specific sections within a web page. Such links are sometimes called anchor links or jump links.

To create a link like this, you’re going to need the id attribute and the # symbol. Here’s how to do it:

Add the id attribute to an HTML element on the page that you want to link to. For example, if you want to link to an <h2> element with the content “Section 1”, you can do the following: <h2 id="section-1">Section 1</h2>.
Then, create a link that points to this anchor by adding the # symbol followed by the id to the href attribute of an <a> tag, like this: <a href="#section-1">Go to Section 1</a>.
When a user clicks on this link, they will be taken to the section of the page with the id="section-1". It's important to note that the id value must be unique within the page, and it's a good practice to use descriptive names that indicate the section's content.

3.2.5 External Links
To create an external link, you need to specify the full URL of the page, website, or resource that you want to link to. For example:

<a href="https://example.com">Visit Example.com</a>

t's important to note that because external links take users away from your website, you should ensure that they open in a new window or tab using the target attribute. For example:

<a href="https://www.example.com" target="_blank">Visit Example Website</a>

The target="_blank" attribute will open the linked page in a new tab or window, allowing users to easily return to your website. The target="_self" attribute will open the link in the same window.

3.2.6 Email and Telephone Links
In addition to internal and external links, HTML also allows you to create email and telephone links.

Email links
To create an email link, you can use the mailto protocol followed by the email address that you want to link to. Here's an example:

<a href="mailto:info@example.com">Email Us</a>

Telephone links
Similarly, to create a telephone link, you can use the tel protocol followed by the telephone number that you want to link to. Here's an example:

<a href="tel:123-456-7890">Call us at 123-456-7890</a>

3.2.7 Other Link-Specific Attributes: download, rel, and title
In addition to the commonly used href and target attributes, there are several other link-specific attributes that can be used to enhance the functionality and user experience of hyperlinks. Here are three examples: download, rel, and title.

The download Attribute
The download attribute specifies that the target of the link should be downloaded rather than navigated to. The attribute value can be used as the default filename that the downloaded file will be saved as.

<a href="https://example.com/document.pdf" download="my-document.pdf">Download my document</a>

The rel Attribute
The rel attribute specifies the relationship between the current document and the target document. It can be used to indicate that the target document is a stylesheet, a parent document, or a part of a series, among other things.

<a href="https://example.com/stylesheet.css" rel="stylesheet">Link to stylesheet</a>

The title Attribute
The title attribute provides additional information about an element, enhancing the user's understanding and interaction with web content. The attribute offers supplementary details about the hyperlink's destination or purpose. This information typically appears as a tooltip, a small pop-up box, when the user hovers their mouse over the link, giving users a preview of what to expect before clicking.

<p>Go to <a href="https://example.com/about" title="Visit our About section.">our website</a> for more information.</p>

3.2.8 Turning Elements into Links
To make an element clickable, you simply need to wrap the <a> tag around it. The href attribute within this tag defines the URL to which the link points.

This method works with a wide range of elements, including images, blocks of text, and even complex HTML structures like divs or sections.

<a href="https://www.example.com">
    <img src="/uploads/media/default/0001/03/mountain_landscape.jpg" alt="Mountain landscape" width="340" height="250">
</a>

3.3.1 Video and Audio Elements
Media content such as video and audio can greatly enhance a website's user experience. HTML provides the <video> and <audio> elements for embedding these types of media in a web page.

The elements support several attributes, such as:

src for specifying the URL of the media file,
controls for displaying built-in media controls,
width and height for specifying the dimensions of the player,
autoplay for automatically playing the media when the page loads,
loop for looping playback, and
preload for buffering the media file.


<video src="myvideo.mp4" controls autoplay>
   Your browser does not support the video tag.
</video>

3.3.2 Ensuring Cross-Browser Compatibility
It's important to note that different browsers support different video and audio codecs, which can impact the compatibility of media content across various devices.

To ensure cross-browser compatibility, it's recommended to provide multiple formats of the same media file, such as MP4 and WebM for video, and MP3 and Ogg for audio. This can be achieved using the <source> element within the <video> and <audio> elements.

<!-- Video Example -->
<video controls>
   <source src="myvideo.mp4" type="video/mp4">
   <source src="myvideo.webm" type="video/webm">
   <p>Your browser does not support the video tag.</p>
</video>

<!-- Audio Example -->
<audio controls>
   <source src="myaudiofile.mp3" type="audio/mp3">
   <source src="myaudiofile.ogg" type="audio/ogg">
   <p>Your browser does not support the audio tag.</p>
</audio>

3.3.3 Video and Audio Codecs
When working with video and audio elements in HTML, it's important to understand codecs.

Video and audio codecs are algorithms used to compress and decompress media files, enabling them to be played on different devices and platforms. In other words, they are programs that encode and decode digital media content for transmission or storage.

3.3.4 Responsive Videos
Just like with images, applying responsive design techniques to videos can ensure that your media content is accessible and engaging to users on any device, including desktop computers, tablets, and mobile phones.

To create a responsive video using HTML, you can use the <video> element with the poster and controls attributes, and the <source> element with the media atribute.

The poster attribute specifies an image that will be displayed when the video is not playing, while the media attribute located within the <source> element specifies a maximum width for the video to be displayed. This allows the video to adapt to different screen sizes.

<video poster="web-dev-picture.jpg" controls>
  <source src="web-dev-video.mp4" type="video/mp4" media="(max-width: 600px)">
  <source src="web-dev-video.webm" type="video/webm">
</video>

3.4.1 What are HTML Forms
An HTML form is a section of a web page that contains interactive elements such as input fields, checkboxes, radio buttons, and buttons. These elements allow users to input data and interact with the webpage. While one common use of forms is to submit data to a server for processing, they can also serve various other purposes.

For example, a login page typically features a form where users enter their credentials (username and password) to access restricted areas of a website. Similarly, a sign-up page includes a form where new users can register by providing their information, such as username, email address, and password.

In addition, forms can be utilized for interactive tools like calculators, such as a BMI calculator, where users input their weight and height to calculate their body mass index directly on the webpage without server interaction.

3.4.2 The <form> Element
To create a form, you must use the <form> element. Inside the <form> element, you can add various input fields, such as text input, radio buttons, checkboxes, and more.

The <form> element typically includes:

the action attribute, which specifies the URL of the server-side script or endpoint that will process the form data. The action attribute is added to the <form> element. When the form is submitted, the browser will send the form data to the specified URL.
the method attribute, which specifies the HTTP method (GET or POST) used when sending form data to the server. The method attribute is added to the <form> element and its value is set to either "GET" or "POST".


<form action="submit-form.php" method="POST">
  <!-- Form elements/fields go here -->
</form>

3.4.3 The GET and POST Methods
To allow users to submit form data, you must choose the way the data gets sent. This is called the HTTP method.

The HTTP method, also known as the HTTP request method, is a verb that indicates the desired action to be performed on a resource identified by a URL. It's like a type of action word that says what to do with the information.

HTTP defines several methods, each with a specific purpose. The two most common methods for submitting form data are GET and POST.

The GET Method
The GET method sends the form data in the URL query string. This means that the form data is visible in the browser's address bar and can be bookmarked or shared with others.

The POST Method
The POST method sends the form data in the body of the HTTP request. This means that the form data is not visible in the URL or the browser's address bar.

3.4.4 The <input> Element
The <input> element is used to create different types of input fields used to collect user data. It can be configured to accept various types of data, such as text, passwords, numbers, and emails, among others, through the use of the type attribute.

The Type Attribute
The type attribute defines the functionality and input control displayed to the user, enabling specific data formats and validations for each field. In other words, it determines the type of input field and provides built-in validation functionality to ensure the input matches the desired format criteria.

Common input types (the type attribute values) include:

text – a single-line text input field, used for short text inputs such as names, email addresses, etc.
email – a single-line text input field used specifically for entering and validating email addresses (the browser applies built-in validation to ensure that the user’s input is in the proper email format)
url – a single-line text input field used specifically for entering, validating, and accepting only properly-formatted URLs;
number – a single-line input field used specifically to validate and accept only numbers;
password – a single-line text input field that masks the entered characters to maintain the confidentiality of the password;
checkbox – a checkbox that can be toggled on or off, allows users to select one or more options from a list;
radio – a radio button that belongs to a group of radio buttons (only one can be selected at a time)
submit – a button that submits the form data and sends it to the server as specified by the action and method attributes;
reset – a button that clears the form data and resets it to the initial values.
For example, setting type="text" creates a field for textual input, while type="email" expects an email address, including built-in validation to ensure the input matches email format criteria.

The Name Attribute The name attribute is essential for identifying each piece of data submitted. It acts as a key for the form data, allowing the server-side script to access and process user inputs based on these names.

The Required Attribute
Adding the required attribute to an input field makes it mandatory for users to fill out that field before submitting the form. It's a simple way to ensure that critical information is not omitted.

3.4.5 The <label> Element
The <label> element plays a vital role in creating accessible and user-friendly forms. It provides a textual description for each input field, improving form readability and usability.

By associating a label with a specific input field using the for attribute (which should match the input's id attribute), users can click on the label to focus on the corresponding input, a feature particularly beneficial for those using assistive technologies.

Here's a basic example of a labeled <input> element with required email input field in an HTML form:

<label for="email">Email:</label>
<input type="email" id="email" name="useremail" required>

3.5.1 Enhancing Forms with Key Elements: <textarea>, <select>, <button>, and <fieldset>

The Textarea Element
The <textarea> element creates a multi-line text input field, which allows users to enter larger amounts of text. You can set the rows and cols attributes to control the visible size of the textarea.

<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>

The Select Element
The <select> element creates a dropdown list, used with <option> elements to define the available options. You can use the multiple attribute to allow multiple selections, and the size attribute to control the number of visible options.

<label for="pasta">Pasta:</label>
<select id="pasta" name="pasta">
  <option value="spaghetti">Spaghetti</option>
  <option value="penne">Penne</option>
  <option value="lasagna">Lasagna</option>
  <option value="farfalle">Farfalle</option>
</select>

The Button Element
The <button> button element creates a clickable button that can be customized with JavaScript or used to submit or reset a form, depending on its type attribute (e.g., submit, reset, or button). If the type attribute is omitted or set to "button", it does not have any default behavior and can be controlled with JavaScript.

<button type="button" onclick="alert('Hello, World!')">Click me!</button>

The Fieldset Element
The <fieldset> element creates a container used to group together related form elements. It can be helpful in organizing complex forms with multiple sections. The <legend> element can be used within a <fieldset> to provide a caption or title for the group.

<fieldset>
  <legend>Shipping Address</legend>
  <label for="address">Address:</label>
  <input type="text" id="address" name="address">
  <br>
  <label for="city">City:</label>
  <input type="text" id="city" name="city">
  <br>
  <label for="zip-code">ZIP Code:</label>
  <input type="text" id="zip-code" name="zip-code">
</fieldset>


3.5.2 Mastering Form Attributes: value, placeholder, disabled, and readonly
Form elements can have various attributes that customize their behavior and appearance.

You’ve already been introduced to the name attribute, which specifies the name of the input field, and works as an identifier for the form element when the data is sent to the server. You’ve also learned about the required attribute, which indicates that the input field must be filled out before submitting the form.

As you might suspect, the list is longer, and some other commonly used <form> attributes include value, placeholder, disabled, and readonly.


The Value Attribute
The value attribute specifies the initial value of the input field. When the form is loaded, this value will be pre-filled in the input field.

<label for="first-name">First Name:</label>
<input type="text" id="first-name" name="first-name" value="John">

The Placeholder Attribute
The placeholder attribute specifies a hint that describes the expected value of the input field. It does not specify the initial value itself, as in the case of the value attribute. The placeholder text is displayed in the input field when it is empty and disappears when the user starts typing.

<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="name@example.com">

The Disabled Attribute
The disabled attribute disables the input field, making it uneditable and unselectable. Users cannot interact with disabled fields, and the fields appear grayed out or visually distinct from other fields.When a form is submitted, disabled fields do not send their values to the server. This attribute is useful when you want to show information to users without allowing them to edit or submit the content.


<label for="username">Username:</label>
<input type="text" id="username" name="username" value="JohnDoe" disabled>


The Readonly Attribute
The readonly attribute makes the input field read-only, allowing users to view the content but not edit it. Unlike disabled fields, read-only fields are still selectable and send their values when the form is submitted. This attribute is useful when you want to display information to users that they should not edit but still include when submitting the form data.

3.5.3 Diving Deeper into Form-Specific Attributes: maxlength, min, max, autocomplete, and pattern


The Maxlength Attribute
maxlength limits the number of characters that can be entered into a text input field. For example, the following line will limit the "username" input to 20 characters:

<input type="text" name="username" maxlength="20">

The Min and Max Attributes
min and max set the minimum and maximum values that can be entered into number, range, date, and time input fields. For example, the following line will limit the "age" input to a number between 18 and 100:

<input type="number" name="age" min="18" max="100">

The Autocomplete Attribute
autocomplete – controls whether the browser should automatically complete input fields with previously entered data. This attribute can have values of "on" (default), "off", or "new-password" (to disable autocomplete for password fields). For example, the following line will disable autocomplete for the "address" input:

<input type="text" name="address" autocomplete="off">

The Pattern Attribute
pattern specifies a regular expression that the input value must match in order to be valid. This attribute is useful for enforcing specific formatting or data validation rules. For example, the following line will require the "phone" input to be formatted as a 10-digit phone number with hyphens:

<input type="text" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">

[0-9] Accepts any digit between 0 and 9.
{3} Means “exactly three of the previous thing.” So [0-9]{3} = three digits.
- A literal dash character that must appear in the same place.
[0-9]{3} Another group of three digits.
- another dash
[0-9]{4} four digits at the end

3.6.1 Building an HTML Form

Step 1: Define the Form Element
Start with the <form> element. This element wraps all the contents of your form, including input fields, labels, and buttons. The action attribute specifies where to send the form data when submitted, and the method attribute defines how to send it (usually POST or GET).

Step 2: Add Input Fields
Input fields are where users enter data. Use the <input> tag to create these fields. The type attribute specifies the kind of data you expect (e.g., text, number, email). The name attribute is crucial for identifying the data on the server side.

Step 3: Use Labels for Readability
The <label> element enhances the usability of your form by providing descriptive text for each input field. Link each label to its corresponding input by matching the for attribute in the <label> tag with the id attribute of the <input> tag.

Step 4: Include a Submission Button
Finally, add a submit button using <input type="submit"> or <button type="submit">. This button sends the form data to the server.

4.1.1 How to Apply Styles to HTML Elements

using the style attribute right in the HTML tags (inline styling), and putting styles inside the HTML document with a style section (internal stylesheet and the <style> element).

4.1.2 Inline Styling and the style Attribute
Inline styling is a method of applying CSS styles directly to individual HTML elements using the style attribute.

The syntax for inline styling involves using the style attribute directly within an HTML element tag, followed by a property-value pair that defines the style. Here's how it is structured:

<element style="property: value;">

This means you add the style attribute to any HTML element, and then specify the CSS property and its value you wish to apply to that element, formatted as "property: value;".

Here's an example showing how to use the style attribute for adding styles directly inside a <p> (paragraph) element:

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <p>Here is a normal paragraph.</p>
        <p style="background-color: blue; color: white; font-weight: bold;">
        This paragraph has inline styling applied to it.
        </p>
        <p>Another normal paragraph.</p>
    </body>
</html>

4.1.3 The <style> Element and the Internal Stylesheet

An internal stylesheet consists of CSS rules that you put inside a <style> element in the HTML document. This method lets you style several HTML elements at once, avoiding the need to repeat styling for each individual element.

You should place the <style> element in the <head> section of your HTML document. The CSS rules inside this <style> element will then apply to matching elements in the <body> of your document based on the selectors you use.

Selectors are the part of CSS rules that identify which HTML elements to apply the styling to. Selectors can identify elements based on their tag name, class, ID, attributes, and more. For example, if you want to apply a certain color to all the paragraphs on your page, you can use the p selector to target all <p> elements.

Here's what the internal stylesheet syntax looks like:

<style>
    /* CSS rules */
    selector {
      property: value;
      /* more properties and values */
    }
</style>

<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        color: orange;
      }
      
      p {
        font-size: 18px;
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>This is Heading 1</h1>
    <p>This is an example of using an internal stylesheet with the style element. By defining CSS rules in the style element, we can apply consistent styling across the entire page without repeating the code for each element.</p>
  </body>
</html>

In this internal stylesheet, there are two CSS rules:

the first sets the color of the h1 element to orange;
the second changes the font size and color of paragraph elements to 18px and blue, respectively.

4.2.1 Colors and Font Properties

Colors play a vital role in web design, as they evoke emotions and establish visual hierarchy. Font properties, on the other hand, allow you to define the typeface, size, weight, and other characteristics of the text on your web pages.

By combining the two, you'll learn how to enhance the overal aesthetic, readability

4.2.2 Colors and Color Formats in HTML

Colors can be applied to HTML elements using the CSS color property or the background-color property. In HTML, colors can be specified in several ways. Here are some of them:

by name – there are 147 color names that can be used, such as "red", "green", "blue", "yellow", "purple", and "black".
by hexadecimal value – a six-digit code preceded by a pound sign (#) that represents a combination of red, green, and blue values. For example, #FF0000 represents the color red.
by RGB value – a set of three values representing the amount of red, green, and blue, respectively. Each value ranges from 0 to 255. For example, RGB(255, 0, 0) represents the color red.


<!DOCTYPE html>
<html>
    <head>
        <style>
            h1 {
                color: #FFFFFF;
                background-color: green;
            }

            p {
                color: RGB(0, 0, 255);
            }
        </style>
    </head>
    <body>
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>


4.2.3 Font Properties
Font properties are an essential aspect of web design, as they help to define the appearance and readability of your text. HTML provides several font properties, including font-size, font-family, font-weight, and font-style:

The font-family property specifies the font to be used for the text. It can be set to a specific font name, such as Arial, Times New Roman, or Helvetica, or a generic font family such as serif, sans-serif, or monospace. The default value depends on the browser.
The font-size property defines the size of the font. It can be set using an absolute value such as pixels (px) or points, or a relative value such as percentages (%)or em units (ems). The default value is normal.
The font-weight property sets the weight, or thickness (boldness), of the font. It can be set to a specific value name such as bold, bolder, or lighter, or to a numeric value between 100 and 900, with 400 being the default value (normal).
The font-style property defines the style of the font, such as normal (default value), italic, or oblique.

<p style="font-family: monospace; font-size: 20px; font-weight: 900; font-style: normal;">
This is a paragraph of text.</p>
//////////////////////////////////////
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                font-family: monospace;
                font-size: 20px;
                font-weight: 900;
                font-style: normal;
            }
        </style>
    </head>
    <body>
        <p>This is a paragraph of text.</p>
    </body>
</html>


4.3.1 The <span> and <div> Elements
The <span> and <div> elements are HTML tags that are commonly used for layout and styling purposes in web development. They do not have any inherent meaning or semantic value, but instead serve as containers for other elements.

4.3.2 The <span> Element
The <span> element is an inline element that can be used to apply styles to specific parts of a text or a small group of inline elements. It is often used in conjunction with CSS to style text or small portions of an HTML document.

<p>This is a <span style="color: green;">sample text</span> with some inline styling.</p>



4.3.3 The <div> Element
The <div> element is a block-level element that is used to create a container for other HTML elements. It is commonly used to group together a set of elements and apply styles to them as a whole.

For example, you might use a <div> element to group together a set of images and apply a border or padding to the entire group:

<div style="border: 1px solid black; padding: 10px;">
  <img src="/uploads/media/default/0001/04/rect1.png" alt="Image 1">
  <img src="/uploads/media/default/0001/04/rect2.png" alt="Image 2">
  <img src="/uploads/media/default/0001/04/rect3.png" alt="Image 3">
</div>


4.3.4 When to Use <span> and <div>

While the <span> and <div> elements are non-semantic and should not be used to convey any meaning on their own, they can be useful in certain situations:

1. Use <span> when you want to apply styles to a specific portion of text or a small group of inline elements. For example:

<p>This is a <span style="color: blue;">blue</span> text.</p>

2. Use <div> when you want to group together a set of elements and apply styles to them as a whole. For example:

<div>
<button>Button 1</button>
<button>Button 2</button>
</div>

4.4.1 Global Attributes: 

Global attributes are unique in that they can be added to any HTML element, providing various functionalities throughout your website.

We've already talked about the style attribute, but there are several more that are widely used, such as: id, class, title, accesskey, lang, hidden, dir, translate, and onclick.


4.4.2 The id Attribute
The id attribute assigns a unique identifier to an element, which then can be used for several purposes, including:

unique identification, which lets you distinguish HTML elements from each other on the page.
styling, which allows you to apply specific CSS styles to a single element. (By targeting the element's unique id, you can create custom styles that only affect that particular element. You're going to learn about it in the second part of the course.)
JavaScript manipulation, which lets you select and manipulate specific elements in the DOM. (It makes it easy to access, modify, or perform actions on a particular element without affecting others. Again, you're going to learn more about it in the Web Development Essentials: JavaScript course.)
anchors, which you can use to create internal (anchor) links within a webpage. (You learned about them in the Links section of this course.)

<!DOCTYPE html>
<html>
  <head>
    <style>
      #greeting {
        font-size: 24px;
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>Hello, World!</p>
    <p id="greeting">Hello, world!</p>
    <p>Hello, World!</p>
  </body>
</html>

4.4.3 The class Attribute
The class attribute assigns a class to an element, allowing you to group and target multiple elements for various purposes, such as:

grouping elements – the class attribute allows you to group multiple HTML elements that share similar characteristics or purposes. Unlike the id attribute, class can be assigned to multiple elements on a page.
styling – by using the class attribute, you can apply consistent CSS styles to a group of elements. This helps maintain a uniform appearance and promotes reusability of styles across your webpage or even an entire website.
JavaScript manipulation – when working with JavaScript, the class attribute can be used to select and manipulate groups of elements with the same class. You can perform actions or apply changes to all elements with the specified class at once, making it an efficient way to manage similar elements.
readability and maintainability – using class attributes can help improve the readability and maintainability of your HTML and CSS code. By assigning meaningful class names, you can easily understand the purpose or functionality of specific elements, making it easier to update or modify your code in the future.

<!DOCTYPE html>
<html>
<head>
    <style>
      .highlight {
        background-color: blue;
        color: white;
        font-weight: bold;
      }
    </style>
</head>
<body>
    <p>Here is a normal paragraph.</p>
    <p class="highlight">This paragraph has the 'highlight' class applied to it.</p>
    <p>Another normal paragraph.</p>
    <p class="highlight">Another paragraph with the 'highlight' class.</p>
</body>
</html>

4.4.4 The title Attribute
The title attribute specifies a tooltip that is displayed when a user hovers over an element. You might recall we touched on this feature when discussing hyperlinks and the use of the title attribute to enhance user understanding and interaction.

<button type="button" title="Click me for more information">
    Learn More</button>

4.4.5 More Global Attributes to Explore:

accesskey – lets you set a keyboard shortcut to focus or activate an element,
lang – sets the language for the content in an element,
hidden – controls if an element is shown or hidden,
dir – sets the direction of text in an element (like left-to-right or right-to-left),
translate – tells browsers whether the content should be translated or not,
onclick – runs a piece of JavaScript code when the element is clicked.

4.5.1 Understanding Event and Data Attributes

Event attributes let HTML elements react to things users do, like clicking or hovering over them. Data attributes let you keep extra info inside HTML tags without changing how things look or act.

4.5.2 Event Attributes
Event attributes are used to define how HTML elements should respond to user interactions, such as mouse clicks or keyboard input. When an event is triggered, it executes a specified function or script.

Some of the most commonly used event attributes include:

onclick – executes a script when the element is clicked,
onmouseover – executes a script when the mouse pointer moves over the element,
onmouseout – executes a script when the mouse pointer moves out of the element,
onkeydown – executes a script when a keyboard key is pressed down,
onkeyup – executes a script when a keyboard key is released.
For instance, using onclick, you can make a button show a message when clicked:

<button onclick="alert('Hello, World!')">Click Me</button>

4.5.3 Data Attributes
Data attributes are used to store extra information about an HTML element that is not displayed to the user.

This information can be used for scripting or styling purposes (you can store information such as IDs, values, or other data that may be useful in web development), and can be accessed and manipulated via JavaScript or CSS.

You start these attributes with data- and add a name that makes sense for what you're storing, like data-recipe-id for a unique recipe number.

<ul>
    <li data-recipe-id="001">
        <h2>Spaghetti with Meatballs</h2>
        <p>A classic Italian dish that's perfect for a cozy night in.</p>
        <button class="save-recipe">Save Recipe</button>
    </li>
    <li data-recipe-id="002">
        <h2>Chicken Tikka Masala</h2>
        <p>A flavorful Indian curry that's sure to please.</p>
        <button class="save-recipe">Save Recipe</button>
    </li>
    <li data-recipe-id="003">
        <h2>Beef and Broccoli Stir Fry</h2>
        <p>A quick and easy weeknight dinner that's packed with flavor.</p>
        <button class="save-recipe">Save Recipe</button>
    </li>
</ul>


5.1.1 Understanding Semantic Markup
Semantic markup is the practice of using HTML tags that convey meaning beyond just presentation or look.

Unlike non-semantic elements such as <div> and <span>, which do not provide any contextual information about the content they contain, semantic HTML elements provide an easy, clear and concise way to describe the structure and meaning of web pages. This helps create websites that are more accessible, searchable, and easily understood by both humans and machines.

Semantic HTML is important for creating more efficient, flexible, and accessible web content. This includes:

Accessibility – by using semantic markup, you can make sure that your content is accessible to everyone, including people with disabilities who use screen readers and other assistive technologies to navigate the web. Semantic markup helps these technologies to understand the content and present it in a meaningful way.
Search Engine Optimization (SEO) – search engines use semantic markup to understand the content of a web page and rank it accordingly. By using semantic markup, you can make sure that your content is properly indexed and easily discoverable by search engines.
Maintainability – semantic markup helps to create cleaner, more organized code that is easier to read and maintain. By using descriptive tags, you can make your code more self-explanatory, which makes it easier for other developers to understand and update.
Future-proofing – semantic markup is designed to be forward-compatible, which means that it will continue to be relevant and useful as new technologies and standards emerge. By using semantic markup, you can ensure that your code will continue to be relevant and functional for years to come.

5.1.2 Getting to Know the Main Semantic Elements
HTML provides two types of semantic elements: block-level and inline. Block-level elements form the structure of a webpage, while inline elements define semantics within the text. Both types play vital roles in creating accessible and meaningful content.

Block-level Semantic Elements
These elements typically start on a new line and stretch out as wide as their container, creating significant sections within a webpage. Here are some examples:

<header> – represents the introductory content for a page or section (it often contains a logo, navigation menu, or other identifying information for the site)
<nav> – represents a section of a page that contains links to other pages or sections on the site. Use this for navigation links to help users find their way around your site or page.
<main> – represents the primary content of a page (it should not include any content that is repeated across multiple pages, such as navigation menus, footers, or sidebars)
<article> – represents a self-contained unit of content or story that can be independently distributed or reused, e.g. blog posts, news articles, or product reviews.
<section> – represents a section of a page that groups together related content within a page or article (it can be used to divide a page into multiple sections or to group together content within a larger section)
<aside> – represents content that is not directly related to the main content of a page, but rather provides additional information, context, or related resources, e.g. sidebars, callouts, or related links;
<footer> – represents the closing content for a page or section/the bottom part of a page or section (it often contains copyright information, contact details, or other supplemental information)
<figcaption> – represents a caption or legend for a figure or image;
<figure> – represents self-contained content, such as an image, diagram, or code snippet, that is referenced in the main content of a page;
<summary> – represents a summary or caption for a <details> element;
<details> – represents a disclosure widget that can be used to show or hide additional information;
Heading tags (<h1> to <h6>) – outline the structure of content on the web page and define a hierarchy.

<!DOCTYPE html>
<html>
  <head>
    <title>WebDev Solutions</title>
  </head>
  
  <body>
    <header>
      <h1>Welcome to WebDev Solutions</h1>
         <nav>
            <ul>
               <li><a href="\home">Home</a></li>
               <li><a href="\about">About</a></li>
               <li><a href="\services">Services</a></li>
               <li><a href="\contact">Contact</a></li>
            </ul>
         </nav>
    </header>
    <main>
      <article>
        <h2>Our Services</h2>
        <p>We offer a variety of services including web design, 
           development, and digital marketing. 
           Contact us to learn more!</p>
      </article>
      <article>
        <h2>Our Customers</h2>
        <p>Our customers are at the heart of everything we do. 
           We pride ourselves on delivering exceptional service 
           and building strong relationships with each and every 
           one of our clients.</p>
      </article>
    </main>
    <footer>
      <p>© 2023 WebDev Solutions. All Rights Reserved.</p>
    </footer>
  </body>
</html>

Inline Semantic Elements
Inline elements do not start on a new line and are typically used to change the meaning of a part of the text, without creating a new block or section. Examples include:

<em> – emphasizes text, usually displayed in italics, indicating a subtle shift in tone or added stress on a word or phrase.
<strong> – indicates strong importance or urgency of the text, commonly displayed in bold.
<mark> – highlights parts of text for reference or emphasis, often with a background color.
<cite> – used for referencing a title of a work, providing a semantic way to indicate sources or references.
<q> – defines a short inline quotation.
<dfn> – represents the defining instance of a term.
<abbr> – denotes an abbreviation or acronym; the full definition can be provided in the title attribute.
<data> – links the given content with a machine-readable translation (e.g., a product ID)
<time> – represents a specific period or date, adding semantic meaning to times or dates within text.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>

  <body>
    <article>
      <h1>The Importance of Web Standards</h1>
      <p>The web is built on <strong>standards</strong> to ensure <em>consistency</em> and <mark>accessibility</mark> for all users. Standards like HTML5 and CSS3 provide a foundation for building <abbr title="Accessible Rich Internet Applications">ARIA</abbr>-compliant sites that are accessible to individuals with disabilities.</p>
      <p>According to <cite>World Wide Web Consortium (W3C)</cite>, adhering to web standards <q>ensures the long-term growth of the Web</q>. To create semantic markup, developers should use elements like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;nav&gt;</code> appropriately.</p>
      <p>Learning web standards is crucial for <del>just developers</del> <ins>everyone involved in web development</ins>, from designers to content creators. Embrace these standards to make the web a better place for <a href="#">everyone</a>.</p>
      <p>For more details, visit <a href="https://www.w3.org/standards/">W3C Standards</a>.</p>
    </article>
  </body>
</html>

5.2.2 Microformats
Microformats use a specific class naming convention to define data within HTML elements.

For example, hCard is a microformat used to describe a person or organization and their contact information. It is based on the vCard format, which is a standardized format for electronic business cards that is used for exchanging contact information between different applications and platforms.

<div class="vcard">
  <p class="fn">John Smith</p>
  <p class="title">Web Developer</p>
  <p class="org">Smith Web Solutions</p>
  <p class="tel">555-555-5555</p>
  <a class="email" href="mailto:john@smithwebsolutions.com">john@smithwebsolutions.com</a>
  <p class="adr">
    <span class="street-address">123 Main St.</span><br>
    <span class="locality">Anytown</span>, <span class="region">CA</span> <span class="postal-code">12345</span>
  </p>
</div>

5.2.3 Microdata and Schema.org
Microdata, on the other hand, uses HTML attributes to associate data with specific elements.

The most commonly used attribute for microdata is the itemprop attribute, which defines the type of data contained within an HTML element. For example, if you have a page with a review of a product, you could use the itemprop attribute to indicate the name of the product, the author of the review, and the rating given.

Schema.org is a specific vocabulary of microdata that was developed by Google, Microsoft, Yahoo, and other search engines to standardize the way structured data is added to web pages. By using schema.org, you can provide even more detailed information to search engines about your content, such as the author, the publisher, and the date published.


<div itemscope itemtype="http://schema.org/Person">
    <h2 itemprop="name">John Smith</h2>
    <p itemprop="jobTitle">Web Developer</p>
    <p>
      Contact me at:
      <a href="mailto:john@smithwebsolutions.com"
      itemprop="email">john@smithwebsolutions.com
      </a>
    </p>
</div>


5.3.1 What is Web Accessibility?
Imagine you're walking down a street, and suddenly you encounter a high curb with no ramp. For someone using a wheelchair, that curb becomes a barrier, hindering their movement and access. The same concept applies to the digital world – web accessibility is about ensuring that your website is like a welcoming ramp rather than a stumbling block for everyone, regardless of their abilities.

Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with your website just like anyone else

5.3.2 Web Content Accessibility Guidelines (WCAG)
The Web Content Accessibility Guidelines (WCAG) are a set of internationally recognized guidelines for making web content more accessible. They provide a framework for creating web content that can be understood, navigated, and interacted with by everyone, regardless of their abilities or types/specificities of devices used to access the content. The main principles of WCAG are perceivable, operable, understandable, and robust.

Level A – focuses on the most fundamental accessibility requirements. It's a great starting point and ensures that your website can be used by a broader audience.
Level AA – meeting Level AA criteria enhances accessibility even further. It includes guidelines for more complex interactions and content, making your website accessible to a wider range of users.
Level AAA – the highest level of conformance and includes guidelines that address the most intricate accessibility issues. Meeting Level AAA criteria provides the most inclusive experience for users.

5.4.2 ARIA Roles
One of the key components of ARIA is the concept of roles. Roles define the type and purpose of an element, helping assistive technologies understand its function.

<button role="button">Click me</button>
<a href="#" role="link">Read more</a>
<h2 role="heading">Important Information</h2>

5.4.3 ARIA States and Properties
In addition to roles, ARIA includes states and properties that further describe the behavior of elements. States describe the current condition of an element, while properties provide additional information about an element's characteristics.

<button aria-expanded="true">Toggle menu</button>
<input type="checkbox" aria-checked="false">
<div aria-hidden="true">This content is hidden from screen readers.</div>

5.4.4 Testing Accessibility
Testing your website for accessibility helps you identify potential issues and make necessary improvements. Here's what you can do:

Use built-in accessibility tools to identify potential accessibility issues. Most modern web browsers have built-in accessibility tool kits, for example:
Chrome Accessibility DevTools: In Google Chrome, open your website, right-click on an element, and select "Inspect." Go to the "Accessibility" tab in the DevTools panel to see a list of accessibility issues.
Firefox Accessibility Inspector: In Mozilla Firefox, right-click on an element and select "Inspect Element." Go to the "Accessibility" tab in the Inspector panel to view accessibility information and issues.
Validate HTML with W3C Validator – use the W3C HTML Validator to check your HTML code for any syntax errors or structural issues that might affect accessibility. Valid HTML ensures that your website is well-structured and follows best practices.
Test with screen readers – this can help you understand how users with disabilities experience your content. You can use a free reader:
NVDA (NonVisual Desktop Access) – a free screen reader for Windows (download here: https://www.nvaccess.org/.)
VoiceOver – a built-in screen reader on macOS and iOS devices. Enable VoiceOver in the Accessibility settings and use it to navigate your website.
Check keyboard navigation to ensure that your website can be navigated using only a keyboard. Use the "Tab" key to navigate through interactive elements, links, and forms. Ensure focus indicators are visible and elements can be activated using the "Enter" key.
Use color contrast checkers, such as the one provided by WebAIM, to ensure that text and background colors meet accessibility standards.
Finally, test with real users – conduct usability testing1 with real users, including those with disabilities, to get feedback on the accessibility of your website. This can provide valuable insights into real-world usage and identify any remaining issues. It also ensures that your website is designed with the needs and preferences of your users in mind – it adopts the user-centered design2 approach.

5.5.1 HTML Best Practices
Writing HTML code that follows best practices is essential for creating well-structured, accessible, and maintainable web pages. Adhering to these guidelines ensures that your code is readable, performs optimally, and is compatible across different devices and browsers.

Let's explore some HTML best practices to help you become a proficient web developer:

Use semantic HTML – choose the appropriate HTML tags that accurately describe the content they enclose. For example, use <header> for the page header, <nav> for navigation menus, <main> for the main content, <article> for standalone content, <section> for grouped content, and <footer> for the page footer. Semantic tags enhance accessibility and make your code more meaningful.
Maintain consistent indentation and formatting throughout your code. Properly indented code enhances readability (great minds say that code is read more often than written – do you agree?) and makes it easier to identify the structure of your HTML elements.
Whenever possible, avoid deprecated tags like <center>, <font>, and <strike>. Instead, use CSS for styling and layout, and use appropriate HTML tags. Similarly, avoid deprecated attributes such as frame.
Use lowercase tags and attributes – although HTML is case-insensitive, using lowercase consistently improves code consistency and readability.
Use descriptive comments in your HTML code to explain complex sections, structures, or special considerations. Comments are helpful for other developers (and your future self) to understand the code's purpose and functionality.
Optimize Images – provide descriptive alternative text using the alt attribute for better accessibility. Additionally, optimize image file sizes to improve page loading times.
Keep styles separate – avoid inline styles within your HTML elements. Instead, use internal CSS styles or external CSS files (recommended – we’ll learn more about this in the second course from this series) to keep the styling separate from your HTML content. This approach promotes maintainability and allows for consistent design across multiple pages.
Minimize use of <br> tags – use CSS for controlling line spacing and layout, instead of relying heavily on the <br> tag for line breaks. Overusing <br> tags can lead to poor code structure and hinder maintainability.
Ensure your HTML code is valid by adhering to the HTML specifications and using proper nesting, opening, and closing tags. You can use online HTML validation tools to check your code's validity.
Follow the Web Content Accessibility Guidelines (WCAG) to make your web content accessible to users with disabilities. Use semantic HTML, provide meaningful alt text for images, and ensure keyboard navigation works properly.
Test your HTML code on multiple browsers to ensure consistent functionality and appearance. Different browsers might interpret HTML tags and styles differently.
Validate cross-device compatibility – test your website on different devices, screen sizes, and resolutions to ensure responsive design and cross-browser compatibility.
Use meaningful IDs and class names – when assigning IDs and class names to elements, choose descriptive names that convey their purpose or function. Avoid using generic names like "div1" or "element2" as they don't provide meaningful context.
Specify the character encoding for your HTML documents using the <meta charset="utf-8"> tag to ensure proper rendering of special characters and symbols.
Last but not least – regularly update your knowledge. Web technologies evolve rapidly. Keep learning and staying updated with the latest HTML specifications, best practices, and techniques to maintain the quality of your web projects.
