import { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import FooterComponent from '@/components/footer/FooterCompoent';

export const metadata: Metadata = {
  title: 'InstaFoodKH',
  description: 'Find great restaurants for your daily meal today.',
  openGraph: {
    title: 'InstaFoodKH',
    description: 'Find great restaurants for your daily meal today.',
    images: [
      {
        url: '/image/instaFood_logo.jpg',
        width: 800,
        height: 600,
        alt: 'InstaFoodKH Logo',
      },
    ]
  },
};

export default function LandingPage() {
  return (
    <div className='min-h-screen max-w-full mx-auto flex flex-col items-center bg-white'>
      <header className='w-full py-6  flex justify-center relative'>
        <Link href='/'>
          <Image
            src='/image/instaFood_logo.jpg'
            alt='InstaFoodKH Logo'
            width={124}
            height={124}
          />
        </Link>
      </header>

      <div className='mt-28 w-full flex flex-col xl:flex-row justify-between bg-gray-900 text-white px-5 md:px-28 md:pt-20 xl:py-20 pt-20'>
        <div className='container mx-auto relative flex flex-col items-center justify-between xl:flex-row my-0'>
          <div className='flex flex-col items-center xl:items-start text-center xl:text-left  max-w-xs xl:max-w-none'>
            <Image
              src='/image/instaFood_icon.svg'
              alt='App logo'
              width={101}
              height={101}
              className='mb-4'
            />

            <h2 className='text-2xl font-bold leading-tight'>
              Find great restaurants for your daily meal today.
            </h2>
            <p className='text-lg font-bold text-gray-100 mt-1'>
              Download the app now!
            </p>

            <p className='text-lg font-medium text-gray-100 mt-4'>
              Available On!
            </p>

            <div className='flex flex-wrap justify-center xl:justify-start gap-3 mt-2'>
              <Link href='#'>
                <Image
                  src='/image/apple_logo.svg'
                  alt='App Store'
                  width={120}
                  height={39}
                />
              </Link>
              <Link href='#'>
                <Image
                  src='/image/google_logo.svg'
                  alt='Google Play'
                  width={120}
                  height={39}
                />
              </Link>
              <Link href='#'>
                <Image
                  src='/image/app_gallery_logo.svg'
                  alt='App Gallery'
                  width={120}
                  height={39}
                />
              </Link>
            </div>
          </div>
          <div className='flex justify-center xl:absolute xl:right-10 xl:bottom-[-64px] xl:block mt-5 mb-[-17px] xl:mt-0 xl:pb-0'>
            <Image
              src='/image/image_right.png'
              alt='App Preview'
              width={531}
              height={646}
              className='rounded-lg max-w-full h-auto mb-4 xl:mb-0'
            />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
