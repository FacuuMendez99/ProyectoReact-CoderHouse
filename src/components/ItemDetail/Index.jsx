

export default function ItemDetail({detail}) {
    return (
        <div >
            <img src={`/data/productos/${detail.imagen}`} alt={detail.titulo} />
            <h2>{detail.nombre}</h2>
            <p>{detail.precio}</p>
            <div>
                <button>Agregar</button>
            </div>
        </div>
    )
}
