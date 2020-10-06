import React from 'react';
import SkyAnimationHandler from './SkyAnimationHandler';
import InfoTip from './InfoTip';
import Project from './Project';
import Section from './Section';
import SkillList from './SkillList';
import Splash from './Splash';
import TreeLine from './TreeLine';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
    <div>
      <div id="top"></div>
      {/* canvas to hold info tips*/}
      <div id="info-bubble-canvas"></div>

      {/* splash screen background and images */ }
      <img id="stars" src="stars.png" alt="stars" />
      <img id="moon" src="moon.png" alt="moon" />
      <SkyAnimationHandler />
      <Splash />
      <TreeLine id="splash-tree-line" />

      {/* about me section */ }
      <div id="aboutme-scroll-target"></div>
      <Section id="aboutme" title="ABOUT ME" content={
        <main className="section-content-text">
          <article>I am a self-taught computer programmer residing in Burlington, Ontario, Canada. My background is in mechanical engineering and project management, and I previously worked on large-scale mining and nuclear power construction projects. I started out programming as a hobby, but I've forged it into a new career! When I'm not programming I love to get out biking, hiking and camping in the great outdoors. I'm currently available and looking for new opportunities. </article>
        </main>
      } />

      {/* projects section */ }
      <div id="projects-scroll-target"></div>
      <Section id="projects" title="PROJECTS" content={
        <div>

          <div id="sfhs"></div>
          <Project
          title="STARFINDER HACKING SIMULATOR"
          projLink="https://starfinder-simulator.herokuapp.com/"
          techs_used= {[
            <InfoTip img="js.png" alt="JavaScript logo" content="JavaScript" />,
            <InfoTip img="html5.png" alt="HTML logo" content="HTML 5"/>,
            <InfoTip img="ruby-on-rails.png" alt="Ruby on Rails logo" content="Ruby On Rails"/>,
            <InfoTip img="sass.png" alt="Sass logo" content="Sass" />,
            <InfoTip img="git.png" alt="Git logo" content="Git" />
          ]}
          links= {[
            <InfoTip  img="www-icon.png"
                      alt="world wide web logo"
                      content="Click to try the app online!"
                      link="https://starfinder-simulator.herokuapp.com/"/>,
            <InfoTip  img="youtube-icon.png"
                      alt="youtube logo"
                      content="Click to see it in action on Youtube."
                      link="https://www.youtube.com/watch?v=Bw9rKIYhuto" />,
            <InfoTip  img="github.png"
                      alt="github logo"
                      content="Click to see sample code on GitHub."
                      link="https://github.com/liam027/sfhs-public" />
          ]}
          img= {
            <img className="project-image"
            id="starfinder-screenshot" src="starfinder-hacking-simulator-screenshot.png"
            alt="Example of the Starfinder Hacking Simulator."
            />
          }
          shortDescription= {
              <span>The Starfinder Hacking Simulator is a virtual, interactive prop for the <InfoTip text="Starfinder" title="STARFINDER" content="In Starfinder, one person plays as the 'Game Master' and narrates a space adventure to a group of players, who each control a character and roll dice to determine the outcome of their actions  (if you're familiar with Dungeons and Dragons, it's like that, but in space)."/> tabletop role-playing game.</span>
          }
          moreDescription= {
            <span>
              <span>  The app allows game creators to make a visual representation of a computer by creating a network of nodes, each with different properties and information. The 'encounter' can then be transferred to the players, who must navigate and explore the network. It has a bunch of cool <InfoTip text="game related features" title="GAME LOGIC" content="The game logic is coded into the app, to save time for game creators who would normally have to look up values in reference books. Starfinder is an imaginative, creative game though, so the logic can be optionally overwritten and customized to the game creator's liking."/>, which makes creating encounters much easier for game creators, and also provides a fun, interactive experience for players! From a technical standpoint, it is a full-stack application which includes:</span>
              <ul className="list-fade-in">
                <li>Ruby on Rails in the back, vanilla Javascript <InfoTip text="(?)" title="WHY NOT USE A MODERN JAVASCRIPT FRAMEWORK?" content="Well, at the time I hadn't yet learned a framework. I also wanted to expand my JavaScript knowledge, while proving I could build something without relying on a framework. In hindsight, things would have been a lot easier and cleaner with something like React, but it in terms of learning (and providing value to the Starfinder community) it has been a successful project, regardless."/>  in the front.</li>
                <li>User accounts with authentication, including mailed account activations and password resets.</li>
                <li>Saving and loading by <InfoTip text="serializing" title="SERIALIZATION" content="Encounters are stored by individually serializing all the game data into JSON format, including node positions and custom data provided by the creator."/> user's creations. User's can opt to save their creations locally (browser storage) or online (website's database).</li>
                <li>Online saves can be shared with a secure link. Links are generated with an authentication token and expire after a set period, to ensure only the users who were provided with the link have access.</li>
                <li>The user interface allows users to position nodes by dragging them on screen, with both mouse and touch support. The connecting lines that show the node relationships are <InfoTip text="updated dynamically." title="SVG CANVAS" content="Lines are rendered on an HTML SVG canvas and update as nodes are moved around. They are also hidden and revealed dynamically as players uncover them over the course of the encounter."/> The action tray updates contextually based on the user's current selection.</li>
                <li>A cool retro-terminal look and feel, reminiscent of <InfoTip text="Alien." title="ALIEN" content="The original 1979 sci-fi horror film, directed by Ridley Scott and starring Sigourney Weaver. Not the more recent Alien vs. Predator nonsense..."/></li>
                <li>Regular bugs fixes and new features, based on feedback from the Starfinder community.</li>
              </ul>
            </span>
          }
          />

          <div id="portfolio"></div>
          <Project
          title="PORTFOLIO SITE"
          projLink="https://github.com/liam027/portfolio-site"
          techs_used={[
            <InfoTip img="react.png" alt="React logo" content="React"/>,
            <InfoTip img="html5.png" alt="HTML logo" content="HTML 5" />,
            <InfoTip img="sass.png" alt="Sass logo" content="Sass" />,
            <InfoTip img="git.png" alt="Git logo" content="Git" />
          ]}
          links={[
            <InfoTip  img="github.png"
                      alt="github logo"
                      content="Click to see sample code on GitHub."
                      link="https://github.com/liam027/portfolio-site"  />
          ]}
          img={<img className="project-image" id="portfolio-screenshot" src="comp-mobile-image.png" alt="A computer and mobile device showing this site." />}
          shortDescription= {<span>I needed to build a personal site to advertise my experience and projects, and I also wanted to learn a modern JavaScript framework, so I made this site.</span>}
          moreDescription={<span> Built using React, it is both mobile and desktop friendly. My aim was to keep the UI and design simplistic while including some subtle complexity, like the <InfoTip text="information tips" title="Info Tips" content="These custom tool tips are styled with CSS and can be accessed with a mouse hover or touch tap." /> and <InfoTip text="splash screen animations." title="Splash Screen Animations" content="An animation handler uses a timer to cycle through an array of objects, each with their own animation that starts when the object is rendered." /></span>}
          />

          <div id="sds"></div>
          <Project
          title="SUDOKU SOLVER"
          projLink="https://github.com/liam027/SuDoKu-Solver"
          techs_used= {[
            <InfoTip img="python.png" alt="Python logo" content="Python" />,
            <InfoTip img="git.png" alt="Git logo" content="Git" />
          ]}
          links= {[
            <InfoTip  img="github.png"
                      alt="github logo"
                      content="Click to see the code on GitHub."
                      link="https://github.com/liam027/SuDoKu-Solver"/>
          ]}
          img= {<img className="project-image" id="sds-screenshot" src="sds-screenshot.png" alt=""/>}
          shortDescription= {<span>The Sudoku Solver is a small app I wrote to demonstrate Python knowledge and practice writing alogrithms. It takes in a Sudoku puzzle and attempts to solve it using the same method a human would.</span>}
          moreDescription= {<span> I know a <InfoTip text="brute force" title="BRUTE FORCE ALTERNATIVE" content="The brute force method would involve guessing at the missing numbers and iterating many, many times until a correct solution is found."/> solution is possible, but programming the logical steps to solving it was more interesting, required more complex algorithms and also helped me understand the techniques for solving the puzzle better! It can save and load puzzles in JSON and can solve puzzles in steps (the next solvable box is completed) or outright (the entire puzzle is completed). The user interace was built with Tkinter (it's not fancy but having a nice UI wasn't my goal for this project).</span> }
          />

          <div id="wwa"></div>
          <Project
          title="WORLD WAR OF ANTS"
          projLink="https://github.com/Veradux/wwa/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+author%3Aliam027"
          techs_used={[
            <InfoTip img="java.png" alt="Java logo" content="Java"/>,
            <InfoTip img="git.png" alt="Git logo" content="Git" /> ]}
          links={[
            <InfoTip  img="github.png"
                      alt="github logo"
                      content="Click to see my pull requests on GitHub."
                      link="https://github.com/Veradux/wwa/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Amerged+author%3Aliam027"/> ]}
          img={<img className="project-image" id="wwa-icon" src="wwa.png" alt="Ant head symbol."/>}
          shortDescription = {<span>World War of Ants (WWA) is an open-source project created as a learning project for new programmers.</span>}
          moreDescription= {
            <span>
              <span> The goal of the project was to create a text-based ant simulation game, written in Java. I learned a lot from my contributions:</span>
              <ul className="list-fade-in">
                <li> I had no Java experience when I started, but quickly learned the basics and some important new concepts, such as abstract classes and interfaces.</li>
                <li>I learned how to use GIT and GitHub on a collaborative project (forks, pull requests, merging branches, code review and comment cycles, issues tracking etc).</li>
                <li>I contributed a ConsoleOutputHandler class which would be used in each game module's view to standardize the output to the console.
                </li>
              </ul>
            </span>
          } />
        </div>
      }/>

      {/* skills section */ }
      <div id="skills-scroll-target"></div>
      <Section id="skills" title="SKILLS" content={<SkillList />} />

      {/* contact section */ }
      <div id="contact-scroll-target"></div>
      <Section
        id="contact"
        title="CONTACT"
        content={
          <div>
            <span className="contact-info">
              You can reach me by E-mail at <a href="mailto:liam027@gmail.com" subject="Hi Liam">liam027@gmail.com.</a>
            </span>
            <div className="ref-container">
              <InfoTip img="github.png" alt="github logo" content="Click to see my code on GitHub." link="https://github.com/liam027?tab=repositories" />
              <br />
              <br />
              <a id="return-to-top" href="#top">
                Return to top
              </a>
            </div>
          </div>
          }
      />
      <div className="footer-tree-line-container">
        <TreeLine id="footer-tree-line" />
      </div>
    </div>
    )
  };
}

export default App;
