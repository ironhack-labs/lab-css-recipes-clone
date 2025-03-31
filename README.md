![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | HTML & CSS - Recipes Clone

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Properly structure a webpage using basic HTML tags (head, body, headings, paragraphs, images and lists)
  - Create and link an external CSS stylesheet with an HTML document.
  - Use *id* and *class* selectors to apply CSS styles to elements on a webpage.
  - Display images in a webpage using HTML image tags and CSS `background` property.
  - Submit completed work using Git and GitHub by creating a pull request.

  <br>
  <hr> 

</details>

## Introduction

We have only learned the basics today with HTML and CSS, so what the heck can we build, right? Wrong, we can create some cool stuff already and we will do just that.

We all have to eat (at least, we should), so let's make some handy recipe pages. We are going to be recreating an Apple Pie recipe. As an extra step, we also prepared a French Onion Soup recipe.

Cloning something already existing is the best way to get better at frontend development, so check out the deliverable below to see what we expect.

Some starter code is already provided so you can jump right into it.

## Requirements

- [Fork](https://guides.github.com/activities/forking/) this repo
- Clone this repo
- Make sure you use `class` and `id` selectors throughout your exercise. Remember, only use type selectors if you want to modify _every_ element of that type
- Use a single external CSS stylesheet to style all pages
- Use the images provided to construct the appropriate elements on the page:
  - The background with a picture of the apple pie
  - The recipe servings/nutrients section
  - The prep section

## Submission

- Upon completion, run the following commands:

```
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request and submit your assignment.

## Instructions

You will be working in the `apple-pie` folder. There you will find all the files, images and text content needed to create the page. The text is in the `index.html` and a CSS file is created in `styles/style.css`.

## Deliverable

Please find a screenshot of the expected results below:

![Apple Pie](https://i.imgur.com/lGGM68Q.jpg)

<!-- ![French Onion](https://i.imgur.com/uepu2DO.jpg) -->

## Extra Practice

If you need more practice, keep working on the `french-soup` exercise. There you will find the `expected-result.md` file where you can see what is expected from you to build. This folder has the same structure as the `apple-pie` one, so follow the same steps.

<br>

## Extra Resources

- [CSS Reference from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Background Image](https://developer.mozilla.org/en/docs/Web/CSS/background-image)

<br>

**Happy coding!** :heart:

## FAQs

<br>

<details>
  <summary>I am stuck in the exercise and don't know how to solve the problem or where to start.</summary>
  <br>

  If you are stuck in your code and need help with how to solve the problem or where to start, you should take a step back and try to form a straightforward question about the specific issue you are facing. This will help you narrow down the problem and develop potential solutions.


For example, is it a concept you don't understand, or are you receiving an error message you don't know how to fix? It is usually helpful to state the problem as clearly as possible, including any error messages you receive. This can help you communicate the issue to others and potentially get help from classmates or online resources. 


Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  [Back to top](#faqs)
</details>

<details>
  <summary>How can I style an ordered list <code>ol</code> to use parentheses (e.g., 1), 2) ) instead of dots?</summary>
  <br>

You can use [CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) to style an ordered list (`ol`) element to use parentheses (e.g., 1), 2) ). Here's how to do it:  


1. First, you need to remove the default list style
2. Next, you need to create a custom list counter using the `counter-increment` property.
3. Last step is to use the `::before` pseudo selector to set the new style for the list markers using the custom list counter.



```css
ol {
  /* 1. Remove the default list style */  
  list-style: none;
}

ol > li {
  /* 2. Create a custom list counter */  
  counter-increment: listcounter;
}

ol > li::before {
  /*3. Set the new style for the list markers */
  content: counter(listcounter) ")";
}
```



This will remove the default list style, create a new counter called `listcounter` and style the list markers to use parentheses and the current value of the `listcounter` counter.



For more information on CSS Counters, check: [MDN -  Using CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)



  [Back to top](#faqs)
</details>

<details>
  <summary>How do I center align HTML text elements?</summary>
  <br>

  To center align HTML *text elements*, you can use the `text-align` property and set it to `center`. This property can be applied to any *inline* or *block-level* element.

Here is an example of how you can use the `text-align` property to center align multiple text elements:

**HTML**

```html
<div>
  <h2>This is a title</h2>
  
  <p>This is some text in here</p>
</div>
```

**CSS**

```css
/* CSS */

p {
  text-align: center; /* Center align all p elements */
}

h2 {
  text-align: center; /* Center align all h2 elements */
}
```

This will center align all `p` and `h2` elements within the parent `div`.

For more information, check: [W3C: Centering Things](https://www.w3.org/Style/Examples/007/center.en.html)

  [Back to top](#faqs)
</details>

<details>
  <summary>How do I center align HTML block elements?</summary>
  <br>

  To center align a block-level element, such as a `div`, `h1`, etc., you can use the `margin` property and set it to `auto`. This will center the element horizontally within its parent container. 

Here is an example of how you can do this:

**HTML**

```html
<section>
  <div>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
  </div>
</section>
```

**CSS**

```css
/* CSS */

div {
  width: 500px;
  margin: 0 auto;
}
```

This will set the `width` property of the `div` to 500 pixels and we set the left and right margins to be equal by using `margin: 0 auto;`.

  [Back to top](#faqs)
</details>

<details>
  <summary>How do I center align an HTML image element?</summary>
  <br>

  There are a few ways you can center align an image element.

##### 1. Align an image using `text-align`

To center an image element in HTML, you can use the `text-align` property on the parent element, such as `div`. Example:

**HTML**

```html
<div>
  <img src="https://placehold.co/300x150.png" />
</div>
```

**CSS**

```css
div {
  text-align: center;
}
```

This will center align all the children elements within the `section` element, including the `img` element.

<br>

##### 2. Align an image as a block element

The other way is converting the image into a block element and using `margin: 0 auto`. Here is an example:

**HTML**

```html
<section>
  <img src="https://placehold.co/300x150.png" />
</section>
```

**CSS**

```css
img {
  display: block;
  margin: 0 auto;
}
```

This will center the image horizontally within the parent `section` element. The `display: block` property is used to make the image a *block-level* element, allowing the `margin: 0 auto` property to work. The `margin: 0 auto` property sets the left and right margins to be equal, centering the element within its parent container.

  [Back to top](#faqs)
</details>


<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>
  <br>

There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:
  ```bash
  git add .
  git commit -m "Your commit message"
  git push
  ```
2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
To check which remote repository you have cloned, run the following terminal command from the project folder:
  ```bash
  git remote -v
  ```
If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first and then clone your fork to your local machine to be able to push the changes.

**Note**: You should make a copy of your local code to avoid losing it in the process.

  [Back to top](#faqs)

</details>
