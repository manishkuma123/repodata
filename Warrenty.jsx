// import logo from "./logo.png";
// import icon1 from "./b1.png";
// import icon2 from "./b2.png";
// import icon3 from "./b3.png";
// import icon4 from "./b4.png";
// import Herosection from "./Herosection.mp4";

// export default function WarrantyFooterExact() {
//   const trustItems = [
//     {
//       icon: (
//         <img
//           src={icon1}
//           alt="1 Year Limited Warranty"
//           style={{ width: "40px", height: "40px", objectFit: "contain" }}
//         />
//       ),
//       label: "1 - year Limited\nWarranty",
//     },
//     {
//       icon: (
//         <img
//           src={icon2}
//           alt="30 Day Return Policy"
//           style={{ width: "40px", height: "40px", objectFit: "contain" }}
//         />
//       ),
//       label: "30- Day Return\nPolicy",
//     },
//     {
//       icon: (
//         <img
//           src={icon3}
//           alt="Secure Checkout"
//           style={{ width: "40px", height: "40px", objectFit: "contain" }}
//         />
//       ),
//       label: "Secure Checkout",
//     },
//     {
//       icon: (
//         <img
//           src={icon4}
//           alt="Global Support Network"
//           style={{ width: "40px", height: "40px", objectFit: "contain" }}
//         />
//       ),
//       label: "Global Support\nNetwork",
//     },
//   ];

//   const quickLinks = [
//     "Home",
//     "About Us",
//     "Intelligent Infrastructure",
//     "Institutional Solutions",
//     "Smart Shoe",
//     "Product",
//     "Advances",
//     "Contact Us",
//   ];

//   return (
//     <div
//       style={{
//         fontFamily: "'Segoe UI', sans-serif",
//         backgroundColor: "#ffffff",
//         color: "#1a1a1a",
//         overflowX: "hidden",
//       }}
//     >
//       <style>{`
//         /* ── Responsive breakpoints ── */

//         /* Trust grid: 4 cols → 2 cols → 1 col */
//         .trust-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 14px;
//         }
//         @media (max-width: 1100px) {
//           .trust-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
//         @media (max-width: 540px) {
//           .trust-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         /* Trust cards: fixed size → fluid */
//         .trust-card {
//           width: 295px;
//           height: 212px;
//           border-radius: 14px;
//           background-color: #F3F4F6;
//           position: relative;
//           flex-shrink: 0;
//         }
//         @media (max-width: 1100px) {
//           .trust-card {
//             width: 100%;
//           }
//         }

//         /* Warranty section padding */
//         .warranty-section {
//           width: 100%;
//           max-width: 1449px;
//           margin: 0 auto;
//           padding: 10px 97px 0 97px;
//           box-sizing: border-box;
//           position: relative;
//           z-index: 1;
//           overflow: hidden;
//         }
//         @media (max-width: 900px) {
//           .warranty-section {
//             padding: 10px 40px 0 40px;
//           }
//         }
//         @media (max-width: 540px) {
//           .warranty-section {
//             padding: 10px 20px 0 20px;
//           }
//         }

//         /* Warranty heading */
//         .warranty-heading {
//           font-size: 60px;
//           font-weight: 600;
//           color: #000000F2;
//           line-height: 56px;
//           letter-spacing: -1.44px;
//           font-family: Inter;
//           margin-bottom: 48px;
//           margin-top: 0;
//         }
//         @media (max-width: 768px) {
//           .warranty-heading {
//             font-size: 40px;
//             line-height: 44px;
//             letter-spacing: -0.8px;
//             margin-bottom: 32px;
//           }
//         }
//         @media (max-width: 480px) {
//           .warranty-heading {
//             font-size: 28px;
//             line-height: 32px;
//             letter-spacing: -0.5px;
//             margin-bottom: 24px;
//           }
//         }

//         /* Hero banner */
//         .hero-banner {
//           width: calc(100% - 200px);
//           max-width: 1240px;
//           margin: 0 auto;
//           height: 469px;
//           border-radius: 18px;
//           overflow: hidden;
//           position: relative;
//           z-index: 2;
//           background-color: #000;
//         }
//         @media (max-width: 900px) {
//           .hero-banner {
//             width: calc(100% - 80px);
//             height: 360px;
//           }
//         }
//         @media (max-width: 540px) {
//           .hero-banner {
//             width: calc(100% - 40px);
//             height: 280px;
//             border-radius: 12px;
//           }
//         }

//         /* Hero heading */
//         .hero-heading {
//           width: 579px;
//           color: #fff;
//           font-size: 60px;
//           font-weight: 600;
//           line-height: 100%;
//           letter-spacing: 0.02em;
//           text-align: center;
//           margin: 0 auto 20px auto;
//         }
//         @media (max-width: 768px) {
//           .hero-heading {
//             width: 100%;
//             font-size: 40px;
//           }
//         }
//         @media (max-width: 480px) {
//           .hero-heading {
//             font-size: 28px;
//           }
//         }

//         /* Footer wrapper */
//         .footer-wrapper {
//           width: 100%;
//           margin-left: 2px;
//           margin-top: -167px;
//           background-color: #FFFFFF;
//           box-shadow: 2px -2px 41px 0px #1C398E33;
//           box-sizing: border-box;
//           position: relative;
//           z-index: 1;
//         }
//         @media (max-width: 768px) {
//           .footer-wrapper {
//             margin-top: -80px;
//           }
//         }
//         @media (max-width: 540px) {
//           .footer-wrapper {
//             margin-top: -40px;
//           }
//         }

//         /* Footer inner layout: absolute → static flex on small screens */
//         .footer-inner {
//           width: 100%;
//           padding: 0 40px;
//           box-sizing: border-box;
//           position: relative;
//           /* Desktop uses absolute children; on small screens we switch */
//         }

//         /* Desktop: keep absolute positioning, just tweak heights */
//         .footer-desktop-spacer {
//           height: 661px;
//         }
//         @media (max-width: 900px) {
//           .footer-desktop-spacer {
//             display: none;
//           }
//           .footer-inner {
//             padding: 200px 40px 80px 40px;
//           }
//         }
//         @media (max-width: 540px) {
//           .footer-inner {
//             padding: 160px 20px 60px 20px;
//           }
//         }

//         /* Footer logo — absolute on desktop, static on mobile */
//         .footer-logo {
//           position: absolute;
//           width: 161.5px;
//           height: 81.5px;
//           top: 187px;
//           left: 100px;
//           object-fit: contain;
//         }
//         @media (max-width: 900px) {
//           .footer-logo {
//             position: static;
//             display: block;
//             margin-bottom: 20px;
//           }
//         }

//         /* Footer description */
//         .footer-desc {
//           position: absolute;
//           width: 359px;
//           top: 256px;
//           left: 123px;
//           font-family: Inter;
//           font-weight: 400;
//           font-size: 16px;
//           line-height: 140%;
//           letter-spacing: 0.02em;
//           color: #000000F2;
//           margin: 0;
//         }
//         @media (max-width: 900px) {
//           .footer-desc {
//             position: static;
//             width: 100%;
//             max-width: 480px;
//             margin-bottom: 40px;
//           }
//         }

//         /* Footer columns row */
//         .footer-columns {
//           display: none; /* hidden on desktop — desktop uses absolute positioning */
//         }
//         @media (max-width: 900px) {
//           .footer-columns {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 40px;
//             margin-bottom: 40px;
//           }
//         }

//         /* Desktop absolute columns */
//         .footer-quick-links-abs {
//           position: absolute;
//           top: 269px;
//           left: 689px;
//         }
//         .footer-contact-abs {
//           position: absolute;
//           top: 269px;
//           left: 990px;
//         }
//         @media (max-width: 900px) {
//           .footer-quick-links-abs,
//           .footer-contact-abs {
//             display: none;
//           }
//         }

//         /* Bottom bar */
//         .footer-bottom {
//           position: absolute;
//           width: calc(100% - 200px);
//           height: 22px;
//           top: 582px;
//           left: 100px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           border-top: 1px solid #E5E7EB;
//           padding-top: 16px;
//         }
//         @media (max-width: 900px) {
//           .footer-bottom {
//             position: static;
//             width: 100%;
//             height: auto;
//             top: unset;
//             left: unset;
//             flex-direction: column;
//             gap: 16px;
//             align-items: flex-start;
//             padding-top: 24px;
//             margin-top: 8px;
//           }
//         }
//         @media (max-width: 540px) {
//           .footer-bottom {
//             gap: 12px;
//           }
//           .footer-bottom-links {
//             flex-wrap: wrap;
//             gap: 12px !important;
//           }
//         }

//         .footer-bottom p,
//         .footer-bottom a {
//           font-family: Epilogue;
//           font-size: 16px;
//           line-height: 140%;
//           letter-spacing: 0.02em;
//           color: #000000F2;
//           font-weight: 400;
//           margin: 0;
//           text-decoration: none;
//         }
//         @media (max-width: 480px) {
//           .footer-bottom p,
//           .footer-bottom a {
//             font-size: 13px;
//           }
//         }

//         /* Contact partner tagline on desktop is absolutely positioned */
//         .footer-contact-tagline {
//           font-family: Inter;
//           font-weight: 300;
//           font-style: italic;
//           font-size: 14px;
//           line-height: 140%;
//           letter-spacing: 0.02em;
//           color: #000000F2;
//           width: 359px;
//           margin: 0;
//           position: absolute;
//           top: 200px;
//         }
//         @media (max-width: 900px) {
//           .footer-contact-tagline {
//             position: static;
//             width: 100%;
//             margin-top: 16px;
//           }
//         }
//       `}</style>

//       {/* ════════════════════════════════
//           SECTION 1 — Warranty & Trust
//       ════════════════════════════════ */}
//       <section className="warranty-section">
//         <h2 className="warranty-heading">Warranty & Trust Signals</h2>

//         <div className="trust-grid">
//           {trustItems.map((item, i) => (
//             <div key={i} className="trust-card">
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "50px",
//                   left: "32px",
//                   width: "40px",
//                   height: "40px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 {item.icon}
//               </div>
//               <p
//                 style={{
//                   position: "absolute",
//                   top: "calc(50px + 40px + 12px)",
//                   left: "32px",
//                   right: "16px",
//                   fontFamily: "Inter",
//                   fontWeight: 600,
//                   fontSize: "clamp(18px, 2vw, 26.69px)",
//                   lineHeight: "32px",
//                   letterSpacing: "0.2px",
//                   color: "#1D1D1F",
//                   whiteSpace: "pre-line",
//                   margin: 0,
//                 }}
//               >
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <div style={{ height: "100px" }} />

//       <div style={{ position: "relative" }}>
//         {/* ── SECTION 2 — Hero Banner ── */}
//         <section className="hero-banner">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             style={{
//               position: "absolute",
//               inset: 0,
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               opacity: 0.6,
//             }}
//           >
//             <source src={Herosection} type="video/mp4" />
//           </video>

//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               backgroundColor: "#0000004D",
//             }}
//           />

//           <div
//             style={{
//               position: "relative",
//               zIndex: 10,
//               width: "100%",
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               textAlign: "center",
//               padding: "0 16px",
//               boxSizing: "border-box",
//             }}
//           >
//             <h2 className="hero-heading">
//               The Next Standard <br />
//               Begins Here.
//             </h2>
//             {/* <button
//               style={{
//                 backgroundColor: "#fff",
//                 color: "#111",
//                 fontSize: "13px",
//                 fontWeight: 600,
//                 padding: "9px 24px",
//                 borderRadius: "9999px",
//                 letterSpacing: "0.2px",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//               onMouseOver={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#e5e7eb")
//               }
//               onMouseOut={(e) =>
//                 (e.currentTarget.style.backgroundColor = "#fff")
//               }
//             >
//               Request Demo
//             </button> */}
//             <button
//               className="
//     bg-white text-[#0F172B]
//     text-[17px] font-normal leading-[20px] tracking-[-0.37px]
//     px-[24px] py-[9px]
//     rounded-full
//     hover:bg-gray-200
//     transition-colors duration-200
//     cursor-pointer
//     flex items-center justify-center
//   "
//             >
//               Request Demo
//             </button>
//           </div>
//         </section>

//         {/* ── SECTION 3 — Footer ── */}
//         <footer className="footer-wrapper">
//           <div className="footer-inner">
//             {/* Desktop spacer to maintain absolute layout height */}
//             <div className="footer-desktop-spacer" />

//             {/* Logo */}
//             <img src={logo} alt="CLEVA Logo" className="footer-logo" />

//             {/* Description */}
//             <p className="footer-desc">
//               Cleva's innovative smart customizable shoes redefine footwear with
//               revolutionary comfort, dynamic functionality, and limitless
//               personalization for all ages. Featuring groundbreaking
//               advancements like self-energy harvesting and precise self-lacing,
//               Cleva offers bespoke branding options to amplify client presence
//               in diverse environments, from schools to sports.
//             </p>

//             {/* ── Desktop absolute columns ── */}
//             <div className="footer-quick-links-abs">
//               <h4
//                 style={{
//                   fontFamily: "Inter",
//                   fontWeight: 600,
//                   fontSize: "16px",
//                   lineHeight: "140%",
//                   letterSpacing: "0.02em",
//                   color: "#000000F2",
//                   margin: "0 0 16px 0",
//                 }}
//               >
//                 Quick Links
//               </h4>
//               <ul
//                 style={{
//                   listStyle: "none",
//                   padding: 0,
//                   margin: 0,
//                   width: "197px",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "8px",
//                 }}
//               >
//                 {quickLinks.map((link) => (
//                   <li key={link}>
//                     <a
//                       href="#"
//                       style={{
//                         fontFamily: "Inter",
//                         fontWeight: 400,
//                         fontSize: "16px",
//                         lineHeight: "140%",
//                         letterSpacing: "0.02em",
//                         color: "#000000F2",
//                         textDecoration: "none",
//                       }}
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="footer-contact-abs">
//               <ContactSection taglineAbsolute />
//             </div>

//             {/* ── Mobile/Tablet columns (flex row) ── */}
//             <div className="footer-columns">
//               <div>
//                 <h4
//                   style={{
//                     fontFamily: "Inter",
//                     fontWeight: 600,
//                     fontSize: "16px",
//                     lineHeight: "140%",
//                     letterSpacing: "0.02em",
//                     color: "#000000F2",
//                     margin: "0 0 16px 0",
//                   }}
//                 >
//                   Quick Links
//                 </h4>
//                 <ul
//                   style={{
//                     listStyle: "none",
//                     padding: 0,
//                     margin: 0,
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "8px",
//                   }}
//                 >
//                   {quickLinks.map((link) => (
//                     <li key={link}>
//                       <a
//                         href="#"
//                         style={{
//                           fontFamily: "Inter",
//                           fontWeight: 400,
//                           fontSize: "16px",
//                           lineHeight: "140%",
//                           letterSpacing: "0.02em",
//                           color: "#000000F2",
//                           textDecoration: "none",
//                         }}
//                       >
//                         {link}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <ContactSection taglineAbsolute={false} />
//               </div>
//             </div>

//             {/* ── Bottom Bar ── */}
//             <div className="footer-bottom">
//               <p>© Copyright 2026, Celva All Rights Reserved</p>
//               <div
//                 className="footer-bottom-links"
//                 style={{ display: "flex", gap: "24px" }}
//               >
//                 {["Support", "Terms & Conditions", "Privacy Policy"].map(
//                   (item) => (
//                     <a key={item} href="#">
//                       {item}
//                     </a>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// /* ── Reusable Contact block ── */
// function ContactSection({ taglineAbsolute }) {
//   return (
//     <div style={{ position: "relative" }}>
//       <h4
//         style={{
//           fontFamily: "Inter",
//           color: "#000000F2",
//           fontWeight: 600,
//           fontSize: "16px",
//           lineHeight: "140%",
//           letterSpacing: "0.02em",
//           margin: "0 0 16px 0",
//         }}
//       >
//         Contact Us
//       </h4>

//       <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//         {/* Email */}
//         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <svg
//             width="19"
//             height="16"
//             viewBox="0 0 19 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             style={{ position: "relative", left: "2px", flexShrink: 0 }}
//           >
//             <path
//               d="M1.9 16C1.3775 16 0.930367 15.8043 0.5586 15.413C0.186833 15.0217 0.000633333 14.5507 0 14V2C0 1.45 0.1862 0.979333 0.5586 0.588C0.931 0.196666 1.37813 0.000666667 1.9 0H17.1C17.6225 0 18.0699 0.196 18.4423 0.588C18.8147 0.98 19.0006 1.45067 19 2V14C19 14.55 18.8141 15.021 18.4423 15.413C18.0706 15.805 17.6231 16.0007 17.1 16H1.9ZM9.74985 8.788C9.83662 8.76267 9.91958 8.725 9.99875 8.675L16.72 4.25C16.8467 4.16667 16.9417 4.06267 17.005 3.938C17.0683 3.81333 17.1 3.67567 17.1 3.525C17.1 3.19167 16.9654 2.94167 16.6962 2.775C16.4271 2.60833 16.15 2.61667 15.865 2.8L9.5 7L3.135 2.8C2.85 2.61667 2.57292 2.61267 2.30375 2.788C2.03458 2.96333 1.9 3.209 1.9 3.525C1.9 3.69167 1.93167 3.83767 1.995 3.963C2.05833 4.08833 2.15333 4.184 2.28 4.25L9.00125 8.675C9.08042 8.725 9.1637 8.76267 9.2511 8.788C9.3385 8.81333 9.42147 8.82567 9.5 8.825C9.57853 8.82433 9.66182 8.812 9.74985 8.788Z"
//               fill="#000000"
//             />
//           </svg>
//           <span
//             style={{
//               fontFamily: "Inter",
//               marginLeft: "8px",
//               fontWeight: 400,
//               fontSize: "16px",
//               lineHeight: "140%",
//               letterSpacing: "0.02em",
//               color: "#000000F2",
//             }}
//           >
//             Info@Cleva.in
//           </span>
//         </div>

//         {/* Address */}
//         <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
//           <svg
//             width="15"
//             height="20"
//             viewBox="0 0 15 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             style={{
//               position: "relative",
//               top: "2px",
//               left: "4px",
//               flexShrink: 0,
//             }}
//           >
//             <path
//               d="M7.5 9.5C6.7896 9.5 6.10829 9.23661 5.60596 8.76777C5.10363 8.29893 4.82143 7.66304 4.82143 7C4.82143 6.33696 5.10363 5.70107 5.60596 5.23223C6.10829 4.76339 6.7896 4.5 7.5 4.5C8.2104 4.5 8.89171 4.76339 9.39404 5.23223C9.89637 5.70107 10.1786 6.33696 10.1786 7C10.1786 7.3283 10.1093 7.65339 9.97468 7.95671C9.84007 8.26002 9.64276 8.53562 9.39404 8.76777C9.14531 8.99991 8.85002 9.18406 8.52505 9.3097C8.20007 9.43534 7.85175 9.5 7.5 9.5ZM7.5 0C5.51088 0 3.60322 0.737498 2.1967 2.05025C0.790176 3.36301 0 5.14348 0 7C0 12.25 7.5 20 7.5 20C7.5 20 15 12.25 15 7C15 5.14348 14.2098 3.36301 12.8033 2.05025C11.3968 0.737498 9.48912 0 7.5 0Z"
//               fill="#000000F2"
//             />
//           </svg>
//           <span
//             style={{
//               fontFamily: "Inter",
//               fontWeight: 400,
//               fontSize: "16px",
//               marginLeft: "8px",
//               lineHeight: "140%",
//               letterSpacing: "0.02em",
//               color: "#000000F2",
//             }}
//           >
//             Prestige Trade Tower, level11,
//             <br />
//             Palace Road, Bangaluru
//             <br />
//             560001
//           </span>
//         </div>

//         {/* Phone */}
//         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             style={{ flexShrink: 0 }}
//           >
//             <path
//               d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
//               fill="#000000F2"
//             />
//           </svg>
//           <span
//             style={{
//               fontFamily: "Inter",
//               fontWeight: 400,
//               fontSize: "16px",
//               lineHeight: "140%",
//               letterSpacing: "0.02em",
//               color: "#000000F2",
//             }}
//           >
//             +91 78995 88688
//           </span>
//         </div>
//       </div>

//       <p
//         className="footer-contact-tagline"
//         style={taglineAbsolute ? {} : { position: "static", width: "100%" }}
//       >
//         Partner with Cleva to revolutionise comfort, safety and performance
//         through intelligent footwear innovation.
//       </p>
//     </div>
//   );
// }
import logo from "./logo.png";
import icon1 from "./b1.png";
import icon2 from "./b2.png";
import icon3 from "./b3.png";
import icon4 from "./b4.png";
import Herosection from "./Herosection.mp4";

export default function WarrantyFooterExact() {
  const trustItems = [
    {
      icon: <img src={icon1} alt="1 Year Limited Warranty" style={{ width: "40px", height: "40px", objectFit: "contain" }} />,
      label: "1 - year Limited\nWarranty",
    },
    {
      icon: <img src={icon2} alt="30 Day Return Policy" style={{ width: "40px", height: "40px", objectFit: "contain" }} />,
      label: "30- Day Return\nPolicy",
    },
    {
      icon: <img src={icon3} alt="Secure Checkout" style={{ width: "40px", height: "40px", objectFit: "contain" }} />,
      label: "Secure Checkout",
    },
    {
      icon: <img src={icon4} alt="Global Support Network" style={{ width: "40px", height: "40px", objectFit: "contain" }} />,
      label: "Global Support\nNetwork",
    },
  ];

  const quickLinks = [
    "Home", "About Us", "Intelligent Infrastructure", "Institutional Solutions",
    "Smart Shoe", "Product", "Advances", "Contact Us",
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#ffffff", color: "#1a1a1a", overflowX: "hidden" }}>
      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        @media (max-width: 1100px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .trust-grid { grid-template-columns: 1fr; }
        }

        /* ← CHANGED: width 295px → 100% */
        .trust-card {
          width: 100%;
          height: 212px;
          border-radius: 14px;
          background-color: #F3F4F6;
          position: relative;
          flex-shrink: 0;
        }

        .warranty-section {
          width: 100%;
          max-width: 1449px;
          margin: 0 auto;
          padding: 10px 97px 0 97px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .warranty-section { padding: 10px 40px 0 40px; }
        }
        @media (max-width: 540px) {
          .warranty-section { padding: 10px 20px 0 20px; }
        }

        .warranty-heading {
          font-size: 60px;
          font-weight: 600;
          color: #000000F2;
          line-height: 56px;
          letter-spacing: -1.44px;
          font-family: Inter;
          margin-bottom: 48px;
          margin-top: 0;
        }
        @media (max-width: 768px) {
          .warranty-heading { font-size: 40px; line-height: 44px; letter-spacing: -0.8px; margin-bottom: 32px; }
        }
        @media (max-width: 480px) {
          .warranty-heading { font-size: 28px; line-height: 32px; letter-spacing: -0.5px; margin-bottom: 24px; }
        }

        .hero-banner {
          width: calc(100% - 200px);
          max-width: 1240px;
          margin: 0 auto;
          height: 469px;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          z-index: 2;
          background-color: #000;
        }
        @media (max-width: 900px) {
          .hero-banner { width: calc(100% - 80px); height: 360px; }
        }
        @media (max-width: 540px) {
          .hero-banner { width: calc(100% - 40px); height: 280px; border-radius: 12px; }
        }

        .hero-heading {
          width: 579px;
          color: #fff;
          font-size: 60px;
          font-weight: 600;
          line-height: 100%;
          letter-spacing: 0.02em;
          text-align: center;
          margin: 0 auto 20px auto;
        }
        @media (max-width: 768px) {
          .hero-heading { width: 100%; font-size: 40px; }
        }
        @media (max-width: 480px) {
          .hero-heading { font-size: 28px; }
        }

        .footer-wrapper {
          width: 100%;
          margin-left: 2px;
          margin-top: -167px;
          background-color: #FFFFFF;
          box-shadow: 2px -2px 41px 0px #1C398E33;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .footer-wrapper { margin-top: -80px; }
        }
        @media (max-width: 540px) {
          .footer-wrapper { margin-top: -40px; }
        }

        .footer-inner {
          width: 100%;
          padding: 0 40px;
          box-sizing: border-box;
          position: relative;
        }

        .footer-desktop-spacer { height: 661px; }
        @media (max-width: 900px) {
          .footer-desktop-spacer { display: none; }
          .footer-inner { padding: 200px 40px 80px 40px; }
        }
        @media (max-width: 540px) {
          .footer-inner { padding: 160px 20px 60px 20px; }
        }

        .footer-logo {
          position: absolute;
          width: 161.5px;
          height: 81.5px;
          top: 187px;
          left: 100px;
          object-fit: contain;
        }
        @media (max-width: 900px) {
          .footer-logo { position: static; display: block; margin-bottom: 20px; }
        }

        .footer-desc {
          position: absolute;
          width: 359px;
          top: 256px;
          left: 123px;
          font-family: Inter;
          font-weight: 400;
          font-size: 16px;
          line-height: 140%;
          letter-spacing: 0.02em;
          color: #000000F2;
          margin: 0;
        }
        @media (max-width: 900px) {
          .footer-desc { position: static; width: 100%; max-width: 480px; margin-bottom: 40px; }
        }

        .footer-columns { display: none; }
        @media (max-width: 900px) {
          .footer-columns { display: flex; flex-wrap: wrap; gap: 40px; margin-bottom: 40px; }
        }

        /* ← CHANGED: left: 689px → left: 48% */
        .footer-quick-links-abs {
          position: absolute;
          top: 269px;
          left: 48%;
        }

        /* ← CHANGED: left: 990px → left: 69% */
        .footer-contact-abs {
          position: absolute;
          top: 269px;
          left: 69%;
        }

        @media (max-width: 900px) {
          .footer-quick-links-abs,
          .footer-contact-abs { display: none; }
        }

        /* ← CHANGED: left: 100px → left: 7%, width: calc(100% - 200px) → width: 86% */
        .footer-bottom {
          position: absolute;
          width: 86%;
          height: 22px;
          top: 582px;
          left: 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #E5E7EB;
          padding-top: 16px;
        }
        @media (max-width: 900px) {
          .footer-bottom {
            position: static;
            width: 100%;
            height: auto;
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
            padding-top: 24px;
            margin-top: 8px;
          }
        }
        @media (max-width: 540px) {
          .footer-bottom { gap: 12px; }
          .footer-bottom-links { flex-wrap: wrap; gap: 12px !important; }
        }

        .footer-bottom p, .footer-bottom a {
          font-family: Epilogue;
          font-size: 16px;
          line-height: 140%;
          letter-spacing: 0.02em;
          color: #000000F2;
          font-weight: 400;
          margin: 0;
          text-decoration: none;
        }
        @media (max-width: 480px) {
          .footer-bottom p, .footer-bottom a { font-size: 13px; }
        }

        .footer-contact-tagline {
          font-family: Inter;
          font-weight: 300;
          font-style: italic;
          font-size: 14px;
          line-height: 140%;
          letter-spacing: 0.02em;
          color: #000000F2;
          width: 359px;
          margin: 0;
          position: absolute;
          top: 200px;
        }
        @media (max-width: 900px) {
          .footer-contact-tagline { position: static; width: 100%; margin-top: 16px; }
        }
      `}</style>

      {/* SECTION 1 — Warranty & Trust */}
      <section className="warranty-section">
        <h2 className="warranty-heading">Warranty & Trust Signals</h2>
        <div className="trust-grid">
          {trustItems.map((item, i) => (
            <div key={i} className="trust-card">
              <div style={{ position: "absolute", top: "50px", left: "32px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {item.icon}
              </div>
              <p style={{ position: "absolute", top: "calc(50px + 40px + 12px)", left: "32px", right: "16px", fontFamily: "Inter", fontWeight: 600, fontSize: "clamp(18px, 2vw, 26.69px)", lineHeight: "32px", letterSpacing: "0.2px", color: "#1D1D1F", whiteSpace: "pre-line", margin: 0 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: "100px" }} />

      <div style={{ position: "relative" }}>
        {/* SECTION 2 — Hero Banner */}
        <section className="hero-banner">
          <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}>
            <source src={Herosection} type="video/mp4" />
          </video>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "#0000004D" }} />
          <div style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 16px", boxSizing: "border-box" }}>
            <h2 className="hero-heading">The Next Standard <br />Begins Here.</h2>
            <button className="bg-white text-[#0F172B] text-[17px] font-normal leading-[20px] tracking-[-0.37px] px-[24px] py-[9px] rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex items-center justify-center">
              Request Demo
            </button>
          </div>
        </section>

        {/* SECTION 3 — Footer */}
        <footer className="footer-wrapper">
          <div className="footer-inner">
            <div className="footer-desktop-spacer" />

            <img src={logo} alt="CLEVA Logo" className="footer-logo" />

            <p className="footer-desc">
              Cleva's innovative smart customizable shoes redefine footwear with revolutionary comfort, dynamic functionality, and limitless personalization for all ages. Featuring groundbreaking advancements like self-energy harvesting and precise self-lacing, Cleva offers bespoke branding options to amplify client presence in diverse environments, from schools to sports.
            </p>

            {/* Desktop absolute columns */}
            <div className="footer-quick-links-abs">
              <h4 style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "16px", lineHeight: "140%", letterSpacing: "0.02em", color: "#000000F2", margin: "0 0 16px 0" }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "197px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "16px", lineHeight: "140%", letterSpacing: "0.02em", color: "#000000F2", textDecoration: "none" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-abs">
              <ContactSection taglineAbsolute />
            </div>

            {/* Mobile/Tablet columns */}
            <div className="footer-columns">
              <div>
                <h4 style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "16px", lineHeight: "140%", letterSpacing: "0.02em", color: "#000000F2", margin: "0 0 16px 0" }}>
                  Quick Links
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {quickLinks.map((link) => (
                    <li key={link}>
                      <a href="#" style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "16px", lineHeight: "140%", letterSpacing: "0.02em", color: "#000000F2", textDecoration: "none" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div><ContactSection taglineAbsolute={false} /></div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
              <p>© Copyright 2026, Celva All Rights Reserved</p>
              <div className="footer-bottom-links" style={{ display: "flex", gap: "24px" }}>
                {["Support", "Terms & Conditions", "Privacy Policy"].map((item) => (
                  <a key={item} href="#">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ContactSection({ taglineAbsolute }) {
  return (
    <div style={{ position: "relative" }}>
      <h4 style={{ fontFamily: "Inter", color: "#000000F2", fontWeight: 600, fontSize: "16px", lineHeight: "140%", letterSpacing: "0.02em", margin: "0 0 16px 0" }}>
        Contact Us
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", left: "2px", flexShrink: 0 }}>
            <path d="M1.9 16C1.3775 16 0.930367 15.8043 0.5586 15.413C0.186833 15.0217 0.000633333 14.5507 0 14V2C0 1.45 0.1862 0.979333 0.5586 0.588C0.931 0.196666 1.37813 0.000666667 1.9 0H17.1C17.6225 0 18.0699 0.196 18.4423 0.588C18.8147 0.98 19.0006 1.45067 19 2V14C19 14.55 18.8141 15.021 18.4423 15.413C18.0706 15.805 17.6231 16.0007 17.1 16H1.9ZM9.74985 8.788C9.83662 8.76267 9.91958 8.725 9.99875 8.675L16.72 4.25C16.8467 4.16667 16.9417 4.06267 17.005 3.938C17.0683 3.81333 17.1 3.67567 17.1 3.525C17.1 3.19167 16.9654 2.94167 16.6962 2.775C16.4271 2.60833 16.15 2.61667 15.865 2.8L9.5 7L3.135 2.8C2.85 2.61667 2.57292 2.61267 2.30375 2.788C2.03458 2.96333 1.9 3.209 1.9 3.525C1.9 3.69167 1.93167 3.83767 1.995 3.963C2.05833 4.08833 2.15333 4.184 2.28 4.25L9.00125 8.675C9.08042 8.725 9.1637 8.76267 9.2511 8.788C9.3385 8.81333 9.42147 8.82567 9.5 8.825C9.57853 8.82433 9.66182 8.812 9.74985 8.788Z" fill="#000000" />
          </svg>
          <span style={{ fontFamily: "Inter", marginLeft: "8px", fontWeight: 400, fontSize: "16px", lineHeight: "140%", letterSpacing: "0.02em", color: "#000000F2" }}>
            Info@Cleva.in
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", top: "2px", left: "4px", flexShrink: 0 }}>
            <path d="M7.5 9.5C6.7896 9.5 6.10829 9.23661 5.60596 8.76777C5.10363 8.29893 4.82143 7.66304 4.82143 7C4.82143 6.33696 5.10363 5.70107 5.60596 5.23223C6.10829 4.76339 6.7896 4.5 7.5 4.5C8.2104 4.5 8.89171 4.76339 9.39404 5.23223C9.89637 5.70107 10.1786 6.33696 10.1786 7C10.1786 7.3283 10.1093 7.65339 9.97468 7.95671C9.84007 8.26002 9.64276 8.53562 9.39404 8.76777C9.14531 8.99991 8.85002 9.18406 8.52505 9.3097C8.20007 9.43534 7.85175 9.5 7.5 9.5ZM7.5 0C5.51088 0 3.60322 0.737498 2.1967 2.05025C0.790176 3.36301 0 5.14348 0 7C0 12.25 7.5 20 7.5 20C7.5 20 15 12.25 15 7C15 5.14348 14.2098 3.36301 12.8033 2.05025C11.3968 0.737498 9.48912 0 7.5 0Z" fill="#000000F2" />
          </svg>
          <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "16px", marginLeft: "8px", lineHeight: "140%", letterSpacing: "0.02em", color: "#000000F2" }}>
            Prestige Trade Tower, level11,<br />Palace Road, Bangaluru<br />560001
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M19.95 21C17.8667 21 15.8083 20.546 13.775 19.638C11.7417 18.73 9.89167 17.4423 8.225 15.775C6.55833 14.1077 5.271 12.2577 4.363 10.225C3.455 8.19233 3.00067 6.134 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07933 8.725 3.238C8.90833 3.39667 9.01667 3.584 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.704 12.1123 8.162 12.687C8.62 13.2617 9.12433 13.816 9.675 14.35C10.1917 14.8667 10.7333 15.346 11.3 15.788C11.8667 16.23 12.4667 16.634 13.1 17L15.45 14.65C15.6 14.5 15.796 14.3877 16.038 14.313C16.28 14.2383 16.5173 14.2173 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1377 20.775 15.313C20.925 15.4883 21 15.684 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z" fill="#000000F2" />
          </svg>
          <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "16px", lineHeight: "140%", letterSpacing: "0.02em", color: "#000000F2" }}>
            +91 78995 88688
          </span>
        </div>
      </div>
      <p className="footer-contact-tagline" style={taglineAbsolute ? {} : { position: "static", width: "100%" }}>
        Partner with Cleva to revolutionise comfort, safety and performance through intelligent footwear innovation.
      </p>
    </div>
  );
}