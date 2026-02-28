import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-6 py-12">

        {/* Main Footer Content */}
        <div className="text-center max-w-3xl mx-auto space-y-6">

          <h3 className="text-2xl font-bold">
            Lavneet Dabas
          </h3>


          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>9971809303</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>lavneetdabas26@gmail.com</span>
            </div>

          </div>

          {/* RERA Placeholder */}
          <div className="text-gray-500 text-xs">
            RERA No: ________
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-xs text-gray-400 space-y-3">

          <div>
            © {currentYear} | Lavneet Dabas | All Rights Reserved.
          </div>

          <div className="flex justify-center gap-4">
            <a href="/privacy-policy" className="hover:text-gray-200">
              Privacy Policy
            </a>
            <span className="opacity-40">|</span>
            <a href="/terms-conditions" className="hover:text-gray-200">
              Terms & Conditions
            </a>
          </div>

          {/* Mandatory Legal Disclaimer */}
          <div className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
          Disclaimer: This website is operated by an authorized real estate marketing partner and is not the official website of the developer. The content provided is for informational purposes only and does not form part of any legal offer, contract, or agreement. All prices, availability, specifications, and project details are subject to change without prior notice. Images are for representation purposes only.

By submitting your details, you authorize us to contact you via call, SMS, WhatsApp, or email, even if your number is registered under DND/NDNC. We may share your information with RERA-registered brokers/developers for further processing. For accurate and updated project information, please contact us directly.
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;