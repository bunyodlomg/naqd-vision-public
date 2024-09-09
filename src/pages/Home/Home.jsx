import Hero from '../../Components/Hero/Hero'
import Quotes from '../../Components/Quotes/Quotes'
import Banner from '../../Components/Banner/Banner'
import Features from '../../Components/Features/Features'
import { Helmet } from 'react-helmet-async';
import AdsRating from '../../Components/AdsRating/AdsRating';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>NaqdVision - Your Trusted IT Solutions Provider in Uzbekistan</title>
        <meta name="description" content="NaqdVision offers comprehensive IT solutions including web development, mobile apps, and digital marketing services in Uzbekistan. Contact us for reliable and innovative solutions tailored to your business needs." />
        <meta property="og:title" content="NaqdVision - Your Trusted IT Solutions Provider in Uzbekistan" />
        <meta property="og:description" content="NaqdVision offers comprehensive IT solutions including web development, mobile apps, and digital marketing services in Uzbekistan. Contact us for reliable and innovative solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="NaqdVision - Your Trusted IT Solutions Provider in Uzbekistan" />
        <meta name="twitter:description" content="NaqdVision offers comprehensive IT solutions including web development, mobile apps, and digital marketing services in Uzbekistan. Contact us for reliable and innovative solutions tailored to your business needs." />
      </Helmet>
      <Hero />
      <AdsRating />
      <Quotes />
      <Banner />
      <Features />
    </>
  )
}

export default Home