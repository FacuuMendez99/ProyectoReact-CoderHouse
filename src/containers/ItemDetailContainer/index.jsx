import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/Index";
import { db } from "../../firebase/client";
import { doc, getDoc } from "firebase/firestore";

const useProductDetail = (id) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const docRef = doc(db, "products", id);
        
        const getDetail = async () => {
            const docSnap = await getDoc(docRef);
            setDetail(docSnap.data());
        };

        getDetail();
    }, [id]);

    return detail;
};

export default function ItemDetailContainer() {
    const { id } = useParams();
    const detail = useProductDetail(id);

    return (
        <div>
            <ItemDetail detail={detail}></ItemDetail>
        </div>
    );
};