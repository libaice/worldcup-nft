import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()
  const isMobile = () => {
    var userAgentInfo = navigator.userAgent
    var mobileAgents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod'
    ]
    var mobile_flag = false
    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
      if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
        mobile_flag = true
        break
      }
    }

    var screen_width = window.screen.width
    var screen_height = window.screen.height

    //根据屏幕分辨率判断是否是手机
    if (screen_width < 780) {
      mobile_flag = true
    }
    return mobile_flag
  }
  return (
    <>
      {/* mt-[5%] */}
      {isMobile() ? (
        <>
          <img src="/worldcup/worldcup-bg.png" className="hero-bg-mobile mt-45" />

          <div className="text-[#FFF] flex flex-col ">
            <div className='text-4xl'>{t('hero.event')}</div>
            <div className="text-6xl font-bold py-8 hero-kid-800">
              {t('hero.summer')}
            </div>

            <div className="text-6xl font-bold py-5">{t('hero.dali')}</div>
            <div className="text-[2.25rem] mb-[35px] mt-[25px]">{t('hero.time')}</div>
            <div className="text-[2.25rem]">{t('hero.farm')}</div>
          </div>
        </>
      ) : (
        <>
          <div className="text-[#FFF] flex flex-col ">
            <div>{t('hero.event')}</div>
            <div className="text-5xl font-bold py-8 hero-kid-800">
              {t('hero.summer')}
            </div>
            <div className="text-4xl font-bold py-5">{t('hero.dali')}</div>
            <div className="text-[1.25rem] mb-[6px]">{t('hero.time')}</div>
            <div className="text-[1.25rem]">{t('hero.farm')}</div>
          </div>

        </>
      )}
    </>
  )
}

export default Hero
