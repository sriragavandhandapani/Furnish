
"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const banners = [
  {
    title: "Timeless Designs, Modern Living",
    description: "Discover our curated collection of furniture that blends classic craftsmanship with contemporary style.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzb2ZhJTIwaW4lMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc1MjkzOTM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "sofa living room",
  },
  {
    title: "Create Your Perfect Space",
    description: "From cozy bedrooms to elegant dining areas, find everything you need to build your dream home.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwc2V0fGVufDB8fHx8MTc1MjkzOTM3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "dining room",
  },
  {
    title: "Quality That Lasts a Lifetime",
    description: "We believe in furniture that's not only beautiful but also built to last. Explore pieces crafted with the finest materials.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsYW1wJTIwb24lMjBzaWRlJTIwdGFibGV8ZW58MHx8fHwxNzUyOTM5Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "bedroom furniture",
  },
];

const AUTOPLAY_DELAY = 5000;

export function Banner() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [progress, setProgress] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    };

    const onAutoplay = () => {
        if (plugin.current && typeof plugin.current.progress === 'function') {
            const newProgress = Math.max(0, plugin.current.progress());
            setProgress(newProgress * 100);
        }
    };
 
    api.on("select", onSelect);
    api.on("autoplay", onAutoplay)

    const timer = setInterval(() => {
        if (plugin.current && typeof plugin.current.progress === 'function' && api.isPlaying()) {
            const newProgress = Math.max(0, plugin.current.progress());
            setProgress(newProgress * 100);
        }
    }, 50)
    
    return () => {
      api.off("select", onSelect);
      api.off("autoplay", onAutoplay);
      clearInterval(timer)
    }
  }, [api])

  const onDotClick = React.useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])

  return (
    <div className="my-12">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="relative rounded-lg overflow-hidden shadow-xl h-96 md:h-[500px]">
                  <div className="absolute inset-0">
                      <Image
                      src={banner.image}
                      alt={banner.title}
                      fill
                      className="object-cover"
                      data-ai-hint={banner.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="relative h-full flex flex-col justify-end pb-16">
                      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                          <div className={cn(
                              "max-w-2xl text-white transition-opacity duration-1000",
                              current === index ? "opacity-100" : "opacity-0"
                          )}>
                          <h2 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight text-white">
                              {banner.title}
                          </h2>
                          <p className="mt-4 text-lg text-gray-200">
                              {banner.description}
                          </p>
                          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                              <Link href="#products">
                              Explore Collection <ArrowRight className="ml-2" />
                              </Link>
                          </Button>
                          </div>
                      </div>
                  </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-sm rounded-full p-1 z-10">
            <div className="flex justify-center items-center gap-2">
                {banners.map((_, index) => (
                <button
                    key={index}
                    onClick={() => onDotClick(index)}
                    className="relative flex items-center justify-center h-10 w-10 rounded-full transition-all text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={`Go to slide ${index + 1}`}
                >
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                        <circle
                            className="text-white/20"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="transparent"
                            r="16"
                            cx="18"
                            cy="18"
                        />
                         {current === index && (
                            <circle
                                className="text-accent"
                                strokeWidth="2"
                                strokeDasharray="100"
                                strokeDashoffset={100 - progress}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="16"
                                cx="18"
                                cy="18"
                                style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                            />
                         )}
                    </svg>
                    <span className={cn(
                        "z-10 text-white transition-colors",
                        current === index ? "font-bold" : ""
                    )}>
                        {index + 1}
                    </span>
                </button>
                ))}
            </div>
        </div>
      </Carousel>
    </div>
  )
}
