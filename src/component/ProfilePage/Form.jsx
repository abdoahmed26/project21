import { Alert, Box, Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../rtk/DataUser';

const Form = () => {
    const data = [
        {
            label:"User",
            value:"User",
        },
        {
            label:"Manager",
            value:"Manager",
        },
        {
            label:"Admin",
            value:"Admin",
        }
    ]
    const mydata = useSelector(state=>state.data);
    const dispatch = useDispatch();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [disAlert,setDis] = useState("none");
    const Submit = (values)=>{
        const zip=[];
        const ResId=[];
        for(let i=0; i<5; i++){
            zip.push(Math.floor(Math.random()*9));
        }
        for(let i=0; i<6; i++){
            ResId.push(Math.floor(Math.random()*9));
        }
        const obj = {...values,id:+mydata[mydata.length-1].id+1,code:zip.join(""),regId:ResId.join("")}
        dispatch(addData(obj));
        setDis("flex");
        setTimeout(()=>setDis("none"),2500);
    }
    return (
        <div>
            <Alert className='w-fit fixed top-10 right-0 z-50' sx={{display:disAlert}} onClose={() => setDis("none")}>
                Account created successfully
            </Alert>
            <Box onSubmit={handleSubmit(Submit)}
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '100%' },}}
            noValidate
            autoComplete="off"
                >
                <Box className='grid sm:grid-cols-2 gap-2 w-full'>
                    <Box>
                        <TextField fullWidth id="firstName" label="First Name" variant="filled" error={errors.firstName} 
                        {...register("firstName",{required:"Enter first name"})}
                        />
                        {
                            errors.firstName?.type==="required" &&(
                                <span className='text-xs text-red-600 ps-2'>
                                    {errors.firstName.message}
                                </span>
                            )
                        }
                    </Box>
                    <Box>
                        <TextField fullWidth id="lastName" label="Last Name" variant="filled" error={errors.lastName} 
                        {...register("lastName",{required:"Enter last name"})}
                        />
                        {
                            errors.lastName?.type==="required" &&(
                                <span className='text-xs text-red-600 ps-2'>
                                    {errors.lastName.message}
                                </span>
                            )
                        }
                    </Box>
                </Box>
                <Box>
                    <TextField fullWidth id="email" label="Email" variant="filled" error={errors.email} 
                        {...register("email",{required:"Enter Email"})}
                    />
                    {
                        errors.email?.type==="required" &&(
                            <span className='text-xs text-red-600 ps-2'>
                                {errors.email.message}
                            </span>
                        )
                    }
                </Box>
                <Box>
                    <TextField fullWidth id="age" label="Age" variant="filled" error={errors.age} 
                        {...register("age",{required:"Enter Age"})}
                    />
                    {
                        errors.age?.type==="required" &&(
                            <span className='text-xs text-red-600 ps-2'>
                                {errors.age.message}
                            </span>
                        )
                    }
                </Box>
                <Box>
                    <TextField fullWidth id="phone" label="Contact Number" variant="filled" error={errors.phone} 
                        {...register("phone",{required:"Enter Contact Number"})}
                    />
                    {
                        errors.phone?.type==="required" &&(
                            <span className='text-xs text-red-600 ps-2'>
                                {errors.phone.message}
                            </span>
                        )
                    }
                </Box>
                <Box>
                    <TextField fullWidth id="address" label="Address 1" variant="filled" error={errors.address} 
                        {...register("address",{required:"Enter Address 1"})}
                    />
                    {
                        errors.address?.type==="required" &&(
                            <span className='text-xs text-red-600 ps-2'>
                                {errors.address.message}
                            </span>
                        )
                    }
                </Box>
                <Box>
                    <TextField fullWidth id="city" label="Address 2" variant="filled" error={errors.city} 
                        {...register("city",{required:"Enter Address 2"})}
                    />
                    {
                        errors.city?.type==="required" &&(
                            <span className='text-xs text-red-600 ps-2'>
                                {errors.city.message}
                            </span>
                        )
                    }
                </Box>
                <TextField
                id="role"
                select
                label="Role"
                defaultValue="User"
                variant="filled"
                {...register("access")}
                >
                    {data.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <div className='text-end'>
                    <Button type='submit' variant="contained" className='w-fit' sx={{textTransform:"capitalize"}}>
                        Create New User
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default Form;