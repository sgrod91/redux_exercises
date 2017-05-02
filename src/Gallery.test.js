import reducer from './Gallery.reducer';

it('should initialize to zero', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual({
    currentIndex: 0,
    images: []
  });
});

it('go to next image (incrementing state)', () => {
  const state = {
    currentIndex: 1,
    images: ['lolcat.jpg', 'loldog.jpg', 'lolsquirrel.jpg']
  };
  expect(reducer(state, {type: 'next'})).toEqual({
    currentIndex: 2,
    images: ['lolcat.jpg', 'loldog.jpg', 'lolsquirrel.jpg']
  });
});

it('pass images in', () => {
  const state = {
    currentIndex: 1,
    images: []
  };
  const action = {
    type: 'receive_images',
    images: ['lolcat.jpg', 'loldog.jpg']
  };
  expect(reducer(state, action)).toEqual({
    currentIndex: 1,
    images: ['lolcat.jpg', 'loldog.jpg']
  });
});

it('next wraps around if goes over', () => {
  const state = {
    currentIndex: 1,
    images: ['lolcat.jpg', 'loldog.jpg']
  };
  expect(reducer(state, {type: 'next'})).toEqual({
    currentIndex: 0,
    images: ['lolcat.jpg', 'loldog.jpg']
  });
});

// Write additional tests for

// 3. going to previous image
// 4. make sure it wraps around if goes under
// 5. jumping to a specific image index
