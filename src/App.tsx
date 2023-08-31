import { Header } from './components/Header'
import { Wrapper, Hero } from './App.styles'
import { ButtonLearnMore } from './components/Button'

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
    </>
  )
}
