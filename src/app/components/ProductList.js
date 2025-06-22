"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductList = ({ filter, idealProduct,totalProduct }) => {
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setOriginalProducts(json);
                totalProduct(json.length); // Set total products count
            });
           
    }, []);

    useEffect(() => {
        if (filter) {
            sortProducts(filter);
        }
    }, [filter]);

    const sortProducts = (filterType) => {
        const sorted = [...products]; // work on current list
        if (filterType === "high") {
            sorted.sort((a, b) => b.price - a.price);
        } else if (filterType === "low") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (filterType === "popular") {
            sorted.sort((a, b) => b.rating.rate - a.rating.rate);
        }
        setProducts(sorted);
    };

    useEffect(() => {
        if (idealProduct && idealProduct.length > 0) {
            filterByIdeal(originalProducts, idealProduct);
        } else {
            setProducts(originalProducts); // Reset to full list
        }
    }, [idealProduct]);

    const filterByIdeal = (productList, selectedIdeal) => {
        const categoryMap = {
            Men: "men's clothing",
            Women: "women's clothing",
            Electronics: "electronics",
            Jewelery: "jewelery",
            "Baby & Kids": "toys" // Optional category if needed
        };

        const selectedCategories = selectedIdeal
            .map(label => categoryMap[label])
            .filter(Boolean);

        const filtered = productList.filter(product =>
            selectedCategories.includes(product.category)
        );

        setProducts(filtered);
    };

    return (
        <div>
           

            {products.length > 0 ? (
                <div className="product-list">
                    {products.map(product => (
                        <div key={product.id} className="product-item grid-3">
                            <img
                                src={product.image}
                                alt={product.title}
                            />
                            <h2>{product.title}</h2>
                            <div className='product-wishlist'>
                                <div className="sign-in"> <Link href="/" >Sign in</Link> or Create an account to see pricing</div>
                                <Image src="/img/heart.png" alt="wishlist" width={24} height={24} className='pr-wishlist'/>
                            </div>

                        </div>

                    ))}
                </div>
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
};

export default ProductList;
