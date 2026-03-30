
// import { useState } from "react";
// import normal from "./Frame1.png";
// import smart from "./frame2.png";
// import bgMesh from "./bg.png";

// import icon1 from "./ncoin1.png";
// import icon2 from "./ncoin2.png";
// import icon3 from "./ncoin3.png";
// import icon4 from "./ncoin4.png";
// import icon5 from "./ncoin5.png";
// import icon6 from "./ncoin6.png";

// const normalFeatures = [
//   { customIcon: icon1, label: "Normal shoe structure" },
//   { customIcon: icon2, label: "Manual string lacing" },
//   { customIcon: icon3, label: "Standard factory branding" },
//   { customIcon: icon4, label: "Basic Water Proofing" },
//   { customIcon: icon5, label: "No integrated sensors" },
//   { customIcon: icon6, label: "Standard Light Cushion" },
// ];

// const smartFeatures = [
//   { customIcon: icon1, label: "Self Energy Harvesting" },
//   { customIcon: icon2, label: "Self Lacing with Rotatory Knob" },
//   { customIcon: icon3, label: "Custom Branding Options" },
//   { customIcon: icon4, label: "Water Proof & Durability" },
//   { customIcon: icon5, label: "Smart Sensor Integration" },
//   { customIcon: icon6, label: "Adaptive Responsive Cushioning" },
// ];

// export default function ShoeComparison() {
//   const [isSmart, setIsSmart] = useState(false);

//   const features = isSmart ? smartFeatures : normalFeatures;
//   const img = isSmart ? smart : normal;

//   return (
//     <>
//       <style>{`
//         /* Responsive overrides — only active below 1280px */

//         /* Medium screens: scale down the fixed card */
//         @media (max-width: 1279px) {
//           .shoe-card {
//             width: 100% !important;
//             height: auto !important;
//             border-radius: 14px !important;
//           }
//           .shoe-body {
//             height: auto !important;
//             flex-direction: column !important;
//             align-items: center !important;
//             gap: 28px;
//           }
//           .shoe-image-wrap {
//             position: static !important;
//             width: 100% !important;
//             max-width: 520px !important;
//             height: 320px !important;
//           }
//           .shoe-features-list {
//             position: static !important;
//             width: 100% !important;
//             max-width: 520px !important;
//             top: auto !important;
//             left: auto !important;
//           }
//           .shoe-features-list li {
//             padding-bottom: 12px !important;
//           }
//           .shoe-features-list span {
//             font-size: 17px !important;
//           }
//           .toggle-label {
//             font-size: 28px !important;
//             width: auto !important;
//             height: auto !important;
//             line-height: 1.2 !important;
//           }
//           .toggle-label-smart {
//             width: auto !important;
//             height: auto !important;
//             line-height: 1.2 !important;
//           }
//         }

//         /* Small / mobile screens */
//         @media (max-width: 767px) {
//           .shoe-header h1 {
//             font-size: 34px !important;
//             line-height: 42px !important;
//           }
//           .shoe-header p {
//             font-size: 17px !important;
//             line-height: 28px !important;
//           }
//           .shoe-card {
//             border-radius: 12px !important;
//           }
//           .shoe-card-inner {
//             padding: 20px !important;
//           }
//           .toggle-row {
//             gap: 12px !important;
//             margin-bottom: 20px !important;
//             flex-wrap: wrap;
//             justify-content: center;
//           }
//           .toggle-label {
//             font-size: 20px !important;
//           }
//           .toggle-label-smart {
//             font-size: 20px !important;
//           }
//           .shoe-image-wrap {
//             height: 220px !important;
//           }
//           .shoe-features-list span {
//             font-size: 14px !important;
//           }
//           .shoe-features-list img {
//             width: 18px !important;
//             height: 18px !important;
//           }
//           .shoe-bg-img {
//             display: none;
//           }
//           .shoe-body {
//             gap: 20px;
//           }
//         }

//         /* Extra-small phones */
//         @media (max-width: 400px) {
//           .toggle-label,
//           .toggle-label-smart {
//             font-size: 16px !important;
//           }
//           .shoe-image-wrap {
//             height: 180px !important;
//           }
//         }
//       `}</style>

//       <div className="min-h-screen flex flex-col items-center justify-center px-4 py-5 mt-[110px]">

//         {/* HEADER */}
//         <div className="text-center mb-12 shoe-header">
//           {/* <h1 className="text-[56px] font-semibold leading-[68px] text-black/90">
//             Comparison
//           </h1> */}

//           <h1 className="font-semibold text-[60px] leading-[68px] tracking-[-0.58px] text-black/90">
//   Comparison
// </h1>
//           {/* <p className="mt-2 text-[24px] font-medium leading-[56px] text-black/90">
//             Which one is right for you?
//           </p> */}

//           <p className=" text-[28px] font-medium leading-[56px] tracking-[-1.44px] text-black/90">
//   Which one is right for you?
// </p>
//         </div>

//         {/* MAIN CONTAINER */}
//         <div
//           className={`shoe-card relative overflow-hidden transition-all duration-700 ${
//             isSmart ? "bg-[#0F172B] text-white" : "bg-[#FAFAFA] text-slate-900"
//           }`}  
//           style={{
//             width: "1236px",
//             height: "755px",
//             borderRadius: "18px",
//             boxShadow: "2px 2px 4px 0px #00000040",
//             border: isSmart
//               ? "1px solid rgba(255,255,255,0.08)"
//               : "1px solid rgba(0,0,0,0.06)",
//           }}
//         >
//           {/* Background Image */}
//           <img
//             src={bgMesh}
//             alt="mesh"
//             className="shoe-bg-img"
//             style={{
//               position: "absolute",
//               width: "120%",
//               height: "500px",
//               bottom: "-100px",
//               right: "-10px",
//               opacity: 1,
//               background:"#B7B7B70D",
//               pointerEvents: "none",
//             }}
//           />

//           {/* Overlay Layer */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "#B7B7B70D",
//               boxShadow: "2px 2px 4px 0px #FFFFFF40",
//               pointerEvents: "none",
//             }}
//           />

//           {/* CONTENT */}
//           <div className="shoe-card-inner relative z-10 p-10">

           
// <div
//   className="toggle-row"
//   style={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexWrap: "wrap", // ✅ wraps on very small screens
//     gap: "clamp(12px, 2vw, 24px)", // ✅ shrinks gap on smaller screens
//     marginBottom: "clamp(20px, 3vw, 40px)",
//     padding: "0 16px", // ✅ prevents edge clipping
//   }}
// >

//   <span
//     className="toggle-label"
//     style={{
//       width: "clamp(130px, 18vw, 235px)", // ✅ shrinks width
//       height: "auto",
//       fontFamily: "Inter",
//       fontWeight: 600,
//       fontSize: "clamp(20px, 3vw, 38px)", // ✅ shrinks font
//       lineHeight: "1.2",
//       letterSpacing: "-0.58px",
//       verticalAlign: "middle",
//       display: "inline-block",
//       background: isSmart
//         ? "none"
//         : "linear-gradient(105.03deg, #0F172B 11.29%, #1C398E 50.84%, #59168B 90.05%)",
//       WebkitBackgroundClip: isSmart ? "unset" : "text",
//       WebkitTextFillColor: isSmart ? "#FFFFFF" : "transparent",
//       color: isSmart ? "#FFFFFF" : "transparent",
//       textShadow: "2px 2px 9.4px rgba(28, 57, 142, 0.30)",
//       whiteSpace: "nowrap", // ✅ prevents text breaking mid-word
//     }}
//   >
//     Normal Shoe
//   </span>

//   <button
//     onClick={() => setIsSmart(!isSmart)}
//     style={{
//       position: "relative",
//       width: "clamp(80px, 10vw, 125px)", // ✅ shrinks toggle
//       height: "clamp(36px, 5vw, 56px)",
//       borderRadius: "31px",
//       border: "none",
//       cursor: "pointer",
//       flexShrink: 0,
//       padding: 0,
//       boxShadow: "1px 1px 4px 0px #00000040",
//       backgroundColor: "transparent",
//     }}
//   >
//     {/* Track */}
//     <span
//       style={{
//         position: "absolute",
//         inset: 0,
//         borderRadius: "31px",
//         backgroundColor: "#FFFFFF",
//         transition: "background-color 0.3s",
//       }}
//     />
//     {/* Knob */}
//     <span
//       style={{
//         position: "absolute",
//         top: "50%",
//         background: isSmart
//           ? "linear-gradient(105.03deg, #0F172B 11.29%, #1C398E 50.84%, #59168B 90.05%)"
//           : "#FFB245",
//         transform: isSmart
//           ? "translateY(-50%) translateX(calc(100% + 23px))" // ✅ relative offset
//           : "translateY(-50%) translateX(6px)",
//         width: "clamp(28px, 4vw, 44px)", // ✅ shrinks knob
//         height: "clamp(28px, 4vw, 44px)",
//         borderRadius: "50%",
//         transition: "transform 0.3s",
//         display: "block",
//       }}
//     />
//   </button>

//   <span
//     className="toggle-label-smart"
//     style={{
//       width: "clamp(180px, 24vw, 326px)", // ✅ shrinks width
//       height: "auto",
//       fontFamily: "Inter",
//       fontWeight: 600,
//       fontSize: "clamp(20px, 3vw, 38px)", // ✅ shrinks font
//       lineHeight: "1.2",
//       letterSpacing: "-0.58px",
//       verticalAlign: "middle",
//       display: "inline-block",
//       color: isSmart ? "#F39F55" : "#000000F2",
//       textShadow: isSmart ? "2px 2px 14.6px #FCFFE540" : "none",
//       whiteSpace: "nowrap",
//     }}
//   >
//     Cleva Smart Shoe
//   </span>

// </div>

//             <div
//               className="shoe-body"
//               style={{ position: "relative", height: "524px" }}
//             >

//               {/* Shoe Image */}
//               <div
//                 className="shoe-image-wrap"
//                 style={{
//                   position: "absolute",
//                   width: "597px",
//                   height: "524px",
//                   left: "74px",
//                   top: "0px",
//                   borderRadius: "12px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src={img}
//                   alt="shoe"
//                   style={{ width: "100%", height: "100%", objectFit: "cover"   ,   boxShadow: "2px 2px 4px 0px #00000040" }}
//                 />
//               </div>

              
//               <ul
//                 className="shoe-features-list"
//                 style={{
//                   position: "absolute",
//                   width: "396px",
//                   left: "742px",
//                   top: "99px",
//                   listStyle: "none",
//                   padding: 0,
//                   margin: 0,
//                 }}
//               >
//                 {features.map((f, i) => (
//                   <li
//                     key={i}
//                     className="flex items-center gap-3 pb-4 mb-4"
//                     style={{
                     
//                       borderBottom:
//                         i < features.length
//                           ? "1px solid #E2E8F0"
//                           : "none",
//                     }}
//                   >
//                     <img
//                       src={f.customIcon}
//                       alt=""
//                       style={{
//                         width: 24,
//                         height: 24,
//                         flexShrink: 0,
//                         filter: isSmart
//                           ? "invert(85%) sepia(68%) saturate(600%) hue-rotate(30deg)"
//                           : "none",
//                       }}
//                     />
//                     <span
//                       style={{
//                         fontFamily: "Inter",
//                         fontSize: "20px",
//                         color: isSmart ? "#E5E7EB" : "#000000E5",
//                       }}
//                     > 
                    

//                       {f.label}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import normal from "./Frame1.png";
import smart from "./frame2.png";
import bgMesh from "./bg.png";
import icon1 from "./ncoin1.png";
import icon2 from "./ncoin2.png";
import icon3 from "./ncoin3.png";
import icon4 from "./ncoin4.png";
import icon5 from "./ncoin5.png";
import icon6 from "./ncoin6.png";

const normalFeatures = [
  { customIcon: icon1, label: "Normal shoe structure" },
  { customIcon: icon2, label: "Manual string lacing" },
  { customIcon: icon3, label: "Standard factory branding" },
  { customIcon: icon4, label: "Basic Water Proofing" },
  { customIcon: icon5, label: "No integrated sensors" },
  { customIcon: icon6, label: "Standard Light Cushion" },
];

const smartFeatures = [
  { customIcon: icon1, label: "Self Energy Harvesting" },
  { customIcon: icon2, label: "Self Lacing with Rotatory Knob" },
  { customIcon: icon3, label: "Custom Branding Options" },
  { customIcon: icon4, label: "Water Proof & Durability" },
  { customIcon: icon5, label: "Smart Sensor Integration" },
  { customIcon: icon6, label: "Adaptive Responsive Cushioning" },
];

export default function ShoeComparison() {
  const [isSmart, setIsSmart] = useState(false);
  const features = isSmart ? smartFeatures : normalFeatures;
  const img = isSmart ? smart : normal;

  return (
    <>
      <style>{`
        /* ── CHANGED: 1279px → 1024px so desktop layout holds until card truly can't fit ── */
        @media (max-width: 1024px) {
          .shoe-card {
            border-radius: 14px !important;
          }
          .shoe-body {
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 28px;
          }
          .shoe-image-wrap {
            position: static !important;
            width: 100% !important;
            max-width: 520px !important;
            height: 320px !important;
          }
          .shoe-features-list {
            position: static !important;
            width: 100% !important;
            max-width: 520px !important;
          }
          .shoe-features-list li {
            padding-bottom: 12px !important;
          }
          .shoe-features-list span {
            font-size: 17px !important;
          }
          .toggle-label {
            font-size: 28px !important;
            width: auto !important;
            height: auto !important;
            line-height: 1.2 !important;
          }
          .toggle-label-smart {
            width: auto !important;
            height: auto !important;
            line-height: 1.2 !important;
          }
        }

        @media (max-width: 767px) {
          .shoe-header h1 { font-size: 34px !important; line-height: 42px !important; }
          .shoe-header p  { font-size: 17px !important; line-height: 28px !important; }
          .shoe-card      { border-radius: 12px !important; }
          .shoe-card-inner { padding: 20px !important; }
          .toggle-row     { gap: 12px !important; margin-bottom: 20px !important; flex-wrap: wrap; justify-content: center; }
          .toggle-label   { font-size: 20px !important; }
          .toggle-label-smart { font-size: 20px !important; }
          .shoe-image-wrap { height: 220px !important; }
          .shoe-features-list span { font-size: 14px !important; }
          .shoe-features-list img  { width: 18px !important; height: 18px !important; }
          .shoe-bg-img    { display: none; }
          .shoe-body      { gap: 20px; }
        }

        @media (max-width: 400px) {
          .toggle-label, .toggle-label-smart { font-size: 16px !important; }
          .shoe-image-wrap { height: 180px !important; }
        }
      `}</style>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-5 mt-[110px]">

        {/* HEADER */}
        <div className="text-center mb-12 shoe-header">
          <h1 className="font-semibold text-[60px] leading-[68px] tracking-[-0.58px] text-black/90">
            Comparison
          </h1>
          <p className="text-[28px] font-medium leading-[56px] tracking-[-1.44px] text-black/90">
            Which one is right for you?
          </p>
        </div>

        {/* MAIN CONTAINER — ← CHANGED: fixed 1236px → fluid 100% + maxWidth */}
        <div
          className={`shoe-card relative overflow-hidden transition-all duration-700 ${
            isSmart ? "bg-[#0F172B] text-white" : "bg-[#FAFAFA] text-slate-900"
          }`}
          style={{
            width: "100%",
            maxWidth: "1236px",
            minHeight: "755px",
            borderRadius: "18px",
            boxShadow: "2px 2px 4px 0px #00000040",
            border: isSmart
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {/* Background Image */}
          <img
            src={bgMesh}
            alt="mesh"
            className="shoe-bg-img"
            style={{
              position: "absolute",
              // width: "120%",
              width: "100%",
              height: "500px",
              bottom: "-100px",
              // right: "-10px",
              right: "0px",
              opacity: 1,
              background: "#B7B7B70D",
              pointerEvents: "none",
            }}
          />

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#B7B7B70D",
              boxShadow: "2px 2px 4px 0px #FFFFFF40",
              pointerEvents: "none",
            }}
          />

          {/* CONTENT */}
          <div className="shoe-card-inner relative z-10 p-10">

            {/* Toggle Row */}
            <div
              className="toggle-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "clamp(12px, 2vw, 24px)",
                marginBottom: "clamp(20px, 3vw, 40px)",
                padding: "0 16px",
              }}
            >
              <span
                className="toggle-label"
                style={{
                  width: "clamp(130px, 18vw, 235px)",
                  height: "auto",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "clamp(20px, 3vw, 38px)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.58px",
                  verticalAlign: "middle",
                  display: "inline-block",
                  background: isSmart
                    ? "none"
                    : "linear-gradient(105.03deg, #0F172B 11.29%, #1C398E 50.84%, #59168B 90.05%)",
                  WebkitBackgroundClip: isSmart ? "unset" : "text",
                  WebkitTextFillColor: isSmart ? "#FFFFFF" : "transparent",
                  color: isSmart ? "#FFFFFF" : "transparent",
                  textShadow: "2px 2px 9.4px rgba(28, 57, 142, 0.30)",
                  whiteSpace: "nowrap",
                }}
              >
                Normal Shoe
              </span>

              <button
                onClick={() => setIsSmart(!isSmart)}
                style={{
                  position: "relative",
                  width: "clamp(80px, 10vw, 125px)",
                  height: "clamp(36px, 5vw, 56px)",
                  borderRadius: "31px",
                  border: "none",
                  cursor: "pointer",
                  flexShrink: 0,
                  padding: 0,
                  boxShadow: "1px 1px 4px 0px #00000040",
                  backgroundColor: "transparent",
                }}
              >
                <span style={{ position: "absolute", inset: 0, borderRadius: "31px", backgroundColor: "#FFFFFF", transition: "background-color 0.3s" }} />
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    background: isSmart
                      ? "linear-gradient(105.03deg, #0F172B 11.29%, #1C398E 50.84%, #59168B 90.05%)"
                      : "#FFB245",
                    transform: isSmart
                      ? "translateY(-50%) translateX(calc(100% + 23px))"
                      : "translateY(-50%) translateX(6px)",
                    width: "clamp(28px, 4vw, 44px)",
                    height: "clamp(28px, 4vw, 44px)",
                    borderRadius: "50%",
                    transition: "transform 0.3s",
                    display: "block",
                  }}
                />
              </button>

              <span
                className="toggle-label-smart"
                style={{
                  width: "clamp(180px, 24vw, 326px)",
                  height: "auto",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "clamp(20px, 3vw, 38px)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.58px",
                  verticalAlign: "middle",
                  display: "inline-block",
                  color: isSmart ? "#F39F55" : "#000000F2",
                  textShadow: isSmart ? "2px 2px 14.6px #FCFFE540" : "none",
                  whiteSpace: "nowrap",
                }}
              >
                Cleva Smart Shoe
              </span>
            </div>

            {/* Body — ← CHANGED: fixed 524px → clamp */}
            <div
              className="shoe-body"
              style={{ position: "relative", height: "clamp(320px, 45vw, 524px)" }}
            >
              {/* Shoe Image — ← CHANGED: px → % */}
              <div
                className="shoe-image-wrap"
                style={{
                  position: "absolute",
                  width: "48%",
                  height: "100%",
                  left: "3%",
                  // left: "0",
                  top: "0px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img}
                  alt="shoe"
                  style={{ width: "100%", height: "100%", objectFit: "cover", boxShadow: "2px 2px 4px 0px #00000040" }}
                />
              </div>

              {/* Features List — ← CHANGED: px → % */}
              <ul
                className="shoe-features-list"
                style={{
                  position: "absolute",
                  // width: "32%",
                  // left: "60%",
                  width: "38%",
left: "54%",
                  top: "99px",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 pb-4 mb-4"
                    style={{ borderBottom: i < features.length ? "1px solid #E2E8F0" : "none" }}
                  >
                    <img
                      src={f.customIcon}
                      alt=""
                      style={{
                        width: 24, height: 24, flexShrink: 0,
                        filter: isSmart ? "invert(85%) sepia(68%) saturate(600%) hue-rotate(30deg)" : "none",
                      }}
                    />
                    <span style={{ fontFamily: "Inter", fontSize: "20px", color: isSmart ? "#E5E7EB" : "#000000E5" }}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}