import React from 'react';
import { Card } from 'react-daisyui';

const Blog = () => {
    return (
        <div className=" rounded-lg">
      <div className="mb-3"></div>
      <Card side="lg" className="mt-5 border-sky-900">
        <Card.Body>
          <Card.Title tag="h2">
            Q-1: What are the different ways to manage a state in a React
            application?
          </Card.Title>
          <p>
            Ans: There are four main types of state you need to properly manage
            in your React apps:
            <ol>
              <li> Local state.</li>
              <li>Global state.</li>
              <li>Server state.</li>
              <li>URL state.</li>
            </ol>
            Local (UI) state – Local state is data we manage in one or another
            component.Local state is most often managed in React using the
            useState hook.
            <br />
            Global (UI) state – Global state is data we manage across multiple
            components.Global state is necessary when we want to get and update
            data anywhere in our app, or in multiple components at least.
            <br />
            Server state – Data that comes from an external server that must be
            integrated with our UI state.Server state is a simple concept, but
            can be hard to manage alongside all of our local and global UI
            state.
            <br />
            URL state –Data that exists on our URLs, including the pathname and
            query parameters.URL state is often missing as a category of state,
            but it is an important one. In many cases, a lot of major parts of
            our application rely upon accessing URL state.
          </p>
        </Card.Body>
      </Card>
      <Card side="lg" className="mt-5 border-sky-900">
        <Card.Body>
          <Card.Title tag="h2">
            Q-2: How does prototypical inheritance work?{" "}
          </Card.Title>
          <p>
            Ans: In JavaScript, an object can inherit properties of another
            object. The object from where the properties are inherited is called
            the prototype. In short, objects can inherit properties from other
            objects — the prototypes.You’re probably wondering: why the need for
            inheritance in the first place? Well, inheritance solves the problem
            of data and logic duplication. By inheriting, objects can share
            properties and methods without the need of manually setting those
            properties and methods on each object.
          </p>
        </Card.Body>
      </Card>
      <Card side="lg" className="mt-5 border-sky-900">
        <Card.Body>
          <Card.Title tag="h2">
            Q-3: What is a unit test? Why should we write unit tests?{" "}
          </Card.Title>
          <p>
            Ans: Unit testing is testing the smallest testable unit of an
            application. It is done during the coding phase by the developers.
            To perform unit testing, a developer writes a piece of code (unit
            tests) to verify the code to be tested (unit) is correct.
            <br />
            2nd-Part : With unit testing, developers can have more control over
            their individual code block quality before integrating different
            components and then sent for regression testing. Also, it is easier
            to identify and rectify mistakes or defects at the code level.
          </p>
        </Card.Body>
      </Card>
      <Card side="lg" className="mt-5 border-sky-900">
        <Card.Body>
          <Card.Title tag="h2">Q-4: React vs. Angular vs. Vue? </Card.Title>
          <p>
            Ans: <b>Angular</b> is a front-end framework with lots of
            components, services, and tools. On Angular’s site, you can see that
            they define Angular as “The modern web developer’s platform”.It is
            developed and maintained by Google developers, but curiously it is
            not used to implement any of their most common products such as
            Search or YouTube.
            <br />
            <b>React</b> is considered a UI library. They define themselves
            as:“A JavaScript library for building user interfaces”.Facebook
            developers are behind the development and maintenance of this
            library. And, in this case, most of Facebook’s products are made
            with React.
            <br />
            Vue.js is, according to its site:“A progressive JavaScript
            framework”.Vue.js is developed and led by Evan You, but also it
            counts on a huge open-source community.
            <br />
            These three frameworks have several things in common, such as each
            follows a component-based architecture and allows creating UI
            features quickly. React and Vue.js are mainly declarative, and while
            Angular could also be declarative, it’s really more imperative.
            Nevertheless, they present some more differences according to their
            structure, architecture and way of working, so let’s dive into all
            these characteristics.
          </p>
        </Card.Body>
      </Card>
    </div>
    );
};

export default Blog;