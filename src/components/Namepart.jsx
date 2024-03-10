import React from "react";
import imgmale from '../assets/man-wearing-glasses-smiling-head_1308-153387.avif'
import imgfemale from '../assets/zrhv_9oow_230510.jpg'
import {useSelector} from "react-redux";
import store from "../store";
const Namepart = () => {
    const authslice=useSelector(store=>store.authslice);
  return (
    <div className="md:w-[300px] min-w-[220px] flex h-full gap-2">
      <div className="w-[23%] flex justify-end items-center h-full ">
        <div className="md:w-[80%] md:h-[95%] w-[65%] h-[65%] rounded-full overflow-hidden flex justify-center items-center ">
        <img src={authslice.male?imgmale:imgfemale} className="w-full h-[100%]  object-center rounded-full" alt="" />
        </div>
        
      </div>
      <div className="w-[77%]  flex flex-col text-white items-center justify-center">
        <div className="text-white text-sm md:text-lg font-mono capitalize">{authslice.namee}</div>
        <div className="text-xs">{authslice.email}</div>
      </div>
    </div>
  );
};

export default Namepart;
