const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test ('greeting should include name ', () => {
  const result = generateGreeting('Chris');
  expect(result).toBe('Hello Chris!');
})

test ('greeting should include Anonymous ', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
})
