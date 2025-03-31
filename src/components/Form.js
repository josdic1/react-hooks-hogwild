import { useState } from 'react';

function Form({ onSubmit }) {

    const [ formData, setFormData ] = useState(
        {
    name: "",
    specialty: "",
    greased: false,
    weight: 0,
    "highest medal achieved": "",
    image: ""
    })

 const onFormUpdate = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prevData => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
    }))
 }

    function clearForm() {
        setFormData({
            name: "",
            specialty: "",
            greased: false,
            weight: 0,
            "highest medal achieved": "",
            image: ""
            }) 
    }

return (
<>
    <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(formData)
        clearForm()
    }}>
        <input 
        name='name'
        type='text' 
        value={formData.name} 
        onChange={onFormUpdate}
        placeholder="Name..."
        />
                <input 
        name='specialty'
        type='text' 
        value={formData.specialty} 
        onChange={onFormUpdate}
        placeholder="Specialty..."
        />
                <input 
        name='greased'
        type='checkbox' 
        checked={formData.greased} 
        onChange={onFormUpdate}
        placeholder="Greased..."
        />
                <input 
        name='weight'
        type='number' 
        value={formData.weight} 
        onChange={onFormUpdate}
        placeholder="Weight..."
        />
                <input 
        name='highest medal achieved'
        type='text' 
        value={formData['highest medal achieved']} 
        onChange={onFormUpdate}
        placeholder="highest medal achieved..."
        />
                <input 
        name='image'
        type='text' 
        value={formData.image} 
        onChange={onFormUpdate}
        placeholder="Image url..."
        />
        <button type='submit'>Submit</button>
    </form>

</>
)}

export default Form
