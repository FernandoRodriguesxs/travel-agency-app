import { Header } from './components/Header'
import { Wrapper, Hero, AboutSection } from './App.styles'
import { ButtonLearnMore } from './components/Button'
import imgLeft from './assets/about-left.jpg'
import imgRight from './assets/about-right.jpg'

export const App = () => {
  return (
    <>
      <Hero>
        <Wrapper>
          <Header />
        </Wrapper>
        <div className="hero-content">
          <h1>
            FROM JUNGLE TREKKING
            <br />
            TO SCUBA DIVING
          </h1>
          <p>
            Experience The Beauty And Diversity Of Thailand Culture
            <br />
            Nature, And People Through Our Expertly Curated Travel <br />
            Packages
          </p>
          <ButtonLearnMore>Learn More</ButtonLearnMore>
        </div>
      </Hero>
      <Wrapper>
        <AboutSection>
          <div className="about-left">
            <h2>
              About Thailand Outdoor
              <br />
              Adventures
            </h2>
            <p>
              Thailand is a Paradise For Adventure Seekers, with A Diverse
              Landscape That
              <br />
              Offers A Range Of Outdoor Activities For Every Level Of Fitness
              And Interest.
              <br />
              From Hiking Through Lush Jungles To Scuba Diving In Crystal-Clear
              Waters,
              <br />
              Thailand Outdoor Adventures
            </p>
            <picture>
              <img src={imgLeft} alt="" />
            </picture>
          </div>
          <div className="about-right">
            <picture>
              <img src={imgRight} alt="" />
            </picture>
          </div>
        </AboutSection>
      </Wrapper>
    </>
  )
}
