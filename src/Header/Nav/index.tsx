'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <div aria-label="Global" className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navItems.map((menu) => {
          return (
            <li className="hidden md:relative md:block group" key={menu.id}>
              <details name="nav-group">
                <summary>{menu.title}</summary>
                <ul className="bg-base-100 rounded-t-none p-2" role="menu">
                  <li>
                    {menu.links.map((subItem) => {
                      return (
                        <CMSLink
                          key={subItem.id}
                          {...subItem.link}
                          appearance="link"
                          className="block rounded-lg px-4 py-2 text-sm"
                        />
                      )
                    })}
                  </li>
                </ul>
              </details>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
