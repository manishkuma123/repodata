// // import React from "react";
// // import secondvideo from "./new.mp4";

// // const VideoPage = () => {
// //   return (
// //     <div className="relative w-full h-[738px] overflow-hidden">
     
// //       <video
// //         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[738px] object-cover"
// //         src={secondvideo}
// //         autoPlay
// //         muted
// //         loop
// //       />

// //       {/* Heading */}
// //       <div className="absolute top-[87px] left-[1022px]">
// //         <h1
// //           className="text-white font-semibold"
// //           style={{
// //             fontFamily: "Inter",
// //             fontSize: "60px",
// //             lineHeight: "100%",
// //             letterSpacing: "-0.02em",
// //           }}
// //         >
// //           See It from Every Angle
// //         </h1>
// //       </div>

    
// //       <div className="absolute top-[224px] left-[1022px]">
// //         <button
// //           className=" border bg-[rgb(255,255,255)] rounded-full"
// //           style={{
// //             fontFamily: "Inter",
// //             fontSize: "17px",
// //             fontWeight: 400,
// //             lineHeight: "25px",
// //             letterSpacing: "-0.37px",
// //             padding: "11px 13px",
            
// //             color: "#000000"

// //           }}
// //         >
// //           Explore in 3D
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VideoPage;

// import React from "react";
// import secondvideo from "./new.mp4";

// const VideoPage = () => {
//   return (
//     <div
//       className="
//       relative w-full h-[738px] overflow-hidden

//       /* Only smaller screens */
//       max-lg:h-[60vh]
//       "
//     >
//       {/* Video */}
//       <video
//         className="
//         absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//         w-screen h-[738px] object-cover

//         /* Small screen fix */
//         max-lg:w-full max-lg:h-full 
//         max-lg:top-0 max-lg:left-0 
//         max-lg:translate-x-0 max-lg:translate-y-0
//         "
//         src={secondvideo}
//         autoPlay
//         muted
//         loop
//       />

//       {/* Content Wrapper for mobile only */}
//       <div
//         className="
//         max-lg:absolute max-lg:inset-0 
//         max-lg:flex max-lg:flex-col 
//         max-lg:justify-center max-lg:items-center 
//         max-lg:px-4 max-lg:text-center
//         "
//       >
//         {/* Heading */}
//         <div
//   className="
//   absolute

//   /* Desktop exact */
//   lg:top-[87px] lg:left-[1022px] lg:w-[418px] lg:h-[120px]

//   /* Mobile (keep previous responsive behavior) */
//   max-lg:static max-lg:mb-4
//   "
// >
//   <h1
//     className="text-white font-semibold"
//     style={{
//       fontFamily: "Inter",
//       fontWeight: 600,
//       fontSize: "60px",
//       lineHeight: "100%",
//       letterSpacing: "-0.02em",
//       color: "#FFFFFF",
//     }}
//   >
//     See It from Every Angle
//   </h1>
// </div>
//         {/* Button */}
//         <div
//           className="
//           absolute top-[224px] left-[1022px]

//           /* Mobile override */
//           max-lg:static
//           "
//         >
//           <button
//             className="border bg-[rgb(255,255,255)] rounded-full"
//             style={{
//               fontFamily: "Inter",
//               fontSize: "17px",
//               fontWeight: 400,
//               lineHeight: "25px",
//               letterSpacing: "-0.37px",
//               padding: "11px 13px",
//               color: "#000000",
//             }}
//           >
//             Explore in 3D
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;


import React from "react";
import secondvideo from "./new.mp4";

const VideoPage = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[738px] overflow-hidden">

      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={secondvideo}
        autoPlay
        muted
        loop
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center lg:items-end lg:justify-start lg:px-0 lg:text-left">

        {/* Heading */}
        <h1
          className="
            text-white font-semibold
            text-3xl sm:text-4xl md:text-5xl lg:text-[60px]
            leading-tight lg:leading-[100%]
            tracking-tight
            mb-4 lg:mb-0
            lg:absolute lg:top-[87px] 
           lg:left-[71%] 
          lg:w-[29%] lg:max-w-[418px]
          "
          style={{ fontFamily: "Inter" }}
        >
          See It from Every Angle
        </h1>

        {/* Button */}
        <button
          className="
            border bg-white rounded-full text-black
            text-sm sm:text-base lg:text-[17px]
            px-4 py-2 lg:px-[13px] lg:py-[11px]
            lg:absolute lg:top-[224px]
            lg:left-[71%]
          "
          style={{ fontFamily: "Inter", letterSpacing: "-0.37px", lineHeight: "25px" }}
        >
          Explore in 3D
        </button>

      </div>
    </div>
  );
};

export default VideoPage;