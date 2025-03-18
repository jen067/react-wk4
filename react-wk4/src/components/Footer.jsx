function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center  text-slate-600 p-4">
      <hr className="mt-0.5 w-full border-t-2 border-slate-300 rounded-sm opacity-100" />
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
