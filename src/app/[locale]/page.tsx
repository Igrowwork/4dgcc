import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { rubik } from '@/app/fonts'
import { Icons } from '@/components/icons/icons'
import CustomLabel from '@/components/custom-label'
import Link from 'next/link'
import { MotionDiv, MotionH1, MotionH2, MotionP, MotionSection } from '@/components/motion-div'

export default function Home({ params: { locale } }: { params: { locale: any } }) {

  const t = useTranslations('home');
  unstable_setRequestLocale(locale);

  const variants = {
    start: { x: 200, opacity: 0 },
    end: { x: 0, opacity: 1 },
    startUp: { y: 200, opacity: 0 },
    endUp: { y: 0, opacity: 1 },
  }

  const aboutVariants = {
    hiddenBottom: {
      y: 100,
      opacity: 0,
    },
    visibleBottom: {
      y: 0,
      opacity: 1,
      staggerChildren: 0.3,
      transition: {
        delay: 0.3,
        duration: 0.4,
      }
    },
    hiddenRight: {
      x: 200,
      opacity: 0,
    },
    visibleRight: {
      x: 0,
      opacity: 1,
    },
  }

  const clients = ['client-1.jpg', 'client-2.png', 'client-3.png', 'client-4.png', 'client-5.png', 'client-6.jpg', 'client-7.png', 'client-8.png',]

  return (
    <main className="flex flex-col gap-20">

      {/*  Hero Section  */}
      <MotionSection variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.5, delay: 0.3 }} className='h-[550px] xl:h-screen w-full relative sm:mb-20'>
        <Image src={"/assets/images/hero-img.jpg"} alt='hero image' fill className='object-cover' />
        <div className='absolute h-fit w-fit flex flex-col gap-4 top-1/3 left-10 lg:left-20 xl:left-36'>
          <MotionH1 variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.4, delay: 0.9 }} className={cn('text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold', rubik.className)}>{t('heading')}</MotionH1>
          <MotionH2 variants={variants} initial={variants.startUp} animate={variants.endUp} transition={{ duration: 0.4, delay: 1.1 }} className='text-white w-11/12 sm:text-lg lg:text-xl xl:text-2xl font-semibold'>{t('subHeading')}</MotionH2>
        </div>
        <div className={cn("absolute text-white h-fit w-fit top-[70%] md:top-[90%] lg:top-[85%] md:left-20 lg:left-40 xl:left-60 flex flex-col md:flex-row items-center md:items-start", rubik.className)}>
          <div className='flex'>
            <MotionDiv variants={variants} initial={variants.start} animate={variants.end} transition={{ duration: 0.4, delay: 1.4 }} className='p-4 lg:p-8 flex items-center flex-col gap-2 bg-secondary-main h-fit w-fit text-xs sm:text-sm lg:text-base'>
              <span className='sm:text-4xl lg:text-6xl xl:text-7xl font-semibold'>800+</span>
              <span>{t('completedProjects')}</span>
            </MotionDiv>
            <MotionDiv variants={variants} initial={variants.start} animate={variants.end} transition={{ duration: 0.4, delay: 1.6 }} className='p-4 lg:p-8 flex items-center flex-col gap-2 bg-primary-main h-fit w-fit text-xs sm:text-sm lg:text-base'>
              <span className='sm:text-4xl lg:text-6xl xl:text-7xl font-semibold'>17+</span>
              <span>{t('experience')}</span>
            </MotionDiv>
          </div>
          <MotionDiv variants={variants} initial={variants.start} animate={variants.end} transition={{ duration: 0.4, delay: 1.8 }} className='flex flex-col gap-4 bg-white p-4 w-4/5 md:w-1/2 lg:w-[40%] text-text-color text-xs sm:text-sm xl:text-base md:border-t-8 md:border-primary-main md:-mt-32 shadow-[0_2px_25px_0_rgba(0,33,91,0.16)]'>
            <h3 className='lg:text-2xl xl:text-3xl font-medium text-secondary-main'>{t('herocardheading1')}<br />{t('herocardheading2')}</h3>
            <div className='flex gap-4 items-center'>
              <Icons.icon1 />
              <p className='flex flex-col gap-1'>
                <span className='lg:text-lg xl:text-xl font-medium text-secondary-main'>{t('herocardsubheading1')}</span>
                <span>{t('herocardsubheadingtext1')}</span>
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <Icons.icon2 />
              <p className='flex flex-col gap-1'>
                <span className='lg:text-lg xl:text-xl font-medium text-secondary-main'>{t('herocardsubheading2')}</span>
                <span>{t('herocardsubheadingtext2')}</span>
              </p>
            </div>
            <div className='flex gap-4 items-center'>
              <Icons.icon3 />
              <p className='flex flex-col gap-1'>
                <span className='lg:text-lg xl:text-xl font-medium text-secondary-main'>{t('herocardsubheading3')}</span>
                <span>{t('herocardsubheadingtext3')}</span>
              </p>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/*  About Section  */}
      <section className='mt-32 md:mt-0 lg:mt-10 px-5'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-11 gap-10 xl:px-10 overflow-hidden h-full'>
          <div className='flex flex-col gap-6 sm:col-span-5 text-text-color leading-relaxed text-sm lg:text-base'>
            <CustomLabel label={`${t('aboutlabel')}`} />
            <MotionH2 variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} className={cn('text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-secondary-main leading-tight', rubik.className)}>{t('aboutheading')}</MotionH2>
            <MotionP variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }}>{t('abouttext1')}</MotionP>
            <MotionP variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }}>{t('abouttext2')}</MotionP>
          </div>
          <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1 }} className='sm:col-span-6 sm:pr-32 lg:pr-0 h-full w-full flex justify-center items-center'>
            <div className='relative h-[460px] w-full my-auto'>
              <Image src='/assets/images/home-about-bg.png' alt='bg-svg' fill className='object-contain object-right xl:scale-[1.02]' />
              <div className='relative h-60 md:h-[350px] md:scale-[.65] lg:scale-100 lg:w-5/6 xl:w-11/12 lg:mt-16 xl:mt-0 xl:top-9'>
                <Image src='/assets/images/home-about-img.jpg' alt='bg-svg' fill className='object-cover object-left' />
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/*  Services Section */}
      <section className='px-4 overflow-hidden'>
        <div className='flex flex-col gap-10 max-w-7xl mx-auto xl:px-10'>
          <div className='flex flex-col gap-2'>
            <CustomLabel label={`${t('servicelabel')}`} />
            <MotionH2 variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} className={cn('text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-secondary-main', rubik.className)}>{t('serviceheading')}</MotionH2>
          </div>
          <MotionP variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} className='text-text-color leading-relaxed text-sm lg:text-base'>{t('servicetext')}</MotionP>
          <div className='grid sm:grid-cols-3 gap-8'>
            <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} className='relative h-[450px] w-full'>
              <Image src={"/assets/images/home-service-1.png"} alt='image' fill className='object-cover' />
              <div className='absolute bottom-0 bg-secondary-main max-h-max w-full py-3'>
                <p className='text-center text-2xl text-white'>{t('service1')}</p>
              </div>
            </MotionDiv>
            <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.7 }} className='relative h-[450px] w-full'>
              <Image src={"/assets/images/home-service-2.png"} alt='image' fill className='object-cover' />
              <div className='absolute bottom-0 bg-primary-main max-h-max w-full py-3'>
                <p className='text-center text-2xl text-white'>{t('service2')}</p>
              </div>
            </MotionDiv>
            <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1 }} className='relative h-[450px] w-full'>
              <Image src={"/assets/images/home-service-3.png"} alt='image' fill className='object-cover' />
              <div className='absolute bottom-0 bg-secondary-main max-h-max w-full py-3'>
                <p className='text-center text-2xl text-white'>{t('service3')}</p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/*  Projects Section */}
      <section className='px-4 overflow-hidden'>
        <div className='flex flex-col gap-10 max-w-7xl mx-auto xl:px-10'>
          <div className='flex flex-col gap-2'>
            <CustomLabel label={`${t('projectlabel')}`} />
            <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-6 sm:gap-0'>
              <MotionH2 variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} className={cn('text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium text-secondary-main', rubik.className)}>{t('projectheading1')} <br />{t('projectheading2')}</MotionH2>
              <Link href={"/projects"} className='text-white lg:text-lg font-medium flex gap-2 bg-primary-main px-4 py-2 items-center h-fit w-fit'>
                {t('projectbuttonlabel')}
                <Icons.arrowRight className='h-6 w-7' />
              </Link>
            </div>
          </div>
          <MotionP variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} className='text-text-color leading-relaxed text-sm lg:text-base'>{t('projecttext')}</MotionP>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} className='relative h-[350px] w-full'>
              <Image src={"/assets/projects/project-1.jpg"} alt='' fill className='object-cover' />
              {/* <div className='absolute top-0 left-0 h-full w-full bg-secondary-main/65' /> */}
              <div className='relative flex flex-col gap-4 py-8 px-4 text-center justify-between text-white'>
                {/* <h3 className='text-2xl leading-tight font-semibold'>Warehouses in ICAD - Plots 7A & 8A</h3> */}
              </div>
              <div className='flex justify-end py-4 absolute -bottom-2 right-2'>
                <Link href={"/projects"} className='p-2 bg-primary-main h-fit w-fit'>
                  <Icons.arrowRight className='h-6 w-7' />
                </Link>
              </div>
            </MotionDiv>
            <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.7 }} className='relative h-[350px] w-full'>
              <Image src={"/assets/projects/project-9.jpg"} alt='' fill className='object-cover' />
              {/* <div className='absolute top-0 left-0 h-full w-full bg-primary-main/65' /> */}
              <div className='relative flex flex-col gap-4 py-8 px-4 text-center text-white'>
                {/* <h3 className='text-2xl leading-tight font-semibold'>WEDDING HALL MOHD BIN RASHED AL MAKTOOM HUMANITARIAN SHARITIES EST</h3> */}
              </div>
              <div className='flex justify-end py-4 absolute -bottom-2 right-2'>
                <Link href={"/projects"} className='p-2 bg-secondary-main h-fit w-fit'>
                  <Icons.arrowRight className='h-6 w-7' />
                </Link>
              </div>
            </MotionDiv>
            <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1 }} className='relative h-[350px] w-full'>
              <Image src={"/assets/projects/project-8.jpg"} alt='' fill className='object-cover' />
              {/* <div className='absolute top-0 left-0 h-full w-full bg-secondary-main/65' /> */}
              <div className='relative flex flex-col gap-4 py-8 px-4 text-center text-white'>
                {/* <h3 className='text-2xl leading-tight font-semibold'>UNION COOP UM AL QUWAIN</h3> */}
              </div>
              <div className='flex justify-end py-4 absolute -bottom-2 right-2'>
                <Link href={"/projects"} className='p-2 bg-primary-main h-fit w-fit'>
                  <Icons.arrowRight className='h-6 w-7' />
                </Link>
              </div>
            </MotionDiv>
            <MotionDiv variants={aboutVariants} initial="hiddenRight" whileInView={"visibleRight"} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.3 }} className='relative h-[350px] w-full'>
              <Image src={"/assets/projects/project-6.jpg"} alt='' fill className='object-cover' />
              {/* <div className='absolute top-0 left-0 h-full w-full bg-primary-main/65' /> */}
              <div className='relative flex flex-col gap-4 py-8 px-4 text-center text-white'>
                {/* <h3 className='text-2xl leading-tight font-semibold'>MOSQUE EMMAM HOUSE ABLUTION FOR MINISTRY OF AWQUAF ISLAMIC AFFAIRS</h3> */}
              </div>
              <div className='flex justify-end py-4 absolute -bottom-2 right-2'>
                <Link href={"/projects"} className='p-2 bg-secondary-main h-fit w-fit'>
                  <Icons.arrowRight className='h-6 w-7' />
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/*  Client Section */}
      <section className='px-4 mb-20'>
        <div className='flex flex-col gap-10 max-w-7xl mx-auto xl:px-10'>
          <div className='flex flex-col gap-4'>
            <CustomLabel label={`${t('clientlabel')}`} />
            <MotionH2 variants={aboutVariants} initial="hiddenBottom" whileInView={"visibleBottom"} viewport={{ once: true }} className={cn('text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-secondary-main', rubik.className)}>{t('clientheading')}</MotionH2>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10'>
            {clients.map((client, index) => (
              <MotionDiv initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 * index }} key={index} className='relative h-20 w-full'>
                <Image src={`/assets/images/${client}`} alt={client} fill className='object-contain' />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
