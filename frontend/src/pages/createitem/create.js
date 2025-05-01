import { useState } from 'react';
import { useRouter } from 'next/router';
import { createItem } from '../../services/api.js';
import  ItemForm  from '../../components/ItemForm.js'
import Layout from '../../components/Layout.js';


export default function CreateItemPage(){
    const router = useRouter();
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);
            await createItem(formData);
            router.push('/items');
        } catch (error) {
            console.error('Error creating item:',error);   
        }finally{
            setIsSubmitting(false);
        }
    }

    return(
        <>
        <Layout title="Create New Item">
            <div className="max-w-4xl mx-auto py-8">
                <h1 className="text-2xl font-bold mb-6">Create New Item</h1>
                <ItemForm onSubmit={handleSubmit} isSubmitting={isSubmitting}/>
            </div>
        </Layout>
        </>
    )


}

