import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-primary/10 text-white pt-10 mt-auto">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Column 1: Info */}
          <div>
            <h2 className="font-bold text-xl mb-4">
              <img src="Logo.png" alt="" className=" h-14" />
            </h2>
            <p className="text-gray-400 w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
          </div>

          {/* Column 3: GetInTouch */}
          <div>
            <h2 className="font-bold text-xl mb-4">Get In Touch</h2>
            <p className=""> itcreation.myanmar@gmail.com</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} IT Creation. All rights reserved.</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
