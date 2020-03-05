import { InjectionToken } from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomValidators } from '@misc/custom-validators';

export interface AppConfig {
  apiUrl: string;
  client_id: string;
}

export const STORAGE_KEYS = Object.freeze({
  TOKENS: 'tokens',
  VALUE: 'value',
  STATE: 'state'
});

export const VALIDATORS_SET = Object.freeze({
  EMAIL: Validators.compose([Validators.email]),
  PASSWORD: Validators.compose([Validators.minLength(8), Validators.maxLength(30), CustomValidators.password])
});

export const APP_CONFIG = new InjectionToken<string>('APP_CONFIG');
export const EXAMPLE_PARAMS = `
  const intakes = [
    { time: "9:15", pills: 1 },
    { time: "15:35", pills: 2 },
    { time: "19:00", pills: 1 },
  ];
  const stock = 40;
  const frequency = "daily";
   //possible values - "daily", "eachOtherDay", "weekly";
  const weekDays = {{"{"}}
    monday: true,
    tuesday: false,
    wednesday: true,
    thursday: false,
    friday: true,
    saturday: false,
    sunday: false
  };
  // this parameter is REQUIRED ONLY for "weekly" frequency of intakes
`;
export const BASE_CONTENT = `'use strict';

/**
 * Object with intake details
 * @typedef {Object} Intake
 * @property {string} time - time of intake (must be in the 'HH:mm' format)
 * @property {number} pills - amount of pills
 */

/**
 * Object with selected days of intakes
 * @typedef {Object} WeekDays
 * @property {boolean} monday
 * @property {boolean} tuesday
 * @property {boolean} wednesday
 * @property {boolean} thursday
 * @property {boolean} friday
 * @property {boolean} saturday
 * @property {boolean} sunday
 */

/**
 * @param {Intake[]} intakes - number of pills and time of intake (per day)
 * @param {number} stock - total number of pills
 * @param {'daily', 'weekly', 'eachOtherDay'} frequency - the frequency of taking
 * @param {WeekDays} [weekDays] - required only for 'weekly' frequency
 * @return {Date} - the end date of taking the pills
 */

function calculateIntakeEndDate(intakes, stock, frequency, weekDays) {
  // Your code here
}
`;
