/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <div className="main-hero">
    <h1 className="projectTitle">Keep your applications ⚡ with budgets</h1>
    <p className="m0">No more excuses not to set performance budgets.</p>
    <p className="m0">performance-budgets gives you a simple way to check and stay on top of performance.</p>
  </div>
);

const PromoSection = props => (
  <div className={`section promoSection ${props.className}`}>
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || "";
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />

          <div className="browser">
            <div className="browser__header">
              <div className="browser__header__dots">
                <span className="browser__header__dots__dot" />
                <span className="browser__header__dots__dot" />
                <span className="browser__header__dots__dot" />
              </div>
            </div>
            <div className="browser__body">
              <img src={imgUrl("/perfbudget.gif")} />
            </div>
          </div>

          <div className="call-to-action">
            <div className="code-dark" data-language="shell">
              <pre className="language-shell">
                <code className="language-shell">
                  {/* <span className="token function">npm</span> <span className="token function">install</span> -g gatsby-cli */}
                  <span className="token function">docker run</span> --rm boyney123/performance-budgets <span className="token string">https://example.com</span>
                </code>
              </pre>
            </div>

            <div className="badges">
              <a href="https://travis-ci.org/boyney123/performance-budgets" target="_blank">
                <img src="https://img.shields.io/travis/boyney123/performance-budgets/master.svg" />
              </a>
              <a href="https://codecov.io/gh/boyney123/performance-budgets" target="_blank">
                <img src="https://codecov.io/gh/boyney123/performance-budgets/branch/master/graph/badge.svg?token=AoXW3EFgMP" />
              </a>

              <a href="https://github.com/boyney123/performance-budgets" target="_blank">
                <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
              </a>

              <a href="https://github.com/boyney123/performance-budgets" target="_blank">
                <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
              </a>

              {/* <a href="https://github.com/boyney123/performance-budgets" target="_blank">
              <img src="https://img.shields.io/github/stars/boyney123/performance-budgets.svg?style=social" />
            </a> */}
            </div>
          </div>

          <PromoSection>
            <Button href="/docs/getting-started/installation">Read Docs</Button>
            <Button target="_blank" href="https://github.com/boyney123/performance-budgets">
              View on GitHub
            </Button>
            {/* <Button href="docs/examples/example-list">View Examples</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container padding={["bottom", "top"]} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: "Set budgets for the number of requests and size of files on your website.",
        image: "https://image.flaticon.com/icons/svg/813/813322.svg",
        imageAlign: "top",
        title: "Set Budgets"
      },
      {
        content: "Run with one command, Configure lighthouse to meet your own requirements. Easily run within CI, and more...",
        image: "https://image.flaticon.com/icons/svg/813/813316.svg",
        imageAlign: "top",
        title: "Features"
      },
      {
        content: "Built with Docker. Run one command to get up and running straight away.",
        image: "https://image.flaticon.com/icons/svg/919/919853.svg",
        imageAlign: "top",
        title: "Setup in Minutes"
      }
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div className="productShowcaseSection" style={{ textAlign: "center" }}>
    <h2>Out the box dashboards</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: "Talk about learning how to use this",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Learn How"
      }
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: "Talk about trying this out",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "left",
        title: "Try it Out"
      }
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: "This is another description of how this project is useful",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Description"
      }
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users
    .filter(user => user.pinned)
    .map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl("users.html", props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <div className="feature-dark">
            <Features />
          </div>
          <div className="features">
            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>Configure your own budgets...</h3>
                  <p>Setup your own budgets and let the Docker container handle the rest. Chrome and lighthouse will spawn inside the container and checks are made against your budgets.</p>

                  <a class="learnmore" href="/docs/using/motivation">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img src={imgUrl("/docs/lighthouse/lighthouse-budget-example.png")} />
                </div>
              </div>
            </div>
            <div className="feature-dark feature">
              <div class="content row">
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/1597/1597586.svg" />
                </div>
                <div class="col">
                  <h3>Easy integration with CI</h3>
                  <p>You can run performance-budgets with one command. If your CI system can use Docker then add the simple command to start monitoring your applications.</p>
                  <p>The Docker container will exit with a failure if budgets are not met.</p>
                  <a class="learnmore" href="/docs/getting-started/config">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>Tools</h3>
                  <p>performance-budgets uses Chrome and Lighthouse under the hood to run audits on your website. You can configure lighthouse with your own custom configuration file.</p>

                  <a class="learnmore" href="/docs/getting-started/config">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img width="75%" src={imgUrl("/docs/lighthouse/pwa-lighthouse.png")} />
                </div>
              </div>
            </div>
            <div className="feature-dark feature">
              <div class="content row">
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/919/919853.svg" />
                </div>
                <div class="col">
                  <h3>Built with Docker</h3>
                  <p>performance-budgets is built with Docker. Run on any machine.</p>
                  <p>Your own custom configuration file is mounted into the container and the container handles the rest.</p>

                  <a class="learnmore" href="/docs/using/how-it-works">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>performance-budgets is open source</h3>
                  <p>performance-budgets was built to help developers set performance budgets as easy as possible.</p>
                  <p>If you would like to contribute feel free to checkout the repository.</p>

                  <a class="learnmore" href="/docs/contributing/contributing">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/174/174249.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
