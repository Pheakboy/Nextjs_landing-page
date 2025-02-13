export default function PrivacyPolicy() {
  return (
    <div className='max-w-4xl mx-auto px-8 py-12 text-gray-700 bg-white shadow-2xl rounded-lg border border-gray-200'>
      <h1 className='text-5xl font-extrabold text-blue-400 mb-2 text-center'>
        Privacy Policy
      </h1>

      <p className='text-lg text-center mb-8 text-gray-600'>
        Effective Date: 11 February 2025
      </p>

      <section className='mb-10'>
        <h2 className='text-3xl font-semibold text-green-400 mb-4 border-b-2 pb-2 '>
          1. Introduction
        </h2>
        <p className='text-lg leading-relaxed text-gray-600'>
          Welcome to our Privacy Policy. Your privacy matters to us. This
          document explains how we collect, use, and protect your information to
          ensure transparency and trust.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-3xl font-semibold text-green-400 mb-4 border-b-2 pb-2 '>
          2. Information We Collect
        </h2>
        <p className='text-lg leading-relaxed text-gray-600'>
          We collect personal data such as your name, email, and contact
          details. Additionally, we gather technical data through cookies,
          analytics, and user interactions.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-3xl font-semibold text-green-400 mb-4 border-b-2 pb-2 '>
          3. How We Use Your Information
        </h2>
        <ul className='list-disc pl-8 space-y-2 text-lg text-gray-600'>
          <li>To enhance and personalize your experience.</li>
          <li>To improve our services through feedback and analytics.</li>
          <li>To ensure security, fraud prevention, and legal compliance.</li>
          {/* <li>To make our project more realable and it also provide use the easy way tffo fdff</li> */}
          
        </ul>
      </section>

      <section className='mb-10'>
        <h2 className='text-3xl font-semibold text-green-400 mb-4 border-b-2 pb-2 '>
          4. Security Measures
        </h2>
        <p className='text-lg leading-relaxed text-gray-600'>
          We employ cutting-edge security protocols to safeguard your data.
          While we strive for top-tier protection, no system is entirely
          invulnerable.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-3xl font-semibold text-green-400 mb-4 border-b-2 pb-2 '>
          5. Your Rights & Choices
        </h2>
        <p className='text-lg leading-relaxed text-gray-600'>
          You have control over your personal information. You may request
          access, updates, or deletions of your data at any time.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-3xl font-semibold text-green-400 mb-4 border-b-2 pb-2 '>
          6. Contact Us
        </h2>
        <p className='text-lg leading-relaxed text-gray-600'>
          If you have any concerns or inquiries regarding this policy, please
          reach out to us at{' '}
          <a
            href='mailto:support@example.com'
            className='text-blue-600 hover:underline font-semibold'
          >
            support@example.com
          </a>
          .
        </p>
      </section>
      <section className='mb-10'>
        <h2 className='text-3xl font-semibold text-green-400 mb-4 border-b-2 pb-2 '>
          7. Changes to This Policy
        </h2>
        <p className='text-lg leading-relaxed text-gray-600'>
          We reserve the right to modify this policy at any time. Any updates
          will be posted on this page, so please review it periodically.

        </p>
      </section>
    </div>
  );
}
