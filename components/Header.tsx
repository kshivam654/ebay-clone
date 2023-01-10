import Link from "next/link";
import React from "react";
import {
  BellIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function Header({}: Props) {
  return (
    <div className="max-w-6xl mx-auto p-2">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="https://github.com/kshivam654" className="connectWalletBtn">Shivam's Profile</Link>
          <p className="headerLink">Daily Deals</p>
          <p className="headerLink">Help & Contact</p>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <p className="headerLink">Ship to</p>
          <p className="headerLink">Sell</p>
          <p className="headerLink">Watchlist</p>

          <Link href="/addItem" className="flex items-center hover:link">Add to Inventory</Link>
          <ChevronRightIcon className="h-4"/>
          <BellIcon className="h-6 w-6" />
          <ShoppingCartIcon className="h-6 w-6"/>
        </div>
      </nav>
    </div>
  );
}

export default Header;
