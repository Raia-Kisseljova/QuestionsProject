export const Footer = () => {
  return (
    <div className="bg-[#0071b7] sm:columns-1 md:flex text-center md:justify-evenly lg:columns-2 p-2 fixed bottom-0 left-0 w-screen overflow-hidden">
      <div>
        <p className="text-md font-bold text-white">Treatments</p>
        <ul className="text-white">
          <li>Weight Loss</li>
          <li>Migraine</li>
          <li>Allergy</li>
        </ul>
      </div>
      <div>
        <p className="text-md font-bold text-white">Information</p>
        <ul className="text-white">
          <li>FAQs</li>
          <li>Delivery</li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  );
};
