import React from 'react'

const ClothesWiseFilter = () => {
  return (
    <div className="py-3 border-b-[1px] border-[#a2a1ad]/40">
          {["T shirts", "Hoddies", "Shirts", "Shorts", "Jeans"].map(
            (ele, idx) => (
              <span
                className="block text-sm text-[#707070] ease-in duration-100 hover:bg-[#f3f3f3] rounded-4xl px-4 py-2"
                key={idx}
              >
                {ele}
              </span>
            )
          )}
        </div>
  )
}

export default ClothesWiseFilter