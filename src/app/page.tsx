import { Suspense } from "react";
import Loading from "./loading";

import { getActors } from "@/lib/loader";
import { TSwiper } from "../components/SliderPrevia/Swiper";

import SliderCars from "@/components/sections/sliderCars";
import Marketing from "@/components/ui/Marketing";
import Projects from "@/components/ui/Projects";


import SecondFeatureSection from "../components/sections/SecondFeatureSection";
import AboutSection from "./_components/about-section";
import Archive from "./_components/Archive";
import IntroSection from "./_components/intro-section";
import InvestmentSection from "./_components/investment-section";
import Service from "./../components/service";
import FAQ from "./../components/ui/faq";
import PickServices from "./../components/ui/services/PickServices";
import { HomePageData } from '@/types/page-info'
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}


export default async function Home() {
  const actors = await getActors();

  // exclamation mark in bullletActiveClass is to override styles during hover interaction. if prefix className with ! it gets the highest priority
  const actorCarouselConfig: Omit<TSwiper, "children"> = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    loop: true,
    slidesPerView: 1,
    navigation: {
      prevEl: "button1",
      nextEl: "button2",
    },
    pagination: {
      el: "pagination",
      type: "bullets",
      bulletClass:
        "py-0.5 cursor-pointer bg-gray-500 flex-1 shrink w-full h-0.5 transition hover:bg-teal-400 transition ease-in-out shadow-lg",
      bulletActiveClass: "!bg-amber-300 active",
      clickable: true,
    },
  };

  return (
    <>
      <SliderCars />
      <Marketing homeInfo={{
          introduction: {
            raw: []
          },
          technologies: [],
          profilePicture: {
            url: ""
          },
          socials: [],
          knownTechs: [],
          highlightProjects: []
        }} />
      <PickServices />
      <Projects />
      <IntroSection />
      <AboutSection />
      <div className="bg-slate-300">
        <Service />
      </div>
      <InvestmentSection />
      <Archive />
      <FAQ />
    </>
  );
}
