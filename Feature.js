
// import PerformanceImage from "./shosefull.png";
// import DesignImage from "../dropshipping.png";
// import IntelligenceImage from "../pngtree.png";
// import Vectorsss from "./Vectorsss.png";
// import React, { useState } from "react";

// const FEATURES = [
//   {
//     id: "performance",
//     label: "Performance",
//     icon: Vectorsss,
//     image: PerformanceImage,
//     description:
//       "Built with next-generation architecture, [Product Name] delivers unmatched speed and responsiveness — whether you're working, training, or creating.",
//     stat: "Upto 2x faster Processing",
//     inactiveWidth: "370px",
//   },
//   {
//     id: "design",
//     label: "Design",
//     icon: Vectorsss,
//     image: DesignImage,
//     description:
//       "Crafted with precision and purpose, [Product Name] blends aesthetics with intuitive usability for a seamless experience.",
//     stat: "Award-winning UI",
//     inactiveWidth: "276px",
//   },
//   {
//     id: "intelligence",
//     label: "Intelligence",
//     icon: Vectorsss,
//     image: IntelligenceImage,
//     description:
//       "Powered by smart algorithms, [Product Name] adapts and learns to deliver smarter, faster outcomes every time.",
//     stat: "Advance thermal Stability",
//     inactiveWidth: "395px",
//   },
// ];

// export default function FeaturesPage() {
//   const [active, setActive] = useState("performance");
//   const activeFeature = FEATURES.find((f) => f.id === active);
//   const isPerformance = active === "performance";

//   return (
//     <div className="features-wrapper">
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(6px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* ── Base (desktop ≥ 1280px) — pixel-perfect original layout ── */
//         .features-wrapper {
//           width: 1440px;
//           min-height: 828px;
//           background-color: #FFFFFF;
//           box-sizing: border-box;
//           position: relative;
//           overflow: hidden;
//         }

//         .features-heading {
//           position: absolute;
//           top: 103px;
//           left: 92px;
//           width: 720px;
//           height: 72px;
//           margin: 0;
//           font-family: Inter, sans-serif;
//           font-weight: 600;
//           font-size: 60px;
//           line-height: 93%;
//           letter-spacing: -0.02em;
//           color: #000000F2;
//         }

//         .features-left {
//           position: absolute;
//           top: 215px;
//           left: 92px;
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//           align-items: flex-start;
//         }

//         .features-right-image {
//           position: absolute;
//           top: 271px;
//           left: 692px;
//           width: 677px;
//           height: 350px;
//           object-fit: contain;
//           animation: fadeIn 0.4s ease;
//         }

//         .features-stat {
//           position: absolute;
//           top: 212px;
//           left: 1110px;
//           width: 243px;
//           height: 59px;
//           font-family: Poppins, sans-serif;
//           font-weight: 400;
//           font-size: 28px;
//           line-height: 25px;
//           letter-spacing: 0.02em;
//           color: #848489;
//           opacity: 0.8;
//           animation: fadeIn 0.4s ease;
//         }

//         /* ── Feature card ── */
//         .feature-card {
//           cursor: pointer;
//           border-radius: 64px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//           overflow: hidden;
//           transition:
//             width 0.35s cubic-bezier(0.4,0,0.2,1),
//             height 0.35s cubic-bezier(0.4,0,0.2,1),
//             background-color 0.3s ease;
//           padding: 21px 27px;
//           gap: 10px;
//           box-sizing: border-box;
//           background-color: #1C398E;
//         }

//         .desc-wrap {
//           display: grid;
//           grid-template-rows: 0fr;
//           transition: grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1);
//         }
//         .desc-wrap.open {
//           grid-template-rows: 1fr;
//         }
//         .desc-inner {
//           overflow: hidden;
//         }

//         /* ── Tablet: ≤ 1279px ── */
//         @media (max-width: 1279px) {
//           .features-wrapper {
//             width: 100% !important;
//             min-height: auto !important;
//             position: static !important;
//             overflow: visible !important;
//             padding: 40px 32px 48px;
//             display: flex;
//             flex-direction: column;
//             gap: 32px;
//           }

//           .features-heading {
//             position: static !important;
//             width: 100% !important;
//             height: auto !important;
//             font-size: 48px !important;
//           }

//           .features-left {
//             position: static !important;
//             width: 100% !important;
//             align-items: stretch !important;
//           }

//           /* Cards go full-width on tablet */
//           .feature-card {
//             width: 100% !important;
//             height: auto !important;
//             border-radius: 28px !important;
//           }

//           .features-right-image {
//             position: static !important;
//             width: 100% !important;
//             height: 300px !important;
//             order: -1; /* image above cards on tablet */
//             animation: fadeIn 0.4s ease;
//           }

//           .features-stat {
//             position: static !important;
//             width: 100% !important;
//             height: auto !important;
//             font-size: 20px !important;
//             text-align: center;
//           }
//         }

//         /* ── Mobile: ≤ 640px ── */
//         @media (max-width: 640px) {
//           .features-wrapper {
//             padding: 28px 16px 40px !important;
//             gap: 20px !important;
//           }

//           .features-heading {
//             font-size: 36px !important;
//             line-height: 1.1 !important;
//           }

//           .feature-card {
//             border-radius: 20px !important;
//             padding: 16px 20px !important;
//           }

//           .feature-card h2 {
//             font-size: 24px !important;
//           }

//           .feature-card p {
//             font-size: 15px !important;
//             margin-left: 0 !important;
//           }

//           .feature-card img {
//             width: 28px !important;
//             height: 28px !important;
//           }

//           .features-right-image {
//             height: 200px !important;
//           }

//           .features-stat {
//             font-size: 16px !important;
//           }
//         }

//         /* ── Extra-small: ≤ 400px ── */
//         @media (max-width: 400px) {
//           .features-heading {
//             font-size: 28px !important;
//           }
//           .feature-card h2 {
//             font-size: 20px !important;
//           }
//           .features-right-image {
//             height: 160px !important;
//           }
//         }
//       `}</style>

//       {/* HEADING */}
//       <h1 className="features-heading">Features</h1>

//       {/* RIGHT IMAGE — rendered in DOM flow on responsive; absolute on desktop */}
//       <img
//         key={active}
//         src={activeFeature.image}
//         alt={`${activeFeature.label} visual`}
//         className="features-right-image"
//       />

//       {/* STAT */}
//       {isPerformance && (
//         <div className="features-stat">{activeFeature.stat}</div>
//       )}

//       {/* LEFT CARDS */}
//       <div className="features-left">
//         {FEATURES.map((feature) => {
//           const isActive = active === feature.id;

//           return (
//             <div
//               key={feature.id}
//               className="feature-card"
//               onClick={() => setActive(feature.id)}
//               style={{
//                 /* desktop sizes applied inline — overridden by media queries on small screens */
//                 width: isActive ? "505px" : feature.inactiveWidth,
//                 height: isActive ? "216px" : "95px",
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                 <img
//                   src={feature.icon}
//                   alt=""
//                   style={{
//                     width: "37px",
//                     height: "37px",
//                     flexShrink: 0,
//                     filter: isActive
//                       ? "invert(70%) sepia(60%) saturate(600%) hue-rotate(340deg) brightness(105%)"
//                       : "brightness(0) invert(1)",
//                   }}
//                 />
//                 <h2
//                   style={{
//                     fontSize: "35px",
//                     fontWeight: 500,
//                     lineHeight: 1,
//                     color: "#FFFFFF",
//                     margin: 0,
//                   }}
//                 >
//                   {feature.label}
//                 </h2>
//               </div>

//               <div className={`desc-wrap${isActive ? " open" : ""}`}>
//                 <div className="desc-inner">
//                   <p
//                     style={{
//                       margin: "12px 0 0 49px",
//                       fontSize: "18px",
//                       color: "#FFFFFF",
//                       lineHeight: 1.5,
//                     }}
//                   >
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import PerformanceImage from "./shosefull.png";
import DesignImage from "../dropshipping.png";
import IntelligenceImage from "../pngtree.png";
import Vectorsss from "./Vectorsss.png";
import React, { useState } from "react";

const FEATURES = [
  {
    id: "performance",
    label: "Performance",
    icon: Vectorsss,
    image: PerformanceImage,
    description:
      "Built with next-generation architecture, [Product Name] delivers unmatched speed and responsiveness — whether you're working, training, or creating.",
    stat: "Upto 2x faster Processing",
    inactiveWidth: "370px",
  },
  {
    id: "design",
    label: "Design",
    icon: Vectorsss,
    image: DesignImage,
    description:
      "Crafted with precision and purpose, [Product Name] blends aesthetics with intuitive usability for a seamless experience.",
    stat: "Award-winning UI",
    inactiveWidth: "276px",
  },
  {
    id: "intelligence",
    label: "Intelligence",
    icon: Vectorsss,
    image: IntelligenceImage,
    description:
      "Powered by smart algorithms, [Product Name] adapts and learns to deliver smarter, faster outcomes every time.",
    stat: "Advance thermal Stability",
    inactiveWidth: "395px",
  },
];

export default function FeaturesPage() {
  const [active, setActive] = useState("performance");
  const activeFeature = FEATURES.find((f) => f.id === active);
  const isPerformance = active === "performance";

  return (
    <div className="features-wrapper">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .features-wrapper {
          width: 100%;
          max-width: 1440px;
          min-height: 828px;
          background-color: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .features-heading {
          position: absolute;
          top: 103px;
          left: 6.4%;
          width: 50%;
          height: 72px;
          margin: 0;
          font-family: Inter, sans-serif;
          font-weight: 600;
          font-size: 60px;
          line-height: 93%;
          letter-spacing: -0.02em;
          color: #000000F2;
        }

        .features-left {
          position: absolute;
          top: 215px;
          left: 6.4%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
        }

        .features-right-image {
          position: absolute;
          top: 271px;
          left: 48%;
          width: 47%;
          height: 350px;
          object-fit: contain;
          animation: fadeIn 0.4s ease;
        }

        .features-stat {
          position: absolute;
          top: 212px;
          left: 77%;
          width: 17%;
          min-width: 180px;
          height: 59px;
          font-family: Poppins, sans-serif;
          font-weight: 400;
          font-size: 28px;
          line-height: 25px;
          letter-spacing: 0.02em;
          color: #848489;
          opacity: 0.8;
          animation: fadeIn 0.4s ease;
        }

        .feature-card {
          cursor: pointer;
          border-radius: 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
          transition:
            width 0.35s cubic-bezier(0.4,0,0.2,1),
            height 0.35s cubic-bezier(0.4,0,0.2,1),
            background-color 0.3s ease;
          padding: 21px 27px;
          gap: 10px;
          box-sizing: border-box;
          background-color: #1C398E;
        }

        .desc-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .desc-wrap.open {
          grid-template-rows: 1fr;
        }
        .desc-inner {
          overflow: hidden;
        }

        @media (max-width: 1279px) {
          .features-wrapper {
            width: 100% !important;
            min-height: auto !important;
            position: static !important;
            overflow: visible !important;
            padding: 40px 32px 48px;
            display: flex;
            flex-direction: column;
            gap: 32px;
          }

          .features-heading {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            font-size: 48px !important;
          }

          .features-left {
            position: static !important;
            width: 100% !important;
            align-items: stretch !important;
          }

          .feature-card {
            width: 100% !important;
            height: auto !important;
            border-radius: 28px !important;
          }

          .features-right-image {
            position: static !important;
            width: 100% !important;
            height: 300px !important;
            order: -1;
            animation: fadeIn 0.4s ease;
          }

          .features-stat {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            font-size: 20px !important;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .features-wrapper {
            padding: 28px 16px 40px !important;
            gap: 20px !important;
          }

          .features-heading {
            font-size: 36px !important;
            line-height: 1.1 !important;
          }

          .feature-card {
            border-radius: 20px !important;
            padding: 16px 20px !important;
          }

          .feature-card h2 {
            font-size: 24px !important;
          }

          .feature-card p {
            font-size: 15px !important;
            margin-left: 0 !important;
          }

          .feature-card img {
            width: 28px !important;
            height: 28px !important;
          }

          .features-right-image {
            height: 200px !important;
          }

          .features-stat {
            font-size: 16px !important;
          }
        }

        @media (max-width: 400px) {
          .features-heading {
            font-size: 28px !important;
          }
          .feature-card h2 {
            font-size: 20px !important;
          }
          .features-right-image {
            height: 160px !important;
          }
        }
      `}</style>

      <h1 className="features-heading">Features</h1>

      <img
        key={active}
        src={activeFeature.image}
        alt={`${activeFeature.label} visual`}
        className="features-right-image"
      />

      {isPerformance && (
        <div className="features-stat">{activeFeature.stat}</div>
      )}

      <div className="features-left">
        {FEATURES.map((feature) => {
          const isActive = active === feature.id;

          return (
            <div
              key={feature.id}
              className="feature-card"
              onClick={() => setActive(feature.id)}
              style={{
                width: isActive
                  ? "clamp(300px, 35%, 505px)"
                  : `clamp(180px, ${(parseInt(feature.inactiveWidth) / 1440) * 100}%, ${feature.inactiveWidth})`,
                height: isActive ? "216px" : "95px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src={feature.icon}
                  alt=""
                  style={{
                    width: "37px",
                    height: "37px",
                    flexShrink: 0,
                    filter: isActive
                      ? "invert(70%) sepia(60%) saturate(600%) hue-rotate(340deg) brightness(105%)"
                      : "brightness(0) invert(1)",
                  }}
                />
                <h2
                  style={{
                    fontSize: "35px",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {feature.label}
                </h2>
              </div>

              <div className={`desc-wrap${isActive ? " open" : ""}`}>
                <div className="desc-inner">
                  <p
                    style={{
                      margin: "12px 0 0 49px",
                      fontSize: "18px",
                      color: "#FFFFFF",
                      lineHeight: 1.5,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}