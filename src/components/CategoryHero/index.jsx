import React from 'react';

import './categoryhero.scss';

function CategoryHero({title}) {
    return (
        <div className="category-hero">
            <h2 className="category-hero-title">{title}</h2>
        </div>
    );
}

export default CategoryHero;
