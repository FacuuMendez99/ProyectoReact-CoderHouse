import {useParams} from "react-router-dom"
import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/Index"

export default function ItemDetailContainer()  {
    const [detail,setDetail] = useState({})
    const {id} = useParams ()

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch('/data/data.json')
            const productos = await response.json()

            const findProduct = productos.find(producto => producto.id === parseInt(id))

            setDetail(findProduct)
        }

        getProduct()

    }, [id])

    return (
        <div>
            <ItemDetail detail={detail}></ItemDetail>
        </div>
    )
}