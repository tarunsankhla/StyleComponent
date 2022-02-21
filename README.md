# TangentUi

Tangent-Ui
is a CSS Libaray that provides customizable and accessible components.
So now you can spend more time building a great experience for your customer with lesser code

You can check the Website on https://tangent-ui.netlify.app/
<br/>
Documentation Page - https://tangent-ui.netlify.app/documentation/documentation

Feetz is Ecommerce platform for variety of footwear from boots, snicker, sports footwear. All in here!!
<hr/>
 <p align="center"> <img src="https://github.com/tarunsankhla/StyleComponent/blob/master/assets/Img/logo.png" alt="logoImage" width="200px" height="200px" /></p>
 <br/>
 
 ![Forks](https://img.shields.io/github/forks/tarunsankhla/StyleComponent) &nbsp;&nbsp;&nbsp;
![Stars](https://img.shields.io/github/stars/tarunsankhla/StyleComponent) &nbsp;&nbsp;&nbsp;
[![Netlify Status](https://api.netlify.com/api/v1/badges/d5f21366-5c1f-4869-83a1-79445ce0f4ea/deploy-status)](https://app.netlify.com/sites/tangent-ui/deploys) &nbsp;&nbsp;&nbsp;
 <hr/>
 
![image](https://user-images.githubusercontent.com/47709623/154928614-39064a42-b720-4810-9c64-e38c2a7229fb.png)



## Quick Start
For Using the TangentUi component Library. you have to give the reference of the below `link` html tag in the `head` of your html page to rander the the stylesheet.

```html
    <link
        rel="stylesheet"
        href="https://tangent-ui.netlify.app/Components/component.css"
        referrerpolicy="no-referrer"/>
```


For accessing the functionality of certain components like Rating, Navigation and Drawer you will require to add the below script tags in you html file. Simply ou can add these script reference based on your usage.
```html


        // use this script tag if you intended to use the feature of Rating
        <script
                src="https://tangent-ui.netlify.app/Components/Rating/Rating.js" defer></script>

        // use this script tag if you intended to use the feature of Navigation
        <script
                src="https://tangent-ui.netlify.app/Components/Navigation/Navigation.js" defer></script>

        // use this script tag if you intended to use the feature of Drawer
        <script
                src="https://tangent-ui.netlify.app/Components/Drawer/Drawer.js" defer></script>
```
If you still didn't get the installation steps refer the [Installation Guide](https://tangent-ui.netlify.app/Documentation/Documentation.html#installation-container)


### Tangent Ui provides the following components:

- [Utilities](#Utilities)
- [Typography](#Typography)
- [Grid Layout](#Grid)
- [Avatar](#Avatar)
- [Alert](#Alert)
- [Badges](#Badges)
- [Button](#Button)
- [Card](#Card)
- [Image](#Image)
- [Input](#Input)
- [Drawer](#Drawer)
- [Navigation](#Navigation)
- [List](#List)
- [Toast](#toast)
- [Rating](#Rating)
- [Modal](#Modal)
- [Slider](#Slider)


### Utilities

Tangent-Ui provides multiple range of utiliy classes for margin, padding and gaps.

Margin and Padding are provided with abbravation of sm - small, md - medium, lg - large and can use the following classname based on requirements
- padding-sm
- padding-md
- padding-lg
- padding-xlg
- margin-sm
- margin-md
- margin-lg
- margin-xlg
<br/>
Now margin and padding based on direction, the abbrevation used are p - padding, m - margin, t - top , b - bottom, l - left, r- right
<br/>
- p-t
- p-b
- p-l
- p-r
- m-t
- m-b
- m-l
- m-r
<br/>
You can also check the live example and code on,
[Utility Guide](https://tangent-ui.netlify.app/documentation/documentation#utility-container)


<hr/>

### Typography

You can use the Typography to design and decorate you text content.

Tangent UI provides variation of Typography* in Header like h1, h2, h3, h4 ,h5 , h6 and provide text variation of underline, overline, line through , hightlights and also
text align of left, right and center
<br/>
You can also check the live example and code on [Typography Guide](https://tangent-ui.netlify.app/documentation/documentation#typography-container)
<hr/>



### Grid Layout

Grid are used for Stacking Elements in Grid view format. You can you gird layout by using className grid and wrapper to divide them into section by className grid-2-items and grid-3-items

<br/>
You can also check the live example and code on [Grid Guide](https://tangent-ui.netlify.app/documentation/documentation#grid-container)
<hr/>

### Alert
Alerts are for displaying message based on user action and mostly used for communicating the state of system.
It also contains variation in outline and based on usecase like
Sucess :
- alert-outline-sucess
- alert-sucess

Warning :
- alert-outline-warning
- alert-warning

Danger :
- alert-outline-danger
- alert-danger

Primary :
- alert-outline-primary
- alert-primary
<br/>
You can also check the live example and code on [Alert Guide](https://tangent-ui.netlify.app/documentation/documentation#alert-container)
<hr/>

### Avatar

The Avatar is used for representing a person in a profile picture like a display icon.

Different variation of Avatar provided:
- avatar-md
- avatar-lg
- avatar-xlg
- avatar-xxlg
<br/>
You can also check the live example and code on [Avatar Guide](https://tangent-ui.netlify.app/documentation/documentation#avatar-container)
<hr/>

### Badge

Depending on specific requirement, badges may seem to a number indicatore or count of navigation.
You can use the className of badge and it will set the default size; you can use variation of badge sizes based on your requirement like
- badge-md
- badge-sucess

It also contains variation in position, for top left to the container use topleft-badge and for top right use topright-badge and default it is bottom right.
You can also set background color by using classname :
- badge-warning
- badge-lg
- badge-primary
<br/>
You can also check the live example and code on [Badge Guide](https://tangent-ui.netlify.app/documentation/documentation#badge-container)
<hr/>


### Button

Buttons are used for performing action or events.
You can use the className of btn and it will set the default size.
It also contains variation in outline and based on usecase like
Sucess :
- btn-sucess
- btn-outlint-sucess

Warning :
- btn-warning
- btn-outline-warning

Use btn-icon for adding icons to button and for round float buttons use btn-round.
For link button use className btn for button to act like a link clicker. You can also resize buttons using
- btn-lg
- btn-sm
<br/>
You can also check the live example and code on [Button Guide](https://tangent-ui.netlify.app/documentation/documentation#button-container)
<hr/>


### Card

Card is a container to display information to user most of the time a product details showcase
TangentUi provide variation of cards:
- Cards with basic information and images
- Cards with action button
- Cards with text overlay on image
- Horizontal Layout cards.
- Horizontal Layout card without Image
- Cards for Ecommerce Product
- Cards for wishlist

<br/>
You can also check the live example and code on [Card Guide](https://tangent-ui.netlify.app/documentation/documentation#card-container)
<hr/>

### Image

Image component can be used to make image responsive and round shaped.
- image-round for a round shaped image
- image-responsive for image to fit the width of container

<br/>
You can also check the live example and code on [Image Guide](https://tangent-ui.netlify.app/documentation/documentation#image-container)
<hr/>


### Drawer

Drawer Navigation to provide access to functionalities or for navigating pages. It is mostly recomended for applcation which consist of Mulitple levels of hierarchy chain, so via Drawer you can get quick navigation. You can have Drawer of 3 type:
- Permanent Drawer on the Screen which has fixed width based on content.
- Dismissible Drawer which is rendered by menu bar and shifts the content of the page.
- Modal Drawer which also renders by menu bar but is modaled over the existing layout.

<br/>
You can also check the live example and code on [Drawer Guide](https://tangent-ui.netlify.app/documentation/documentation#drawer-container)
<hr/>

### Navigation

Navigation are app bars which are used for displaying action or navigation through out the project. We provide 4 variation of Navigation bars:
- Standard Navigation bar which is usually and scroll out of screnn
- Fixed which remains rigid and doesnot scroll and remains on the page.
- Short Navbar which also works like Fixed but is not full stretched but composed of content.
- Short Scrollar which collapse when sroll down.
<br/>
You can also check the live example and code on [Navigation Guide](https://tangent-ui.netlify.app/documentation/documentation#navigation-container)
<hr/>


### List

List are generally used for stacking information in list format. Now we provide List Variation like List with an Icon + text or just text.Other Variation include having bullets of design according to your need and last one is to simply stack some toast or snackbar

<br/>
You can also check the live example and code on [List Guide](https://tangent-ui.netlify.app/documentation/documentation#list-container)
<hr/>

### Toast

Toast are notifiction which are just to notify about some action or update and they usually are for just few seconds and disappear. We have currently 3 Variation of Toast or Snackbar:

- Fixed which remains rigid and doesnot scroll and remains on the page.
- other Variation is for action of warning.
- Last one is for information with the toast but try to keep the content short.

<br/>
You can also check the live example and code on [Toast Guide](https://tangent-ui.netlify.app/documentation/documentation#toast-container)
<hr/>

### Rating

Rating are generally used of rating a application or can act as a filter for an application search use case like where in based on rating of products you can search

<br/>
You can also check the live example and code on [Rating Guide](https://tangent-ui.netlify.app/documentation/documentation#rating-container)
<hr/>

### Modal

Modal are use like a dialog to communicate with user and this can in form of sharing information or collecting information. We provide Dialog of 3 variation.
- Mininmal content and Action for user to perform.
- Only for Sharing Information or Mulitple choices.
- Combination of both content and Action.

<br/>
You can also check the live example and code on [Modal Guide](https://tangent-ui.netlify.app/documentation/documentation#dialog-container)
<hr/>

### Slider

Sliders are generally used of select a quantity out of a range mostly used in price range or percentile. We provide Slider of 2 variation.
- Normal Slider which display the quantity
- Disabled Slider

<br/>
You can also check the live example and code on [Slider Guide](https://tangent-ui.netlify.app/documentation/documentation#slider-container)
<hr/>


<hr/>
<p align="left"> <a href="https://twitter.com/tarunsankhla21" target="blank"><img src="https://img.shields.io/twitter/follow/tarunsankhla21?logo=twitter&style=for-the-badge" alt="tarunsankhla21" /></a> </p>
<h3 align="center">Connect with me:</h3>
<p align="center">
<a href="https://twitter.com/tarunsankhla21" target="blank"><img align="center" src="https://img.icons8.com/fluency/2x/twitter-circled.png" alt="tarunsankhla21" height="50" width="50" /></a> &nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/tarun-sankhla/" target="blank"><img align="center" src="https://img.icons8.com/color/2x/linkedin.png" alt="tarun sankhla" height="50" width="50" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://instagram.com/tarun_sankhla_" target="blank"><img align="center" src="https://img.icons8.com/plasticine/2x/instagram.png" alt="tarun_sankhla_" height="50" width="50" /></a> &nbsp;&nbsp;&nbsp;
<a href="https://linktr.ee/tarunsank" target="blank"><img align="center" src="https://img.icons8.com/color/2x/linktree.png" alt="tarunsank" height="50" width="50" />
</a> &nbsp;&nbsp;&nbsp;
<a href="https://tarunsankhla.hashnode.dev/" target="blank"><img align="center" src="https://img.icons8.com/plasticine/2x/blog.png" alt="tarunsank" height="50" width="50" />
</a> &nbsp;&nbsp;&nbsp;
</p>
