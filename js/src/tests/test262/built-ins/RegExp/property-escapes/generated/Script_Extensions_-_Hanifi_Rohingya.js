// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Hanifi_Rohingya`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00060C,
    0x00061B,
    0x00061F,
    0x000640,
    0x0006D4
  ],
  ranges: [
    [0x010D00, 0x010D27],
    [0x010D30, 0x010D39]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Hanifi_Rohingya}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Hanifi_Rohingya}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Rohg}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Rohg}"
);
testPropertyEscapes(
  /^\p{scx=Hanifi_Rohingya}+$/u,
  matchSymbols,
  "\\p{scx=Hanifi_Rohingya}"
);
testPropertyEscapes(
  /^\p{scx=Rohg}+$/u,
  matchSymbols,
  "\\p{scx=Rohg}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00060B],
    [0x00060D, 0x00061A],
    [0x00061C, 0x00061E],
    [0x000620, 0x00063F],
    [0x000641, 0x0006D3],
    [0x0006D5, 0x00DBFF],
    [0x00E000, 0x010CFF],
    [0x010D28, 0x010D2F],
    [0x010D3A, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Hanifi_Rohingya}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Hanifi_Rohingya}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Rohg}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Rohg}"
);
testPropertyEscapes(
  /^\P{scx=Hanifi_Rohingya}+$/u,
  nonMatchSymbols,
  "\\P{scx=Hanifi_Rohingya}"
);
testPropertyEscapes(
  /^\P{scx=Rohg}+$/u,
  nonMatchSymbols,
  "\\P{scx=Rohg}"
);

reportCompare(0, 0);
