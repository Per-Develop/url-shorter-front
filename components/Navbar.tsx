import React from "react";
import Link from "next/link";

type Props = {
  title?: string
}

const Navbar = ({ title = "Url Shorter" }: Props) => (
  <div className="flex flex-row">
    <div className="flex w-46 h-16 px-16 bg-gray-800 text-orange-500 items-center">
      <Link href="/">
        <a>{title}</a>
      </Link>
    </div>
    <div className="flex-auto w-64 bg-gray-800 text-white text-center">
      <nav>
        <ul className="flex px-16 my-4 py-1">
          <li className="flex-none px-4">
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
          </li>
          <li className="flex-none px-4">
            <Link href="/urls">
              <a>Urls List</a>
            </Link>{' '}
          </li>
          <li className="flex-none px-4">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>

)

export default Navbar