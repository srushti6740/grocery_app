import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const QtyBox = () => {
    const [qtyValue, setQtyValue] = useState(1);

    const minusQty = () =>{
        if(qtyValue === 1){
            setQtyValue(1)
        }else{
             setQtyValue(qtyValue - 1)
        }
    }
  return (
    <div className="qtyBox border border-rgba[(0,0,0,0.1)] rounded-md flex items-center gap-1 w-[70px] h-[40] relative">
      <input type="number" className="w-full h-full border-0 outline-0 mx-3" value={qtyValue} min={1} />
      <div className="flex flex-col gap-1">
      
        <IoIosArrowUp className="cursor-pointer mr-2" onClick={()=>{setQtyValue(qtyValue + 1)}} />
        <IoIosArrowDown className="cursor-pointer" onClick={minusQty} />
      </div>
    </div>
  );
};

export default QtyBox;
