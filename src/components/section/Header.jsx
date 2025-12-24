import { useEffect, useState } from "react"
import TopBar from "../TopBar"
import NavBar from "../NavBar"
const Header = () => {
  const [hideTop, setHideTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHideTop(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* TopBar */}
      <div
        className={`
          transition-all duration-300 z-30 relative
          ${
            hideTop
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        <TopBar />
      </div>

      {/* NavBar */}
      <NavBar hideTop={hideTop} />
    </>
  )
}

export default Header
