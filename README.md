Blind Over
==========

A jQuery plugin to shade over and disable any element.

## Usage

Call it like this:

    <div class="box">Content to be shaded</div>

    $(function() {
      $('.box').blindOver();
    })

## Caveats

A new element will be created with the same width and height as the element to be shaded out, positioned exactly over the top of it.

The blinded element will be set to be position relative if it is not already position absolute.