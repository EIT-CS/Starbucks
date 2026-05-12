
const cards = [
  {
    path: "/",
    Name: "Home"
  },
  {
    path: "/store",
    Name: "Store"
  },
  {
    path: "/",
    Name: "About Us"
  },
]
export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-base-100 py-6 px-5">
        <div className="navbar-start">
          <a href="/" className=" text-xl flex gap-10 items-center">
            {/* <img src="/logo.svg" alt=""> */}
            <p className="font-extrabold text-xl">
              Starbucks
            </p>
          </a>
        </div>
        <div className="navbar-end flex gap-8">
          {cards.map((card, index) => (
            <a href={card.path} key={index}>
              <p>{card.Name}</p>
            </a>
          ))}

          <a href="#" className="btn btn-ghost btn-sm">Sign In</a>
          <a href="#" className="btn btn-primary btn-sm">Sign Up</a>
        </div>
      </nav>
    </>
  )
}
