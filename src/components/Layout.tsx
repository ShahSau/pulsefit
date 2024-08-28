
import Logo from "../assets/Logo.png";
import { Link,Outlet } from "react-router-dom";


const Layout = ({ isTopOfPage }: {isTopOfPage: boolean}) => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <>
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >

        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} />
          </div>
          {/* RIGHT SIDE */}
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  to={"/exercise/"}
                >
                  Exercise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  )
}

export default Layout