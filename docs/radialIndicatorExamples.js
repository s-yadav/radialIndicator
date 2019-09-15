import $ from 'jquery';
import radialIndicator from '../src/radialIndicator.js';

const noConfig = radialIndicator('.no-config .indicator', {});
const noConfigButton = document.querySelector('.no-config .button');
const noConfigInput = document.querySelector('.no-config .input');
noConfigButton.addEventListener('click', () => {
  noConfig.animate(noConfigInput.value);
});

const someConfig = radialIndicator('.some-config .indicator', {
  barColor: '#87CEEB',
  barWidth: 10,
  initValue: 40,
  roundCorner: true,
  percentage: true,
});
const someConfigButton = document.querySelector('.some-config .button');
const someConfigInput = document.querySelector('.some-config .input');
someConfigButton.addEventListener('click', () => {
  someConfig.animate(someConfigInput.value);
});

const noNumber = radialIndicator('.no-number .indicator', {
  displayNumber: false,
  initValue: 40,
});
const noNumberButton = document.querySelector('.no-number .button');
const noNumberInput = document.querySelector('.no-number .input');
noNumberButton.addEventListener('click', () => {
  noNumber.animate(noNumberInput.value);
});

const colorRange = radialIndicator('.color-range .indicator', {
  barColor: {
    0: '#FF0000',
    33: '#FFFF00',
    66: '#0066FF',
    100: '#33CC33',
  },
  initValue: 70,
  percentage: true,
});
const colorRangeButton = document.querySelector('.color-range .button');
const colorRangeInput = document.querySelector('.color-range .input');
colorRangeButton.addEventListener('click', () => {
  colorRange.animate(colorRangeInput.value);
});

const duration = radialIndicator('.duration .indicator', {
  duration: 5000,
});
const durationButton = document.querySelector('.duration .button');
const durationInput = document.querySelector('.duration .input');
durationButton.addEventListener('click', () => {
  duration.animate(durationInput.value);
});

const easing = radialIndicator('.easing .indicator', {
  easing: (t) => { return t * t; },
});
const easingButton = document.querySelector('.easing .button');
const easingInput = document.querySelector('.easing .input');
easingButton.addEventListener('click', () => {
  easing.animate(easingInput.value);
});

const minMax = radialIndicator('.min-max .indicator', {
  minValue: 1000,
  maxValue: 100000,
});
const minMaxButton = document.querySelector('.min-max .button');
const minMaxInput = document.querySelector('.min-max .input');
minMaxButton.addEventListener('click', () => {
  minMax.animate(minMaxInput.value);
});

const formatting = radialIndicator('.formatting .indicator', {
  radius: 70,
  initValue: 750000,
  minValue: 10000,
  maxValue: 10000000,
  format: '$ ##,###,###',
});
const formattingButton = document.querySelector('.formatting .button');
const formattingInput = document.querySelector('.formatting .input');
formattingButton.addEventListener('click', () => {
  formatting.animate(formattingInput.value);
});

const imageContent = radialIndicator('.image-content #indicatorImage', {
  displayNumber: false,
});
const imageContentButton = document.querySelector('.image-content .button');
const imageContentInput = document.querySelector('.image-content .input');
imageContentButton.addEventListener('click', () => {
  imageContent.animate(imageContentInput.value);
});

const clock = radialIndicator('.clock .indicator', {
  radius: 60,
  barWidth: 5,
  barColor: '#FF0000',
  minValue: 0,
  maxValue: 60,
  fontWeight: 'normal',
  roundCorner: true,
  format: (value) => {
    const date = new Date();
    return date.getHours() + ':' + date.getMinutes();
  },
});
setInterval(() => {
  clock.value(new Date().getSeconds() + 1);
}, 1000);

$(document).ready(function () {
  // file upload example
  const container = $('#uploadIndicatorWrapper');
  const msgHolder = container.find('.rad-cntnt');
  const containerProg = container.radialIndicator({
    radius: 100,
    percentage: true,
    displayNumber: false,
  }).data('radialIndicator');

  container.on({
    dragenter: function (e) {
      msgHolder.html('Drop here');
    },
    dragleave: function (e) {
      msgHolder.html('Click / Drop file to select.');
    },
    drop: function (e) {
      e.preventDefault();
      handleFileUpload(e.originalEvent.dataTransfer.files);
    },
  });

  $('#prgFileSelector').on('change', function () {
    handleFileUpload(this.files);
  });

  function handleFileUpload (files) {
    msgHolder.hide();
    containerProg.option('displayNumber', true);

    const file = files[0];
    const fd = new FormData();

    fd.append('file', file);

    $.ajax({
      url: 'service/upload.php',
      type: 'POST',
      data: fd,
      processData: false,
      contentType: false,
      success: function () {
        containerProg.option('displayNumber', false);
        msgHolder.show().html('File upload done.');
      },
      xhr: function () {
        const xhr = new window.XMLHttpRequest();
        // Upload progress
        xhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            const percentComplete = (e.loaded || e.position) * 100 / e.total;
            // Do something with upload progress
            console.log(percentComplete);
            containerProg.animate(percentComplete);
          }
        }, false);

        return xhr;
      },
    });
  }
});
