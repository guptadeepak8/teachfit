import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeading from '../ui/SectionHeading';
import FormContainer from '../ui/FormContainer';
import { Button, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FormCard from '../ui/FormCard';
import { addEmployee, saveEmployee, removeEmployee } from '../../store/Slice/employeeSlice';
import { useForm } from 'react-hook-form';

export default function OrgEmployeesForm() {
  const about = useSelector((state) => state.employeeData.about);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSaveEmployee = (data, index) => {
    dispatch(saveEmployee({ index, employee: data.employees[index] }));
  };

  const onRemoveEmployee = (index) => {
    dispatch(removeEmployee(index));
  };

  return (
    <FormCard>
      <SectionHeading title="Employee" />
      <FormContainer>
        <div className="bg-slate-200 px-2 py-3">
          {about &&
            about.employees.map((edata, index) => (
              <div className="mb-4" key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name of Employee"
                      variant="outlined"
                      defaultValue={edata.Ename}
                      {...register(`employees.${index}.Ename`)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Email of Employee"
                      variant="outlined"
                      defaultValue={edata.Eemail}
                      {...register(`employees.${index}.Eemail`)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="LinkedIn URL"
                      variant="outlined"
                      defaultValue={edata.Elinkedin}
                      {...register(`employees.${index}.Elinkedin`)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      startIcon={<AddIcon />}
                      onClick={handleSubmit((data) => onSaveEmployee(data, index))}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => onRemoveEmployee(index)}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </div>
            ))}
        </div>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            dispatch(
              addEmployee({
                Ename: '',
                Eemail: '',
                Elinkedin: '',
              })
            )
          }
        >
          Add more Employees
        </Button>
      </FormContainer>
    </FormCard>
  );
}