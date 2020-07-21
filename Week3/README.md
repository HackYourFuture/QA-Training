# Reading Material QA Training Week 3: How to Build Test Cases and Describing Bugs

## Agenda

1. DoR & DoD
2. BDD/TDD/ATDD
3. Gherkin
4. Identifying Bugs
5. Creating Issues

### 1. DoR & DoD

In agile environment, for a team to pick up a task for development it has to be _ready_. The level of readness differes from one team to another. Definition of Ready (DoR) is the minimum conditions a task must meet before it will be considered ‘Ready to be worked on’.

Now let's consider DoR is met, and the team starts working on the task, when is a task considered done? is it when the developer is done with the coding part? or when the task is validated? is the code reviewed? is documentation required? does this task affect other teams and they need to be aware of it? 
The answers to those questions and more will define when a task is _done_ ... and that's the Definition of Done (DoD)

Learn more about DoR and DoD:

- [Definition of Ready (DoR) vs. Definition of Done (DoD)](https://www.linkedin.com/pulse/definition-ready-dor-vs-done-dod-brian-will/)

### 2. BDD/TDD/ATDD

_A lot of abbreviations!_

In the agile world, testers need to collaborate and work together with developers, non-technical roles (like Product Owners and Business Analysts) and provide continuous feedback. Behavior-Driven Development (BDD), Test-Driven Development (TDD) and Acceptance Test-Driven Development (TDD) are  different testing methods or practices adopted by the team to facilitate the collaboration and continuous feedback. Each method has benefits and serves a specific purpose. 

More details on BDD, TDD and ATDD covered by the following resources:

- [Behavior-Driven Development](https://www.linkedin.com/learning/behavior-driven-development/collaboration-with-behavior-driven-development-bdd)
- [BDD in JavaScript](https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/)
- [What does TDD mean for me, the Tester?](https://www.ministryoftesting.com/dojo/series/the-testing-planet-archive/lessons/what-does-tdd-mean-for-me-the-tester)
- [Is Acceptance Test Driven Development (ATDD) Worth the Effort?](https://www.ministryoftesting.com/dojo/lessons/is-acceptance-test-driven-development-atdd-worth-the-effort)
- [BDD vs TDD vs ATDD : Key Differences](https://www.browserstack.com/guide/tdd-vs-bdd-vs-atdd)

### 3. Gherkin
Not everyone can speakc JavaScript but almost everyone can speak [Gherkin](https://cucumber.io/docs/gherkin/reference/)!

Gherkin is a domain specific language created especially for business behavior descriptions without the need to go into detail of implementation. Since it's tied to the behavior, it's strongly conncted with Behavior-Driven Development (BDD).

Example: 
```
Given I visit "/login"
  When I enter "Bob" in the "user name" field
    And I enter "tester" in the "password" field
    And I press the "login" button
  Then I should see the "welcome" page
```

Did you understand the desired behavior? Then you speak Gherkin too ;)

Master the Gherkin language by getting to know the syntax here:

- [What is Gherkin?](https://www.guru99.com/gherkin-test-cucumber.html)

Extra resource: [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)

### 4. Identifying Bugs
Imagine you have your test scenarios (translated into Gherkin or not), and while executing them something went wrong ... you're not seeing what you're supposed to see, the actual behaviour is not as the expected behaviour! 

Then you might have caught a bug 🐞! 

To know what is a bug and what are the kinds of bugs .. watch this:

- [Testing Essentials - What is a bug?](https://www.youtube.com/watch?v=jvBoKXDCvLE)

### 5. Creating Issues
How would you communicate that bug to developers? You create a bug report!

> Testers are storytellers. Coming from a communications background, one of the striking parallels I have made since working in quality assurance and software testing is that an important part of their role is to tell short stories through immediate product feedback. One powerful storytelling device they use to achieve this is: the bug report. (By Anneliese Herbosa)

Learn about 🐞storytelling:

- [The Art Of The Bug Report](https://www.ministryoftesting.com/dojo/series/the-testing-planet-2019/lessons/the-art-of-the-bug-report)

### Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
