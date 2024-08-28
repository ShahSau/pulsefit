import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
    const [scope, animate] = useAnimate();

    async function Page() {
      await animate("#title", { scale: 2, opacity: 1 }, { duration: 3 });
      await animate("#title", { opacity: 0 }, { duration: 1 });
      await animate("#homeLink", { opacity: 1 }, { duration: 1 });
    }
    useEffect(() => {
        Page();
      },);
  

      return (
        <div className="grid h-screen w-screen place-items-center overflow-hidde text-center font-serif">
          <div ref={scope} className="relative whitespace-nowrap">
            <h1
              id="title"
              className="absolute inset-0 flex items-center justify-center text-5xl text-red-500/40 opacity-0 will-change-transform md:text-7xl"
            >
              Page not found!
            </h1>
            <Link
                id="homeLink"
                to="/"
                className="absolute inset-0 mt-6 flex items-center justify-center text-neutral-500/80 opacity-0 md:mt-8"
                >
                Click here to return to Home Page
            </Link>
          </div>
        </div>
      );
}

export default NoPage