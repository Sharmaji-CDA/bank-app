
import { FormControl, FormField, FormLabel, FormMessage } from './UI/form'
import { Input } from './UI/input';

import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control , name , label , placeholder }: CustomInput) => {
  return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className='flex w-full felx-col'>
                    <FormControl>
                        <Input className='input-class' {...field} placeholder={placeholder} type={name === 'password' ? 'password' : 'text' } />
                    </FormControl>
                </div>
                <FormMessage className='form-message mt-2' />
            </div>
        )}
        />
  )
}

export default CustomInput