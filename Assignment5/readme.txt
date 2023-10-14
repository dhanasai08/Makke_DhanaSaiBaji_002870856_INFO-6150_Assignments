
*used flex properties 

*variables- used for the below 
$font-stack:SFMono-Regular, Menlo, Monaco, Consolas;
$bg-img:   url("/images/bg.jpg");

*custom properties-
$size:10px;
$color:black;
$color-main:#706c5f;
*used grid for showcase-content in body

*Nesting-used to next gallery section
Nesting is combining of different logic structures. Using SASS, we can combine multiple CSS rules within one another. 
If you are using multiple selectors, then you can use one selector inside another to create compound selectors.

*interpolation-used for .main-text located in _mixin.scss file
Interpolation is basically an insertion. It allows us to interpolate sass expressions into a simple SASS or CSS code. 
Means, you can define selector name, property name, CSS at-rules, quoted or unquoted strings etc, as a variable. 
Interpolation is a new principle and it is widely used in SASS

*Placeholder Selectors-used for button located in file _buttons.scss file
It is class selector, but it starts with a % and it's not included in the CSS output. 
In fact, any complex selector that even contains a placeholder selector isn't included in the CSS, nor is any style rule whose selectors all contain placeholders.

*Mixin-used for body class located in _mixin.scss file
used for display properties
Mixins allow you to define styles that can be re-used throughout your stylesheet.

*loops-used loops to change text colour in home page located in_loops.scss file.
The @for rule, written @for <variable> from <expression> to <expression> { ... } 
counts up or down from one number to another and evaluates a block for each number in between.
Each number along the way is assigned to the given variable name. 
If to is used, the final number is excluded; if through is used, it's included.

*functions-used function to specify column width  located in _config.scss file
Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. 
They make it easy to abstract out common formulas and behaviors in a readable way.