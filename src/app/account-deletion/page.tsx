import Image from 'next/image';
import Link from 'next/link';

export default function AccountDeletionForm() {
  return (
    <div className='max-w-3xl mx-auto py-5 text-gray-700'>
      <header className='w-full py-4 flex justify-center relative'>
        <Image
          src='/image/instaFood_logo.jpg'
          alt='InstaFoodKH Logo'
          width={62}
          height={62}
        />
      </header>

      <div className=' p-6 w-full'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          Manage your account
        </h2>

        <p className='text-gray-700 mb-4'>Deleting your account will:</p>
        <ul className='list-disc list-inside text-gray-700 mb-4'>
          <li>Delete your account info and profile photo</li>
          <li>Delete your order history</li>
          <li>Delete your delivery addresses</li>
        </ul>

        <p className='font-semibold text-gray-800'>
          Enter your phone number to confirm you want to delete your account.
        </p>

        <div className='mt-4'>
          <label className='block text-gray-700 font-medium'>
            Phone number
          </label>
          <div className='flex items-center border max-w-sm p-3 mt-1 rounded-lg bg-gray-100'>
            <span className='text-gray-700 font-semibold mr-4'>+855</span>
            <input
              type='text'
              placeholder='Your phone number'
              className='bg-transparent  outline-none w-full text-gray-900'
            />
          </div>
        </div>
        <button className='mt-6 bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700'>
          Delete My Account
        </button>
      </div>
      <footer className='w-full py-8 text-center'>
        <div className='flex justify-center space-x-6 py-4 font-medium'>
          <Link href='#'>
            <Image
              src='/image/facebook_icon.svg'
              alt='Facebook'
              width={30}
              height={30}
            />
          </Link>
          <Link href='#'>
            <Image
              src='/image/instagram_icon.svg'
              alt='Instagram'
              width={30}
              height={30}
            />
          </Link>
        </div>
        <p className='text-[#72777A] mt-4 font-medium'>
          Email Address:
          <Link
            href='mailto:instafoodkh@gmail.com'
            className='text-blue-600 underline ml-1'
          >
            instafoodkh@gmail.com
          </Link>
        </p>
        <p className='text-[#72777A] mt-4 font-medium'>
          Delivery Hotline:{' '}
          <span className='underline cursor-pointer'>011/015 663 668</span>
        </p>
        <div className='flex justify-center space-x-4 pt-6'>
          <Link href='/privacy'>
            <p className='underline cursor-pointer mx-2 font-medium'>
              Terms & Privacy
            </p>
          </Link>
          <Link href='/privacy'>
            <p className='underline cursor-pointer'>Privacy Policy</p>
          </Link>
          <p className='text-gray-500 '>Copyright &copy; InstaFoodKH 2017</p>
        </div>
      </footer>
    </div>
  );
}
