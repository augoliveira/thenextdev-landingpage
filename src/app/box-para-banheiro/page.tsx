/* eslint-disable @typescript-eslint/no-unused-vars */

import { Cta } from '../../components/Cta';
import { PageIntroduction } from '../../components/page-introduction';
import BoxProduto from '../../components/ui/BoxPoduto'
import { ImagesSliderDemo } from "../../components/ui/ImagesSliderDemo";
import SlideBox from './../../components/SlideBox/Slider';

export default function Page() {
  return (
    <div className="w-full h-full font-bodyFont bg-bodyColor text-textLight overflow-x-hidden">
        <PageIntroduction />
        <BoxProduto />
        <main className="bg-gradient-to-r from-[#c8bdba] to-[#a49d9b] w-full min-h-screen mx-auto grid place-items-center">
          <SlideBox/>
        </main>
      <Cta />
    </div>
  );
}
