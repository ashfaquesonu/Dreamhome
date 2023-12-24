// import React from 'react';
// import { ThreeDots } from 'react-loader-spinner';
// import { FaDownload } from 'react-icons/fa';
// // import { SparklesIcon } from '@heroicons/react/outline';

// function ImageOutput(props) {
//   return (
//     <section className="relative w-full">
//       <button
//         type="button"
//         className={`${
//           props.loading ? 'flex items-center justify-center' : ''
//         } relative block h-full w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
//       >
//         {!props.outputImage && props.loading ? (
//           <span className="flex flex-col items-center">
//             <ThreeDots
//               height="50"
//               width="60"
//               color="#eee"
//               ariaLabel="three-dots-loading"
//               visible={props.loading}
//             />
//             <span className="block text-sm font-semibold text-gray-300">
//               Processing the output image
//             </span>
//           </span>
//         ) : null}

//         {!props.outputImage && !props.loading ? (
//           <>
//             {/* <SparklesIcon className="mx-auto h-12 w-12 text-gray-400" /> */}
//             <span className="mt-2 block text-sm font-semibold text-gray-300">
//               {props.title}
//             </span>
//           </>
//         ) : null}

//         {!props.loading && props.outputImage ? (
//           <img
//             src={props.outputImage}
//             alt="output"
//             className="h-full w-full object-cover"
//           />
//         ) : null}
//       </button>

//       {!props.loading && props.outputImage ? (
//         <button
//           onClick={props.downloadOutputImage}
//           className="group absolute right-1 top-1 bg-yellow-500 p-2 text-black"
//         >
//           <FaDownload className="h-4 w-4 duration-300 group-hover:scale-110" />
//         </button>
//       ) : null}
//     </section>
//   );
// }

// export default ImageOutput;
import React from "react";
import { FaDownload } from "react-icons/fa";
import { SparklesIcon } from "@heroicons/react/24/outline";

type ImageOutputProps = {
  loading: boolean;
  outputImage: string | null;
  downloadOutputImage(): void;
};

const ImageOutput: React.FC<ImageOutputProps> = ({
  loading,
  outputImage,
  downloadOutputImage,
}) => (
  <section className="relative w-full">
    <button
      type="button"
      className={`${
        loading ? "flex items-center justify-center" : ""
      } relative block h-full w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {!outputImage && loading ? (
        <div className="flex flex-col items-center">
          <span className="block text-sm font-semibold text-gray-300">
            Processing the output image
          </span>
        </div>
      ) : null}

      {!outputImage && !loading ? (
        <>
          <SparklesIcon className="mx-auto h-12 w-12 text-gray-400" />
          <span className="mt-2 block text-sm font-semibold text-gray-300">
            AI-generated output goes here
          </span>
        </>
      ) : null}

      {!loading && outputImage ? (
        <img
          src={outputImage}
          alt="output"
          className="h-full w-full object-cover"
        />
      ) : null}
    </button>

    {!loading && outputImage ? (
      <button
        onClick={downloadOutputImage}
        className="group absolute right-1 top-1 bg-yellow-500 p-2 text-black"
      >
        <FaDownload className="h-4 w-4 duration-300 group-hover:scale-110" />
      </button>
    ) : null}
  </section>
);

export default ImageOutput;
