import React, { useState } from 'react'

import AuthLoginPartPc from './AuthLoginPartPc'
import AuthLoginPartTablet from './AuthLoginPartTablet'
import LoginPartPc from './LoginPartPc'
import LoginPartTablet from './LoginPartTablet'


export default function LoginPart() {
  return (
    <>
      <AuthLoginPartPc />

      <AuthLoginPartTablet />

      <LoginPartPc />

      <LoginPartTablet />
    </>
  )
}
