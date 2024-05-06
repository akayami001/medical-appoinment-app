"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
    const [categoryList, setcategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        getCategoryList()
    }, [])

    const getCategoryList = () => {
      
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    return (
        <div className='h-screen mt-5 flex flex-col fixed'>
            <div className='overflow-visible'>
                <div className='Suggestions'>
                    {categoryList.map((item, index) => (
                        <div key={index}>
                            <Link
                                href={`/search/${item?.attributes?.Name}`}
                                className={`p-2 flex gap-2 text-[14px] text-blue-600 rounded-md cursor-pointer w-full items-center ${selectedCategory === item.attributes.Name && 'bg-blue-100'
                                    }`}
                                onClick={() => handleCategoryClick(item.attributes.Name)}
                            >
                                <Image
                                    src={item.attributes?.Icon?.data[0]?.attributes?.url}
                                    alt='icon'
                                    width={25}
                                    height={25}
                                />
                                <label>{item?.attributes?.Name}</label>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryList