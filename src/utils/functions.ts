import { Schools } from "../interface/enum/enum";
import { Faculty, FieldOptions } from "../interface/futmina";
import { FieldOfStudy } from "../interface/faculty";
import { StatusCodes } from "http-status-codes";

export const replaceAll = (
  string: string,
  search: string,
  replace: string
): string => {
  let occurenceCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == search) {
      occurenceCount++;
    }
  }

  let returnString = string;

  for (let i = 0; i < occurenceCount; i++) {
    returnString = returnString.replace(search, replace);
  }

  return returnString;
};

export const validateFaculty = async (
  school: Schools | any,
  faculties: any
): Promise<boolean> => {
  if (school === Schools.Futminna) {
    let validfaculties = Object.values(Faculty);
    return validfaculties.includes(faculties);
  }

  if (school === Schools.Udusok) {
    let validateFaculty = Object.values(FieldOfStudy);
    return validateFaculty.includes(faculties);
  }
};



