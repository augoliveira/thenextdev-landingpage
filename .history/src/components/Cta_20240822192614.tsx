import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <div class="relative bg-cover bg-center h-screen">
    <!-- Video background -->
    <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted>
        <source src="path-to-your-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <!-- Card overlay -->
    <div class="absolute inset-0 flex justify-center items-center">
        <div class="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md">
            <h2 class="text-2xl font-bold mb-4">Discover Amazing Places</h2>
            <p class="mb-4">Join us on a journey to explore the most breathtaking landscapes and cultures around the
                world.
            </p>
            <a href="#" class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</a>
        </div>
    </div>
</div>
  );
};