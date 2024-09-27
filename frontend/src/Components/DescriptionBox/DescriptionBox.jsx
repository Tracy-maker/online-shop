const DescriptionBox = () => {
  return (
    <div className="mx-44 my-28 lg:mx-16 md:mx-8 sm:mx-5">
      <div className="flex">
        <div className="flex items-center justify-center text-base font-semibold w-44 h-16 border border-gray-300">
          Description
        </div>
        <div className="flex items-center justify-center text-base font-semibold w-44 h-16 border border-gray-300 bg-gray-100 text-gray-600">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-6 border border-gray-300 p-12 pb-16 text-base md:text-sm">
        <p>
          An e-commerce website is a platform that is facilitated for the buying
          and selling of products or services over the Internet. It is served as
          a virtual marketplace where products can be showcased by businesses and
          individuals, customers can be interacted with, and transactions can be
          conducted without the need for a physical presence. Immense popularity
          has been gained by e-commerce websites due to their convenience,
          accessibility, and the global reach they offer. Products or services,
          along with detailed descriptions, images, prices, and any available
          variations (e.g., sizes, colors), are typically displayed on these
          websites. A dedicated page with relevant information is usually
          provided for each product.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
