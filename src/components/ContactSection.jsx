import FormField from "./FormField"
import { useState } from 'react'


export default function ContactSection ({ onChange, value }) {
    
    const contactFields = [
        {
          id: 'firstName',
          label: 'First Name',
          inputType: 'text',
        },
        {
          id: 'lastName',
          label: 'Last Name',
          inputType: 'text',
        },
        {
          id: 'email',
          label: 'Email',
          inputType: 'email',
        },
        {
          id: 'phone',
          label: 'Phone Number',
          inputType: 'tel',
        },
        {
          id: 'address',
          label: 'Address',
          inputType: 'text',
        },
        {
          id: 'currentJob',
          label: 'Current Job',
          inputType: 'text',
        },
        {
          id: 'about',
          label: 'About',
          inputType: 'text',
        }
      ];
    

    return (
        <div>
            <h3 className="form-heading">Contact</h3>
            {contactFields.map((field) => (
                <FormField
                key={field.id}
                id={field.id}
                label={field.label}
                inputType={field.inputType}
                onChange={onChange}
                value={value}
                />
            ))}   
        </div>
    )
}