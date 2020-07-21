# Reading Material QA Training Week 4: API, UI and Security Testing

## Agenda

1. API Testing
2. UI Testing
3. SSDLC
4. SQL/JS Injection

### 1. API Testing
You've learned some common types of testing before (like exploratory testing). Application Programming Interfaces (API) testing is another common type of software testing that validates APIs. The purpose is to check the functionality, reliability, performance, and security of the API and instead of using standard user inputs(keyboard) and outputs, you use software to send _calls_ to the API, get output, and note down the response.

The following course explaind the foundations of API testing:

- [API Testing Foundations](https://www.linkedin.com/learning/api-testing-foundations/stand-out-as-an-api-tester)

### 2. UI Testing
User Interface (UI) is the point of human-computer interaction and communication on a device, webpage, or app. This can include display screens, keyboards, a mouse, and the appearance of a desktop. User interfaces enable users to effectively control the computer or device they are interacting with. A successful user interface should be intuitive, efficient, and user-friendly. 

Part of your job as QA engineer is to make sure that user interface is _successful_ ... So make sure that it behaves as expected and looks well too :) 

Your guide to UI testing: 

- [UI Testing: A Comprehensive Guide](https://www.testcraft.io/ui-testing/)

UI tests use your application as a user would. At their best, they are the single most comprehensive way of testing your application. Hence, they are good candidates for test automation. 

Learn how you can build up a foundation for test automation here"
- [Test Automation Foundations](https://www.linkedin.com/learning/test-automation-foundations/build-a-foundation-of-test-automation)

### 3. SSDLC
_Another abbreviation ... I know!_

So now, you can validate that your APIs are reliable, the application beahves as expected and it looks good but is it _secure_ enough?

A software development life cycle (SDLC) is a framework that defines the process used by organizations to build an application from its inception to its decommission. Over the years, multiple standard SDLC models have been proposed (waterfall, iterative, agile, etc.) and used in various ways to fit individual circumstances. It is, however, safe to say that in general, SDLCs include the following phases:
- Planning and requirements
- Architecture and design
- Test planning
- Coding
- Testing and results
- Release and maintenance

In the past, it was common practice to perform security-related activities at the end of the process and before releasing. This after-the-fact technique usually resulted in a high number of issues discovered too late . It is a far better practice to integrate activities across the SDLC to help discover and reduce vulnerabilities early.

It is in this spirit that the concept of the secure SDLC (SSDLC) arises. A secure SDLC process ensures that security activities such as penetration testing, code review, and architecture analysis are integrated in the development effort. The primary advantages of adopting a secure SDLC approach are:

- More secure software 
- Early detection of flaws in the system
- Cost reduction as a result of early detection and resolution of issues
- Overall reduction of intrinsic business risks for the organization

Considering the advantages of SSDLC, promoting this approach is part of your job as QA engineer. 

The following course explains the foundation of secure coding, which will help you understand how can security can be integrated in SDLC:

- [Programming Foundations: Secure Coding](https://www.linkedin.com/learning/programming-foundations-secure-coding/)

### 4. SQL/JS Injection
QA engineers wear many hats, mostly they wear the users hats to validate how users will interact with an application ... but they can also wear the _hacker_ hat!

Ethical hacking is aimed to identify vulnerabilities and fix them before the hackers exploit them to execute an attack.

One of the most common attacks is SQL Injection. Learn how to use SQL injection to expose data and wear your _hacker_ 🎩: 
- [SQL Injection](https://www.youtube.com/watch?v=G6t1HxgTyfg)
- [Practicing with SQL injection](https://www.hacksplaining.com/exercises/sql-injection)


### Finished?

Are you finished with going through the materials? High five! If you feel ready to get practical, click [here](./MAKEME.md).
