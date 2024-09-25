import {RFValue} from 'react-native-responsive-fontsize';

/**
 * returns custom responsive font size according to device screen height
 * @param fontSize required font size
 */
export const getFontSize = (fontSize: number): number => {
  return RFValue(fontSize, 770);
};

// export const capitalizeFirstLetter = (inputString: string): string => {
//   return inputString?.charAt(0)?.toUpperCase() + inputString?.slice(1);
// };

// /**
//  * validateMobileNumber: this function validates the phone number entered by the user
//  * @param mobileNumber
//  * @returns boolean value
//  */
// export const validateMobileNumber = (mobileNumber: string) => {
//   const pattern = /^[0-9]{10}$/;
//   return pattern.test(mobileNumber);
// };

// /**
//  * validateNumberOnly: this function checks whether the input is number or not
//  * @param input
//  * @returns boolean value
//  */
// export const validateNumberOnly = input => {
//   const pattern = NUMERIC_REGEX;
//   const result = pattern.test(input);
//   return result;
// };

// /**
//  * validateIndianMobileNumber: is a function which validate whether a mobile number is Indian or not
//  * @param mobile
//  * @returns boolean value
//  */
// export const validateIndianMobileNumber = (mobile: string) => {
//   const pattern = INDIA_MOBILE_REGEX;
//   return pattern.test(mobile);
// };

// /**
//  * validateRegex is used to validate the value with respective regex
//  * @param value: entered value
//  * @param regexType: given regex
//  * @returns it return boolean value
//  */
// export const validateRegex = (value: string | number, regexType: any) => {
//   return regexType.test(value);
// };
