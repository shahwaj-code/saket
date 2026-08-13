import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileEnquiryButton from "@/components/MobileEnquiryButton";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Design Engine</title>
        <meta
          name="description"
          content="Design Engine's Privacy Policy - Learn how we protect your personal information and ensure your privacy."
        />
      </Helmet>

      <div className="min-h-screen bg-[#030306] text-foreground overflow-x-hidden">
        <Navbar />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="bg-[#0a0a0f] rounded-lg p-8 md:p-12 border border-[#ffc107]/10">
              <h1 className="text-3xl md:text-4xl font-bold text-[#ffc107] mb-8 text-center">
                Privacy Policy
              </h1>

              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 mb-6">
                  At Design Engine, we are committed to protecting your privacy and ensuring the security of your personal information.
                </p>

                <h2 className="text-2xl font-semibold text-[#ffc107] mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-white/80 mb-6">
                  We respect your privacy and will use your information to support and improve our relationship with you. This includes providing services, solutions, and support, as well as sharing relevant products, services, and offerings with you.
                </p>
                <p className="text-white/80 mb-6">
                  We strive to protect your privacy by implementing appropriate security measures and processes to safeguard your personal information.
                </p>

                <h2 className="text-2xl font-semibold text-[#ffc107] mb-4">Information Collection</h2>
                <p className="text-white/80 mb-6">
                  In certain sections of our website—such as when you request information about our services, download materials, or access resources—we may ask you to provide information about yourself and your business.
                </p>
                <p className="text-white/80 mb-6">
                  The information you provide will remain confidential. Authorized representatives of Design Engine who have access to your personal information will use it only for the purpose of carrying out services for Design Engine.
                </p>

                <h2 className="text-2xl font-semibold text-[#ffc107] mb-4">How We Use Your Information</h2>
                <p className="text-white/80 mb-6">
                  Design Engine may enhance or merge your information collected through this website with data from third parties for the purpose of marketing products or services that may be of interest to you.
                </p>
                <p className="text-white/80 mb-6">
                  Additionally, Design Engine may be required to disclose your information in compliance with applicable laws, rules, and regulations, or in response to legal actions. We may also disclose information if we reasonably believe it is necessary to protect Design Engine, our team members, our customers, or the public.
                </p>

                <h2 className="text-2xl font-semibold text-[#ffc107] mb-4">Communication Preferences</h2>
                <p className="text-white/80 mb-6">
                  Design Engine and/or its authorized representatives may periodically send you information about various services, solutions, and offerings that we believe may be of interest to you.
                </p>
                <p className="text-white/80 mb-6">
                  If you do not wish to be included on our mailing list, you can request to discontinue receiving such information by emailing us at officialdesignengine@gmail.com or writing to us at the address provided below.
                </p>

                <h2 className="text-2xl font-semibold text-[#ffc107] mb-4">Intellectual Property Rights</h2>
                <p className="text-white/80 mb-6">
                  Design Engine retains all ownership rights to its creations, recreations, and deployments across all materials, including plans, templates, knowledge, and processes. We reserve the right to use these materials anywhere for any purpose whatsoever.
                </p>
                <p className="text-white/80 mb-6">
                  Permission is granted to copy, distribute, and download materials from this Site for informational use only, provided that you do not modify the materials and that you retain all copyright and other proprietary notices contained in the materials. Any breach of these conditions will result in the automatic termination of this permission, and you must immediately destroy any downloaded or printed materials.
                </p>

                <h2 className="text-2xl font-semibold text-[#ffc107] mb-4">Disclaimer</h2>
                <p className="text-white/80 mb-6">
                  This website is the official website of Design Engine. The Design Engine team has created this website, reflecting their original ideas. If any content on this website resembles any other existing work, design, or functionality, it is purely coincidental.
                </p>
                <p className="text-white/80 mb-6">
                  The purpose of this website is to provide information to visitors about the services and solutions offered by the Design Engine team and to promote the business of Design Engine. While Design Engine has taken due care to disclose all aspects of its business to protect visitors' interests, it shall not be liable for any losses arising from any oversight on behalf of Design Engine.
                </p>

                <h2 className="text-2xl font-semibold text-[#ffc107] mb-4">Restricted Liability</h2>
                <p className="text-white/80 mb-6">
                  In no event, including but not limited to negligence, shall Design Engine be liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to loss of data, profits, or any other economic advantage related to the use or the inability to use the materials on this site, under any theory of liability, even if Design Engine knew or should have known of the possibility of such damages.
                </p>

                <h2 className="text-2xl font-semibold text-[#ffc107] mb-4">Contact Us</h2>
                <div className="text-white/80">
                  <p className="mb-4">For any questions regarding this Privacy Policy, please contact us:</p>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <p className="mb-1">Phone: +91 87961 51653</p>
                      <p>Email: designengine.saket@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <MobileEnquiryButton />
      </div>
    </>
  );
};

export default PrivacyPolicy;