import Image from 'next/image';
import Link from 'next/link';

export default function FooterComponent() {
  return (
    <footer className='w-full pt-8 pb-3 text-center md:mx-10'>
      <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 py-4  font-medium'>
        <Link href='https://web.facebook.com/instafoodkh/?locale=km_KH&_rdc=1&_rdr'>
          <Image
            src='/image/facebook_icon.svg'
            alt='Facebook'
            width={30}
            height={30}
          />
        </Link>
        <Link href='https://www.instagram.com/instafoodkh/?hl=en'>
          <Image
            src='/image/instagram_icon.svg'
            alt='Instagram'
            width={30}
            height={30}
          />
        </Link>
      </div>
      <p className='text-textFooter mt-4 font-medium max-w-xs mx-auto'>
        Email Address:
        <Link
          href='mailto:instafoodkh@gmail.com'
          className='text-textFooter underline ml-1'
        >
          instafoodkh@gmail.com
        </Link>
      </p>
      <p className='text-textFooter mt-4 font-medium max-w-xs mx-auto'>
        Delivery Hotline:{' '}
        <Link href='tel:011015663668' className='underline cursor-pointer'>
          011/015 663 668
        </Link>
      </p>
      <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 pt-6'>
        <Link href='/privacy'>
          <p className='text-textFooter underline cursor-pointer mx-1'>
            Terms & Privacy
          </p>
        </Link>
        <Link href='/privacy'>
          <p className='text-textFooter underline cursor-pointer'>
            Privacy Policy
          </p>
        </Link>
        <p className='text-textFooter'>Copyright &copy; InstaFoodKH 2017</p>
      </div>
    </footer>
  );
}
