 import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem, updateItem } from '../../services/api.js';
import ItemForm from '../../components/ItemForm.js';
import Layout from '../../components/Layout.js';
import LoadingSpinner from '../../components/LoadingSpinner.js';

export default function EditItemPage(){

    const router = useRouter();
    const { id } = router.query
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(id){
            const loadItem = async () => {
                try {
                    setIsLoading(true);
                    const data = await getSingleItem(id);
                    setItem(data);
                } catch (error) {
                    setError('Failed to load item');
                    console.error(err);
                }finally{
                    setIsLoading(false);
                }
            }
            loadItem(); 
        }
    },[id])

    const handleSubmit = async (formData) => {
        try{
            setIsSubmitting(true);
            await updateItem(id,formData);
            router.push('/items');
        }catch(error){
            console.error('Error updating item:', err);
        }finally{
            setIsSubmitting(false);
        }
    }

    if(isLoading){
        return(
            <Layout>
                <LoadingSpinner/>
            </Layout>
        )
    }

    if (error) {
        return (
            <Layout title="Error">
                 <div className="alert alert-error">
                    <div>
                        <span>{error}</span>
                    </div>
                 </div>
            </Layout>
        )
    }

return(
    <Layout>
         <Layout title="Edit Item">
            <div className="max-w-4xl mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Edit Item</h1>
            <ItemForm 
             initialData={item}
             onSubmit={handleSubmit} 
             isSubmitting={isSubmitting}  
            />
            </div>
         </Layout>
    </Layout>
)





}

