import FormField from "./FormField"


export default function EducationSection ({ onChange, value, handleSubmit, handleEdit, handleDelete, savedData }) {
    
    const educationFields = [
        {
            id: 'degree',
            label: 'Degree',
            inputType: 'text',
        },
        {
          id: 'university',
          label: 'University',
          inputType: 'text',
        },
        {
          id: 'startYear',
          label: 'Start Year',
          inputType: 'number',
        },
        {
          id: 'endYear',
          label: 'End Year',
          inputType: 'number',
        }
      ];
    

    return (
        <div>
            <h3 className="form-heading">Education</h3>
            {educationFields.map((field) => (
                <FormField
                key={field.id}
                id={field.id}
                label={field.label}
                inputType={field.inputType}
                onChange={onChange}
                value={value[field.id]}
                />
            ))}

            <button onClick={handleSubmit} className="add-btn">Add</button>

            {Array.isArray(savedData) && savedData.length !== 0 &&
                savedData.map((data, index) => {
                    return (
                        <div key={index} className='saved-data'>
                            <h4 className="edit-title">{data[Object.keys(data)[0]]}</h4>
                            <button data-id={index} className="edit-btn" onClick={handleEdit}>edit</button>
                            <button data-id={index} className="delete-btn" onClick={handleDelete}>delete</button>
                        </div>
                    )
                }) 
            }
            
            
        </div>
    )
}