Blind Over
==========

A jQuery plugin to shade over and disable any element.

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

Chaining:


## Caveats

A new element will be created with the same width and height as the element to be shaded out, positioned exactly over the top of it.

The blinded element will be set to be position relative if it is not already position absolute and it is not the root.

Blinded elements cannot be clicked on or interacted with using the mouse. You will still be able to access blinded elements using the keyboard though. This is a UI nicety, not a security feature!

The blind does not currently update when the element changes size.