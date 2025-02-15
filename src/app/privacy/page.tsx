import Image from 'next/image';
import Link from 'next/link';

import FooterComponent from '@/components/footer/FooterCompoent';

export default function PrivacyPolicy() {
  return (
    <div className='max-w-3xl mx-auto py-5 text-gray-700 px-8'>
      <header className='w-full py-4 font-medium flex justify-center relative'>
        <Link href='/'>
          <Image
            src='/image/instaFood_logo.jpg'
            alt='InstaFoodKH Logo'
            width={124}
            height={124}
          />
        </Link>
      </header>
      <h1 className='text-2xl font-bold text-gray-900 pt-6'>
        Terms & Conditions
      </h1>
      <section className='pb-2 max-w-7xl mx-auto'>
        <h2 className='text-textColor text-lg font-semibold py-8'>
          1. INTRODUCTION AND OUR RULES
        </h2>
        <p className='text-textColor text-base pb-4 font-medium'>
          We provide you a simpler way to get home delivery of your favorite
          food, bakery, and drink from different restaurants, bakeries, and
          cafés.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          Delivery of your order on time.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          You can access the website without registration but for placing an
          order you have to register and provide us with the basic information.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          If you use any services of instafoodkh.com, it means you accept the
          Terms &amp; Conditions of instafoodkh.com. If you don&rsquo;t agree
          with any terms of instafoodkh.com, you can leave the website anytime.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          Before using the services of instafoodkh.com, you have to agree with
          the terms and conditions of instafoodkh.com. instafoodkh.com has the
          right to change or modify these conditions whenever required and does
          not need to give prior information. You need to be updated with the
          changes and accept that you agree to these changes and abide by them.
        </p>
      </section>
      <section className='pb-2'>
        <h2 className='text-textColor text-lg font-semibold py-8'>
          2. HOW TO MAKE AN ORDER AND HOW IT IS PROCESSED
        </h2>
        <p className='text-textColor text-base pb-4 font-medium'>
          Once you have selected your order from the menu of your chosen
          restaurant, you will be asked to confirm or to cancel your order. Once
          confirmed you will get a confirmation email.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          Please note it is important that you check the information that you
          enter and correct any errors before clicking on the &quot;Place Order
          Now&quot; button, especially address and phone number.
        </p>
      </section>
      <section className='pb-2'>
        <h2 className='text-textColor text-lg font-semibold py-8'>
          3. PRICE AND PAYMENT
        </h2>
        <p className='text-textColor text-base pb-4 font-medium'>
          Nham24.com is an online marketplace and we are not responsible to
          collect and pay any relevant taxes on behalf of the participating
          restaurants.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          In case you have any complaint about the quality of food or delivery
          service provided by nham24.com, please call to 011/015 6426 24. Our
          service staff will do their best to assist you.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          Payment in cash at the point of delivery to you.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          A discount may apply to your order if you use a promotional code
          recognized by nham24.com and endorsed by nham24.com.
        </p>
      </section>
      <section className='pb-2'>
        <h2 className='text-textColor text-lg font-semibold py-8'>
          4. LICENCE
        </h2>
        <p className='text-textColor text-base pb-4 font-medium'>
          The copyright rights of nham24.com website and materials published on
          it (including photographs and menus) are owned by Restaurant Owners.
          These works are protected by copyright laws and treaties around the
          world and all rights are reserved.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          You are not allowed to use any of the materials on nham24.com website
          for commercial purposes without getting a license from nham24.com to
          do so.
        </p>
      </section>
      <section className='pb-2'>
        <h2 className='text-textColor text-lg font-semibold py-8'>
          5. DELIVERY POLICY
        </h2>
        <p className='text-textColor text-base pb-4 font-medium'>
          Delivery Time mentioned for a particular restaurant are approximate
          only and vary.
        </p>
        <p className='text-textColor text-base pb-4 font-medium'>
          All orders are delivered by nham24.com team, we and the restaurants
          will make every effort to deliver the order within time stated,
          however, we will not be liable for any loss caused to you by late
          ordering. If the order is not delivered within the specified time,
          please call us at 011/015 6426 24, we will ensure that your order will
          reach you as soon as possible.
        </p>
      </section>
      <FooterComponent />
    </div>
  );
}
