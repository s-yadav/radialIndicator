# radialIndicator
A simple and light weight circular indicator plugin. Also works on Internet Explorer (IE11).

Check demo and documentation on <a href="http://ignitersworld.com/lab/radialIndicator.html">http://ignitersworld.com/lab/radialIndicator.html</a>

### Installation
Through npm
```
npm install @sudhanshu/radial-indicator
```

###Major updates

<h5>1.5.0</h5>
- Added option to specify an easing function
    - default is linear: 
    ```
    (t) => { return t } // t = progress
    ```
    - https://gist.github.com/gre/1650294
    ```
    var indicator = radialIndicator('#indicatorContainer', {
            ...
            easing: (t) => { return t*t } // easInQuad
        });
    
    ```
    - https://www.npmjs.com/package/bezier-easing
    ```
    var indicator = radialIndicator('#indicatorContainer', {
        ...
        easing: new BezierEasing(.14,1.39,.5,.04)
    });
    ```
- Added option to specify animation duration
    ```
    var indicator = radialIndicator('#indicatorContainer', {
        ...
        duration: 2000 // in ms
    });
    ```
- animate(value, anmDuration) has now an optional second parameter to define a duration 
from current value to the target value. While the duration property on the indicator is
the duration from your minValue to maxValue. If you did not set those values default is 0-100.
- Replaced setInterval with requestAnimationFrame
- Fixed: Formatter not handling decimal places correctly
- Fixed: Animation issue when the minValue is negative #11
- Fixed: Using decimal value in indicator #25

<h5>Release Notes</h5>
- Be careful when you update to 1.5.0, this is what changed:
    - Since we use requestAnimationFrame() instead of setInterval() there are
    most likely, but depending on your setup, more iterations than before. Causing 
    a smoother animation. Before this release if no precision property was set, default
    was depending on the step after each iteration. This is no longer the case since we have
    smaller steps with more decimal places. If you do not specify precision on the indicator,
    default number of decimals is 0. If you want decimal places, you have to set the
    precision property.
    - When a format pattern is set, decimal places in the format will take precedence
    over precision
    - frameTime and frameNum properties on the indicator are now deprecated. Those fields
    are only used when no duration property is set and will be removed in a future release.


<strong>1.4.0</strong>
- Added option to support rendering in the opposite direction.

<strong>1.2.0</strong>
- Added option to allow user interaction on mouse and touch events.
- Added precision option to support float value.

<strong>1.1.0</strong>
- Fixed draw issue on ipad and android devices and added onAnimationComplete callback.
