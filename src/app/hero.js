import { ChevronRightIcon } from "@heroicons/react/20/solid";
import styles from "./page.module.css";

export default function Hero() {
  return (
    <div className="relative isolate overfnpm i @heroicons/reactlow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="text-[#111827] font-poppins text-custom font-medium leading-[75px] tracking-tighter">
            The <span className="gentlenudge">gentle nudge</span>
            <br /> you may need.
          </h1>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
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
            <div className="flex gap-x-2 w-11/12">
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
            </div>

            <p className="mt-2 text-sm text-gray-500" id="email-description">
              We care about the protection of your data. Read our Privacy
              Policy.
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

      <div className="block lg:flex lg:flex-row lg:gap-14 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-24">
        <div className="flex-1 grid content-center">
          <h3 className="text-[#111827] font-poppins text-4xl font-base leading-normal tracking-tighter">
            <img src="./track.svg" className="py-6"></img>
            <span className="gentlenudge">Track</span> yours or your family’s
            consumption at home or on the go.
          </h3>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
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
            <img src="/Avatar.png"></img>
            <p className="text-gray-700 font-sans text-base font-medium leading-7 py-4">
              Paul Lucas
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/meetrita1.png"></img>
        </div>
      </div>

      <div className="block lg:flex lg:flex-row-reverse lg:gap-14 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-24">
        <div className="flex-1 grid content-center">
          <img src="./halos.svg" className="py-6"></img>
          <h3 className="text-[#111827] font-poppins text-4xl font-base leading-normal tracking-tighter">
            Refill at home or get<span className="gentlenudge"> Halos</span>{" "}
            delivered straight to your door.*
          </h3>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Keeping track of the Save time on reoccurring medications and
            prescriptions with our ‘Halo’ refill cartridges. Have pre-packaged
            ‘Halos’ delivered straight to your door, then simply load the
            cartridge into Rita and you’re ready to go!
          </p>
          <p className="text-gray-500 font-sans text-sm font-light leading-7 py-4">
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
            <img src="/Avatar.png"></img>
            <p className="text-gray-700 font-sans text-base font-medium leading-7 py-4">
              Rosie Luchford
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/Media.png"></img>
        </div>
      </div>

      <div className="block lg:flex lg:flex-row lg:gap-14 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-24">
        <div className="flex-1 grid content-center">
          <img src="./focus.svg" className="py-6"></img>
          <h3 className="text-[#111827] font-poppins text-4xl font-base leading-normal tracking-tighter">
            <span className="gentlenudge">Focus</span> on the things that truly
            matter.
          </h3>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
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
            <img src="/Avatar2.png"></img>
            <p className="text-gray-700 font-sans text-base font-medium leading-7 py-4">
              Helen Critten
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/Image.png"></img>
        </div>
      </div>

      <h3 className="text-[#111827] mx-auto text-center font-poppins text-4xl font-lg leading-loose tracking-tighter">
        <span className="gentlenudge text-4xl">Reimagining</span> the whole
        system.
      </h3>
      <p className="mx-auto w-7/12 text-gray-500 font-poppins text-center text-base leading-7 font-extralight">
        We believe that if it ain’t broke, it still needs improving. Your health
        and well-being deserve the best, not just what’s always been done.
      </p>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-14 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-24">
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative lg:bottom-10"
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

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 py-4">
            Flexible Capacity
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Splitting the medication across three bays allows us to allocate
            capacity for each individual use case.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative lg:bottom-10"
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

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 py-4">
            Security
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Security is our priority, an integrated fingerprint sensor to ensure
            the right user is getting their medication.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative lg:bottom-10"
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

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 py-4">
            Multiple Users
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Flexible capacity and the integrated fingerprint, allows us dedicate
            partitions of the device for multiple users.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative lg:bottom-10"
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

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 py-4">
            Smart Home Enabled
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Connecting Rita to your smart speakers and lights allows you to
            receive ambient notifications, anywhere in your home.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative lg:bottom-10"
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

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 py-4">
            Sustainable
          </h4>
          <p className="text-gray-500 font-sans text-lg font-light leading-7 py-4">
            Introducing the circular economy into the medication industry,
            reducing the amount of single-use plastic in health journeys.
          </p>
        </div>
        <div className="bg-gray-50 flex flex-col p-4 justify-center items-center mydiv">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative lg:bottom-10"
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

          <h4 className="text-[#111827] font-sans text-xl font-medium leading-7 py-4">
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

      <div className="flex flex-row gap-32 justify-center">
        <img src="/PIA 1.png" className="object-contain"></img>
        <img
          src="/South-Bank-Innovation-logo 1.png"
          className="object-contain"
        ></img>
        <img src="/LSBU2020logo-2 1.png" className="object-contain"></img>
        <img src="/Asset+1@4x-8 1.png" className="object-cover w-[90px]"></img>
      </div>
    </div>
  );
}
