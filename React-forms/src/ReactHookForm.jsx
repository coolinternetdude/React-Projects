import { useForm } from "react-hook-form";
function ReactHookForm() {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  //   const handleChange = (evt) => {
  //     setFormData((currData) => {
  //       return { ...currData, [evt.target.name]: evt.target.value };
  //     });
  //   };

  const handleRegistration = (formData) => {
    console.log("FORM SUBMITTED");
    console.log(formData);
  };
  //   const validatorOptions = {
  //     name: { required: "Name cannot be blank" },
  //     email: { required: "Email cannot be blank" },
  //     password: {
  //       minLength: {
  //         value: 10,
  //         message: "Password cannot be less than 10 characters",
  //       },
  //       required: "Password cannot be empty",
  //     },
  //   };
  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors?.name && (
          <small style={{ color: "red" }}> Name is required</small>
        )}
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email Adress is required!" })}
        />
        {errors?.email && (
          <small style={{ color: "red" }}>{errors.email?.message}</small>
        )}
      </div>
      <div>
        <label htmlFor="age">Age :</label>
        <input
          id="age"
          type="number"
          {...register("age", { required: true, min: 18, max: 99 })}
        />
        {errors?.age && (
          <small style={{ color: "red" }}>
            Age should be between 18 and 99
          </small>
        )}
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password should be longer than 10 characters",
            min: 10,
          })}
        />
        {errors?.password && (
          <small style={{ color: "red" }}> {errors.password?.message}</small>
        )}
      </div>

      <button>Register</button>
    </form>
  );
}

export default ReactHookForm;
