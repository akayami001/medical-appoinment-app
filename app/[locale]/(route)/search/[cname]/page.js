"use client"
import Image from 'next/image'
import React from 'react'
import { data } from "../../../_mocks_/DoctorsData";
function Search({ params }) {

  return (
    <div>
      <div className="mb-10 px-8">
        <h2 className="font-bold text-xl">Our Doctors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
          {data &&
            data.map((doctor, i) => (
              <div className="border-[1px] rounded-lg p-3" key={doctor.name}>
                <Image
                  src={doctor.image}
                  alt="Doctor"
                  width={500}
                  height={200}
                  className="h-[300px] w-full object-cover rounded"
                />

                <div className="mt-3 items-baseline flex flex-col gap-1">
                  <h2
                    key={i}
                    className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary mr-2"
                  >
                    {doctor.fields}
                  </h2>

                  <h2 className="font-bold">{doctor.name}</h2>
                  <h2 className="text-primary text-sm">{doctor.experience}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  )
}

export default Search