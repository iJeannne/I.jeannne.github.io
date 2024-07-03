import React from 'react';

const Menu: React.FC = () => {
    return (
        <div id="menublock">
            <ul className="menuList">
                <li className="list"><a className="menuLinks" href="#">main</a></li>
                <li className="list"><a className="menuLinks" href="#">front-end course</a>
                    <ul className="menuList">
                        <li className="list"><a className="menuLinks" href="./about-us.html">lab1</a></li>
                        <li className="list"><a className="menuLinks" href="#">lab2</a></li>
                        <li className="list"><a className="menuLinks" href="#">lab3</a></li>
                    </ul>
                </li>  
                <li className="list"><a className="menuLinks" href="#">smth1</a></li>
                <li className="list"><a className="menuLinks" href="#">about me</a></li>
            </ul>
        </div>
    );
};

export default Menu;
