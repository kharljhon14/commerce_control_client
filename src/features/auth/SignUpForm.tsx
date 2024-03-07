import PasswordInput from '@/components/customs/PasswordInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthContext } from '@/contexts/authContext';
import { SignUpSchema, SignUpSchemaType } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SignUphtmlForm() {
  const { handleState } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="space-y-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register('email')}
          />
          <Label
            htmlFor="email"
            className="text-xs text-red-500"
          >
            {errors.email?.message}
          </Label>
        </div>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            {...register('name')}
          />
          <Label
            htmlFor="name"
            className="text-xs text-red-500"
          >
            {errors.name?.message}
          </Label>
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            id="password"
            register={register('password')}
          />
          <Label
            htmlFor="password"
            className="text-xs text-red-500"
          >
            {errors.password?.message}
          </Label>
        </div>

        <div>
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <PasswordInput
            id="confirm_password"
            register={register('confirm_password')}
          />
          <Label
            htmlFor="confirm_password"
            className="text-xs text-red-500"
          >
            {errors.confirm_password?.message}
          </Label>
        </div>
      </div>

      <div className="flex justify-between mx-4 mt-2">
        <Button
          type="button"
          variant="link"
          className="text-blue-500 p-0"
          onClick={() => handleState('forgot-password')}
        >
          Forgot Password
        </Button>

        <Button
          type="button"
          variant="link"
          className="text-blue-500 p-0"
          onClick={() => handleState('sign-in')}
        >
          Sign In
        </Button>
      </div>

      <Button
        className="w-full mt-6"
        size="lg"
      >
        Submit
      </Button>
    </form>
  );
}
