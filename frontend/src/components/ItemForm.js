import React,{ useState, useEffect} from 'react';
import { validateItemForm } from "../utils/validation.js"

const ItemForm = ({isSubmitting,initialData,onSubmit}) => {

    const [formData,setFormData]= useState({
        name:'',
        description: '',
        price: 0,
        quantity: 0,
        category: ''
    })

    const[errors,setErrors] = useState({});

    const handleChange = (e) => {
        const{ name, value } = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:name === "price" || name === "quantity"? Number(value):value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validation = validateItemForm(formData)
        setErrors(validation.errors);

        if(validation.isValid){
            await onSubmit(formData)
        }


    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">

            <div className="form-control">
                <label className="label">
                <span className="label-text">Name*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${errors.name?'input-error':''}`}
                />
                {errors.name && (<span className="text-error text-sm">{errors.name}</span>)}
            </div>

            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                    >
                    </textarea>
            </div>
            <div className="form-control">
                <label className="label">Price*</label>
                <input
                    type='number'
                    name="price"
                    value={formData.price}
                    step="0.01"
                    onChange={handleChange}
                    className={`input input-bordered w-full ${errors.price?'input-error':''}`}
                />
                {errors.price && (<span>{errors.price}</span>)}
            </div>
            <div className="form-control">
                <label className="label">Quantity*</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={`input input-bordered w-full ${errors.quantity?'input-error':''}`}
                />
            </div>
            <div className="form-control">
                <label className="label">Category*</label>
                <Select name="category" value={formData.category} onChange={handleChange}>
                    <option value=''>Select Category*</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                </Select>
            </div>
            <div className='flex justify-end space-x-4 pt-4'>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    { 
                    isSubmitting ? (<span className="loading loading-spinner"></span>)
                    :
                    initialData ? 'Update Item':'Create Item'
                    }
                </button>
            </div>
        </form>
    </div>
  )
}

export default ItemForm