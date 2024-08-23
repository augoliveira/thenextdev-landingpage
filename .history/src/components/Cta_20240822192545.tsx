import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <div class="flex items-center justify-center h-screen overflow-hidden">
    <video class="absolute z-0 w-auto min-w-full min-h-full max-w-none" autoplay muted loop>
        <source src="path-to-your-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="z-10 p-5 text-white bg-black bg-opacity-50 rounded">
        <!-- Centered content -->
        <h1 class="text-4xl font-bold">Welcome to Our Site</h1>
        <p class="mt-2 text-xl">Explore our world of innovation</p>
    </div>
</div>
  );
};