"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavbarStyleViewer = () => {
  const navbarStyle = useQuery(api.queries.getComponentStyle, { 
    componentName: "navbar" 
  });

  const navbarLogoStyle = useQuery(api.queries.getComponentStyle, { 
    componentName: "navbar.logo" 
  });

  const navbarParentLinksStyle = useQuery(api.queries.getComponentStyle, { 
    componentName: "navbar.parent.link" 
  });

  const navbarChildrenLinksStyle = useQuery(api.queries.getComponentStyle, { 
    componentName: "navbar.children.link" 
  });

  if (!navbarStyle) {
    return <div className="text-muted-foreground">Loading navbar styles...</div>;
  }

  if (!navbarLogoStyle) {
    return <div className="text-muted-foreground">Loading navbar styles...</div>;
  }

  if (!navbarParentLinksStyle) {
    return <div className="text-muted-foreground">Loading navbarlinks styles...</div>;
  }

  if (!navbarChildrenLinksStyle) {
    return <div className="text-muted-foreground">Loading navbarlinks styles...</div>;
  }

  return (
      <div className={cn("text-base",navbarStyle.tailwindClasses)}>
        <div className="w-full mx-auto px-4">
          {/* Example navbar content */}
          <div className="flex items-center justify-between h-16">
          <Link href="https://gjclibrary.com/" className="relative size-14">
            <img
              src="/images/library-logo.png"
              style={{ objectFit: 'cover', width: '20vw', height: 'auto' }}
              alt="Logo"
              className={cn("object-cover",navbarLogoStyle.tailwindClasses)}
            />
          </Link>
            <nav>
              <ul className={cn("flex space-x-4",navbarParentLinksStyle.tailwindClasses)}>
                <li className={cn("text-base",navbarChildrenLinksStyle.tailwindClasses)}>Home</li>
                <li className={cn("text-base",navbarChildrenLinksStyle.tailwindClasses)}>About</li>
                <li className={cn("text-base",navbarChildrenLinksStyle.tailwindClasses)}>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
  );
};