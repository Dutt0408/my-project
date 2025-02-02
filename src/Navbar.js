import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

import logoWithoutBG from './images/logoWithoutBG.jpg';

const navigation = [
  { name: "Home", href: "/Home" },
  { name: "Rules", href: "/Soon" },
  { name: "Teams", href: "/Teams" },
  { name: "Schedule", href: "/Schedule" },
  { name: "PointTable", href: "/PointTable" },
  { name: "Sponsors", href: "/Sponsors" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="sticky top-0 bg-white z-50 border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Hamburger Menu Button (100% Left) */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo (100% Right for Mobile) */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <img
                    className="h-14 w-auto sm:h-16" /* Increased size */
                    src={logoWithoutBG}
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 mt-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          {/* Sliding Panel for Mobile */}
          <Disclosure.Panel
            className={`sm:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ width: "70%" }}
          >
            {/* Close Button */}
            <div className="flex justify-start px-4 pt-4">
              <Disclosure.Button className="rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-black">
                <XMarkIcon className="h-8 w-8 text-black" aria-hidden="true" /> {/* Increased size */}
                <span className="sr-only">Close menu</span>
              </Disclosure.Button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 px-4 pb-6 pt-8">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "bg-blue-900 text-white"
                      : "text-black hover:bg-gray-200 hover:text-black",
                    "block rounded-md px-3 py-2 text-lg font-normal"
                  )}
                  style={{
                    animation: open
                      ? `slideIn 0.3s ease-out ${index * 0.1}s forwards`
                      : "none",
                    opacity: 0,
                  }}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

          {/* CSS Animation */}
          <style>
            {`
              @keyframes slideIn {
                from {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                to {
                  transform: translateX(0);
                  opacity: 1;
                }
              }
            `}
          </style>
        </>
      )}
    </Disclosure>
  );
}
