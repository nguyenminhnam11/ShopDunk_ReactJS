import React from 'react';
import './Breadcrums.css'
function Breadcrums({product}) {
    return (
        <div className='breadcrum'>
            Trang chủ <i class="fa-solid fa-chevron-right"></i> {product.category} <i class="fa-solid fa-chevron-right"></i> {product.name}
        </div>
    );
}

export default Breadcrums;