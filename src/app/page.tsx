'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className='min-h-screen flex flex-col items-center bg-white '>
      {/* Header */}
      <header className='w-full py-6 flex justify-center relative'>
        <Image
          src='/image/instaFood_logo.jpg'
          alt='InstaFoodKH Logo'
          width={124}
          height={124}
        />
      </header>

      {/* Main Content */}
      <main className='mt-28 w-full flex flex-col md:flex-row md:mt-0 xl:mt-28 lg:mt-0 bg-[#252E45] text-white px-5 md:px-28 py-20 '>
        {/* Left Section */}
        <div className='flex flex-col items-center md:items-start text-center md:left-10 '>
          <Image
            src='/image/image_logo.png'
            alt='App Icon'
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

          {/* Download Buttons */}
          <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-2'>
            <Link href='#'>
              <Image
                src='/image/Layer_1.png'
                alt='App Store'
                width={120}
                height={39}
              />
            </Link>
            <Link href='#'>
              <Image
                src='/image/Layer_2.png'
                alt='Google Play'
                width={120}
                height={39}
              />
            </Link>
            <Link href='#'>
              <Image
                src='/image/Layer_3.png'
                alt='App Gallery'
                width={120}
                height={39}
              />
            </Link>
          </div>
        </div>

        <Image
          src='/image/image_right.png'
          alt='App Preview'
          width={531}
          height={646}
          className='rounded-lg hidden md:hidden lg:hidden xl:block md:mt-1 relative md:absolute md:right-28 md:top-16'
        />
      </main>

      {/* Footer */}
      <footer className='w-full py-8 bg-gray-100 text-center'>
        {/* Social Icons */}
        <div className='flex justify-center space-x-6 mb-4'>
          <Link href='https://www.facebook.com/instafoodkh/'>
            <Image
              src='/image/facebook_icon.png'
              alt='Facebook'
              width={32}
              height={32}
            />
          </Link>
          <Link href='https://www.instagram.com/instafoodkh/'>
            <Image
              src='/image/instagram_icon.png'
              alt='Instagram'
              width={32}
              height={32}
            />
          </Link>
        </div>

        {/* Contact Info */}
        <p className='text-[#72777A] mt-4'>
          Email Address:
          <Link
            href='mailto:instafoodkh@gmail.com'
            className='text-blue-600 underline ml-1'
          >
            instafoodkh@gmail.com
          </Link>
        </p>
        <p className='text-[#72777A] mt-4'>
          Delivery Hotline:{' '}
          <span className='underline cursor-pointer'>011/015 663 668</span>
        </p>

        {/* Copyright */}
        <p className='text-gray-500 mt-4'>Copyright &copy; InstaFoodKH 2017</p>
      </footer>
      <button onClick={() => router.push('/account-deletion')} className='text-white p-4'>Account Deletion</button>
      <button onClick={() => router.push('/privacy')} className='text-white p-4'>Privacy</button>
    </div>
  );
}
