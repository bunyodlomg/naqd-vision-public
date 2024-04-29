import { GoArrowDown } from "react-icons/go";
import { useTranslation } from "react-i18next";
import HowWorks from '../../Components/HowToWorks/HowWorks';
import { Helmet } from 'react-helmet-async';
function HowToWorks() {
  const { t } = useTranslation();
  const { heading, subheading } = t("how");
  return (
    <div className='h-full w-full mt-32 container'>
      <Helmet>
        <title>Our Services - NaqdVision</title>
        <meta name="description" content="Discover our range of IT solutions including web development, mobile apps, and digital marketing services at NaqdVision. Contact us to leverage technology for your business success." />
        <meta property="og:title" content="Our Services - NaqdVision" />
        <meta property="og:description" content="Discover our range of IT solutions including web development, mobile apps, and digital marketing services at NaqdVision. Contact us to leverage technology for your business success." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Our Services - NaqdVision" />
        <meta name="twitter:description" content="Discover our range of IT solutions including web development, mobile apps, and digital marketing services at NaqdVision. Contact us to leverage technology for your business success." />
      </Helmet>
      <div>
        <h1 className="text-center bg-slate-30 tracking-widest md:p-2 rounded-3xl text-[30px] md:text-[50px] lg:text-[60px] text-blue-500 font-bold">
          {t(heading)}
        </h1>
        <GoArrowDown
          size={60}
          className="text-center border-[3px] mx-auto mt- rounded-full border-blue-500 size-8 md:size-10 lg:size-15 p-2 animate-bounce text-blue-600"
        />
      </div>
      <div className="p-2 mt-2 rounded-xl">
        <p className="text-center md:text-2xl mb-2 lg:text-3xl text-[20px] md:mt-4 font-semibold">
          {t(subheading)}
        </p>
        <HowWorks />
      </div>

    </div>
  )
}

export default HowToWorks