function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const l={formRef:document.querySelector(".form"),btnRef:document.querySelector("button"),firstDelayRef:document.querySelector('[name="delay"]'),stepDelayRef:document.querySelector('[name="step"]'),amountRef:document.querySelector('[name="amount"]')};function u(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}l.formRef.addEventListener("submit",(function(t){t.preventDefault();let o=+l.firstDelayRef.value,n=+l.stepDelayRef.value,r=+l.amountRef.value;for(let l=1;l<=r;l+=1)u(l,o).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),o+=n,t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.7798d585.js.map