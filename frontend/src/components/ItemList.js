import React, { useState } from 'react'
import Link from 'next/link';


const ItemList = ({items,onDelete}) => {

    const [deletingId, setDeletingId] = useState(null);

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            await onDelete(id);
        } catch (error) {
            console.log(error);
        }finally{
            setDeletingId(null);
        }
    }

  return (
    <div>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                      items.map((item) => (
                        
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>{item.category}</td>
                            <td>
                            <div className="flex space-x-2">
                                <Link href={`/items/edit${item.id}`}>
                                <button className="btn btn-sm btn-primary">Edit</button>
                                </Link>
                                <button
                                    className="btn btn-sm btn-error"
                                    onClick={()=>{handleDelete(item.id)}}
                                    disabled={ deletingId === item.id }
                                >
                                    { deletingId === item.id ? 'Deleting...' :'Delete' }
                                </button>
                            </div>
                            </td>
                        </tr>

                        
                        
                      ) )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ItemList