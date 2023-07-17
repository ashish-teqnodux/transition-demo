import { useForm } from "react-hook-form";
import { YupValidator } from "../lib/yup-validator";

export const useReactHookForm = ({ EventSchema, defaultValues, mode }) => {
  const methods = useForm({
    mode: mode,
    resolver: YupValidator(EventSchema),
    defaultValues: defaultValues,
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { isSubmitting, errors },
  } = methods;

  return {
    reset,
    watch,
    control,
    handleSubmit,
    register,
    setValue,
    getValues,
    errors,
    isSubmitting,
  };
};
