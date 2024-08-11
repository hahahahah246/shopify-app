

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type ImageProps = {
    url?: string;
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    images: ImageProps[];
  };
  
  export type Gallery5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Gallery5 = (props: Gallery5Props) => {
    const { heading, description, images } = {
      ...Gallery5Defaults,
      ...props,
    } as Props;
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <header className="flex justify-between">
          <h2 className="text-2xl font-semibold">Hello HaMi,</h2>
          <Input type="search" placeholder="Search" className="w-64" />
        </header>
       
        <div className="container">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-5xl lg:text-5xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-3">
            {images.map((image, index) => (
              <a
                key={index}
                href={image.url}
                className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
              >
                <img src={image.src} alt={image.alt} className="size-full object-cover" />
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export const Gallery5Defaults: Gallery5Props = {
    heading: "Image library",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [
      {
        url: "#",
        src: "https://images.ctfassets.net/5hig0ukq7ib0/3ZA4uukTXzxQIcXeir1msx/5b4d098599e07d337d50c91f5dcc55da/HomepageTile_Desktop_2023_T-Shirts.png?fm=jpg&q=85&w=1080&fl=progressive",
        alt: "Placeholder image 1",
      },
      {
        url: "#",
        src: "https://images.ctfassets.net/5hig0ukq7ib0/zMY8cFK5Xz2QpJTbmKdm2/61ecd8462c3c892bbf525acee0b39477/23Q418_GM_UnholidizetheSite_MktgTeam_Homepage_Desktop_Stickers.png?fm=jpg&q=85&w=1080&fl=progressive",
        alt: "Placeholder image 2",
      },
      {
        url: "#",
        src: "https://images.ctfassets.net/5hig0ukq7ib0/29urOO3xJSauNr8BXIt3jF/0836a12570a436dd07ed4957fb80d65b/23Q418_GM_UnholidizetheSite_MktgTeam_Homepage_Desktop_Posters.png?fm=jpg&q=85&w=1080&fl=progressive",
        alt: "Placeholder image 3",
      },
     
    ],
  };
  
  Gallery5.displayName = "Gallery5";
  export default Gallery5;