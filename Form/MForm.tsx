import type { ReactNode } from "react";
import { type SubmitHandler, type FieldValues, useForm, FormProvider } from "react-hook-form";

const MForm = ({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
}) => {
  const methods = useForm();

    return (
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    );
};

export default MForm;