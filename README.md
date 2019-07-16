# radialIndicator
A simple and light weight circular indicator plugin.

Check demo and documentation on <a href="http://ignitersworld.com/lab/radialIndicator.html">http://ignitersworld.com/lab/radialIndicator.html</a>

### Installation
Through npm
```
npm install @sudhanshu/radial-indicator
```

<h3>Major updates</h3>

<strong>1.5.0</strong>
- Added option to specify an easing function
    - default linear (t = progress): function(t) {return t}
    - example: https://gist.github.com/gre/1650294
    - example: new BezierEasing(x,x,x,x) https://www.npmjs.com/package/bezier-easing
- Added option to specify animation duration
- Changed setInterval to requestAnimationFrame

<strong>1.4.0</strong>
- Added option to support rendering in the opposite direction.

<strong>1.2.0</strong>
- Added option to allow user interaction on mouse and touch events.
- Added precision option to support float value.

<strong>1.1.0</strong>
- Fixed draw issue on ipad and android devices and added onAnimationComplete callback.
