# FAQ with static data

[Completing this Front-End Challenge](https://frontendeval.com/questions/faq-component)

## Requirements

- The FAQ component should receive the list of questions in the JS object format above
- Every question from the object should be displayed, with an adjacent chevron as in the mockup
- Clicking any question should reveal the answer
- Clicking a question again should hide the answer
- The first answer should be revealed by default

Let's break them down one by one,

### The FAQ component should receive the list of questions in the JS object format above

Very simple answer for the first iteration, store the data in a .js file and import it to where I might want to fetch data in a typical situation. For sake of simplicity this will be my Home page.

- Implement a setTimeout to simulate a loading state

### Every question from the object should be displayed, with an adjacent chevron as in the mockup

Because there are multiple questions, it would make sense to Array.map() across all the data items (questions) and ensure all of them are on the page. In the real world, here are some other features that we should be aware of:

- All considerations for secure fetching, depending on the protocol this might extend to things like access headers and 
- Limit data fetching to `n` records
- 

### Clicking any question should reveal the answer & Clicking a question again should hide the answer

Implement this with the classic onClick event, we can infer from these two related requirements that there will be a _closed_ and _open_ state on the Question component.

### The first answer should be revealed by default

Thanks to the ```Array.map()``` callback, we can identify the index of our questions as we iterate through them all. Reading this out as an if statement, "If the index of the question is 0, the question should be open". Though we know the Question component will have a closed/open state, this requirement will require us to pass a boolean value from the parent / place of component declaration.

[Read more about Array.map() here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Estimating the component

```js
{
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
}
```

```jsx
    <QuestionComponent ...atrributes open={false} />
```