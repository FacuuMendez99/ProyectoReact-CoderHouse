import {useParams} from "react-router-dom"
import { useState,useEffect } from "react"
import ItemDetail from "../../components/ItemDetail/Index"
import { db } from "../../firebase/client"
import { doc, getDoc } from "firebase/firestore"

export default function ItemDetailContainer()  {
    const [detail,setDetail] = useState({})
    const {id} = useParams ()

    const docRef = doc(db, "products", id)
    const getDetail = async () => {
        const docSnap = await getDoc(docRef)
        setDetail(docSnap.data())
    }
    useEffect(() => {
        getDetail()
    }, [id])

    return (
        <div>
            <ItemDetail detail={detail}></ItemDetail>
        </div>
    )
}