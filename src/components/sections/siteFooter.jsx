import { Button } from "@ui";

function SiteFooter() {
  return (
    <div className="lg:flex justify-center items-center gap-6 py-10 my-6 px-6">
      
      <div className="flex justify-center lg:justify-start">
        <img src="/pana.svg" alt="Loading..." className="max-w-[440px] w-full h-auto" />
      </div>

      <div className="flex justify-center items-center">
      <div className="lg:text-left text-center lg:max-w-xl max-w-md w-full mt-6 lg:mt-0">
        <h1 className="font-semibold text-herogray lg:text-4xl text-2xl mb-6 leading-snug">
          How to design your site footer like we did
        </h1>
        <p className="text-para text-sm leading-relaxed break-words">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
          molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
          libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
          porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna
          tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent
          felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
          ipsum id gravida.
        </p>
        <Button
          value="Learn More"
          classes="bg-grass text-white lg:px-6 px-4 py-3 mt-5 rounded"
        />
      </div>
      </div>
    </div>
  );
}

export default SiteFooter;
