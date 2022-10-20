import React, { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate, onCancel }: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(values);
    e.preventDefault();
    console.log(e);
    const result = await validate(values);
    console.log(result);
    if (result)
    return;
    onSubmit(values);
  };

  const handleCancel = () => {
    onCancel();
  };

  return [values, errors, setValues, handleChange, handleSubmit, handleCancel];
};

export default useForm;
