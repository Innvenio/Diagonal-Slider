# DiagonalSlider
jQuery plugin to create a Diagonal Slider

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