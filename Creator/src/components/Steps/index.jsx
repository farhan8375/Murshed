import React from "react";
import icon1 from "../../../public/img/Group1.svg";
import icon2 from "../../../public/img/Vector1.svg";
import icon3 from "../../../public/img/icon1.svg";
import { useState } from "react";

export const BasicStep = () => {
  const [selectedOption, setSelectedOption] = useState("Auto");
  const [selectedPosition, setSelectedPosition] = useState("right-top");

  const handleRadioChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  return (
    <div className=" min-h-[96vh]">
      <h2 className="text-lg font-semibold mb-4">Step 01</h2>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="lastStep" className="mr-2 p-4 " />
        <label htmlFor="lastStep" className="text-sm">
          This is the last step
        </label>
      </div>

      <div className="border-b border-gray-200 mb-4">
        <ul className="flex">
          <li className="text-blue-500 px-3 py-2 font-medium border-b-2 border-blue-500">
            Basic
          </li>
          <li className="text-gray-500 px-3 py-2 font-medium">Design</li>
          <li className="text-gray-500 px-3 py-2 font-medium">Properties</li>
        </ul>
      </div>

      <div className="mb-4 ">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Step title
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2  focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-4 flex justify-between">
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Select icon
        </label>

        <select
          defaultValue={"selevt"}
          className="w-28 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
        >
          <option> Start</option>
          <option>Heart</option>
          <option>Circle</option>
          {/* Add more icons as needed */}
        </select>
      </div>

      <div className="flex gap-2 text-blue-500 text-sm  cursor-pointer">
        <img src={icon1} alt="" />
        <h3> Add more elements </h3>
      </div>
      <hr className="h-[1.5px] my-3 bg-gray-300" />

      <div className="flex gap-2  text-blue-500 text-sm cursor-pointer items-center mb-4">
        <img src={icon2} alt="" />
        <h3>Reselect Element </h3>
      </div>

      <div className="flex items-center ">
        <input type="checkbox" id="cssSelector" className="mr-2" />
        <label htmlFor="cssSelector" className="text-sm">
          Custom CSS selector
        </label>
      </div>
      <hr className="h-[1.5px] bg-gray-300 my-3" />

      <div className="mb-4 flex justify-between">
        <label className="block text-sm font-medium text-gray-700 mt-2">
          Specify trigger
        </label>
        <select className="w-28 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300">
          <option>Click (Default)</option>
          <option>Heart</option>
          <option>Circle</option>
          {/* Add more icons as needed */}
        </select>
      </div>
      <hr className="h-[1.5px] bg-gray-300 my-3" />
      <div className="mb-4 flex justify-between">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tooltip placement
        </label>
        <div className="flex">
          {/* Auto Button */}
          <button
            onClick={() => setSelectedOption("Auto")}
            className={`w-16 py-1 rounded-l-md focus:outline-none transition-colors duration-470
            ${
              selectedOption === "Auto"
                ? "bg-blue-500 text-white"
                : "bg-white text-black border border-blue-500 hover:bg-blue-100"
            }
          `}
          >
            Auto
          </button>

          {/* Custom Button */}
          <button
            onClick={() => setSelectedOption("Custom")}
            className={`w-16 py-1 rounded-r-md focus:outline-none transition-colors duration-470
            ${
              selectedOption === "Custom"
                ? "bg-blue-500 text-white"
                : "bg-white text-black border border-blue-500 hover:bg-blue-100"
            }
          `}
          >
            Custom
          </button>
        </div>
      </div>
      <div class=" flex mb-1 justify-center gap-14">
        <input
          type="radio"
          name="pulseposition"
          value="right-top"
          class="radio-button accent-blue-500"
          
        />
        <input
          type="radio"
          name="pulseposition  accent-blue-500"
          value="right"
          class="radio-button  accent-blue-500"
        />
        <input
          type="radio"
          name="pulseposition  accent-blue-500"
          value="right-bottom  accent-blue-500"
          class="radio-button  accent-blue-500"
        />
      </div>
      <div className=" absolute  right-[76px] flex gap-14">
        <span class="inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-r-slate-400"></span>
        <span class="inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-r-slate-400"></span>
        <span class="{inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-blue-500"></span>
      </div>

      <div className="flex justify-center p-2 gap-3">
        <div class="grid grid-rows-3 gap-2">
          <input
            type="radio"
            name="pulseposition"
            value="right-top"
            class="radio-button  accent-blue-500"
          />
          <input
            type="radio"
            name="pulseposition"
            value="right"
            class="radio-button  accent-blue-500"
          />
          <input
            type="radio"
            name="pulseposition"
            value="right-bottom"
            class="radio-button  accent-blue-500"
          />
        </div>
        <div className=" relative">
          <div className="  relative w-40 border-2 rounded-md border-blue-500 h-20 p-2">
            <div className="px-[6px]">
              <h3>Place the tooltip at the</h3>
              <h3 className=" ml-[7px] font-bold">left-bottom corner</h3>
              <h3>of the selected element</h3>
            </div>
          </div>

          <div className=" absolute  right-[7px] flex gap-14">
            <span class="inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-r-slate-400"></span>
            <span class="inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-r-slate-400"></span>
            <span class="inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-r-slate-400"></span>
          </div>

          <div class="grid grid-rows-3 bottom-[6px] absolute right-[-10px] mt-6 gap-4">
            <span class="inline-block w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-slate-200"></span>
            <span class="inline-block w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-slate-200"></span>
            <span class="inline-block w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-slate-200"></span>
          </div>

          <div class="grid grid-rows-3 bottom-[6px] absolute left-[-10px] mt-6 gap-4">
            <span class="inline-block w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-slate-200"></span>
            <span class="inline-block w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-slate-200"></span>
            <span class="inline-block w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-slate-200"></span>
          </div>
        </div>

        <div class="grid grid-rows-3 gap-2">
          <input
            type="radio"
            name="pulseposition"
            value="right-top"
            class="radio-button accent-blue-500"
          />

          <input
            type="radio"
            name="pulseposition"
            value="right"
            class="radio-button  accent-blue-500"
          />
          <input
            type="radio"
            name="pulseposition"
            value="right-bottom"
            class="radio-button  accent-blue-500"
          />
        </div>
      </div>

      <div class=" flex mt-1 justify-center gap-14 ">
        <input
          type="radio"
          name="pulseposition"
          value="right-top"
          class="radio-button  accent-blue-500"
        />
        <input
          type="radio"
          name="pulseposition"
          value="right"
          class="radio-button  accent-blue-500"
        />
        <input
          type="radio"
          name="pulseposition"
          value="right-bottom"
          class="radio-button  accent-blue-500"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button className="py-2 px-4  bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
          Cancel
        </button>
        <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
          Save step
        </button>
      </div>
    </div>
  );
};














// import React, { useState } from "react";

// function TooltipStep() {
//   const [selectedPosition, setSelectedPosition] = useState("right-top");

//   const handleRadioChange = (event) => {
//     setSelectedPosition(event.target.value);
//   };

//   return (
//     <div className="min-h-[96vh]">
//       <h2 className="text-lg font-semibold mb-4">Step 01</h2>

//       {/* Checkbox */}
//       <div className="flex items-center mb-4">
//         <input type="checkbox" id="lastStep" className="mr-2 p-4 " />
//         <label htmlFor="lastStep" className="text-sm">
//           This is the last step
//         </label>
//       </div>

//       {/* Tab navigation */}
//       <div className="border-b border-gray-200 mb-4">
//         <ul className="flex">
//           <li className="text-blue-500 px-3 py-2 font-medium border-b-2 border-blue-500">
//             Basic
//           </li>
//           <li className="text-gray-500 px-3 py-2 font-medium">Design</li>
//           <li className="text-gray-500 px-3 py-2 font-medium">Properties</li>
//         </ul>
//       </div>

//       {/* Step Title */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Step title
//         </label>
//         <input
//           type="text"
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
//         />
//       </div>

//       {/* Description */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Description
//         </label>
//         <textarea
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
//           rows="3"
//         ></textarea>
//       </div>

//       {/* Select Icon */}
//       <div className="mb-4 flex justify-between">
//         <label className="block text-sm font-medium text-gray-700 mt-2">
//           Select icon
//         </label>
//         <select
//           defaultValue={"select"}
//           className="w-28 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
//         >
//           <option>Start</option>
//           <option>Heart</option>
//           <option>Circle</option>
//         </select>
//       </div>

//       {/* Add more elements */}
//       <div className="flex gap-2 text-blue-500 text-sm cursor-pointer">
//         <h3>Add more elements</h3>
//       </div>
//       <hr className="h-[1.5px] my-3 bg-gray-300" />

//       {/* Reselect Element */}
//       <div className="flex gap-2 text-blue-500 text-sm cursor-pointer items-center mb-4">
//         <h3>Reselect Element</h3>
//       </div>

//       {/* Custom CSS Selector */}
//       <div className="flex items-center">
//         <input type="checkbox" id="cssSelector" className="mr-2" />
//         <label htmlFor="cssSelector" className="text-sm">
//           Custom CSS selector
//         </label>
//       </div>
//       <hr className="h-[1.5px] bg-gray-300 my-3" />

//       {/* Specify Trigger */}
//       <div className="mb-4 flex justify-between">
//         <label className="block text-sm font-medium text-gray-700 mt-2">
//           Specify trigger
//         </label>
//         <select className="w-28 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300">
//           <option>Click (Default)</option>
//           <option>Heart</option>
//           <option>Circle</option>
//         </select>
//       </div>
//       <hr className="h-[1.5px] bg-gray-300 my-3" />

//       {/* Tooltip Placement */}
//       <div className="mb-4 flex justify-between">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Tooltip placement
//         </label>
//         <div className="flex">
//           <button
//             onClick={() => setSelectedPosition("Auto")}
//             className={`w-16 py-1 rounded-l-md focus:outline-none transition-colors duration-470 ${
//               selectedPosition === "Auto"
//                 ? "bg-blue-500 text-white"
//                 : "bg-white text-black border border-blue-500 hover:bg-blue-100"
//             }`}
//           >
//             Auto
//           </button>

//           <button
//             onClick={() => setSelectedPosition("Custom")}
//             className={`w-16 py-1 rounded-r-md focus:outline-none transition-colors duration-470 ${
//               selectedPosition === "Custom"
//                 ? "bg-blue-500 text-white"
//                 : "bg-white text-black border border-blue-500 hover:bg-blue-100"
//             }`}
//           >
//             Custom
//           </button>
//         </div>
//       </div>

//       {/* Radio Buttons & Triangles */}
//       <div className="flex justify-center p-2 gap-3">
//         <div className="grid grid-rows-3 gap-2">
//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="pulseposition"
//               value="right-top"
//               className="radio-button accent-blue-500"
//               checked={selectedPosition === "right-top"}
//               onChange={handleRadioChange}
//             />
//             <span
//               className={`inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent ${
//                 selectedPosition === "right-top"
//                   ? "border-b-blue-500"
//                   : "border-b-gray-400"
//               }`}
//             ></span>
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="pulseposition"
//               value="right"
//               className="radio-button accent-blue-500"
//               checked={selectedPosition === "right"}
//               onChange={handleRadioChange}
//             />
//             <span
//               className={`inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent ${
//                 selectedPosition === "right"
//                   ? "border-b-blue-500"
//                   : "border-b-gray-400"
//               }`}
//             ></span>
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="radio"
//               name="pulseposition"
//               value="right-bottom"
//               className="radio-button accent-blue-500"
//               checked={selectedPosition === "right-bottom"}
//               onChange={handleRadioChange}
//             />
//             <span
//               className={`inline-block w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent ${
//                 selectedPosition === "right-bottom"
//                   ? "border-b-blue-500"
//                   : "border-b-gray-400"
//               }`}
//             ></span>
//           </div>
//         </div>

//         {/* Tooltip */}
//         <div className="relative">
//           <div className="relative w-40 border-2 rounded-md border-blue-500 h-20 p-2">
//             <div className="px-[6px]">
//               <h3>Place the tooltip at the</h3>
//               <h3 className="ml-[7px] font-bold">{selectedPosition}</h3>
//               <h3>of the selected element</h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-between mt-4">
//         <button className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
//           Cancel
//         </button>
//         <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300">
//           Save step
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TooltipStep;
