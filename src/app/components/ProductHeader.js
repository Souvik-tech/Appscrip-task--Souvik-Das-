"use client"

import React, { use } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const ProductHeader = ({ selectFilter, checkfilter,showTotalproduct}) => {
    const handleSelect = (e) => {
        selectFilter(e.target.value);
    }
    console.log("showTotalproduct", showTotalproduct);
    const hidefilter = "Hide Filter";
    const showfilter = "Show Filter";
    const [showFilter, setShowFilter] = useState(true);
    const toggleFilter = () => {
        setShowFilter(!showFilter);
        checkfilter(showFilter)
    }
    return (
        <div className="product-header">
            <div className='container'>
                <div className='product-header-wrap'>
                    <div className='left-header'>
                        <h5 className='total-items'>
                            {showTotalproduct ? showTotalproduct : 0} Items
                        </h5>
                        <div className='show-hide' onClick={toggleFilter}>
                            <span ><Image src="/img/arrow-left.png" alt="hide-icon" width={16} height={16} className='hide-icon' style={{
                                transform: showFilter ? "rotate(90deg)" : "rotate(270deg)"
                            }} /></span><span className='hide-text'>{showFilter ? hidefilter : showfilter}</span>
                        </div>
                    </div>
                    <div className='sort-by'>
                        <select onChange={handleSelect} className='sort-select'>
                            <option value="default">RECOMMENDED</option>
                            <option value="Newest">Newest first</option>
                            <option value="popular">popular</option>
                            <option value="high">Price : high to low</option>
                            <option value="low">Price : low to high</option>
                        </select>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ProductHeader;