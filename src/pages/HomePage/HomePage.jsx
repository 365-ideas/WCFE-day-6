"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import Image from "next/image";
import { Logo } from "@/components/Logo/Logo";
import { motion, useAnimation } from "framer-motion";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";
import { anim, BlurPresence, LoaderAnim, presenceAnim, TitlePresence } from "@/helpers/anim";
import { ease } from "@/helpers/ease";
import classNames from "classnames";

export default function HomePage() {
  const { loaderFinished, setLoaderFinished } = useContext(LoaderContext);

  const imageAnim = useAnimation();
  const heroAnim = useAnimation();

  const [isLogoChange, setIsLogoChange] = useState(false);

  useEffect(() => {
    const loaderAnim = async () => {
      await imageAnim.set({
        scale: 1.1,
        // y: "100%",
        // clipPath: "inset(100% 30% 0% 30%)",
        filter: "blur(1vw) brightness(0.7)",
        opacity: 0,
      });

      await heroAnim.set({
        y: "100%",
        opacity: 1,
        // scale: 0.9,
      });

      await imageAnim.start({
        scale: 1,
        // y: "70%",
        filter: "blur(0vw)",
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: ease.inOutExpo,
        },
      });

      await setIsLogoChange(true);

      heroAnim.start({
        scale: 1,
        y: "0%",
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: ease.inOutExpo,
          onUpdate: (progress) => {
            if (progress < "40%" && !loaderFinished) {
              setLoaderFinished(true);
            }
          },
        },
      });
    };

    loaderAnim();
  }, []);

  return (
    <main className="home">
      {!isLogoChange ? (
        <Logo
          color="white"
          className="home__logo home__logo--loader"
          layoutId="loader-logo"
        />
      ) : (
        <Logo
          color="white"
          className="home__logo"
          layoutId="loader-logo"
          transition={{
            duration: 1.5,
            ease: ease.inOutExpo,
          }}
        />
      )}
      <motion.div animate={imageAnim} className="image-wrapper">
        <Image src="/images/hero.jpg" alt="home" className="image" fill />
      </motion.div>
      <motion.div
        // {...presenceAnim(LoaderAnim.hero, loaderFinished)}
        animate={heroAnim}
        className="content-wrapper"
      >
        <p className="side-text side-text--left">
          COVID‑19 transmits when people breathe air contaminated by
        </p>
        <p className="side-text side-text--right">
          droplets and small airborne particles containing the virus.
        </p>
        <div className="center">
          <div className="title">
            <h1 className="title__left">
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)} custom={{ id: 0, duration: 1 }}>
                Comme
              </motion.p>
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)} custom={{ id: 1, duration: 1 }}>
                rcial
              </motion.p>
            </h1>
            <div className="title__right">
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)} custom={{ id: 1.5, duration: 1 }} className="luxurios-font">TimesNew</motion.p>

              <svg
                width="866"
                height="303"
                className={classNames("title__right-svg", {
                  "title__right-svg--animate": loaderFinished,
                })}
                viewBox="0 0 866 303"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_950_83)">
                  <path
                    d="M843.941 127.448C844.417 131.702 842.169 136.139 837.143 140.706C832.129 145.263 824.452 149.851 814.348 154.397C794.147 163.487 764.396 172.347 727.271 180.486C653.032 196.763 549.428 210.133 434.059 216.733C318.69 223.333 213.431 221.911 136.519 214.281C98.0571 210.465 66.7155 205.1 44.751 198.422C33.7648 195.082 25.1662 191.426 19.2026 187.497C13.2255 183.56 10.0202 179.435 9.54443 175.18C9.06862 170.925 11.3163 166.488 16.3424 161.921C21.357 157.365 29.0338 152.777 39.138 148.231C59.3391 139.141 89.09 130.281 126.215 122.142C200.454 105.865 304.058 92.4944 419.427 85.8947C534.796 79.2949 640.054 80.7172 716.967 88.3472C755.429 92.1628 786.77 97.5277 808.735 104.205C819.721 107.545 828.32 111.202 834.283 115.13C840.26 119.068 843.466 123.193 843.941 127.448Z"
                    stroke="#2D2D2D"
                    strokeWidth="1.35542"
                  />
                  <path
                    opacity="0.7"
                    d="M838.873 95.9687C839.761 100.189 837.958 104.794 833.411 109.736C828.874 114.667 821.695 119.83 812.101 125.136C792.919 135.743 764.228 146.843 728.141 157.779C655.976 179.648 554.356 200.831 440.389 216.137C326.422 231.443 221.717 237.97 144.566 236.153C105.986 235.245 74.328 232.251 51.8578 227.237C40.6188 224.73 31.7209 221.726 25.4141 218.251C19.094 214.768 15.5046 210.888 14.6162 206.667C13.7277 202.447 15.5309 197.842 20.0777 192.9C24.6149 187.969 31.7936 182.806 41.3879 177.5C60.5697 166.893 89.2609 155.794 125.348 144.857C197.512 122.988 299.132 101.805 413.1 86.4991C527.067 71.1931 631.772 64.6664 708.922 66.4826C747.503 67.3909 779.161 70.385 801.631 75.3986C812.87 77.9063 821.768 80.9103 828.075 84.3853C834.395 87.8676 837.984 91.7483 838.873 95.9687Z"
                    stroke="#2D2D2D"
                    strokeWidth="1.35542"
                  />
                  <path
                    opacity="0.3"
                    d="M830.65 64.514C831.951 68.6694 830.611 73.4108 826.584 78.6942C822.564 83.9676 815.943 89.6744 806.937 95.7085C788.931 107.773 761.528 121.055 726.761 134.74C657.238 162.105 558.389 191.037 446.696 215.04C335.002 239.044 231.642 253.567 154.83 257.649C116.419 259.69 84.6787 259.118 61.8655 255.826C50.455 254.18 41.3212 251.859 34.7144 248.869C28.0951 245.874 24.1427 242.27 22.8418 238.114C21.541 233.959 22.8809 229.218 26.9085 223.934C30.9285 218.661 37.5492 212.954 46.5553 206.92C64.5613 194.856 91.9646 181.574 126.731 167.889C196.254 140.523 295.103 111.591 406.797 87.588C518.49 63.5847 621.85 49.061 698.662 44.9792C737.073 42.938 768.814 43.51 791.627 46.8018C803.037 48.4483 812.171 50.7694 818.778 53.7591C825.397 56.7545 829.35 60.3586 830.65 64.514Z"
                    stroke="#2D2D2D"
                    strokeWidth="1.35542"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_950_83">
                    <rect
                      width="865.09"
                      height="302.631"
                      fill="white"
                      transform="translate(0.160156 -0.000976562)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="bottom-text">
            <motion.p {...presenceAnim(BlurPresence, loaderFinished)} custom={{ id: 0, duration: 1 }}>
              The origins of <span className="bold">typography</span> date back
            </motion.p>
            <motion.p {...presenceAnim(BlurPresence, loaderFinished)} custom={{ id: 0, duration: 1 }}>
              appealing, legible
              <span className="bold"> and easy</span>
            </motion.p>
            <motion.p {...presenceAnim(BlurPresence, loaderFinished)} custom={{ id: 0, duration: 1 }}>
              Typography is the
              <span className="bold"> art arranging</span>
            </motion.p>
            <motion.p {...presenceAnim(BlurPresence, loaderFinished)} custom={{ id: 0, duration: 1 }} className="bold">type</motion.p>
            <motion.p {...presenceAnim(BlurPresence, loaderFinished)} custom={{ id: 0, duration: 1 }}>
              They framed their <span className="bold">business</span>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
