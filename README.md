# DiagonalSlider
jQuery plugin to create a Diagonal Slider.<br/>
The diagonal image slider  works like an accordion that when you mouse hover it expand each image. Also you can add a title to the image to give a brief description.

<br/>
<strong>Demo</strong>
<br/><br/>
Demo in <a target="_blank" href="http://jsfiddle.net/aesposito/ku3fwu92/">jsFiddle</a>

<br/>
<strong>How to use</strong>
<br/><br/>

Your HTML:
<br/>
```html
<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="js/DiagonalSlider.js"></script>
</head>
<body>
	<div class="content_slider">
		<div class="content_title" data-default-text="<b>Diagonal Slider</b><br/>by @innvenio">
			<div class="text">
				<b>Diagonal Slider</b><br/>by @innvenio
			</div>
		</div>
		<div class="gallery_content">
			<div class="gallery_item">
				<img src="images/1.jpg" data-title="Image 1"/>
			</div>
			<div class="gallery_item">
				<img src="images/2.jpg" data-title="Image 2"/>
			</div>
			<div class="gallery_item">
				<img src="images/3.jpg" data-title="Image 3"/>
			</div>
			<div class="gallery_item">
				<img src="images/2.jpg" data-title="Image 4"/>
			</div>
			<div class="gallery_item">
				<img src="images/1.jpg" data-title="Image 5"/>
			</div>
		</div>		
	</div>
	<script type="text/javascript" src="js/script.js"></script>
</body>
</html>
```

<br/><br/>
Your script:
<br/>
```javascript
$(document).ready(function(){
	$('.gallery_content').createDiagonalSlider();
});
```

<br/><br/>
Your css:
<br/>
```css
img
{
	display: block;
	margin: 0px;
}

.content_title
{
	position: absolute;
	padding: 50px 40px 50px 80px;
	background-color: #FFF;
	z-index: 100;
	font-size: 22px;
	margin-left: -60px;
	-webkit-transform: translate3d(0, 0, 0) skew(-20deg, 0deg);
	-moz-transform: translate3d(0, 0, 0) skew(-20deg, 0deg);
	-ms-transform: translate3d(0, 0, 0) skew(-20deg, 0deg);
	transform: translate3d(0, 0, 0) skew(-20deg, 0deg);
}

.content_title .text
{
	-webkit-transform: translate3d(0, 0, 0) skew(20deg, 0deg);
	-moz-transform: translate3d(0, 0, 0) skew(20deg, 0deg);
	-ms-transform: translate3d(0, 0, 0) skew(20deg, 0deg);
	transform: translate3d(0, 0, 0) skew(20deg, 0deg);
}

.content_slider
{
	width: 100%;
	overflow: hidden;
}

.gallery_content
{
	overflow: hidden;
	margin-left: -170px;

}

.gallery_item
{
	float: left;
	overflow: hidden;
	vertical-align: top;
	margin-left: -2px;
	-webkit-transition: width 500ms;
	-moz-transition: width 500ms;
	-o-transition: width 500ms;
	transition: width 500ms;
	-webkit-transform: translate3d(0, 0, 0) skew(-20deg, 0deg);
	-moz-transform: translate3d(0, 0, 0) skew(-20deg, 0deg);
	-ms-transform: translate3d(0, 0, 0) skew(-20deg, 0deg);
	transform: translate3d(0, 0, 0) skew(-20deg, 0deg);
}

.gallery_item img
{
	position: relative;
	-webkit-transform: translate3d(0, 0, 0) skew(20deg, 0deg);
	-moz-transform: translate3d(0, 0, 0) skew(20deg, 0deg);
	-ms-transform: translate3d(0, 0, 0) skew(20deg, 0deg);
	transform: translate3d(0, 0, 0) skew(20deg, 0deg);
}
```

<br/><br/>
Result:
<br/>
<img src="http://app.uy/innvenio/github/diagonalslider1.png"/>
<br/>
<img src="http://app.uy/innvenio/github/diagonalslider2.png"/>
<br/>
<img src="http://app.uy/innvenio/github/diagonalslider3.png"/>