export const validateItemForm = (formData) => {

    const errors = {}

    if(!formData.name?.trim()){
        errors.name = 'Name is required';
    }

    if(!formData.price || Number(formData.price) <= 0){
        errors.price = 'Price must be greater than 0';
    }

    if(!formData.quantity || Number(formData.quantity) < 0){
        errors.quantity = 'Quantity cannot be negative';
    }

    if(!formData.category?.trim()){
        errors.category = 'Category is required';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }

}