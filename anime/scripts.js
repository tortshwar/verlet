const round = anime({
  targets: '#round',
  borderRadius: ['10%', '50%'],
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  duration: 750
});

const scale = anime({
  targets: '#scale',
  width: ['1.5em', '3em'],
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  duration: 750
});

const slide = anime({
  targets: '#slide',
  translateX: '1em',
  borderRadius: ['0%', '50%'],
  background: '#18FF74',
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  duration: 750
});

const slide_track = anime({
  targets: '#slide_track',
  borderTopRightRadius: ['0', '1em'],
  borderBottomRightRadius: ['0', '1em'],
  background: '#10cc5b',
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  duration: 750
});