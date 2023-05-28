/*
 * @Author: thelostword
 * @Date: 2022-11-14 16:54:04
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-14 16:56:25
 * @FilePath: \timeline\example\main.ts
 */
import MoeTimeline from '../src/main';

const timeline = new MoeTimeline('timeline', {
  fill: false,
  width: 1000,
  height: 60,
  bgColor: 'rgba(0,0,0,0.9)',
  // textColor: '#000',
  // pointColor: '#000',
  // centerTimePointColor: '#000',
  // centerTimePointWidth: 5,
  scaleSpacing: 15,
  maxZoom: 8,
  minZoom: 1,
  zoom: 2,
  fps: 120,
  // timeFormat: 'YYYY/MM/DD HH:mm:ss'
});

function generateNumberPairs(count: number) {
  var pairs: [number, number][] = [];
  var currentNumber = 0;
  
  for (var i = 0; i < count; i++) {
    currentNumber += 0.1;
    var smoothRandom = Math.random() * 0.1 - 0.05; // Adjust the smoothness here
    
    var pair = [currentNumber, Math.abs(Math.sin(currentNumber) + smoothRandom) * 40] as [number, number];
    pairs.push(pair);
  }
  
  return pairs;
}

timeline.draw({
  currentTime: 120,
  // areas: [{
  //   startTime: 40,
  //   endTime: 87,
  //   // bgColor: '#00AEEC'
  // },{
  //   startTime: 110,
  //   endTime: 140,
  //   // bgColor: '#00AEEC'
  // }],
  waveform: generateNumberPairs(1000),
});

// let a = 120;
// setInterval(() => {
//   timeline.draw({ currentTime: a+=0.01 })
// }, 10);

timeline.on('timeUpdate', (e: number) => {
  // a = Math.max(0, e);
})

console.log(timeline);
