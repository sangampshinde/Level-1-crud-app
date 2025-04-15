import { useState, useEffect } from 'react';
import { getAllItems, deleteItem } from '../../services/api.js';
import ItemList from '../../components/ItemList';
import Link from 'next/link';
import LoadingSpinner from '../../components/LoadingSpinner';
import Layout from '../../components/Layout';


export default function ItemsPage(){
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const loadItems = async () => {
            try {
                setIsLoading(true)
                const data = await getAllItems();
                setItems(data);
            } catch (error) {
                setError('Failed to load items');
                console.error(err);
            }finally{
                setIsLoading(false)
            }
        }
        loadItems();
    },[])

    const handleDelete = async(id) => {
        try {
            await deleteItem(id);
            setItems(items.filter(item => item.id !== id))
        } catch (error) {
            setError('Failed to delete item');
            console.error(err);
        }
    }

    if(isLoading){
        return(
            <Layout title="Loading Items...">
                 <LoadingSpinner/>
            </Layout>
        )
    }

    if(error){
        return(
            <Layout title="Error">
                <div className="alert alert-error">
                <div>
                    <span>{error}</span>
                </div>
                </div>
            </Layout>
        )
    }
}

