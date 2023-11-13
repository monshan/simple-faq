# FAQ with static data

[Completing this Front-End Eval Challenge](https://frontendeval.com/questions/faq-component)

## Breaking Down Requirements and Estimating solution

### Requirements

- The FAQ component should receive the list of questions in the JS object format (in src/data.js)
- Every question from the object should be displayed, with an adjacent chevron as in the mockup
- Clicking any question should reveal the answer
- Clicking a question again should hide the answer
- The first answer should be revealed by default

__Let's break them down one by one,__

### The FAQ component should receive the list of questions in the JS object format above

Very simple answer for the first iteration, store the data in a `.js ` file and import it to where I might want to fetch data in a typical situation. The requirement implies the need for an `FAQ Component` that will wrap a list of questions, so we can estimate it might look something like this:

```jsx
    <FAQ> // FAQ Component, data will be 'fetched' here
        <QuestionOne />
        <QuestionTwo />
        <QuestionThree />
    </FAQ>
```

<!-- - Implement a setTimeout to simulate a loading state -->

### Every question from the object should be displayed, with an adjacent chevron as in the mockup

Because there are multiple questions, it would make sense to `Array.map()` across all the data items (questions) and ensure all of them are rendered on the page. The function to render might look like this:

```jsx
// data: Array<Question>
// type Question {
//     question: string;
//     answer: string;
// }

const renderQuestions = (data) => { 
    return data.map((props) => <Question ...props />)
}
```

<!-- In the real world, here are some other features that we should be aware of:

- All considerations for secure fetching, depending on the protocol this might extend to things like access headers and 
- Limit data fetching to `n` records
-  -->

### Clicking any question should reveal the answer & Clicking a question again should hide the answer

We can infer from these two related requirements that there will be a __closed__ and __open__ state `boolean` on the Question children which means we are no longer working with just static data and the Question children will need to be components with state. Later, state change will be triggered by the onClick event. Now `<Question /> ` will look roughly like so:

```jsx
<Question ...props open={ bool } onClick={ handleClick } />
```

### The first answer should be revealed by default

Thanks to the ```Array.map()``` callback, we can identify the index of our questions as we iterate through them all. Reading this out as an if statement, __"If the index of the question is 0, the question should be open"__. Though we know `<Question />` will have a closed/open, this requirement informs us where (on `<FAQ />`) to set the default state. So we can revise the `renderQuestions` function from earlier with our stateful `<Question />`.

[Read more about Array.map() here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```jsx
const renderQuestions = (data) => { 
    return data.map(
        (props, i) =>  // i being the index
        <Question ...props open={i === 0} />
    )
}
```

## Estimating the component

Keeping all the requirements in mind, here is what our file structure and functional components might look like.

### data.js
```js
{
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
}
```

### FAQ.js
```jsx
const renderQuestions = (data) => { 
    return data.map(
        (questionAndAnswer, i) =>  // i being the index
        <Question ...questionAndAnswer open={i === 0} />
    )
}

<FAQ>
    { renderQuestions(data) }
</FAQ>
```

### Question.js
```jsx
<Question ...atrributes open={false} />
```

# Testing Approach

In the same way the requirements can help us estimate what the component structure will look like, so will it guide our approach to testing. This is Test Driven Development in practice so let's, again, break down the requirements into the _minimum_ required amount of tests to satisfy our needs.

- The FAQ component should receive the list of questions in the JS object format (in src/data.js)
    <!-- - Here we might check that the parent component, something like `<FAQComponent />` can recieve all the  -->

- Every question from the object should be displayed, with an adjacent chevron as in the mockup
    - This is where we might check for the following elements in the DOM:
      - `<QuestionComponent />` exists and is visible
        - Has a `question`
        - 
      - Chevron exists and is visible 
      - `<QuestionComponent/>` exists and is visible 


- Clicking any question should reveal the answer
  - Test the click event, then visibility of answer
- Clicking a question again should hide the answer
  - Test the click event multiple times (x2, x3 etc.), then visibility of answer
- The first answer should be revealed by default
  - Test only the 1st and second children 