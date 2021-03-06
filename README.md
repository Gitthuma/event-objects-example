Event Objects Example

e.target is incredibly useful when you want to set the same event handler on multiple elements and do something to all of them when an event occurs on them. You might, for example, have a set of 16 tiles that disappear when selected. It is useful to always be able to just set the thing to disappear as e.target, rather than having to select it in some more difficult way. In the following example (see useful-eventtarget.html for the full source code; also see it running live here), we create 16 &lt;div&gt; elements using JavaScript. We then select all of them using document.querySelectorAll(), then loop through each one, adding an onclick handler to each that makes it so that a random color is applied to each one when selected.

Ref: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects

Live web: https://gitthuma.github.io/event-objects-example/
