
import Image from 'next/image';
import Link from 'next/link';
import FooterComponent from '@/components/footer/FooterCompoent';
import AccountDeleteComponent from '@/components/accountDelete/AccountDeleteComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Deletion | InstaFoodKH',
};

export default function AccountDeletionForm() {


  return (
    <div className="max-w-3xl mx-auto py-5 text-gray-700">
      <header className="w-full py-4 flex justify-center relative">
        <Link href="/">
          <Image
            src="/image/instaFood_logo.jpg"
            alt="InstaFoodKH Logo"
            width={124}
            height={124}
          />
        </Link>
      </header>
      <AccountDeleteComponent/>

      <FooterComponent />
    </div>
  );
}
