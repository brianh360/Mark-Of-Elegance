# Mark-Of-Elegance
Rebuilt gallery modeled after fancybox
Done by client specification

Original gallery scrolled through each viewable image, dislpayed a description, hovering over description produced thumbnail images

Redone gallery now scrolls through each images thumbnail images, description is displayed by hovering over image
Currently no functionality in Internet Explorer due to overall bs of working with Internet Explorer
Will fix when given time

# How To Use gallery
-Frontend
To view the descriptions of a specific vehicle, hover over that image and a fixed description will appear at the top of the page
To view the images associated with a specific vehicle, click that vehicles images, hovering over the displayed box with display
navigation icons, click those to scroll or use the directional keys on your keyboard

-backend
Because this site was put together hastily after a botched job by another it's backend can be slightly confusing

Three sets of divs are wrapped in a paragraph tag
Each div has a class of "fancybox", this is the first image displayed when an image is clicked
The img src is what is displayed in the thumbnail box upon entering the page
Another div is then included where the title of the image is displayed upon clicking that image (confusing I know, I did not build this portion)
Followed by a \<p> tag which has a data-content attribute, this is where the description can be edited
Afterwards there are the thumbnail images with a class of thumbnail{***Number of thumbnail***}
You can edit any of the thumbnails by changing this href location

If you would like no thumbnail images displayed, you do not need to add any thumbnails to the specific location, it can be left blank
If you would like no gallery to appear upon click, in the \<a> class="fancybox" space the href should be listed as / (ex. href="/")

Yes the re-use of this galleryc can be confusing at first, I did not build the site's layout and this was the best solution I had given the amount of time. Enjoy!
