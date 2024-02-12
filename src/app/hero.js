import { ChevronRightIcon } from "@heroicons/react/20/solid";
import styles from "./page.module.css";

export default function Hero() {
  return (
    <div className="relative isolate overfnpm i @heroicons/reactlow-hidden bg-white">
      <div className="items-center mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <h1 className="text-[#111827] font-poppins text-custom font-medium leading-[75px] tracking-tighter">
            The <span className="gentlenudge">gentle nudge</span>
            <br /> you may need.
          </h1>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4 lg:w-[26em]">
            Revolutionise medication{" "}
            <span className="font-medium">routines</span> with Rita - stay
            organised, on time, and in control of{" "}
            <span className="font-medium">health journeys</span> for a
            <span className="font-medium"> happier, healthier life.</span>
          </p>
          <p className="text-black font-normal font-poppins text-base py-4">
            Sign up to get updates on Rita.
          </p>
          <div>
            <form className="flex gap-x-2 w-11/12">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                aria-describedby="email-description"
              />
              <button type="submit" className={styles.notify}>
                Notify me
              </button>
            </form>

            <p className="mt-2 text-sm text-gray-500" id="email-description">
              We care about the protection of your data. Read our{" "}
              <a className="mt-2 text-sm text-gray-900" href="/">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto block">
          <img src="/Cut out.png"></img>
        </div>
      </div>

      <h3 className="text-[#111827] font-poppins text-center text-custom text-5xl leading-[75px] tracking-tighter font-medium py-2">
        Meet Rita.
      </h3>
      <p className="mx-auto w-7/12 text-gray-500 font-poppins text-center text-xl leading-7 font-extralight">
        An at-home smart pill device, packed with personality and features to
        seamlessly integrate into your or a loved ones daily routine.
      </p>

      <div className="block lg:flex lg:flex-row lg:gap-14 mx-auto max-w-7xl px-6 py-24 sm:pb-32 lg:px-8">
        <div className="flex-1 grid content-center">
          <h3 className="text-[#111827] font-poppins text-3xl font-base leading-tight tracking-tighter">
            <img src="./track.svg" className="py-6"></img>
            <span className="gentlenudge">Track</span> yours or your family’s
            consumption at home or on the go.
          </h3>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4 lg:w-[30em]">
            Keeping track of the{" "}
            <span className="font-normal italic">“when did I have that”</span>{" "}
            or <span className="font-normal italic">“who’s had what”</span> can
            be time consuming and tiring. Designated users and carers within the
            ‘Rita App’ can have full health data of what and when medication has
            been ‘dropped’.
          </p>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center "
              aria-hidden="true"
            >
              <div className=" w-full border-t border-gray-300" />
            </div>
          </div>

          <p className="text-gray-500 font-sans text-base font-light leading-7 py-4">
            “The ability to have see if my family has taken her medication is
            pivotal for thier health, but also my piece of mind when I’m not
            around”
          </p>
          <div className="flex gap-4 items-center">
            <img src="/paullucas.png"></img>
            <p className="text-gray-700 font-sans text-base font-medium leading-7 py-4">
              Paul Lucas
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/Image1.png" className="rounded-[12px]"></img>
        </div>
      </div>

      <div className="block lg:flex lg:flex-row-reverse lg:gap-14 mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8 ">
        <div className="flex-1 grid content-center">
          <img src="./halos.svg" className="py-6"></img>
          <h3 className="text-[#111827] font-poppins text-3xl font-base leading-tight tracking-tighter">
            Refill at home or get<span className="gentlenudge"> Halos</span>{" "}
            delivered straight to your door.*
          </h3>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4 lg:w-[30em]">
            Keeping track of the Save time on reoccurring medications and
            prescriptions with our ‘Halo’ refill cartridges. Have pre-packaged
            ‘Halos’ delivered straight to your door, then simply load the
            cartridge into Rita and you’re ready to go!
          </p>
          <p className="text-gray-500 font-sans text-sm font-light leading-7 py-4 italic">
            *Halos coming soon, not available at launch.
          </p>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
          <p className="text-gray-500 font-sans text-base font-light leading-7 py-4">
            “c”
          </p>
          <div className="flex gap-4 items-center">
            <img src="/rosieluchford.png"></img>
            <p className="text-gray-700 font-sans text-base font-medium leading-7 py-4">
              Rosie Luchford
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/Image2.png" className="rounded-[12px]"></img>
        </div>
      </div>

      <div className="block lg:flex lg:flex-row lg:gap-14 mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8 ">
        <div className="flex-1 grid content-center">
          <img src="./focus.svg" className="py-6"></img>
          <h3 className="text-[#111827] font-poppins text-3xl font-base leading-tight tracking-tighter">
            <span className="gentlenudge">Focus</span> on the things that truly
            matter.
          </h3>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4 lg:w-[30em]">
            Carers, we think your time gold dust! It shouldn't be wasted on
            admin or spending hours opening and organising pill boxes every
            single week. Let us take care of that, and you can focus on things
            that truly matter, your loved one or patient.
          </p>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
          <p className="text-gray-500 font-sans text-base font-light leading-7 py-4">
            “Being able to spend time with my mum, and not have to always focus
            on her medication routines, will really help me connect with her”
          </p>
          <div className="flex gap-4 items-center">
            <img src="/helencritten.png"></img>
            <p className="text-gray-700 font-sans text-base font-medium leading-7 py-4">
              Helen Critten
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/Image3.png" className="rounded-[12px]"></img>
        </div>
      </div>

      <h3 className="text-[#111827] mx-auto text-center font-poppins text-4xl font-lg leading-loose tracking-tighter lg:pb-6">
        <span className="gentlenudge text-4xl">Reimagining</span> the whole
        system.
      </h3>
      <p className="mx-auto text-gray-500 font-poppins text-center text-xl leading-7 font-thin lg:w-1/2">
        We believe that if it ain’t broke, it still needs improving. Your health
        and well-being deserve the best, not just what’s always been done.
      </p>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-14 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-24">
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv relative rounded-lg">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-22px]"
          >
            <g filter="url(#filter0_dd_542_327)">
              <rect x="12" y="2" width="48" height="48" rx="6" fill="#111827" />
              <path
                d="M36 20V18M36 20C34.8954 20 34 20.8954 34 22C34 23.1046 34.8954 24 36 24M36 20C37.1046 20 38 20.8954 38 22C38 23.1046 37.1046 24 36 24M30 32C31.1046 32 32 31.1046 32 30C32 28.8954 31.1046 28 30 28M30 32C28.8954 32 28 31.1046 28 30C28 28.8954 28.8954 28 30 28M30 32V34M30 28V18M36 24V34M42 32C43.1046 32 44 31.1046 44 30C44 28.8954 43.1046 28 42 28M42 32C40.8954 32 40 31.1046 40 30C40 28.8954 40.8954 28 42 28M42 32V34M42 28V18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_542_327"
                x="0"
                y="0"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_542_327"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_542_327"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_542_327"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_542_327"
                  result="effect2_dropShadow_542_327"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_542_327"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 pt-10">
            Flexible Capacity
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Splitting the medication across three bays allows us to allocate
            capacity for each individual use case.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv relative rounded-lg">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-22px]"
          >
            <g filter="url(#filter0_dd_542_337)">
              <rect x="12" y="2" width="48" height="48" rx="6" fill="#111827" />
              <path
                d="M35.9999 25C35.9999 28.5172 34.9911 31.7988 33.2471 34.5712M29.8069 32.5304C29.8246 32.5005 29.8427 32.4709 29.8613 32.4413C31.2158 30.2881 31.9999 27.7418 31.9999 25C31.9999 22.7909 33.7908 21 35.9999 21C38.209 21 39.9999 22.7909 39.9999 25C39.9999 26.017 39.9307 27.0186 39.7966 28M37.6792 34.8436C38.2909 33.6226 38.7924 32.3369 39.1707 31M43.0097 32.132C43.6547 29.8657 44 27.4732 44 25C44 20.5817 40.4183 17 36 17C34.5429 17 33.1767 17.3896 32 18.0703M27 29.3641C27.6407 28.0454 28 26.5646 28 25C28 23.5429 28.3896 22.1767 29.0703 21"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_542_337"
                x="0"
                y="0"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_542_337"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_542_337"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_542_337"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_542_337"
                  result="effect2_dropShadow_542_337"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_542_337"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 pt-10">
            Security
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Security is our priority, an integrated fingerprint sensor to ensure
            the right user is getting their medication.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv relative rounded-lg">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-22px]"
          >
            <g filter="url(#filter0_dd_542_377)">
              <rect x="12" y="2" width="48" height="48" rx="6" fill="#111827" />
              <path
                d="M41 34H46V32C46 30.3431 44.6569 29 43 29C42.0444 29 41.1931 29.4468 40.6438 30.1429M41 34H31M41 34V32C41 31.3438 40.8736 30.717 40.6438 30.1429M31 34H26V32C26 30.3431 27.3431 29 29 29C29.9556 29 30.8069 29.4468 31.3562 30.1429M31 34V32C31 31.3438 31.1264 30.717 31.3562 30.1429M31.3562 30.1429C32.0935 28.301 33.8948 27 36 27C38.1052 27 39.9065 28.301 40.6438 30.1429M39 21C39 22.6569 37.6569 24 36 24C34.3431 24 33 22.6569 33 21C33 19.3431 34.3431 18 36 18C37.6569 18 39 19.3431 39 21ZM45 24C45 25.1046 44.1046 26 43 26C41.8954 26 41 25.1046 41 24C41 22.8954 41.8954 22 43 22C44.1046 22 45 22.8954 45 24ZM31 24C31 25.1046 30.1046 26 29 26C27.8954 26 27 25.1046 27 24C27 22.8954 27.8954 22 29 22C30.1046 22 31 22.8954 31 24Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_542_377"
                x="0"
                y="0"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_542_377"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_542_377"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_542_377"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_542_377"
                  result="effect2_dropShadow_542_377"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_542_377"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 pt-10">
            Multiple Users
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Flexible capacity and the integrated fingerprint, allows us dedicate
            partitions of the device for multiple users.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv relative rounded-lg">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-22px]"
          >
            <g filter="url(#filter0_dd_542_285)">
              <rect x="12" y="2" width="48" height="48" rx="6" fill="#111827" />
              <path
                d="M33 17V19M39 17V19M33 33V35M39 33V35M29 23H27M29 29H27M45 23H43M45 29H43M31 33H41C42.1046 33 43 32.1046 43 31V21C43 19.8954 42.1046 19 41 19H31C29.8954 19 29 19.8954 29 21V31C29 32.1046 29.8954 33 31 33ZM33 23H39V29H33V23Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_542_285"
                x="0"
                y="0"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_542_285"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_542_285"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_542_285"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_542_285"
                  result="effect2_dropShadow_542_285"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_542_285"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 pt-10">
            Smart Home Enabled
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Connecting Rita to your smart speakers and lights allows you to
            receive ambient notifications, anywhere in your home.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv relative rounded-lg">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-22px]"
          >
            <g filter="url(#filter0_dd_542_346)">
              <rect x="12" y="2" width="48" height="48" rx="6" fill="#111827" />
              <path
                d="M27.0549 25H29C30.1046 25 31 25.8954 31 27V28C31 29.1046 31.8954 30 33 30C34.1046 30 35 30.8954 35 32V34.9451M32 17.9355V19.5C32 20.8807 33.1193 22 34.5 22H35C36.1046 22 37 22.8954 37 24C37 25.1046 37.8954 26 39 26C40.1046 26 41 25.1046 41 24C41 22.8954 41.8954 22 43 22L44.0645 22M39 34.4879V32C39 30.8954 39.8954 30 41 30H44.0645M45 26C45 30.9706 40.9706 35 36 35C31.0294 35 27 30.9706 27 26C27 21.0294 31.0294 17 36 17C40.9706 17 45 21.0294 45 26Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_542_346"
                x="0"
                y="0"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_542_346"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_542_346"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_542_346"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_542_346"
                  result="effect2_dropShadow_542_346"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_542_346"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 pt-10">
            Sustainable
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Introducing the circular economy into the medication industry,
            reducing the amount of single-use plastic in health journeys.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv relative rounded-lg">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-22px]"
          >
            <g filter="url(#filter0_dd_542_317)">
              <rect x="12" y="2" width="48" height="48" rx="6" fill="#111827" />
              <path
                d="M39 23C39 21.8954 38.1046 21 37 21C35.8954 21 35 21.8954 35 23V28C35 29.1046 34.1046 30 33 30H39M33 26H37M45 26C45 30.9706 40.9706 35 36 35C31.0294 35 27 30.9706 27 26C27 21.0294 31.0294 17 36 17C40.9706 17 45 21.0294 45 26Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_542_317"
                x="0"
                y="0"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="2"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_542_317"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_542_317"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="3"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_dropShadow_542_317"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_542_317"
                  result="effect2_dropShadow_542_317"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_542_317"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 pt-10">
            Affordable
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Using simple and standardised parts allows us to lower our costs,
            passing these savings onto you.
          </p>
        </div>
      </div>

      <h3 className="text-[#111827] mx-auto text-center font-poppins text-4xl font-lg leading-loose tracking-tighter py-6">
        Supported by
      </h3>

      <div className="flex flex-row gap-32 justify-center flex-wrap lg:flex-nowrap">
        <img src="/PIA 1.png" className="object-contain"></img>
        <img
          src="/South-Bank-Innovation-logo 1.png"
          className="object-contain"
        ></img>
        <img src="/LSBU2020logo-2 1.png" className="object-contain"></img>
        <img src="/Asset+1@4x-8 1.png" className="object-cover w-[90px]"></img>
      </div>

      <div className="flex div-color gap-4 mx-auto max-w-7xl sm:p-14 lg:px-8 lg:my-24 items-center flex-col relative btmnewsletter rounded-xl lg:w-[66em]">
        <h3 className="text-white font-poppins text-4xl font-base leading-normal tracking-tighter">
          Get notified when we’re launching
        </h3>
        <p className="text-white font-sans text-lg font-light leading-7 py-4 lg:w-[32em] text-center">
          Interested to learn more, drop your email below and we’ll email you
          with important updates and release information!
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex gap-x-2 w-2/5"
        >
          <input type="hidden" name="contact" value="contact" />

          <input
            type="email"
            name="email"
            id="email"
            className="flex-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
            aria-describedby="email-description"
          />

          <button type="submit" className={styles.notifybtm}>
            Notify me
          </button>
        </form>
      </div>

      <div className="flex items-center flex-col lg:py-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="108"
          height="50"
          viewBox="0 0 108 50"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.9637 8.47471C23.9325 7.53027 23.4169 6.35406 23.4169 4.94608C23.4169 3.53809 23.9309 2.36346 24.9637 1.41744C25.9948 0.473007 27.2877 0 28.8455 0C30.4033 0 31.6946 0.473007 32.7273 1.41744C33.7569 2.36188 34.274 3.53809 34.274 4.94608C34.274 6.35406 33.7585 7.53027 32.7273 8.47471C31.6961 9.41915 30.4017 9.89215 28.8455 9.89215C27.2893 9.89215 25.9948 9.42072 24.9637 8.47471ZM20.9589 18.4409C18.5576 18.832 16.489 19.6944 14.7467 21.0362C12.9146 22.4442 11.5208 24.229 10.5638 26.3922L9.74864 20.5584L0.143448 21.9049L3.22272 43.9013L13.0092 43.8446L12.3912 39.4172C11.9024 35.9327 12.3281 33.3864 13.662 31.7671C14.999 30.1526 17.1764 29.1325 20.1942 28.7083L22.6286 28.3678L20.9605 18.4409H20.9589ZM40.8629 50L35.4139 17.856L26.0515 18.4173L31.4249 50H40.8629ZM45.303 24.5428L41.8122 24.9149L40.5587 17.8482L44.6613 17.4761L43.8966 9.05656L52.6614 8.26033L53.4261 16.6799L61.133 15.9798L62.3864 23.0465L54.0678 23.7466L45.303 24.5428ZM93.1224 20.2147L93.3337 15.7148V15.7117L101.305 16.0869L99.8202 47.6397L91.8485 47.2644L92.5911 31.488L92.5915 31.4793C92.5945 31.4052 92.5974 31.3338 92.5974 31.2594C92.6573 29.4147 92.3546 27.8159 91.6955 26.4505C91.0081 25.0299 90.0447 23.9168 88.796 23.1158C87.5488 22.3196 86.1929 21.8844 84.7218 21.8151C83.2539 21.7457 81.8822 22.0437 80.6067 22.7027C79.3248 23.3665 78.2716 24.3709 77.4344 25.7205C76.5924 27.0749 76.1304 28.6973 76.0406 30.5956C75.9507 32.494 76.2582 34.1716 76.9677 35.6347C77.6724 37.0932 78.6342 38.2347 79.864 39.053C81.0891 39.8713 82.4167 40.3144 83.8483 40.3837H83.8799L83.5566 47.2471C82.8708 47.307 82.1644 47.3243 81.4281 47.2896C78.7903 47.1666 76.4221 46.3673 74.3204 44.8978C72.2171 43.4299 70.5947 41.4228 69.4516 38.8764C68.3037 36.3285 67.8102 33.4463 67.9616 30.2172C68.1114 27.026 68.8729 24.229 70.2541 21.8198C71.6306 19.4106 73.4327 17.5927 75.6622 16.3692C77.8916 15.1393 80.3449 14.5907 83.019 14.7168C85.3572 14.8272 87.3754 15.3979 89.0845 16.4275C90.7889 17.4602 92.137 18.72 93.1224 20.2147ZM57.2622 35.3415C57.3647 36.4736 57.8125 39.4504 58.2382 40.07C58.8673 40.9861 60.1286 41.2683 61.4389 41.15L65.4263 40.7874L66.0759 47.944L60.6773 48.4344C53.4387 49.0918 49.2369 43.0216 48.6062 36.0652L57.2622 35.3415ZM107.549 44.6613C107.344 44.2924 107.063 44.0038 106.706 43.7941C106.349 43.5844 105.941 43.4804 105.484 43.4804C105.026 43.4804 104.616 43.586 104.255 43.7941C103.893 44.0022 103.611 44.2924 103.406 44.6613C103.201 45.0302 103.098 45.4449 103.098 45.9022C103.098 46.3594 103.201 46.7709 103.406 47.1367C103.611 47.5025 103.894 47.7895 104.255 47.9976C104.616 48.2073 105.026 48.3113 105.484 48.3113C105.941 48.3113 106.348 48.2073 106.706 47.9976C107.063 47.7895 107.344 47.5025 107.549 47.1367C107.754 46.7709 107.857 46.3594 107.857 45.9022C107.857 45.4449 107.754 45.0302 107.549 44.6613ZM107.423 45.9022C107.423 46.4887 107.245 46.9711 106.887 47.348C106.529 47.7248 106.07 47.914 105.484 47.914C104.897 47.914 104.426 47.7248 104.068 47.348C103.71 46.9711 103.532 46.4887 103.532 45.9022C103.532 45.3156 103.71 44.8332 104.068 44.4563C104.426 44.0795 104.905 43.8903 105.484 43.8903C106.062 43.8903 106.529 44.0795 106.887 44.4563C107.245 44.8347 107.423 45.3156 107.423 45.9022ZM105.894 46.1308C106.094 46.0914 106.251 46.0046 106.363 45.8722H106.362C106.474 45.7398 106.531 45.5726 106.531 45.3724C106.531 45.1311 106.452 44.9404 106.296 44.8C106.14 44.6597 105.928 44.5888 105.663 44.5888H104.542V47.1793H105.061V46.156H105.339L106.001 47.1793L106.616 47.1667L105.894 46.1308ZM105.629 45.7208H105.063V45.0586H105.629C105.742 45.0586 105.834 45.0854 105.906 45.1375C105.979 45.1911 106.015 45.2731 106.015 45.385C106.015 45.4969 105.979 45.5805 105.906 45.6373C105.834 45.6925 105.741 45.7208 105.629 45.7208Z"
            fill="#9CA3AF"
          />
        </svg>
        <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
          Building the gentle <br />
          nudge you may need.
        </p>
      </div>

      <hr className="border-gray-400 m-8"></hr>
      <p className="text-gray-400 text-center font-sans text-lg font-light leading-7 py-4">
        © 2023 Love Rita Limited. All rights reserved.
      </p>
    </div>
  );
}
