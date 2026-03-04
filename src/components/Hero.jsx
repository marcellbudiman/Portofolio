import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
import CV from '../assets/Marcell Budiman - Curriculum Vitae.pdf'
import hero from '../assets/hero.png';
import { Download, Mail } from 'lucide-react'

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: instagram, alt: 'instagram', link: 'https://www.instagram.com/marcell.budiman/' },
    { icon: linkedin, alt: 'linkedin', link: 'https://linkedin.com/in/marcell-budiman' },
    // { icon: whatsapp, alt: 'whatsapp', link: 'https://wa.me/6287772487592' },
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    decorativeCircle: 'bg-orange-500 opacity-10'
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-500',
    decorativeCircle: 'bg-orange-400 opacity-10'
  };

  const ctaTheme = {
    primary: `
      bg-gradient-to-r from-orange-500 to-amber-500 
      text-white 
      hover:shadow-lg hover:shadow-orange-500/30
    `,
    secondaryLight: `
      border-2 border-orange-500 
      text-orange-500 
      hover:bg-orange-500 hover:text-white
    `,
    secondaryDark: `
      border-2 border-orange-400 
      text-orange-400 
      hover:bg-orange-400 hover:text-black
    `
  };

  const secondaryButton = darkMode
    ? ctaTheme.secondaryDark
    : ctaTheme.secondaryLight;

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section
        id='home'
        data-aos='fade-up'
        data-aos-delay='250'
        className='body-font z-10'>
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14
          py-12 lg:py-32 flex-col lg:flex-row items-center justify-between
          lg:mt-0 mt-14'>

        {/* Hero Image */}
          <div
            className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8
              lg:mt-0 flex justify-center'
            data-aos='fade-left'
            data-aos-delay='400'
          >
            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
              <div className='relative overflow-hidden'>
                <img
                  src={hero}
                  alt="Marcell Budiman"
                  className='w-full h-auto object-cover transform
                    hover:scale-105 transition-transform duration-500'
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className='lg:w-1/2 w-full flex flex-col items-center
            lg:items-start text-center lg:text-left mb-12 lg:mb-0 mt-14'>

            {/* Social Icons */}
            <div className='flex justify-center lg:justify-start gap-4 sm:gap-6
              mb-6 sm:mb-7 w-full'>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  data-aos='fade-up'
                  data-aos-delay={400 + index * 100}
                  className='transform hover:scale-110 transition-transform duration-300'
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos='fade-up'
              data-aos-delay='500'
            >
              Hi, I'm Marcell Budiman
            </h1>

            {/* Description */}
            {/* <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos='fade-up'
              data-aos-delay='600'
            >
              I am a Bachelor of Information System from Tarumanagara University,
              who is interested in database management, optimizing queries, automation,
              and managing high-volume data. My work experience includes being a intern backend developer at PT. Pharos Indonesia,
              lab instructor in 5 subjects at Tarumanagara University an involvement in Jakarta Fair Kemayoran 2022 as a cashier.
            </p> */}

            {/* CTA Buttons */}
            <div
              className='w-full pt-4 sm:pt-6'
              data-aos='fade-up'
              data-aos-delay='700'
            >
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'>

                {/* Download CV */}
                <a href={CV} download className="col-span-1">
                  <button
                    className={`w-full inline-flex items-center justify-center
                    ${ctaTheme.primary}
                    py-3 px-4 sm:px-8
                    rounded-full text-sm sm:text-base lg:text-lg font-semibold
                    transition-all duration-300 transform hover:scale-105
                    whitespace-nowrap`}
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 shrink-0" />
                    <span>Download CV</span>
                  </button>
                </a>

                {/* Contact Me */}
                <a href="#contact" className="col-span-1">
                  <button
                    className={`w-full inline-flex items-center justify-center
                    ${secondaryButton}
                    py-3 px-4 sm:px-8
                    rounded-full text-sm sm:text-base lg:text-lg font-semibold
                    transition-all duration-300 transform hover:scale-105
                    whitespace-nowrap`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 shrink-0" />
                    <span>Contact Me</span>
                  </button>
                </a>

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero