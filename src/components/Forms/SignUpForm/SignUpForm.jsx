/* eslint-disable react/prop-types */
// import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { SignInBlock } from '../../SignInBlock/SignInBlock';
import { BtnSignUpForm } from '../../Buttons/BtnSignUpForm';
import {
  FieldSignUpStyled,
  FormSignUpStyled,
  SignUpH1Styled,
  SignUpPStyled,
  SignupFormStyled,
  ValidateStatusEmailBlockStyled,
  ValidateStatusNameBlockStyled,
  ValidateStatusPasswordBlockStyled,
} from './SignUpForm.styled';
import { ValidationSchemas } from '../../FormValidation/ValidationSchemas';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth/authOperations';
import { Notify } from 'notiflix';
import {
  ErrorValidateSvgStyled,
  SuccessValidateSvgStyled,
  ValidateStatusErrorTextStyled,
  ValidateStatusSuccessTextStyled,
} from '../commonSignInForm.styled';
import spriteIconsRemix from '../../../../remixicon.symbol.svg';

export const SignupForm = () => {
  const dispatch = useDispatch();
  let nbsp = '\u00A0';
  return (
    <SignupFormStyled>
      <SignUpH1Styled>Sign Up</SignUpH1Styled>
      <SignUpPStyled>
        Thank you for your interest in our platform. To complete the registration process, please
        provide us with the following information.
      </SignUpPStyled>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          // await new Promise(r => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
          const { name, email, password } = values;
          try {
            dispatch(authOperations.register({ name, email, password }));

            Notify.success(`${name} registered successfully`);
          } catch (error) {
            Notify.failure(`${name} failed to register`);
          }
        }}
        validationSchema={ValidationSchemas.signUpSchema}
      >
        {({ ...props }) => (
          <FormSignUpStyled>
            <FieldSignUpStyled
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              errorname={props.errors.name}
              touchedname={props.touched}
            />

            {props.errors.name === undefined && props.touched?.name === true ? (
              <ValidateStatusNameBlockStyled>
                <SuccessValidateSvgStyled>
                  <use href={`${spriteIconsRemix}#ri-checkbox-circle-fill`} />
                </SuccessValidateSvgStyled>
                {nbsp}
                <ValidateStatusSuccessTextStyled>Success name</ValidateStatusSuccessTextStyled>
              </ValidateStatusNameBlockStyled>
            ) : null}

            <ErrorMessage
              name="name"
              render={message => (
                <ValidateStatusNameBlockStyled>
                  <ErrorValidateSvgStyled>
                    <use
                      href={`${spriteIconsRemix}#ri-checkbox-circle-fill`}
                      // style={{ width: '10px', height: '10px' }}
                    />
                  </ErrorValidateSvgStyled>
                  {nbsp}
                  <ValidateStatusErrorTextStyled>{message}</ValidateStatusErrorTextStyled>
                </ValidateStatusNameBlockStyled>
              )}
            />

            <FieldSignUpStyled
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              erroremail={props.errors.email}
              touchedemail={props.touched}
            />

            {props.errors.email === undefined && props.touched?.email === true ? (
              <ValidateStatusEmailBlockStyled>
                <SuccessValidateSvgStyled>
                  <use href={`${spriteIconsRemix}#ri-checkbox-circle-fill`} />
                </SuccessValidateSvgStyled>
                {nbsp}
                <ValidateStatusSuccessTextStyled>Success Email</ValidateStatusSuccessTextStyled>
              </ValidateStatusEmailBlockStyled>
            ) : null}

            <ErrorMessage
              name="email"
              render={message => (
                <ValidateStatusEmailBlockStyled>
                  <ErrorValidateSvgStyled>
                    <use
                      href={`${spriteIconsRemix}#ri-checkbox-circle-fill`}
                      // style={{ width: '10px', height: '10px' }}
                    />
                  </ErrorValidateSvgStyled>
                  {nbsp}
                  <ValidateStatusErrorTextStyled>{message}</ValidateStatusErrorTextStyled>
                </ValidateStatusEmailBlockStyled>
              )}
            />

            <FieldSignUpStyled
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              errorpassword={props.errors.password}
              touchedpassword={props.touched}
            />

            {props.errors.password === undefined && props.touched?.password === true ? (
              <ValidateStatusPasswordBlockStyled>
                <SuccessValidateSvgStyled>
                  <use href={`${spriteIconsRemix}#ri-checkbox-circle-fill`} />
                </SuccessValidateSvgStyled>
                {nbsp}
                <ValidateStatusSuccessTextStyled>Success password</ValidateStatusSuccessTextStyled>
              </ValidateStatusPasswordBlockStyled>
            ) : null}

            <ErrorMessage
              name="password"
              render={message => (
                <ValidateStatusPasswordBlockStyled>
                  <ErrorValidateSvgStyled>
                    <use
                      href={`${spriteIconsRemix}#ri-checkbox-circle-fill`}
                      // style={{ width: '10px', height: '10px' }}
                    />
                  </ErrorValidateSvgStyled>
                  {nbsp}
                  <ValidateStatusErrorTextStyled>{message}</ValidateStatusErrorTextStyled>
                </ValidateStatusPasswordBlockStyled>
              )}
            />

            <BtnSignUpForm />
          </FormSignUpStyled>
        )}
      </Formik>
      <SignInBlock />
    </SignupFormStyled>
  );
};
