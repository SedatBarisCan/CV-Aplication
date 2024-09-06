import FormField from "./FormField"
import { useState } from 'react'


export default function ExperienceSection ({ onChange, value, handleSubmit, handleEdit, handleDelete, savedData }) {
    
    const experienceFields = [
        {
          id: 'position',
          label: 'Position',
          inputType: 'text',
        },
        {
          id: 'company',
          label: 'Company',
          inputType: 'text',
        },
        {
          id: 'startDate',
          label: 'Start Date',
          inputType: 'date',
        },
        {
          id: 'endDate',
          label: 'End Date',
          inputType: 'date',
        },
        {
          id: 'description',
          label: 'Description',
          inputType: 'textarea',
        }
      ];
      
    

    return (
        <div>
            <h3 className="form-heading">Experience</h3>
            {experienceFields.map((field) => (
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