export function Footer() {
  return (
    <>
      <div className="flex bg-gray-800 w-full flex-col items-center justify-center px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
        <p className="mb-4 text-center text-sm text-white sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} React & TailwindCss. All Rights
          Reserved.
        </p>
      </div>
    </>
  );
}
