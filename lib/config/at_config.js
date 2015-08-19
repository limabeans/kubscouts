AccountsTemplates.configure({
  // Behavior
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  focusFirstInput: true,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: false,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

  // Privacy Policy and Terms of Use
  privacyUrl: 'privacy',
  termsUrl: 'terms-of-use',

  // Redirects
  homeRoutePath: '/home',
  redirectTimeout: 4000,

  // Hooks
  // onLogoutHook: myLogoutFunc,
  onSubmitHook: function() {
    Router.go('main_room');
  },
  preSignUpHook: function() {
  },

  // Texts
  texts: {
    button: {
      signUp: "Register Now!"
    },
    socialSignUp: "Register",
    socialIcons: {
      "meteor-developer": "fa fa-rocket"
    },
    title: {
      forgotPwd: "Recover Your Password"
    },
  },
});


AccountsTemplates.configure({
  texts: {
    navSignIn: "signIn",
    navSignOut: "signOut",
    optionalField: "optional",
    pwdLink_pre: "",
    pwdLink_link: "forgotPassword",
    pwdLink_suff: "",
    resendVerificationEmailLink_pre: "Verification email lost?",
    resendVerificationEmailLink_link: "Send again",
    resendVerificationEmailLink_suff: "",
    sep: "OR",
    signInLink_pre: "ifYouAlreadyHaveAnAccount",
    signInLink_link: "signin",
    signInLink_suff: "",
    signUpLink_pre: "dontHaveAnAccount",
    signUpLink_link: "signUp",
    signUpLink_suff: "",
    socialAdd: "add",
    socialConfigure: "configure",
    socialIcons: {
      "meteor-developer": "fa fa-rocket",
    },
    socialRemove: "remove",
    socialSignIn: "signIn",
    socialSignUp: "signUp",
    socialWith: "with",
    termsPreamble: "clickAgree",
    termsPrivacy: "privacyPolicy",
    termsAnd: "and",
    termsTerms: "terms",
  }

});


AccountsTemplates.configure({
  texts: {
    title: {
      changePwd: "Password Title",
      enrollAccount: "Enroll Title",
      forgotPwd: "Forgot Pwd Title",
      resetPwd: "Reset Pwd Title",
      signIn: "Sign In",
      signUp: "Sign Up",
      verifyEmail: "Verify Email Title",
    }
  }
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
  },
  {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
  },
  {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: "Login",
  },
  pwd
]);
