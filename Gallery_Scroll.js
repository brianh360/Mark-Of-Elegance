let images = Array.from(document.querySelectorAll('img'));
let linkedImages = Array.from(document.querySelectorAll('[data-fancybox-group]'));
let bullshitDescriptions = Array.from(document.querySelectorAll('[data-content]'));
let container = document.querySelector('.container');
let index = 0;
let title = [];
let thumb = [];
let thumbTemp = [];
let content = [];
let thumbIndex = 1;
let frustratingImageWeAreWorkingWith;
let indexForHover = 0;
let coordsX;
let coordsY;
let lastImageHovered;

function openSlider (e) {
    e.preventDefault();
    console.log('opening new div on screen...');

createOverlayBox();
createImageHolder();
createImageSkin ();
createFancyBoxOuter();
createFancyBoxInner();
createPrevSlide();
createNextSlide();
createCloseButton();
createSpanTitleWrap();
createSpanTitle();

images.forEach((image, i) => {
    if (image == this)
    {
        index = i;
       openSliderImage(index); 
    }
});

// createDescription();

// createThumbnailsDiv();
// createThumbnails();

}

function debounce(func, wait = 250, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function createOverlayBox () {

    const overlay = document.createElement('div');
    overlay.classList.add('fancybox-overlay', 'fancybox-overlay-fixed');
    overlay.style.setProperty('width', `100%`);
    overlay.style.setProperty('height', `1200px`);
    overlay.style.setProperty('display', `block`);
    document.body.appendChild(overlay);
    console.log('complete!');

}

function closeOverlayBox () {

console.log('Closing this overlay container!');
    if (document.querySelector('.fancybox-overlay'))
    {
        myDiv = document.querySelector('.fancybox-overlay');
        document.body.removeChild(myDiv);

        thumb.splice(0, thumb.length + 1); //remove the images from the gallery before closing
        thumbIndex = 0;
        console.log('All set!');
    }

}

function createImageHolder () {
    console.log('Creating holder for image to fit into...');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('fancybox-wrap', 'fancybox-opened');
    imageContainer.style.setProperty('width', `530px`);
    imageContainer.style.setProperty('height', `auto`);
    // imageContainer.style.setProperty('position', `absolute`);
    // imageContainer.style.setProperty('top', `30%`);
    // imageContainer.style.setProperty('left', `30%`);
    imageContainer.style.setProperty('opacity', `1`);
    imageContainer.style.setProperty('overflow', `visible`);


    if (document.querySelector('.fancybox-overlay'))
    {
        let parentDiv = document.querySelector('.fancybox-overlay');
        parentDiv.appendChild(imageContainer);
        console.log('Success!');
    }

}

function createImageSkin () {
    console.log('Creating image skin now...');

    const imageSkin = document.createElement('div');
    imageSkin.classList.add('fancybox-skin');
    imageSkin.style.setProperty('padding', `15px`);
    imageSkin.style.setProperty('width', `auto`);
    imageSkin.style.setProperty('height', `auto`);

    if (document.querySelector('.fancybox-wrap'))
    {
        let parentDiv = document.querySelector('.fancybox-wrap');
        parentDiv.appendChild(imageSkin);
        console.log('Success!');
    }
}

function createFancyBoxOuter () {
    console.log('Creating fancybox outer wrap now...');

    const fboxOuter = document.createElement('div');
    fboxOuter.classList.add('fancybox-outer');

    if (document.querySelector('.fancybox-skin'))
    {
        let parentDiv = document.querySelector('.fancybox-skin');
        parentDiv.appendChild(fboxOuter);
        console.log('Success!');
    }
}

function createFancyBoxInner () {
    console.log('Creating fancybox inner wrap now...');

    const fboxInner = document.createElement('div');
    fboxInner.classList.add('fancybox-inner');
    fboxInner.style.setProperty('overflow', `visible`);
    fboxInner.style.setProperty('width', `auto`);
    fboxInner.style.setProperty('width', `auto`);


    if (document.querySelector('.fancybox-outer'))
    {
        let parentDiv = document.querySelector('.fancybox-outer');
        parentDiv.appendChild(fboxInner);
        console.log('Success!');
    }
}

// function openSliderImage (imagePos) {
    
//     let indexToUse = imagePos;
    
// if (indexToUse > linkedImages.length)
//     {
//         indexToUse = 1;
//     }

//     else if (indexToUse <= 0)
//     {
//         indexToUse = linkedImages.length;
//     }


//     linkedImages = linkedImages.map(imageLink => {
//         if (imageLink.href == null)
//             {
//                 //try to open the link itself if the .href attribute no longer exists (I dont know why it disappears!)
//                 return imageLink;
//             }
//         return imageLink.href;
//     });

//     //if an image is already open new image!
//     if (document.querySelector('.fancybox-image'))
//     {
//         let imageToReplace = document.querySelector('.fancybox-image');

//         //replace the title of the image
//     if (document.querySelector('.child'))
//     {
//         let child = document.querySelector('.child');
//         child.innerHTML = title[indexToUse - 1];

//     }

//         // console.log(title[indexToUse - 1]);
//         imageToReplace.src = linkedImages[indexToUse - 1];
//         index = indexToUse;
//         currentIndex();
//         // generateDescriptions();
//         // generateThumbnails();
//         return;
//     }

//     const imageToDisplay = document.createElement('img');
//     imageToDisplay.classList.add('fancybox-image');
//     //replace the title of the image
//     if (document.querySelector('.child'))
//     {
//         let child = document.querySelector('.child');
//         child.innerHTML = title[indexToUse - 1];

//     }

//     imageToDisplay.src = linkedImages[indexToUse - 1];

//     if (document.querySelector('.fancybox-inner'))
//     {
//         let parentDiv = document.querySelector('.fancybox-inner');
//         parentDiv.appendChild(imageToDisplay);
//         generateThumbnails();
//         // generateDescriptions();
//         console.log('Success!');
//     }
// currentIndex();
//     index = indexToUse;
// }

function openSliderImage (imagePos) {
    //imagePos is the position in the array of the image that the user has clicked
    let indexToUse = imagePos;
    generateThumbnails();

    linkedImages = linkedImages.map(imageLink => {
        if (imageLink.href == null)
            {
                //try to open the link itself if the .href attribute no longer exists (I dont know why it disappears!)
                return imageLink;
            }
        return imageLink.href;
    });

    //if an image is already open new image!
    if (document.querySelector('.fancybox-image'))
    {
        let imageToReplace = document.querySelector('.fancybox-image');

        //replace the title of the image
    if (document.querySelector('.child'))
    {
        let child = document.querySelector('.child');
        child.innerHTML = title[indexToUse - 1];

    }

        
        imageToReplace.src = linkedImages[indexToUse - 1];
        frustratingImageWeAreWorkingWith = linkedImages[indexToUse - 1];
        thumb.push(frustratingImageWeAreWorkingWith);
        index = indexToUse;
        return;
    }

    const imageToDisplay = document.createElement('img');
    imageToDisplay.classList.add('fancybox-image');

    //replace the title of the image
    if (document.querySelector('.child'))
    {
        let child = document.querySelector('.child');
        child.innerHTML = title[indexToUse - 1];

    }

    imageToDisplay.src = linkedImages[indexToUse - 1];
    if (imageToDisplay.src == "file://ontop.hq/")
    {
        closeOverlayBox();
        return;
    }
    frustratingImageWeAreWorkingWith = linkedImages[indexToUse - 1];
    thumb.unshift(frustratingImageWeAreWorkingWith);

    if (document.querySelector('.fancybox-inner'))
    {
        let parentDiv = document.querySelector('.fancybox-inner');
        parentDiv.appendChild(imageToDisplay);
        // generateThumbnails();
        // generateDescriptions();
        console.log('Success!');
    }
currentIndex();
    index = indexToUse;
}


function generateThumbnails () {
console.log(`thumbnail${index}`);
    if (document.querySelectorAll(`.thumbnail${index}`))
    {
        let thumbnails = Array.from(document.querySelectorAll(`.thumbnail${index}`));
            if (thumbnails.length > 0)
            {
                thumb.splice(0, thumbnails.length + 1);

                thumbnails.forEach(image => {
                thumb.push(image.href);

                
                });
                thumb.splice(thumbnails.length - 1, 1);
                // createThumbnails();

            } else {

                // removeThumbnails();
            }
            console.log(thumb);
    }
}

function slideAllUpInThatGallery(index) {
    if (thumb.length == 1)return;
thumbIndex += index;

    console.log(thumbIndex);
    console.log("Heres the thumbnails we will be working with " + thumb);


if (thumbIndex > thumb.length)
    {
        thumbIndex = 0;
    }

    else if (thumbIndex < 0)
    {
        thumbIndex = thumb.length - 1;
    }


   //if an image is already open new image!
    if (document.querySelector('.fancybox-image'))
    {
        let imageToReplace = document.querySelector('.fancybox-image');

        if (thumbIndex == thumb.length) {
            thumbIndex = 0;
        }
        imageToReplace.src = thumb[thumbIndex];
    }


}

   function hoverDescriptionHolder () {

 console.log('Creating the Description Holder');

    const description = document.createElement('div');
    description.classList.add('fancybox-content-holder');

    if (document.querySelector('.container'))
    {
        let parentDiv = document.querySelector('.container');
        parentDiv.appendChild(description);

        console.log('Success!');
    }
}

function removeDescriptionHolder () {

    console.log('Removing the Description from the slider');

if (document.querySelector('.fancybox-content-holder'))
{
    description = document.querySelector('.fancybox-content-holder');
}
if (!document.querySelector('.fancybox-content-holder'))
{
    return; //A description did not exist, cannot remove what doesn't exist
}
  
    if (document.querySelector('.container'))
    {
        let parentDiv = document.querySelector('.container');
        if (parentDiv.hasChildNodes())
        parentDiv.removeChild(description);

        console.log('Success!');
    }
}

function hoverDescriptionCreater (e) {
// if (this == lastImageHovered)return; //dont keep creating the same description bro

coordsX = e.clientX;
coordsY = e.clientY;

    images.forEach((image, i) => {
    if (image == this)
    {
        indexForHover = i; 
    }
});

    console.log("ready to create description for " + (indexForHover - 1));
    hoverDescriptionHolder();
    createDescription();
    lastImageHovered = this;
}

function createDescription () {
     console.log('Creating the Description');

    const description = document.createElement('p');
    description.classList.add('fancybox-content');

    if (content[indexForHover -1] == null)
    {
        return;
    }

    description.innerHTML = content[indexForHover -1];

    if (document.querySelector('.fancybox-content-holder'))
    {
        let parentDiv = document.querySelector('.fancybox-content-holder');
        parentDiv.appendChild(description);

        console.log('Success!');
    }
}


function removeDescription () {

    console.log('Removing the Description from the slider');

if (document.querySelector('.fancybox-content'))
{
    description = document.querySelector('.fancybox-content');
}
if (!document.querySelector('.fancybox-content'))
{
    return; //A description did not exist, cannot remove what doesn't exist
}
  
    if (document.querySelector('.container'))
    {
        let parentDiv = document.querySelector('.container');
        if (parentDiv.hasChildNodes())
        parentDiv.removeChild(description);

        console.log('Success!');
    }
}
// function generateDescriptions () {
//     if (document.querySelectorAll('[data-content]'))
//     {
//         let descriptions = Array.from(document.querySelectorAll('[data-content]'));
        
//             if (descriptions[index - 1] != null)
//             {
//                 content.splice(0, descriptions.length + 1);

//                 descriptions.forEach(bullshit => {
//                 content.push(bullshit.dataset.content);
                
//                 });
//                 removeDescription();
//                  createDescription();

//             } else {

//                  removeDescription();
//             }
//             console.log(content);
//     }
// }


// function createDescription () {
//      console.log('Creating the Description for the slider');  


//     const description = document.createElement('p');
//     description.classList.add('fancybox-content');

//     if (content[index -1] == null)
//     {
//         return;
//     }

//     description.innerHTML = content[index -1];



//     if (document.querySelector('.fancybox-overlay'))
//     {
//         let parentDiv = document.querySelector('.fancybox-overlay');
//         parentDiv.appendChild(description);

//         console.log('Success!');
//     }

// createThumbnailsDiv();
// generateThumbnails();
// }

// function removeDescription () {
//     console.log('Removing the Description from the slider');

// if (document.querySelector('.fancybox-content'))
// {
//     description = document.querySelector('.fancybox-content');
// }
// if (!document.querySelector('.fancybox-content'))
// {
//     return; //A description did not exist, cannot remove what doesn't exist
// }
  
//     if (document.querySelector('.fancybox-overlay'))
//     {
//         let parentDiv = document.querySelector('.fancybox-overlay');
//         if (parentDiv.hasChildNodes())
//         parentDiv.removeChild(description);

//         console.log('Success!');
//     }
// }

function createPrevSlide () {
    console.log('Creating the icon for the previous slide movement!');

    const prevIcon = document.createElement('a');
    const prevSpan = document.createElement('span');
    prevIcon.classList.add('fancybox-nav', 'fancybox-prev');
    prevSpan.classList.add('fancybox-nav', 'back');

    if (document.querySelector('.fancybox-outer'))
    {
        let grandParentDiv = document.querySelector('.fancybox-outer');
        grandParentDiv.appendChild(prevIcon);

        let parentDiv = document.querySelector('.fancybox-prev');
        parentDiv.appendChild(prevSpan);

        console.log('Success!');
    }
}

function createNextSlide () {
    console.log('Creating the icon for the next slide movement!');

    const nextIcon = document.createElement('a');
    const nextSpan = document.createElement('span');
    nextIcon.classList.add('fancybox-nav', 'fancybox-next');
    nextSpan.classList.add('fancybox-nav', 'next');

    if (document.querySelector('.fancybox-outer'))
    {
        let grandParentDiv = document.querySelector('.fancybox-outer');
        grandParentDiv.appendChild(nextIcon);

        let parentDiv = document.querySelector('.fancybox-next');
        parentDiv.appendChild(nextSpan);

        console.log('Success!');
    }
}

function createCloseButton () {
    console.log('Creating the icon to close the slider!');

    const closeIcon = document.createElement('a');
    closeIcon.classList.add('fancybox-close');

    if (document.querySelector('.fancybox-skin'))
    {
        let parentDiv = document.querySelector('.fancybox-skin');
        parentDiv.appendChild(closeIcon);

        console.log('Success!');
    }
}

function createSpanTitleWrap () {
    console.log('Creating the wrap for the title');

    const titleholder = document.createElement('div');
    titleholder.classList.add('fancybox-title', 'fancybox-title-float-wrap');
    if (document.querySelector('.fancybox-skin'))
    {
        let parentDiv = document.querySelector('.fancybox-skin');
        parentDiv.appendChild(titleholder);

        console.log('Success!');
    }
}

function createSpanTitle () {
    console.log('Creating the icon for the title');

    const spanIcon = document.createElement('span');
    spanIcon.classList.add('child');
    spanIcon.innerHTML = title[index];
    if (document.querySelector('.fancybox-title'))
    {
        let parentDiv = document.querySelector('.fancybox-title');
        parentDiv.appendChild(spanIcon);

        console.log('Success!');
    }
}

function createThumbnailsDiv () {
     console.log('Creating the thumbnails div for the slider');

    const thumbDiv = document.createElement('div');
    thumbDiv.classList.add('fancybox-thumbnail-div');


    if (document.querySelector('.fancybox-content'))
    {
        let parentDiv = document.querySelector('.fancybox-content');
        parentDiv.appendChild(thumbDiv);

        console.log('Success!');
    }
}

// function createThumbnails () {
//      console.log('Creating the thumbnails for the slider');
//  thumb.forEach(image => {

//     const thumbIcon = document.createElement('img');
//     thumbIcon.classList.add('fancybox-thumbnails');
   
//         thumbIcon.src = image;

//     if (document.querySelector('.fancybox-thumbnail-div'))
//     {
//         let parentDiv = document.querySelector('.fancybox-thumbnail-div');
//         parentDiv.appendChild(thumbIcon);

//         console.log('Success!');
//     }
//     });
// }

// function removeThumbnails () {
//     console.log('Removing the thumbnails from the slider');

//   thumb.forEach(image => {

// if (document.querySelector('.fancybox-thumbnails'))
// {
//     thumbIcon = document.querySelector('.fancybox-thumbnails');
// }
  
//     if (document.querySelector('.fancybox-thumbnail-div'))
//     {
//         let parentDiv = document.querySelector('.fancybox-thumbnail-div');
//         if (parentDiv.hasChildNodes())
//         parentDiv.removeChild(thumbIcon);

//         console.log('Success!');
//     }
//     });

//   if (thumb.length) 
//   {
//   thumb.splice(0, thumb.length + 1);
//     }
// }


function currentIndex () {
    console.log('The current index is: ' + index);
}

   title = linkedImages.map(link => {
        if (link.title == null)
            {
                //try to open the link itself if the .href attribute no longer exists (I dont know why it disappears!)
                return link;
            }
        return link.title;
    });

   content = bullshitDescriptions.map(bs => {
        if (bs.dataset == null)
        {
            return bs;
        }
        return bs.dataset.content;
   });



/* Event Listeners are here! */

//handles clicking outside of the fancybox, closes the fancybox

images.forEach(img => img.addEventListener('mouseover', hoverDescriptionCreater));

images.forEach(img => img.addEventListener('mouseout', removeDescriptionHolder));



/* Event Listeners are here! */

//handles clicking outside of the fancybox, closes the fancybox

images.forEach(img => img.addEventListener('click', openSlider));

document.addEventListener('click', (e) => {

    if (e.target)
    {
        if (document.querySelector('.fancybox-overlay'))
        {
            let overlay = document.querySelector('.fancybox-overlay');

            if (e.target == overlay)
            {
                closeOverlayBox();
                console.log('ready for action captain!');
            }    
        }           
    }
});

//handles clicking the exit of the fancybox, closes the fancybox
images.forEach(img => img.addEventListener('click', openSlider));

document.addEventListener('click', (e) => {

    if (e.target)
    {
        if (document.querySelector('.fancybox-close'))
        {
            let closeButton = document.querySelector('.fancybox-close');

            if (e.target == closeButton)
            {
                closeOverlayBox();
                console.log('You hit the close button!');
            }    
        }           
    }
});

//Handles the clicking of the previous arrow, moving the slide backwards 1
document.addEventListener('click', (e) => {

     if (e.target)
    {
        if (document.querySelector('.fancybox-prev'))
        {
            let prev = document.querySelector('.fancybox-prev');
            let icon = document.querySelector('.back');

            if (e.target == prev || e.target == icon)
            {
                index--;
                slideAllUpInThatGallery(-1);
                
            }    
        }           
    }
});

//Handles the clicking of the left arrow directional, moving the slide backwards 1

document.addEventListener('keydown', (e) => {

 if (e.target)
    {
        if (document.querySelector('.fancybox-prev'))
        {

            if (e.keyCode == 37)
            {
                index--;
                slideAllUpInThatGallery(-1);
                
            }    
        }           
    }
});

//Handles the clicking of the down arrow directional, moving the slide forwards 1

document.addEventListener('keydown', (e) => {

 if (e.target)
    {
        if (document.querySelector('.fancybox-next'))
        {

            if (e.keyCode == 40)
            {
                index--;
                slideAllUpInThatGallery(-1);
                
            }    
        }           
    }
});


//Handles the clicking of the next arrow, moving the slide forwards 1

document.addEventListener('click', (e) => {

     if (e.target)
    {
        if (document.querySelector('.fancybox-next'))
        {
            let next = document.querySelector('.fancybox-next');
            let icon = document.querySelector('.next');

            if (e.target == next || e.target == icon)
            {
                index++;
            slideAllUpInThatGallery(1);


            }    
        }           
    }
});

//Handles the clicking of the left arrow directional, moving the slide forwards 1

document.addEventListener('keydown', (e) => {

 if (e.target)
    {
        if (document.querySelector('.fancybox-next'))
        {

            if (e.keyCode == 39)
            {
                index++;
                slideAllUpInThatGallery(1);
                
            }    
        }           
    }
});

//Handles the clicking of the down arrow directional, moving the slide forwards 1

document.addEventListener('keydown', (e) => {

 if (e.target)
    {
        if (document.querySelector('.fancybox-next'))
        {

            if (e.keyCode == 38)
            {
                index++;
                slideAllUpInThatGallery(1);
                
            }    
        }           
    }
});

window.addEventListener('resize', (e) => {
closeOverlayBox();
return;

 if (e.target)
    {
        if (document.querySelector('.fancybox-next'))
        {

            if (e.keyCode == 38)
            {
                index++;
                openSliderImage(index);
                
            }    
        }           
    }
});



/*

Designed by Brian Hurst - 4/10/2017

Make old html sites great again 

            ^.^ 

*/

