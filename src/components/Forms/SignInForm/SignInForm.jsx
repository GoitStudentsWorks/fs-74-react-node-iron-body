/* eslint-disable react/prop-types */
// import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  FieldSignInStyled,
  FormSignInStyled,
  SignInFormStyled,
  SignInH1Styled,
  SignInPStyled,
  ValidateStatusEmailBlockStyled,
  ValidateStatusPasswordBlockStyled,
} from './SignInForm.styled';
import { BtnSignInForm } from '../../Buttons/BtnSignInForm';
import { SignUpBlock } from '../../SignUpBlock/SignUpBlock';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth/authOperations';
import { Notify } from 'notiflix';

import { ValidationSchemas } from '../../FormValidation/ValidationSchemas';

import spriteIconsRemix from '../../../../remixicon.symbol.svg';
import {
  ErrorValidateSvgStyled,
  SuccessValidateSvgStyled,
  ValidateStatusErrorTextStyled,
  ValidateStatusSuccessTextStyled,
} from '../commonSignInForm.styled';

export const SignInForm = () => {
  const dispatch = useDispatch();
  let nbsp = '\u00A0';

  return (
    <SignInFormStyled>
      <SignInH1Styled>Sign In</SignInH1Styled>
      <SignInPStyled>
        Welcome! Please enter your credentials to login to the platform:
      </SignInPStyled>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          const { email, password } = values;
          try {
            dispatch(authOperations.login({ email, password }));
          } catch (error) {
            Notify.failure(`${email} failed to login`);
          }
        }}
        validationSchema={ValidationSchemas.signinSchema}
      >
        {({ ...props }) => (
          <FormSignInStyled>
            <FieldSignInStyled
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              erroremail={props.errors.email}
              touchedemail={props.touched}
            />

            {console.log('props', props)}

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
                    <use href={`${spriteIconsRemix}#ri-checkbox-circle-fill`} />
                  </ErrorValidateSvgStyled>
                  {nbsp}
                  <ValidateStatusErrorTextStyled>{message}</ValidateStatusErrorTextStyled>
                </ValidateStatusEmailBlockStyled>
              )}
            />

            <FieldSignInStyled
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              errorpassword={props.errors.password}
              touchedpassword={props.touched}
            />
            <ErrorMessage
              name="password"
              render={message => (
                <ValidateStatusPasswordBlockStyled>
                  <ErrorValidateSvgStyled>
                    <use href={`${spriteIconsRemix}#ri-checkbox-circle-fill`} />
                  </ErrorValidateSvgStyled>
                  {nbsp}
                  <ValidateStatusErrorTextStyled>{message}</ValidateStatusErrorTextStyled>
                </ValidateStatusPasswordBlockStyled>
              )}
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

            <BtnSignInForm />
          </FormSignInStyled>
        )}
        {/* 
   <FormSignInStyled>
          <FieldSignInStyled id="email" name="email" placeholder="Email" type="email" />
                      {errors.email && touched.email ? <div>{errors.email}</div> : null}

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

          <FieldSignInStyled id="password" name="password" placeholder="Password" type="password" />
                    {errors.name && touched.name ? <div>{errors.name}</div> : null}
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
          <BtnSignInForm />
        </FormSignInStyled> 
        */}
      </Formik>
      <SignUpBlock />
    </SignInFormStyled>
  );
};
