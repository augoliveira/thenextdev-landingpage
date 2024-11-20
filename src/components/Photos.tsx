import Image from "next/image";

export function Photos() {
  return (
    <>
      <div>
        <div className="mt-5 flex flex-col items-center justify-center px-2 md:px-24 lg:px-28 xl:px-36 2xl:px-56">
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-2 md:gap-4 md:px-0">
            <div className="flex w-full gap-2 md:gap-4">
              <div className="group relative w-8/12 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:ring-offset-slate-900">
                <Image
                  className="group flex h-full w-full items-center justify-center rounded-2xl object-cover brightness-50 transition-all duration-500 ease-in-out group-hover:brightness-100"
                  src="/tv.jpg"
                  alt="all"
                  layout="fill"
                />
              </div>
              <div className="group relative w-4/12 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:ring-offset-slate-900">
                <Image
                  className="group w-full rounded-2xl object-cover brightness-50 transition-all duration-500 ease-in-out group-hover:brightness-100"
                  src="/videogame.jpg"
                  alt="kids"
                  width="0"
                  layout="responsive"
                  height="0"
                />
              </div>
            </div>
            <div className="flex w-full gap-2 md:gap-4">
              <div className="group relative w-2/4 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:ring-offset-slate-900">
                <Image
                  className="group w-full rounded-2xl object-cover brightness-50 transition-all duration-500 ease-in-out group-hover:brightness-100"
                  src="/celular.jpg"
                  layout="responsive"
                  width="0"
                  alt="men"
                  height="0"
                />
              </div>
              <div className="group relative w-2/4 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:ring-offset-slate-900">
                <Image
                  className="group w-full rounded-2xl object-cover brightness-50 transition-all duration-500 ease-in-out group-hover:brightness-100"
                  src="/fone.jpg"
                  layout="responsive"
                  width="0"
                  alt="women"
                  height="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
