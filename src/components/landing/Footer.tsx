export const Footer = () => {
  return (
    <footer className="bg-[#1E1E1C] text-[#F9F6F1]/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-[#F9F6F1] mb-4">Jennifer Rankin</h3>
            <p className="text-sm">Licensed Marriage and Family Therapist</p>
            <p className="text-sm mt-2">LMFT #123456</p>
          </div>
          <div>
            <h4 className="text-[#F9F6F1] font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@jenniferrankin.com</li>
              <li>(555) 123-4567</li>
              <li>123 Healing Way, Suite 100<br/>San Francisco, CA 94110</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#F9F6F1] font-medium mb-4">Crisis Support</h4>
            <p className="text-sm mb-2">If you are in a life-threatening situation, please call 911 or go to your nearest emergency room.</p>
            <ul className="space-y-2 text-sm">
              <li>National Suicide Prevention Lifeline: 988</li>
              <li>Crisis Text Line: Text HOME to 741741</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} Jennifer Rankin, LMFT. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
