'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <div className="grow flex justify-center items-center">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((menu, i) => {
            return (
              <NavigationMenuItem key={menu.id}>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {menu.links.map((subItem) => {
                    return (
                      <NavigationMenuLink
                        asChild
                        key={subItem.id}
                        className={navigationMenuTriggerStyle()}
                      >
                        <CMSLink key={i} {...subItem.link} appearance="link" />
                      </NavigationMenuLink>
                    )
                  })}
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
