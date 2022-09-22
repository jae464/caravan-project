import { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate, onCancel }: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    onSubmit(values);
  };

  const handleCancel = () => {
    onCancel();
  };

  return [values, errors, handleChange, handleSubmit, handleCancel];
};

export default useForm;
