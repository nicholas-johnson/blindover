Blind Over
==========

A cute jQuery plugin to shade over and visually disable any element. Use it to indicate that

## Usage

Call it like this:

    <div class="box">Content to be shaded</div>

    $(function() {
      $('.box').blindOver();
    });

You can blind the entire page. Use:

    $(function() {
      $('body').blindOver();
    });

Chaining is supported (of course):

    $(function() {
      $('section').blindOver().css('color','red');
    });

## Caveats

A new element will be created with the same width and height as the element to be shaded out, positioned exactly over the top of it.

The blinded element will be set to be position relative if it is not already position absolute and it is not the body element.

The blind will have a class of blindover. You can apply CSS styling to it directly if you like, in your CSS, or in jQuery.

The blind does not update when the element changes size. Best used on elements with a static size.

## UX is not Security!

Blinded elements cannot be clicked on or interacted with using the mouse. You will still be able to access blinded elements using the keyboard though. This is a UX nicety, not a security feature!

