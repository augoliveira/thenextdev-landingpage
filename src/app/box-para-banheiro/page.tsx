/* eslint-disable @typescript-eslint/no-unused-vars */
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Cta } from '../../components/Cta';
import { PageIntroduction } from '../../components/page-introduction';
import BoxProduto from '../../components/ui/BoxPoduto'
import { ImagesSliderDemo } from "../../components/ui/ImagesSliderDemo";
import SlideBox from './../../components/SlideBox/Slider';

export default function Page() {
  return (
    <>
    <PageIntroduction />
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <BoxProduto />
        <SlideBox/> 
        <Cta />
    </div>
    </>
  );
}
