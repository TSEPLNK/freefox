// |reftest| shell-option(--enable-temporal) skip-if(!this.hasOwnProperty('Temporal')||!xulRuntime.shell) -- Temporal is not enabled unconditionally, requires shell-options
// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.yearofweek
description: >
  Temporal.PlainDateTime.prototype.yearOfWeek returns undefined for all 
  non-ISO calendars without a well-defined week numbering system.
features: [Temporal]
---*/

// Gregorian calendar has a well defined week-numbering system.

let calendar = "gregory";
const date = new Temporal.PlainDateTime(2024, 1, 1, 12, 34, 56, 987, 654, 321, calendar);

assert.sameValue(date.yearOfWeek, 2024);

calendar = "hebrew";
const nonisodate = new Temporal.PlainDateTime(2024, 1, 1, 12, 34, 56, 987, 654, 321, calendar);

assert.sameValue(nonisodate.yearOfWeek, undefined);

reportCompare(0, 0);
