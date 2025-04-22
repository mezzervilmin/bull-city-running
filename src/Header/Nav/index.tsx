'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <div className="flex items-center gap-8 text-sm">
          {navItems.map((menu) => {
            return (
              <div className="hidden md:relative md:block group" key={menu.id}>
                <div className="p-4">{menu.title}</div>
                <div
                  className="absolute invisible group-hover:visible mt-1.5 z-10 w-48 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
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
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
