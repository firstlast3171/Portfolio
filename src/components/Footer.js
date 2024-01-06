function Footer() {
     const currentYear = new Date().getFullYear();
     return ( 
          <div className="text-center p-2">
               © {currentYear} Copyright: Bhone Thit
          </div>
      );
}

export default Footer;