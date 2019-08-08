import React from 'react'

const MenuFilters = (props) => {
    const { handleFilters } = props
    
        return (
            <div className="menuFilters">
                <button className="itemMenuFilters" onClick={() => handleFilters(0)}>
                    <span>Todos</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(1)}>
                    <span className="itemIcon icon-cutlery"></span>
                    <span className="itemFilterTxt">Alimentos</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(2)}>
                    <span className="itemIcon icon-treatment"></span>
                    <span className="itemFilterTxt">Belleza / Fitness</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(3)}>
                    <span className="itemIcon icon-book"></span>
                    <span className="itemFilterTxt">Educación</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(4)}>
                    <span className="itemIcon icon-portfolio"></span>
                    <span className="itemFilterTxt">Hogar y oficina</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(5)}>
                    <span className="itemIcon icon-line-chart"></span>
                    <span className="itemFilterTxt">Mayoristas</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(6)}>
                    <span className="itemIcon icon-first-aid-kit"></span>
                    <span className="itemFilterTxt">Salud</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(7)}>
                    <span className="itemIcon icon-service"></span>
                    <span className="itemFilterTxt">Servicios</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(8)}>
                    <span className="itemIcon icon-plane"></span>
                    <span className="itemFilterTxt">Turismo y Entretenimiento</span>
                </button>
                <button className="itemMenuFilters" onClick={() => handleFilters(9)}>
                    <span className="itemIcon icon-female-black-dress"></span>
                    <span className="itemFilterTxt">Moda</span>
                </button>
            </div>
        )
    
}

export default MenuFilters;