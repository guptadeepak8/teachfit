import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import FormContainer from "../components/ui/FormContainer";
import FormCard from "../components/ui/FormCard";
import Line from "../components/ui/Line";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import AddIcon from "@mui/icons-material/Add";
import { updateAbout } from "../store/Slice/employeeSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function OrgForm() {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location = useLocation();


  const [health, SetHealth] = useState(false);
  const [outings, SetOutings] = useState(false);
  const [snacks, SetSnacks] = useState(false);
  const [program, SetProgram] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue ,
    formState: { errors },
  } = useForm();
  

  const onSubmit = (data) => {
    dispatch(updateAbout(data));
    navigate('/employee');
  };

  useEffect(() => {
    if (location.state && location.state.about) {
      console.log(location.state.about);
      const { name, email } = location.state.about;
      setValue("name", name);
      setValue("email", email);
    }
  }, [location.state]);



  return (
    <div className="min-h-screen px-10 py-5">
      <div>
        <form className="border-2 border-slate-600 rounded-lg px-10 py-10"
            onSubmit={handleSubmit(onSubmit)}
        >
          <FormCard>
            <SectionHeading title="About" desc="Tell us about the Organizations so candidate Know you well"/>
            <FormContainer>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                   variant="outlined"
                    fullWidth
                   type="text"
                    id="name"
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="email"
                   
                    variant="outlined"
                    fullWidth
                    {...register("email")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="phoneNo"
                    label="Phone no"
                    variant="outlined"
                    fullWidth
                    {...register("phoneNo", )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="collegeUrl"
                    label="College URL (If any)"
                    variant="outlined"
                    fullWidth
                    {...register("collegeUrl", )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="typeoforg"
                    label="Type of Organization"
                    variant="outlined"
                    fullWidth
                    {...register("typeoforg", )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="noOfEmployees"
                    label="No of Employees"
                    variant="outlined"
                    fullWidth
                    {...register("noOfEmployess", )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="establishedIn"
                    label="Established"
                    variant="outlined"
                    fullWidth
                    {...register("establishedIn", )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="location"
                    label="Location"
                    variant="outlined"
                    fullWidth
                    {...register("location", )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="linked-in"
                    label="linkedin Url"
                    variant="outlined"
                    fullWidth
                    {...register("linkedinUrl", )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="facebook"
                    label="Facebook Url"
                    variant="outlined"
                    fullWidth
                    {...register("facebookUrl", )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="twitter"
                    label="Twitter Url"
                    variant="outlined"
                    fullWidth
                    {...register("twitterUrl", )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    minRows={5}
                    aria-label="maximum height"
                    placeholder="tell us about your organization"
                    {...register("orgdes", )}
                  />
                </Grid>
              </Grid>
            </FormContainer>
          </FormCard>

          <Line />
          <FormCard>
            <SectionHeading
              title="Perks & Culture"
              desc="Tells us About your Caring nature toward employees"
            />
            <FormContainer>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Health Insurance "
                    {...register("health")}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    label="Team Outings "
                    {...register("outings")}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    label="Free Snacks and Beverages "
                    {...register("snacks")}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    label="Employee Wellness Programs "
                    {...register("program")}
                  />

                  <Grid container spacing={2}>
                    {health && (
                      <Grid item xs={12}>
                        <TextField
                          id="organization-name"
                          label="Health Insurance"
                          variant="outlined"
                          fullWidth
                          {...register("healthdesc")}
                        />
                      </Grid>
                    )}
                    {outings && (
                      <Grid item xs={12}>
                        <TextField
                          id="organization-name"
                          label="Team Outings"
                          variant="outlined"
                          fullWidth
                          {...register("outingdesc")}
                        />
                      </Grid>
                    )}
                    {snacks && (
                      <Grid item xs={12}>
                        <TextField
                          id="organization-name"
                          label="Free Snacks and Beverages"
                          variant="outlined"
                          fullWidth
                          {...register("snackdesc")}
                        />
                      </Grid>
                    )}
                    {program && (
                      <Grid item xs={12}>
                        <TextField
                          id="organization-name"
                          label="Organization name"
                          variant="outlined"
                          fullWidth
                          {...register("programdesc")}
                        />
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </FormContainer>
          </FormCard>

          <Line />
          <FormCard>
            <SectionHeading title="Employee" />
            <FormContainer>
              <div className="bg-slate-200 px-2 py-3">
                {employees.map((data) => {
                  return (
                    <div className="mb-4" key={data.id}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            name="Ename"
                            label="Name of Employee"
                            variant="outlined"
                           {...register("Ename")} 
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name="Eemail"
                            label="Email of Employee"
                            variant="outlined"
                            {...register("Eemail")} 
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name="linkedinUrl"
                            label="linkdin Url"
                            variant="outlined"
                           {...register("ElinkedinUrl")}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={handleAddEmployee}
                          >
                            Save
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })}
              </div>
              <Button
                variant="contained  "
                startIcon={<AddIcon />}
                onClick={handleAddEmployee}
              >
                Add more Employees
              </Button>
            </FormContainer>
          </FormCard>

          <Button
                variant="contained  "
                startIcon={<AddIcon />}
               type="submit"
              >
               update
              </Button>
        </form>
      </div>
    </div>
  );
}
