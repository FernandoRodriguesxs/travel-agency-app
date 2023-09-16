import { Header } from './components/Header'
import { MobileHeader } from './components/HeaderMobile'
import {
  Wrapper,
  Hero,
  AboutSection,
  CardOutdoor,
  TitleColumn,
  ResortText,
  ResortCards,
  HotelCards,
  SubscribeSection,
} from './App.styles'
import { ButtonLearnMore } from './components/Button'
import imgLeft from './assets/about-left.jpg'
import imgRight from './assets/about-right.jpg'
import Card1 from './assets/card-1.jpg'
import ResortImg from './assets/resort1.jpg'
import HotelImg from './assets/resort-1.jpg'
import { ArrowRight, ArrowLeft } from '@phosphor-icons/react'

export const App = () => {
  return (
    <>
      <Hero>
        <Wrapper>
          <Header />
          <MobileHeader />
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
      <Wrapper>
        <TitleColumn>
          <h2>Thailand Outdoor Destination</h2>
        </TitleColumn>
      </Wrapper>
      <Wrapper>
        <CardOutdoor>
          <div className="card">
            <picture>
              <img src={Card1} alt="" />
            </picture>
            <h2>CHIANG MAI</h2>
            <p>
              Chiang Mai Is A Vibrant City That Offers <br />
              A Unique Blend Of Ancient Culture And <br />
              Modern Amenities
            </p>
          </div>
          <div className="card">
            <picture>
              <img src={Card1} alt="" />
            </picture>
            <h2>CHIANG MAI</h2>
            <p>
              Chiang Mai Is A Vibrant City That Offers <br />
              A Unique Blend Of Ancient Culture And <br />
              Modern Amenities
            </p>
          </div>
          <div className="card">
            <picture>
              <img src={Card1} alt="" />
            </picture>
            <h2>CHIANG MAI</h2>
            <p>
              Chiang Mai Is A Vibrant City That Offers <br />
              A Unique Blend Of Ancient Culture And <br />
              Modern Amenities
            </p>
          </div>
          <div className="card">
            <picture>
              <img src={Card1} alt="" />
            </picture>
            <h2>CHIANG MAI</h2>
            <p>
              Chiang Mai Is A Vibrant City That Offers <br />
              A Unique Blend Of Ancient Culture And <br />
              Modern Amenities
            </p>
          </div>
        </CardOutdoor>
      </Wrapper>
      <Wrapper>
        <ResortText>
          <h2>Top 10 Resorts</h2>
          <div className="arrows">
            <ArrowLeft size={32} color="#000000" />
            <ArrowRight size={32} color="#000000" />
          </div>
        </ResortText>
      </Wrapper>
      <Wrapper>
        <ResortCards>
          <picture>
            <img src={ResortImg} alt="" />
          </picture>
          <picture>
            <img src={ResortImg} alt="" />
          </picture>
          <picture>
            <img src={ResortImg} alt="" />
          </picture>
        </ResortCards>
      </Wrapper>
      <Wrapper>
        <TitleColumn>
          <h2>Our Latest Blog</h2>
        </TitleColumn>
      </Wrapper>
      <Wrapper>
        <HotelCards>
          <div className="cards-hotel">
            <picture>
              <img src={HotelImg} alt="" />
            </picture>
            <h3>Discovering The Best Street Food In Bangkok</h3>
            <p>
              This Blog Post Could Explore The Rich And Diverse Street Food
              Scene In The Capital
              <br />
              City Of Thailand
            </p>
            <a href="#">Read More</a>
          </div>
          <div className="cards-hotel">
            <picture>
              <img src={HotelImg} alt="" />
            </picture>
            <h3>Discovering The Best Street Food In Bangkok</h3>
            <p>
              This Blog Post Could Explore The Rich And Diverse Street Food
              Scene In The Capital
              <br />
              City Of Thailand
            </p>
            <a href="#">Read More</a>
          </div>
        </HotelCards>
      </Wrapper>
      <SubscribeSection>
        <div className="text-sub">
          <h3>Subscribe Today To Get Latest Updates !</h3>
        </div>
        <div className="newsletter">
          <input type="text" placeholder="Email" />
          <button>SUBSCRIBE</button>
        </div>
      </SubscribeSection>
    </>
  )
}
