const typeFilter = async (types) => {
    const fetchFilterTypes = await fetch("https://pokeapi.co/api/v2/type");
    const resFilterTypes = await fetchFilterTypes.json();
    console.log(resFilterTypes);
};

// tengo que detectar el nombre, hacer un filter y seleccionar el objeto con ese nombre, a ese objeto le hago el fetch a la url, dentro del fetch busco "pokemon"
// cuando tengo ese listado seteo nuevamente datapokemon que esta en el provider
// este seteo deberia actualziar el componente, mirar useeffect
// agregar una cruz que quite filtros
// limitar filtro siempre a cantidad de 12
// verificar como hacer pagination con esto, dado que no hay url para verificar la paginacion

const filtrar = (nombre) => {
    console.log("clickeaste " + nombre);
};

const Li = ({ type, url }) => {
    return (
        <a
            href={url}
            onClick={(e) => {
                e.preventDefault();
                filtrar(e.target.innerText);
            }}
        >
            <li>{type.charAt(0).toUpperCase() + type.slice(1)}</li>
        </a>
    );
};

export default Li;
